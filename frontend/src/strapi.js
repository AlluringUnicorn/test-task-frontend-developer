export async function fetchApi({ endpoint, wrappedByKey }) {

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  return data;
}
