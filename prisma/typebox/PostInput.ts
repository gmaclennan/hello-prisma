import { Type, Static } from "@sinclair/typebox";

export const PostInput = Type.Object({
  id: Type.Optional(Type.Number()),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.String(),
  title: Type.String(),
  content: Type.Optional(Type.String()),
  published: Type.Optional(Type.Boolean()),
  author: Type.Object({
    id: Type.Optional(Type.Number()),
    jobTitle: Type.String(),
    email: Type.String(),
    name: Type.Optional(Type.String()),
  }),
  authorId: Type.Number(),
  categories: Type.Array(
    Type.Object({
      id: Type.Optional(Type.Number()),
    })
  ),
});

export type PostInputType = Static<typeof PostInput>;
