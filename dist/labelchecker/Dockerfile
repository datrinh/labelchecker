FROM node:8.11.3

MAINTAINER Michael Schuster <michael.schuster@deecoob.com>

WORKDIR /tmp/data/Labelchecker
COPY . /tmp/data/Labelchecker

ENV PATH /Labelchecker:$PATH

EXPOSE 80
EXPOSE 443

RUN yarn global add serve
CMD ["serve", "-s", "./", "-p", "80"]
