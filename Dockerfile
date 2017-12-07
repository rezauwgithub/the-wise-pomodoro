FROM node:8.9
ENV APP_HOME /app/
RUN mkdir $APP_HOME
ENV LANG en_US.UTF-8
RUN npm install -g create-react-app
WORKDIR $APP_HOME
