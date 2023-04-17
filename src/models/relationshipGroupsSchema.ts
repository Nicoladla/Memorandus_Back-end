import { IncertRelationshipGroups } from "@/protocols";
import joi from "joi";

export const relationshipGroupSchema = joi.object<IncertRelationshipGroups>({
  name: joi.string().min(3).required(),
});
