export function updateUser(user, updates) {
  if (
    (user && (typeof user !== "object" || Array.isArray(user))) ||
    (updates && (typeof updates !== "object" || Array.isArray(updates)))
  )
    throw Error("Not Valid Object");
  return { ...user, ...updates };
}
