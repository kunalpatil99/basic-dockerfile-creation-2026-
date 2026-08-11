````markdown
# My Node.js Docker App

A simple Node.js application running inside Docker.

## Run locally

```bash
npm install
npm start
````

Open:

http://localhost:3000

## Run with Docker

Build the image:

```bash
docker build -t my-node-app .
```

Run the container:

```bash
docker run -d -p 3000:3000 --name my-node-container my-node-app
```

Open in browser:

http://localhost:3000

## Stop the container

```bash
docker stop my-node-container
```

```
```


