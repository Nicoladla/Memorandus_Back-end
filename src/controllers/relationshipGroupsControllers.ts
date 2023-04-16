import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";

export async function getRelationshipGroups(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}

export async function postRelationshipGroups(
  req: AuthenticatedRequest,
  res: Response
) {

  try {
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}

export async function putRelationshipGroups(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}

export async function deleteRelationshipGroups(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    res.send("Under construction");
  } catch (err) {
    //res.status(500).send({ message: err.message });
  }
}
const { userId } = req;
const relationshipGroups= req.body