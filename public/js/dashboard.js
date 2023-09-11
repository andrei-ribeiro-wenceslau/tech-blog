const newFormHandler = async (event) => {
	event.preventDefault(); 

	
	const title = document.querySelector('#post-title').value.trim();
	const content = document.querySelector('#post-content').value.trim();

	if (title && content) {
		const response = await fetch(`/api/posts`, {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// If the POST request is successful, redirect to the dashboard page; otherwise, display an error message
		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create blog');
		}
	}
};

// Define an asynchronous function that handles clicks on delete buttons for blogs
const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) { // Check if the clicked element has a 'data-id' attribute
		const id = event.target.getAttribute('data-id'); // Get the ID of the blog to be deleted from the 'data-id' attribute

		// Make a DELETE request to the server to delete the blog with the specified ID
		const response = await fetch(`/api/posts/${id}`, {
			method: 'DELETE',
		});

		// If the DELETE request is successful, redirect to the dashboard page; otherwise, display an error message
		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete blog');
		}
	}
};

// Attach the new blog form submission handler to the form's submit event
document
	.querySelector('.new-post-form')
	.addEventListener('submit', newFormHandler);

// Attach the blog delete button click handler to the blog list's click event
document
	.querySelector('.blog-list')
	.addEventListener('click', delButtonHandler);