# Email Service
This repo contains a NodeJS project that connects to the Mailjet API and sends emails. It is used to send emails for my contact page on my [personal website](https://dbajollari1.github.io) but can be used to send emails for any purpose. All the code is in this GitHub repository, feel free to clone it and use it as a template for yourself! Before attempting to run the project make sure you have the latest version of [node](https://nodejs.org/en/) installed on your pc. 


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
