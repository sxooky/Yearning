FROM alpine:3.9

LABEL maintainer="sxooky@hotmail.com"
LABEL version="1.0"
LABEL description="This is Python develop, Yearning base env ."

# 更换为阿里云镜像源
RUN echo "http://mirrors.aliyun.com/alpine/v3.9/main/" > /etc/apk/repositories \
    && echo "http://mirrors.aliyun.com/alpine/v3.9/community/" >> /etc/apk/repositories \
    && apk update

# 配置工作目录
WORKDIR /opt

# 设置用户
USER root

# 设置时区变量
ENV TIME_ZONE Asia/Shanghai

# 添加文件
ADD docker_start.sh /usr/local/bin/docker_start.sh
ADD packages.txt packages.txt

# 安装时区包并配置时区TIME_ZONE为中国标准时间
RUN apk add --no-cache -U tzdata \
    && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
    && echo "${TIME_ZONE}" > /etc/timezone

RUN apk add --no-cache gcc python3 python3-dev musl-dev \
            openssl-dev libxml2-dev libxslt-dev libffi-dev

# 安装依赖包
RUN chmod 755 /usr/local/bin/docker_start.sh \
        && pip3 install --default-timeout=100 --no-cache-dir --upgrade pip setuptools \
        && pip3 install --no-cache-dir -r packages.txt