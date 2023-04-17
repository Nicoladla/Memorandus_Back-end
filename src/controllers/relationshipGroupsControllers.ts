import { AuthenticatedRequest } from "@/middlewares";
import { relationshipGroupsServices } from "@/services";
import { Response } from "express";

export async function getRelationshipGroup(
  req: AuthenticatedRequest,
  res: Response
) {
  const { userId } = req;

  try {
    const relationshipGroups =
      relationshipGroupsServices.getRelationshipGroup(userId);

    res.status(200).send(relationshipGroups);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postRelationshipGroup(
  req: AuthenticatedRequest,
  res: Response
) {
  const { userId } = req;
  const { name } = req.body as { name: string };

  try {
    await relationshipGroupsServices.postRelationshipGroup({ name, userId });

    res.sendStatus(201);
  } catch (err) {
    if (err.name === "conflictError") {
      return res.status(409).send({ message: err.message });
    }

    res.status(500).send({ message: err.message });
  }
}

export async function putRelationshipGroup(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    

    res.sendStatus(200)
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}

export async function deleteRelationshipGroup(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    res.send("Under construction");
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}
