import * as express from 'express';
import { SocketService } from './socket';

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// socket 서버 초기화.
SocketService.init(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// router로 구현했다고 가정.
app.get('/getOtherServerUserData', (req, res) => {
  const data = SocketService.getOtherServerUserData();
  console.log(data); // Promise { undefined }
  
  res.status(200).send(data);
})

/**
 * app을 바로 인자로 전달하면 다음과 같은 에러 발생.
 * 해결 못해서 변수에 할당 후 전달함.
 * 
 * Error: You are trying to attach socket.io to an express request handler function.
 * Please pass a http.Server instance.
 */
server;
