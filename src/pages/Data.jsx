import React, { useEffect, useState } from 'react';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}/api/data`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  console.warn(data)
  return (
    <div>
      <h1>Data Page</h1>
      {data.map((item, index) =>(
        <div key={`${index}-${item.message.order_no || item['@timestamp']}`}>
          <p>{item.message}</p>
          {/* Display other data fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default Data;
