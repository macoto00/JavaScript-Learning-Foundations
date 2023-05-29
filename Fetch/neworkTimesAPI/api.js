const apiKey = 'API-Key';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+apollo+11&api-key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.response.docs;
    
    articles.forEach(article => {
      const headline = article.headline.main;
      const snippet = article.snippet;
      const publicationDate = article.pub_date;
      const permalink = article.web_url;
      
      console.log('Headline:', headline);
      console.log('Snippet:', snippet);
      console.log('Publication Date:', publicationDate);
      console.log('Permalink:', permalink);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
