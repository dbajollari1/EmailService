# Email Service
This repo contains a NodeJS project that connects to the Mailjet API and sends emails. It is used to send emails for my contact page on my [personal website](https://dbajollari1.github.io) but can be used to send emails for any purpose. In this README I also label the steps to build the project into a Docker image that can be pushed to Azure(as that's where I am hosting it) but feel free to disregard those steps if unnecessary for your purposes. All the code is in this GitHub repository, feel free to clone it and use it as a template for yourself! Before attempting to run the project make sure you have the latest version of [node](https://nodejs.org/en/) installed on your pc. 


## Get started

### Clone the repo
Feel free to name the project whatever you like on your local pc. 

```shell
git clone https://github.com/dbajollari1/EmailService.git
cd emailService
```

### Environment Variables

Create a file in the root of your directory titled `.env`. Copy the contents of the `.env.example` file and fill in the necessary variables with your credentials.

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works. This project is set up to run on port `3001` but feel free to change it to whatever you like:

```shell
npm install
npm run dev
```


### Building the project on local pc

To build your project on your local pc run the following command. The build files are configured to be stored in the /dist directory:

```shell
npm run build
```

## Creating a Docker Image

### Creating the Docker file

Create a `.Dockerfile` in the root directory, or use the one included in the source code. 

### Building the Docker Image

Run the following command: 
```shell 
docker build -t emailService .
```

### Testing the image

Run the following command to build the container and run the app: 
```shell 
docker run --rm -d -p 3001:3001/tcp emailservice:latest 
```

## Pushing to Azure

### Pushing the Docker Image to a Registry

Run the following command. You should have your own Azure registry and app service set up already: 
```shell 
docker push davidregistry.azurecr.io/emailservice:latest 
```

### Deploy the image from the registry to your Azure app service

I used the VsCode Azure extension but feel free to do this step any way you like