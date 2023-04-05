import { prisma } from "@/configs";
import { InsertUser } from "@/protocols";

function getEmail(email: string) {
  return prisma.users.findUnique({ where: { email } });
}

function postUser(user: InsertUser) {
  return prisma.users.create({ data: user });
}

export const authRepositories = { getEmail, postUser };
