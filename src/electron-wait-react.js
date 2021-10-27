/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const net = require('net');

const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const tryConnection = () =>
  client.connect(
    {
      port,
    },
    () => {
      client.end();
      if (!startedElectron) {
        console.log('starting electron');
        startedElectron = true;
        // eslint-disable-next-line global-require
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const {exec} = require('child_process');
        exec('npm run electron');
      }
    },
  );

tryConnection();

client.on('error', error => {
  client.end();
  setTimeout(tryConnection, 1000);
});
