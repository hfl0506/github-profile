export async function getUser(user) {
  const url = `https://api.github.com/users/${user}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const skimmedData = {
    avatar_url: data.avatar_url,
    followers: data.followers,
    followers_url: data.followers_url,
    following: data.following,
    following_url: data.following_url,
    name: data.name,
    login: data.login,
    url: data.url,
    bio: data.bio,
  };
  console.log(skimmedData);
  return skimmedData;
}
