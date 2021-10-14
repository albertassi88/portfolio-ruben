const BASE_URL = 'https://gitconnected.com/v1/portfolio/albertassi88';

export default async function ApiProjects() {
  return fetch(BASE_URL).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}