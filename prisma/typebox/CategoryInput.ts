import { Type, Static } from "@sinclair/typebox";

export const CategoryInput = Type.Object({
  id: Type.Optional(Type.Number()),
  posts: Type.Array(
    Type.Object({
      id: Type.Optional(Type.Number()),
      createdAt: Type.Optional(Type.String()),
      updatedAt: Type.String(),
      title: Type.String(),
      content: Type.Optional(Type.String()),
      published: Type.Optional(Type.Boolean()),
      authorId: Type.Number(),
    })
  ),
});

export type CategoryInputType = Static<typeof CategoryInput>;
