
// Example 

fetch('https://sheetsu.com/apis/v1.0/7654fbe24554') // Also try http://444.hu/feed
  .then(response => response.json())
  .then(body => {
    console.log(body);
    // do something useful with the contents of the body
  });

  // Example with a POST request

  fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT', or 'DELETE'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});