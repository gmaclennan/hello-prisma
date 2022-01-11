import { Type, Static } from "@sinclair/typebox";

export const ProfileInput = Type.Object({
  id: Type.Optional(Type.Number()),
  bio: Type.Optional(Type.String()),
  user: Type.Object({
    id: Type.Optional(Type.Number()),
    jobTitle: Type.String(),
    email: Type.String(),
    name: Type.Optional(Type.String()),
  }),
  userId: Type.Number(),
});

export type ProfileInputType = Static<typeof ProfileInput>;
