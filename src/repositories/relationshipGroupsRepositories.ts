import { prisma } from "@/configs";
import { InsertRelationshipGroups } from "@/protocols";

function getRelationshipGroups(userId: number) {
  return prisma.relationshipGroups.findMany({ where: { userId } });
}

function getRelationshipGroupsByName(
  relationshipGroups: InsertRelationshipGroups
) {
  return prisma.relationshipGroups.findFirst({ where: relationshipGroups });
}

function getRelationshipGroupsById(id: number) {
  return prisma.relationshipGroups.findUnique({ where: { id } });
}

function postRelationshipGroup(relationshipGroup: InsertRelationshipGroups) {
  return prisma.relationshipGroups.create({ data: relationshipGroup });
}

export const relationshipGroupsRepositories = {
  getRelationshipGroups,
  getRelationshipGroupsByName,
  getRelationshipGroupsById,
  postRelationshipGroup,
};
