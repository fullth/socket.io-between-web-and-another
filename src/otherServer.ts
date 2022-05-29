/**
 * 다른 서버에서 통신한다고 가정.
 */

import * as express from 'express';
import { io } from 'socket.io-client'

const app = express();

const server = app.listen(4000, () => {
  console.log('listening on *:4000');
});

// Web Server의 socket과 연결.
const socket = io('http://localhost:3000');

socket.on('getOtherServerUserData', (data) => {
  sendOtherServerUserData();
})

function sendOtherServerUserData() {
  socket.emit("sendOtherServerUserData", { name: "sendOtherServerUserData" }, () => {});
  return;
}

server;
