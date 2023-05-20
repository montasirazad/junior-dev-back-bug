import { connect, set } from 'mongoose';

export default function () {
  return new Promise(function (resolve, reject) {
    // Set mongoose properties
    set('strictQuery', true);

    // Connect
    // eslint-disable-next-line

    connect('mongodb://127.0.0.1:27017/myapp', {
      keepAlive: true,
      loggerLevel: 'debug'
    }, function (err) {
      if (err) { reject(err); }
      resolve('Connected to MongoDB');
    });
  });
}