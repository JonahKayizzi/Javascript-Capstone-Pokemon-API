const addComment = async (itemId, username, comment) => {
  const idUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments';
  const data = {
    item_id: `${itemId}`,
    username: `${username}`,
    comment: `${comment}`,
  };

  await fetch(idUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComment = async (id) => {
  const idUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments?item_id=${id}`;
  const response = await fetch(idUrl);
  const data = await response.json();
  return data;
};

export { getComment, addComment };