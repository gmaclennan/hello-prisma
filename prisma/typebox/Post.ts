import { Type, Static } from "@sinclair/typebox";

export const Post = Type.Object({
  id: Type.Number(),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.String(),
  title: Type.String(),
  content: Type.Optional(Type.String()),
  published: Type.Optional(Type.Boolean()),
  author: Type.Object({
    id: Type.Number(),
    jobTitle: Type.String(),
    email: Type.String(),
    name: Type.Optional(Type.String()),
  }),
  authorId: Type.Number(),
  categories: Type.Array(
    Type.Object({
      id: Type.Number(),
    })
  ),
});

export type PostType = Static<typeof Post>;
