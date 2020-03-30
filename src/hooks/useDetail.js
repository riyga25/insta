/* eslint-disable import/prefer-default-export */
import {useCallback, useState, useEffect} from 'react';
import axios from 'axios';

export const useDetail = (symbol) => {
  const [detail, setDetail] = useState({});

  const getDetail = useCallback(async (id) => {
    const {data} = await axios.get(
      `https://quotes.instaforex.com/api/quotesTick?q=${id}`,
    );
    setDetail(data[0]);
  }, []);

  useEffect(() => {
    getDetail(symbol);
  }, [getDetail, symbol]);

  return {
    detail,
    getDetail,
  };
};
