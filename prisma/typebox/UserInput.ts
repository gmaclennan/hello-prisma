import { Type, Static } from "@sinclair/typebox";

export const UserInput = Type.Object({
  id: Type.Optional(Type.Number()),
  jobTitle: Type.String(),
  email: Type.String(),
  name: Type.Optional(Type.String()),
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
  profile: Type.Optional(
    Type.Object({
      id: Type.Optional(Type.Number()),
      bio: Type.Optional(Type.String()),
      userId: Type.Number(),
    })
  ),
});

export type UserInputType = Static<typeof UserInput>;
