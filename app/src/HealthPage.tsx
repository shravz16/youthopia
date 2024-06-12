import React, { useState } from 'react';
import './Health.css';
import AwarenessSection from './AwarenessSection';
import HealthForm from './HealthForm';

const HealthPage: React.FC = () => {
  const [expandedArticle, setExpandedArticle] = useState<{ title: string; content: string; imgUrl: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [form,setForm] = useState(false)
  const [filteredArticles, setFilteredArticles] = useState([
    {
      title: 'The Benefits of Exercise',
      content: 'Regular exercise can help improve cardiovascular health, strengthen muscles and bones, and reduce the risk of chronic diseases.',
      imgUrl: 'https://files.selecthealth.cloud/api/public/content/Benefits_of_Regular_Activity_blog_lg?v=5b8dcb29',
    },
    {
      title: 'Healthy Eating Habits',
      content: 'Adopting a balanced diet rich in fruits, vegetables, whole grains, and lean proteins can support overall well-being and prevent nutrient deficiencies.',
      imgUrl: 'https://media.licdn.com/dms/image/D5612AQFRF-fnINxxlA/article-cover_image-shrink_720_1280/0/1679787795779?e=2147483647&v=beta&t=oz8zkmoXvlwE4zUlZFQAi5EvYuQjSgtlDOBMbShjt94',
    },
    {
      title: 'Stress Management Techniques',
      content: 'Practicing stress management techniques like meditation, yoga, or deep breathing can help reduce anxiety, improve sleep, and promote mental clarity.',
      imgUrl: 'https://www.verywellhealth.com/thmb/_zdHPRT3b9Y92Yim-OdtH7ly_dU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-reduce-stress-5207327_FINAL-907db114a640431ba1e8ecbb9e81b77f.jpg',
    },
  ]);

  const handleArticleClick = (title: string, content: string, imgUrl: string) => {
    setExpandedArticle({ title, content, imgUrl });
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

  return (
    <div className="HealthPage">
      <header className="HealthHeader">

        <div className="HealthHeader__Container">
          <div className="HealthHeader__Logo">
          <h2 style={{color:'white'}}>Health and Body</h2>

          </div>
          <input type="text" placeholder="Search articles..." value={searchQuery} onChange={handleSearchChange} />
          <button >Sort by Title (▲)</button>
        </div>
      </header>
      <main className="HealthContent">
        <div className="HealthArticles">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="HealthArticle"
              onClick={() => handleArticleClick(article.title, article.content, article.imgUrl)}
            >
              <img src={article.imgUrl} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
        <button className='healthButton'onClick={()=>{setForm(true)}}> Having any health issue?</button>
      {form &&(<HealthForm onClose={()=>{setForm(false)}}></HealthForm>)}
      </main>
      {expandedArticle && (
        <div className="ExpandedView">
          <div className="ExpandedContent">
            <img src={expandedArticle.imgUrl} alt={expandedArticle.title} />
            <h3>{expandedArticle.title}</h3>
            <p>{expandedArticle.content}</p>
            <button className='healthButton' onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
  
    </div>
  );
};

export default HealthPage;