---
slug: kernel
title: Centos内核升级
authors: [goblin]
tags: [linux]
---

### 导入仓库源
```bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org

rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
```

### 查看可安装的软件包
```bash
# ML 版本为最新版本，TL 版本为稳定版本
yum --enablerepo="elrepo-kernel" list --showduplicates | sort -r | grep kernel-ml.x86_64

# 安装 ML 版本
yum --enablerepo=elrepo-kernel install  kernel-ml-devel kernel-ml -y

# 安装 LT 版本
yum --enablerepo=elrepo-kernel install kernel-lt-devel kernel-lt -y
```

### 查看现有内核启动顺序
```bash
awk -F\' '$1=="menuentry " {print $2}' /etc/grub2.cfg

CentOS Linux (4.4.179-1.el7.elrepo.x86_64) 7 (Core)

CentOS Linux (3.10.0-693.el7.x86_64) 7 (Core)
```

### 设置内核启动序号
```bash
grub2-set-default 0
```