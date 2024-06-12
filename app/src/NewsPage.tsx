import React, { useState } from 'react';
import './News.css';
import axios from 'axios';

const NewsPage: React.FC = () => {
  const [expandedArticle, setExpandedArticle] = useState<{
    title: string;
    description: string;
    imageUrl: string;
    index:number;
    content: string;
  } | null>(null);
  const [interest,setInterested]=useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  React.useEffect(() => {
    const fetchUserData = async () => {
      const getNews = await axios.get('http://localhost:3000/newsmodel').then().catch(e=>{console.log(e)});
      console.log(getNews)
      setFilteredArticles(getNews.data)
    };

    fetchUserData();
  }, []);
  const handleArticleClick = (index:number,title: string, description: string, imageUrl: string, content: string) => {
    setExpandedArticle({ index,title, description, imageUrl, content });
  };

  const handleCloseClick = () => {
    setExpandedArticle(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = filteredArticles.filter((article) => article.title.toLowerCase().includes(query));
    setFilteredArticles(filtered);
  };

  const handleSortClick = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="NewsPage">
      <header className="NewsHeader">
        <div className="HeaderContainer">
          <h1>News and Articles</h1>
          <input type="text" placeholder="Search articles..." value={searchQuery} onChange={handleSearchChange} />
          <button className="SortButton" onClick={handleSortClick}>
            Sort by Title ({sortOrder === 'asc' ? '▲' : '▼'})
          </button>
        </div>
      </header>
      <div className="NewsContent">
        {sortedArticles.map((article, index) => (
          <div
            key={index}
            className="NewsCard"
            onClick={() => handleArticleClick(index,article.title, article.description, article.imageUrl, article.content)}
          >
            <img src={article.imageUrl} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
      {expandedArticle && (
        <div className="ExpandedView">
          <div className="ExpandedContent">
            <button className="CloseButton" onClick={handleCloseClick}>
              &times;
            </button>
            <img src={expandedArticle.imageUrl} alt={expandedArticle.title} />
            <h3>{expandedArticle.title}</h3>
            <h2>{expandedArticle.description}</h2>
            <p>{expandedArticle.content}</p>
            {
  interest.includes(expandedArticle.index) ? (
    <button style={{ backgroundColor: 'white',color:'#2f52a1' }} onClick={() => setInterested([...interest, expandedArticle.index])}>
      Thank you for showing interest
    </button>
  ) : (
    <button style={{backgroundColor:'#2f52a1',color:'white' }} onClick={() => setInterested([...interest, expandedArticle.index])}>
      Interested?
    </button>
  )
}
            
            
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;