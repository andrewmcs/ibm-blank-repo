var url = './news_article.json';

var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.responseType='json';
xhr.onload = function() {
    if(xhr.status>=200 && xhr.status <400) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
      
            var headline = document.createElement('h1');
            headline.textContent = article.headline;
      
            var description = document.createElement('h2');
            description.textContent = article.description;
      
            articleDiv.appendChild(headline);
            articleDiv.appendChild(description);

            
            article.paragraphs.forEach(function(paragraph_text) {
                var paragraph = document.createElement('p');  
                paragraph.textContent = paragraph_text;
                articleDiv.appendChild(paragraph);
            });
      
            var author = document.createElement('h3');
            author.style.fontStyle='italic';
            author.textContent = article.author;
      
            articleDiv.appendChild(author);
            var horizontalRule = document.createElement('hr');
            articleDiv.appendChild(horizontalRule);
            articlesDiv.appendChild(articleDiv);

        });
    }
    else {
        console.error('Error fetching data');
    }
}

xhr.send();