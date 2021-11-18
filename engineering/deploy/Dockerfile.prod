FROM node:16-alpine as builder

WORKDIR /code

ADD package.json /code/

ADD . /code

# 选择更小体积的基础镜像
FROM nginx:alpine

# 将构建产物移至 nginx 中
COPY --from=builder code/index.html /usr/share/nginx/html/