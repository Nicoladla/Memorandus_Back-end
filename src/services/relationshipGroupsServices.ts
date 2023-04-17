import { conflictError } from "@/errors";
import { InsertRelationshipGroups, RelationshipGroups } from "@/protocols";
import { relationshipGroupsRepositories } from "@/repositories";

async function checkExistenceRelationshipGroup(
  relationshipGroups: InsertRelationshipGroups,
  type: string,
  id?: number
) {
  let relationshipGroupsExist: RelationshipGroups;

  if (type === "name") {
    relationshipGroupsExist =
      await relationshipGroupsRepositories.getRelationshipGroupsByName(
        relationshipGroups
      );
  }

  if (type === "id") {
    relationshipGroupsExist =
      await relationshipGroupsRepositories.getRelationshipGroupsById(id);
  }

  return relationshipGroupsExist ? true : false;
}

async function getRelationshipGroup(userId: number) {
  return relationshipGroupsRepositories.getRelationshipGroups(userId);
}

async function postRelationshipGroup(
  relationshipGroups: InsertRelationshipGroups
) {
  const relationshipGroupsExist =
    checkExistenceRelationshipGroup(relationshipGroups, "name");

  if (relationshipGroupsExist)
    throw conflictError("Existing Relationship Group");

  await relationshipGroupsRepositories.postRelationshipGroup(
    relationshipGroups
  );
}

async function putRelationshipGroup(
  relationshipGroups: InsertRelationshipGroups
) {

}

export const relationshipGroupsServices = {
  getRelationshipGroup,
  postRelationshipGroup,
  putRelationshipGroup
};
