"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
  useRef
} from "react";
import { io, Socket } from "socket.io-client";
import { useToast } from "@/components/ui/use-toast";

// Re-exporting types for use in other components
export type User = {
  id: string;
  socketId: string;
  name: string;
  avatar: string;
  color: string;
  isOnline: boolean; // Changed string to boolean to match typical usage
  posX: number;
  posY: number;
  location: string;
  flag: string;
  lastSeen: string;
  createdAt: string;
};

export type Message = {
  id: string;
  sessionId: string;
  flag: string;
  country: string;
  username: string;
  avatar: string;
  color?: string;
  content: string;
  createdAt: string | Date;
};

// Added TypingUser type
export type TypingUser = {
  username: string;
  sessionId: string;
};

type SocketContextType = {
  socket: Socket | null;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  msgs: Message[];
  currentUser: User | undefined; // Changed isCurrentUser to the actual User object
  typingUsers: Map<string, TypingUser>;
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: [],
  setUsers: () => {},
  msgs: [],
  currentUser: undefined,
  typingUsers: new Map(),
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SESSION_ID_KEY = "portfolio-site-session-id";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<Map<string, TypingUser>>(new Map());
  const { toast } = useToast();

  // SETUP SOCKET.IO
  useEffect(() => {
    // Prevent connection if URL is missing
    if (!process.env.NEXT_PUBLIC_WS_URL) {
        console.warn("NEXT_PUBLIC_WS_URL is not defined");
        return;
    }

    const socketIo = io(process.env.NEXT_PUBLIC_WS_URL!, {
      auth: {
        sessionId: typeof window !== "undefined" ? localStorage.getItem(SESSION_ID_KEY) : null,
      },
      reconnection: true,
      reconnectionAttempts: 5,
    });

    setSocket(socketIo);

    socketIo.on("connect", () => {
      console.log("Connected to socket server");
    });

    // --- SESSION & USER HANDLING ---
    socketIo.on("session", ({ sessionId }) => {
      localStorage.setItem(SESSION_ID_KEY, sessionId);
    });

    socketIo.on("users-init", (initialUsers: User[]) => {
      setUsers(initialUsers);
    });

    socketIo.on("user-join", (newUser: User) => {
      setUsers((prev) => {
        // Prevent duplicates
        const exists = prev.some(u => u.id === newUser.id);
        if (exists) return prev.map(u => u.id === newUser.id ? { ...newUser, isOnline: true } : u);
        return [...prev, newUser];
      });
    });

    socketIo.on("user-leave", ({ socketId }) => {
       setUsers((prev) => prev.map(u => u.socketId === socketId ? { ...u, isOnline: false } : u));
    });

    // --- MESSAGING ---
    socketIo.on("msgs-receive-init", (initialMsgs: Message[]) => {
      setMsgs(initialMsgs);
    });

    socketIo.on("msg-receive", (newMsg: Message) => {
      setMsgs((prev) => [...prev, newMsg]);
    });

    socketIo.on("msg-delete", (data: { id: string | number }) => {
      setMsgs((prev) => prev.filter((m) => String(m.id) !== String(data.id)));
    });

    // --- TYPING INDICATORS ---
    socketIo.on("typing-start", (data: TypingUser) => {
      setTypingUsers((prev) => {
        const newMap = new Map(prev);
        newMap.set(data.sessionId, data);
        return newMap;
      });
    });

    socketIo.on("typing-stop", (data: { sessionId: string }) => {
      setTypingUsers((prev) => {
        const newMap = new Map(prev);
        newMap.delete(data.sessionId);
        return newMap;
      });
    });

    // --- SYSTEM ALERTS ---
    socketIo.on("warning", (data: { message: string }) => {
      toast({
        variant: "destructive",
        title: "System Warning",
        description: data.message,
      });
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  // Derive current user from the users list based on the socket session
  // Note: This relies on the backend sending the sessionId back in the 'session' event
  // or us matching the socket.id if the backend syncs it.
  const sessionId = typeof window !== "undefined" ? localStorage.getItem(SESSION_ID_KEY) : null;
  const currentUser = users.find((u) => u.id === sessionId);

  return (
    <SocketContext.Provider
      value={{
        socket,
        users,
        setUsers,
        msgs,
        currentUser,
        typingUsers,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;