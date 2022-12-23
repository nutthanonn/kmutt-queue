import io from "socket.io-client";
import { DEFAULT_API } from "../api/defaultAPI";

export const socket = io(DEFAULT_API);
