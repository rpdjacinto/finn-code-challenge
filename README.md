# finn-code-challenge

This contains the Finn.ai Code Challenge. This repository contains solutions to Level 1 and Level 2, sans the retry count. The solution contains two projects: `user-server` and `user client`. To run these applications, you will need npm or yarn.

## user-server
### Setup Instructions
```
$ cd user-server
$ yarn install
$ yarn start
```
### Using the API
The server will be running on `http://localhost:3001`. Here is an example using curl:
```
$curl localhost:3001/id
{"id":"00f66a50-2f11-45e9-8d47-11a4d1fa146a"}%
```

## user-client
### Setup Instructions
```
$ cd user-client
$ yarn install
$ yarn start
```
### Using the UI
The UI will be served at `http://localhost:3002`, and is accessible through a web browser.