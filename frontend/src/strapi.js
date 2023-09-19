export async function fetchApi({ endpoint, wrappedByKey }) {
  const url = new URL(`http://127.0.0.1:1337/api/${endpoint}`);

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  return data;
}
