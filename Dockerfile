FROM node:6

RUN apt-get update && apt-get install -y zip

RUN mkdir -p /var/app/
WORKDIR /var/app/

COPY package.json .
RUN npm install

COPY . /var/app/
COPY entrypoint.sh /tmp
RUN chmod +x /tmp/entrypoint.sh
ENTRYPOINT ["/tmp/entrypoint.sh"]

CMD ["test"]