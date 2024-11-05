'use strict';

const mongoose = require('mongoose');
const { numberConnect } = require('../helpers/check.connect');
const {
  db: { host, name, port },
} = require('../config/config.mongodb');
const connectString = `mongodb://${host}:${port}/${name}`;

console.log(`connectString:: ${connectString}`);
class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    //dev
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', {
        color: true,
      });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log(`Connected Mongodb Success PRO`, numberConnect());
      })
      .catch((err) => console.log(`Error Connect!`));
  }

  static getInscance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInscance();
module.exports = instanceMongodb;
