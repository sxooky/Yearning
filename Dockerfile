FROM sxooky/alpine-py

LABEL maintainer="sxooky@hotmail.com"
LABEL version="1.0"
LABEL description="This is yearning build update"

EXPOSE 8000

# 设置用户
USER root

ENV HOST localhost
ENV MYSQL_ADDR 127.0.0.1
ENV MYSQL_PORT 3306
ENV MYSQL_USER root
ENV MYSQL_PASSWORD 123456

WORKDIR /opt

# 添加文件
ADD src yearning
ADD webpage/dist yearning/dist

WORKDIR /opt/yearning

# 安装依赖包
RUN pip3 install -r packages.txt

ENTRYPOINT docker_start.sh