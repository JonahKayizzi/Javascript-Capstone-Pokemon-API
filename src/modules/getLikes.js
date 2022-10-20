export default async (pokemonID) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/likes/',
  );
  const result = await response.json();
  const obj = result.find((o) => o.item_id === pokemonID);
  return obj;
};
