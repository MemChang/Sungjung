# Node REST API for YAMIYAMI

REST API for YAMIYAMI using Node.js and Express.js framework with Mongoose.js for working with MongoDB.

# Project Structure

Soon...

# Prerequisite

### Technologies

* *Node.js* - Install [Node.js](http://nodejs.org/download/) and Manager node version using [nvm(Node Version Manager)](https://github.com/creationix/nvm").
```bash
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
$ nvm install 4.4.7
$ nvm use 4.4.7
```

* *MongoDB* - Install [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) or set up the mongodb by executing the following this tutorial.
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
$ echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ service mongod status
```

### packages

Some of non standard packages used:
* [express](https://www.npmjs.com/package/mongoose)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [nconf](https://www.npmjs.com/package/nconf)
* [winston](https://www.npmjs.com/package/winston)
* [faker](https://www.npmjs.com/package/faker)
* [passport](https://www.npmjs.com/package/passport)

# Getting Started
### Installation
The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
$ git clone https://github.com/MemChang/yami_node.git myproject
$ cd myproject
$ git remote rm origin

# Install NPM dependencies
$ npm install
```

### Run node app
You can run:
```bash
$ npm start
```

or execute directly.
```bash
$ node bin/www
```

### API Test

Soon...

# License
The MIT License. Please see [the license file](LICENSE) for more information.
