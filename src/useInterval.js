import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useInterval = () => {
  const [data, setData] = useState([]);
  const [page , setPage] = useState(1)

  const fetchData = async () => {
    try {
      const obj = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      setData(obj.data)
      setTimeout(() => {
        setPage(page => page + 1)
      }, 10000)
    } catch(error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchData();
    return () => clearInterval(fetchData)
  }, [page]);

  return { 
    data 
  }
};

export default useInterval;