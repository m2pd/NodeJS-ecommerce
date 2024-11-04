'use strict';

const { default: mongoose } = require('mongoose');
const process = require('process');
const os = require('os');
const _SECOND = 5000;
//count connect
const numberConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections:: ${numConnections}`);
};

//check over load
const checkOverload = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    //Example maximum number of connections based on number of cores
    const maxConnecttions = numCores * 5;

    console.log(`Active connection:: ${numberConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    if (numberConnection > maxConnecttions) {
      console.log(`Connect overload detected`);
    }
  }, _SECOND);
};

module.exports = {
  numberConnect,
  checkOverload,
};
