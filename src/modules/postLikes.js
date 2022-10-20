export default async (pokemonID) => {
  const data = { item_id: `${pokemonID}` };
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/likes',
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
};
