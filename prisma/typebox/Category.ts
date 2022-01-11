import { Type, Static } from "@sinclair/typebox";

export const Category = Type.Object({
  id: Type.Number(),
  posts: Type.Array(
    Type.Object({
      id: Type.Number(),
      createdAt: Type.Optional(Type.String()),
      updatedAt: Type.String(),
      title: Type.String(),
      content: Type.Optional(Type.String()),
      published: Type.Optional(Type.Boolean()),
      authorId: Type.Number(),
    })
  ),
});

export type CategoryType = Static<typeof Category>;
