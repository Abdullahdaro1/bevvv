// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// In development, avoid instantiating multiple PrismaClient instances:
declare global {
  // allow us to attach to the global object in dev mode
  // so that we don’t end up with more than one connection.
  // (This matters if you do hot-reload in Next.js.)
  var __prisma__: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__prisma__) {
    global.__prisma__ = new PrismaClient();
  }
  prisma = global.__prisma__;
}

export default prisma;
