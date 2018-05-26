#!/bin/sh
ssh -tt -i "continuous-integration.pem" ubuntu@ec2-54-246-198-240.eu-west-1.compute.amazonaws.com "cd /home/ubuntu; sudo rm -r microservices-simple ;mkdir microservices-simple; cd microservices-simple;git init;git pull https://github.com/JeghamFiras/Pfe;cd web-application;ng build;cd ..;mvn clean package;cd build/docker; sudo export profile=docker;sudo docker-compose up --build -d"
