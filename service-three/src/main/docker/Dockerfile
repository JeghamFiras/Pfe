FROM openjdk:8-jre-alpine

LABEL author="Firas Jegham"
MAINTAINER firas.jegham@enis.tn

# environment
EXPOSE 8086

# executable ADD @project.artifactId@-@project.version@.jar app.jar
ADD service-three.jar app.jar

# run app as user 'booter'
RUN /bin/sh -c 'touch /app.jar'
ENTRYPOINT ["java", "-Xmx256m", "-Xss32m", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
