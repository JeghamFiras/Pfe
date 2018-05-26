#!/bin/sh
ssh -tt -i "continuous-integration.pem" ubuntu@ec2-54-246-198-240.eu-west-1.compute.amazonaws.com "cd /home/ubuntu; rm -r microservices-sample; mkdir microservices-sample; cd microservices-sample;git init;git pull https://github.com/JeghamFiras/Pfe;cd web-application;ng build;cd ..;mvn clean package;cd build/docker; export profile=docker;docker-compose up --build -d"
