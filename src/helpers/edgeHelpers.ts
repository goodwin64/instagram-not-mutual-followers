export function getUsersOnlyTheyFollowMe(
  followers: string[],
  following: string[]
) {
  const s1 = new Set(followers);
  const s2 = new Set(following);

  return [...s1.difference(s2)];
}

export function getUsersOnlyIFollowThem(
  followers: string[],
  following: string[]
) {
  const s1 = new Set(followers);
  const s2 = new Set(following);

  return [...s2.difference(s1)];
}
