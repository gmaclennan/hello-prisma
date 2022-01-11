import { Type, Static } from "@sinclair/typebox";

export const Profile = Type.Object({
  id: Type.Number(),
  bio: Type.Optional(Type.String()),
  user: Type.Object({
    id: Type.Number(),
    jobTitle: Type.String(),
    email: Type.String(),
    name: Type.Optional(Type.String()),
  }),
  userId: Type.Number(),
});

export type ProfileType = Static<typeof Profile>;
