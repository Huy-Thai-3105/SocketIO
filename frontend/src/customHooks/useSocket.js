import { useCallback, useEffect, useState } from "react";
import * as io from "socket.io-client";
import { SOCKET_BASE_URL } from "../constants/apiConstants";

export const useSocket = (room) => {
  const [socket, setSocket] = useState();

  const [isConnected, setConnected] = useState(false);
  const [socketResponse, setSocketResponse] = useState([]);
  const sendData = useCallback(
    (payload) => {
      socket.emit("send_message", {
        type : "CLIENT",
        message : "hello",
        room : "a",
        from : "thai",
        to : "server"
      });
    },
    [socket, room]
  );
  useEffect(() => {
    const s = io(SOCKET_BASE_URL, {
      reconnection: false,
      query: `&room=${room}`,
    });
    setSocket(s);
    s.on("connect", () => setConnected(true));
    console.log(isConnected);
    s.on("read_message", (res) => {
      console.log(res);
    });
    console.log(s)
    return () => {
      s.disconnect();
    };
  }, [room]);

  return { socketResponse, isConnected, sendData };
};
