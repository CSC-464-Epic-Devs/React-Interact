FROM node:10

WORKDIR /code

RUN apt-get update &&\
	apt-get install -y libgl1-mesa-glx &&\
	rm -rf /var/lib/apt/lists/* &&\
	npm install -g gatsby-cli &&\
	npm install -g eslint

EXPOSE 8000

############################################################################################
####### General purpose docker container ###################################################
############################################################################################
# Step 0 Install docker
# if you need any help with docker
# refer to the docker documentation: https://docs.docker.com/v17.09/engine/installation/
#
# Step 1: build the image
# `docker build -t react-interact .`
#
# Step 2: run the image
# Navigate to the root of the project: React-Interact/
# run: `docker run -v $(pwd):/code -p 8000:8000 --rm -i -t react-interact /bin/bash`
#
# If you are using docker for windows you need to go to the docker gui 
# and in settings enable file sharing for the drives you using docker in.
# for powershell: $(pwd) becomes ${pwd} but the rest is the same.
#
# Step 3: run `gatsby develop --host=0.0.0.0`
#
# Step 4: open a browser to localhost:8000
#
# Running the docker image with -v mounts the local directory inside the image path/host:path/docker
# any changes made to path/docker will also affect path/host and vice versa.
# If you have docker for windows, it should be relatively the same.
#
# If gatsby is failing to deploy, you may try removing your node_modules folder and 
# run npm install
