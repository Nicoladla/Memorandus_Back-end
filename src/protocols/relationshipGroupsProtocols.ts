export type RelationshipGroups = {
  id: number;
  name: string;
  userId: number;
  createdAt: Date;
};

export type InsertRelationshipGroups= Omit<RelationshipGroups, "id" | "createdAt">