import { conflictError, notFoundError } from "@/errors";
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
  relationshipGroup: InsertRelationshipGroups
) {
  const relationshipGroupExist =
    checkExistenceRelationshipGroup(relationshipGroup, "name");

  if (relationshipGroupExist)
    throw conflictError("Existing Relationship Group");

  await relationshipGroupsRepositories.postRelationshipGroup(
    relationshipGroup
  );
}

async function putRelationshipGroup(
  id: number, relationshipGroups: InsertRelationshipGroups,
) {
  const relationshipGroupExist = checkExistenceRelationshipGroup(
    relationshipGroups,
    "id"
  );

  if (!relationshipGroupExist)
    throw notFoundError("Relationship group not found");

  await relationshipGroupsRepositories.putRelationshipGroup(
    id, relationshipGroups
  );
}

export const relationshipGroupsServices = {
  getRelationshipGroup,
  postRelationshipGroup,
  putRelationshipGroup
};
