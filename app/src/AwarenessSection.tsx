import React, { useState } from 'react';

const AwarenessSection = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleGenerateData = () => {
    // Here, you would implement your logic to generate data based on the query
    // For this example, we'll just use a simple message
    const generatedData = `Awareness data for query: ${query}`;
    setData(generatedData);
  };

  return (
    <div className="AwarenessSection">
      <h2>Awareness Section</h2>
      <input
        type="text"
        placeholder="Enter a query"
        value={query}
        onChange={handleQueryChange}
      />
      <button onClick={handleGenerateData}>Generate Data</button>
      {data && <div className="AwarenessData">{data}</div>}
    </div>
  );
};

export default AwarenessSection;