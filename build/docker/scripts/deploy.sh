if [ $# == 0 ] 
then
	echo "Usage:
    
Input Parameters :

	1) Profile name for e.x 'docker'"
	exit 1
fi


cd ../../..

# Build all the modules
/home/ubuntu/workspace/microservices-sample/apache-maven-3.5.2/bin/mvn clean package

# Enter docker-compose folder

cd build/docker/

# Get the profile from
# command line arguement
export profile=$1

# Deploy
docker-compose up --build -d
