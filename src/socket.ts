
import { Server, Socket } from "socket.io";

let io: Server;
let connectedSocket: Socket;

interface responseDataType {
  name: string;
}

export class SocketService {

  // server.ts에서 호출할 메서드.
  public static init(app: any) {
    io = new Server(app);

    // 요청에 따라 다른 emit을 전달하기 위해 전역변수에 연결된 socket 정보를 저장.
    io.on('connection', (socket) => {
      console.log('socket connected');
      connectedSocket = socket;
    })
  }

  public static async getOtherServerUserData(): Promise<responseDataType> {
    let res: responseDataType;

    connectedSocket.emit("getOtherServerUserData", { name: 'getOtherServerUserData'});

    connectedSocket.on("sendOtherServerUserData", ( data: responseDataType ) => {
      console.log(data);
      res = data;
    });

    /**
     * <rejected> TypeError: Cannot read properties of undefined (reading 'emit')
     */
    console.log(res);
    return res;
  }
}