const Comments = {

    async addComment(item_id, username, comment) {
      const idUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments';
      const response = await fetch(idUrl, {
        method: 'POST',
        body: JSON.stringify({
            item_id,
            username,
            comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return response.json();
    },

    async getComment(id) {
        const idUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments?item_id=${id}`;
        const response = await fetch(idUrl);
        return response.json();
    },
};
 export default Comments;