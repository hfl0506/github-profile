const BASE_URL = 'https://api.github.com/users';

async function httpFetch(url) {
  const resp = await fetch(url);
  return resp.json();
}

export async function getUser(user) {
  const url = `${BASE_URL}/${user}`;

  const data = await httpFetch(url);

  const skimmedData = {
    avatar_url: data.avatar_url,
    followers: data.followers,
    following: data.following,
    name: data.name,
    login: data.login,
    bio: data.bio,
  };

  return skimmedData;
}

export async function getUserFollowers(user) {
  const url = `${BASE_URL}/${user}/followers`;

  return await httpFetch(url);
}

export async function getUserFollowing(user) {
  const url = `${BASE_URL}/${user}/following`;

  return await await httpFetch(url);
}

export async function getStarredRepos(user) {
  const url = `${BASE_URL}/${user}/starred`;

  return await httpFetch(url);
}
