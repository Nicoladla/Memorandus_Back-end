import {
  deleteRelationshipGroup,
  getRelationshipGroup,
  postRelationshipGroup,
  putRelationshipGroup,
} from "@/controllers";
import { tokenValidation, validateBody } from "@/middlewares";
import { relationshipGroupSchema } from "@/models";
import { Router } from "express";

const router = Router();

router
  .all("/*", tokenValidation)
  .get("/", getRelationshipGroup)
  .post("/", validateBody(relationshipGroupSchema), postRelationshipGroup)
  .put("/:id", validateBody(relationshipGroupSchema), putRelationshipGroup)
  .delete("/:id", deleteRelationshipGroup);

export default router;
