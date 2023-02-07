export const getFetcher = async (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const postFetcher = async (url: string, body: string) => {
  fetch(url, {
    method: "POST",
    body: body,
  }).then((res) => res.json());
};
