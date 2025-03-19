---
slug: vllm
title: vLLM 部署 deepseek
authors: [goblin]
tags: [AI]
---

### vLLM
vLLM 是一个快速且易于使用的 LLM 推理和服务库
vLLM（Very Large Language Model Serving）是由加州大学伯克利分校团队开发的高性能、低延迟的大语言模型（LLM）推理和服务框架。它专为大规模生产级部署设计，尤其擅长处理超长上下文（如8k+ tokens）和高并发请求，同时显著优化显存利用率，是当前开源社区中吞吐量最高的LLM推理引擎之一。
[官方网站](https://docs.vllm.ai/en/latest/)详情可查看

### 我的环境信息
| Detail | Description |
| :--- | :--- |
| CPU | 64c |
| 内存 | 500GiB |
| GPU | NVODIA A100 80G * 4 |
| 数据盘 | 500GiB |
| 操作系统 | Ubuntu 24.04 |

### 安装 CUDA
- 进入[CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive)页面。
- 选择驱动对应的 CUDA 版本。
- 获取 CUDA 安装包下载地址。

  - CUDA Toolkit 安装
    ```bash
      wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-ubuntu2404.pin
      sudo mv cuda-ubuntu2404.pin /etc/apt/preferences.d/cuda-repository-pin-600
      wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
      sudo dpkg -i cuda-repo-ubuntu2404-12-8-local_12.8.1-570.124.06-1_amd64.deb
      sudo cp /var/cuda-repo-ubuntu2404-12-8-local/cuda-*-keyring.gpg /usr/share/keyrings/
      sudo apt-get update
      sudo apt-get -y install cuda-toolkit-12-8
    ```
  - 驱动安装
    ```bash
      apt-get install -y cuda-drivers
    ```
  - 配置CUDA环境变量
    ```bash
      echo 'export PATH=/usr/local/cuda/bin:$PATH' | sudo tee /etc/profile.d/cuda.sh
      source /etc/profile
    ```
  - 检查CUDA是否成功安装
    ```bash
      nvcc -V
      # GPU 信息
      nvidia-smi
    ```

### 安装conda
运行vllm需要Python环境，推荐使用`conda`创建一个新的Python环境。
```bash
# (Recommended) Create a new conda environment.
conda create -n vllm python=3.12 -y
conda activate vllm
```
切换到环境中：
```bash
conda activate vllm
```
安装vllm
```bash
pip install vllm
```

### 模型下载
可以直接从 [huggingface](https://huggingface.co/) 下载模型，也可以从 [镜像站](https://hf-mirror.com/) 或者 [魔塔社区](https://modelscope.cn) 下载。

> 国内的huggingface镜像站时完全同步huggiingface.co，不存在版本延迟。
> 魔塔的模型与huggingface可能存在`微小`差距。

安装huggingface-cli
```bash
pip install --upgrade huggingface_hub
```

```bash
# 如需切换镜像站
# export HF_ENDPOINT=https://hf-mirror.com
huggingface-cli download --resume-download adept/fuyu-8b --cache-dir ./path/to/cache
```

### 运行模型
对外提供服务，需要以serving模型启动vllm，以下是启动示例：
```bash
python -m vllm.entrypoints.openai.api_server \
  -- model "/data/models/DeepSeek-R1" \
  --served-model-name deepseek_r1 \
  --host 0.0.0.0 \
  --port 8080 \
  --max-model-len 4096 \    # 最大上下文长度
  --tensor-parallel-size 4 \  # GPU 数量
  --gpu-memory-utilization 0.95 \  # 推理过程显存占用比例，默认值 0.9
  --dtype float16 \    # 计算精度控制
  --trust-remote-code \
  --enforce-eager     # 禁用 CUDA 优化提升兼容性
```

使用 vllm serve 启动示例：
```bash
vllm serve /data/models/DeepSeek-R1 \
  --served-model-name deepseek_r1 \
  --host 0.0.0.0 \
  --port 8080 \
  --max-model-len 4096 \
  --tensor-parallel-size 4 \
  --gpu-memory-utilization 0.95 \
  --dtype float16 \
  --trust-remote-code \
  --enforce-eager
```

### 功能验证
```bash
curl --location 'http://127.0.0.1:8080/v1/chat/completions' --header 'Content-Type: application/json' --data '{
    "model": "deepseek_r1",
    "messages": [{"role": "user", "content": "hello"}]
}'
```

### 官方基准测试
```bash
git clone https://github.com/vllm-project/vllm.git
cd vllm/benchmarks
```
- 基准测试指标含义

| 指标 | 含义 |
| :--- | :--- |
| Avg prompt throughput| 输入吞吐量（Prompt Tokens/s），0.0 表示当前没有新的输入请求 |
| Avg generation throughput | 生成吞吐量（Generation Tokens/s），86.8 表示模型每秒生成 86.8 个 token |
| Running | 正在处理的请求数（当前正在生成的请求） |
| Swapped | 被换出的请求数（当显存不足时，某些请求会被移到 CPU） |
| Pending | 等待中的请求数（尚未处理的请求） |
| GPU KV cache usage | GPU KV Cache 使用率，表示当前 GPU 的 key-value cache 使用情况，数值越高表示显存消耗越多 |

基准测试示例：
```bash
CUDA_VISIBLE_DEVICES=0,1,2,3 python benchmark_throughput.py \
  --model "/data/models/deepseek-70b" \
  --backend vllm \
  --input-len 4096 \
  --output-len 10000 \
  --num-prompts 50 \
  --seed 1100 \
  --dtype float16  \
  --tensor-parallel-size 2 \
  --gpu-memory-utilization 0.95 \
  --max-model-len 16384 \
  --cpu-offload-gb 10 \
  --enforce-eager 
```

### 相关链接
- https://tools.thinkinai.xyz
- https://blog.renfei.net/kitbox/model-memory-calculator
- https://huggingface.co
- https://hf-mirror.com
- https://docs.vllm.ai/en/latest/