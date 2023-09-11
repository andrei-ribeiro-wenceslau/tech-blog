const commentFormHandler = async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const post_id = document.querySelector('.new-comment-form').dataset.postid;
  const comment_content = document
    .querySelector('#comment_content')
    .value.trim();

  if (comment_content) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
