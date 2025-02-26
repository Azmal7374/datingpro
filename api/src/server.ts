
import app from './app';
import { Server } from 'http';

let server: Server;
async function main() {
  try {

    app.listen(() => {
      console.log(`app is listening on port`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

