import { prisma } from "@/configs";

function getEmail(email: string) {
  return prisma.users.findUnique({ where: { email } });
}

export const authRepositories = { getEmail };
