import {
  deleteRelationshipGroups,
  getRelationshipGroups,
  postRelationshipGroups,
  putRelationshipGroups,
} from "@/controllers";
import { tokenValidation, validateBody } from "@/middlewares";
import { Router } from "express";

const router = Router();

router
  .all("/*", tokenValidation)
  .get("/", getRelationshipGroups)
  .post("/", validateBody(), postRelationshipGroups)
  .put("/", validateBody(), putRelationshipGroups)
  .delete("/", deleteRelationshipGroups);

export default router;
