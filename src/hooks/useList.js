/* eslint-disable import/prefer-default-export */
import {useCallback, useReducer, useMemo, useEffect} from 'react';
import axios from 'axios';

const initialState = {
  quotes: [],
  search: '',
  page: 0,
  isFetching: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        isFetching: true,
      };
    case 'update_state':
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const useList = () => {
  const [{quotes, search, page, isFetching}, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const getList = useCallback(async () => {
    dispatch({type: 'fetching'});

    const {
      data: {quotesList},
    } = await axios.get('https://quotes.instaforex.com/api/quotesList');
    dispatch({type: 'update_state', payload: {quotes: quotesList}});
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  const foundQuotes = useMemo(() => {
    return quotes.filter(
      (item) =>
        item.symbol.toUpperCase().lastIndexOf(search.toUpperCase(), 0) === 0,
    );
  }, [search, quotes]);

  const currentQuotes = search ? foundQuotes : quotes;

  const updateSearch = useCallback((value) => {
    dispatch({type: 'update_state', payload: {search: value, page: 0}});
  }, []);

  const pagination = useMemo(() => {
    if (page === 0) {
      return currentQuotes.slice(0, 10);
    } else {
      return currentQuotes.slice(page * 10, page * 10 + 10);
    }
  }, [currentQuotes, page]);

  const changePagination = useCallback(
    (val) => () => {
      if (
        (page === 0 && val === -1) ||
        (val === 1 && currentQuotes.length <= (page + 1) * 10)
      ) {
        return;
      }

      dispatch({type: 'update_state', payload: {page: page + val}});
    },
    [currentQuotes.length, page],
  );

  return {
    getList,
    quotes: pagination,
    search,
    updateSearch,
    changePagination,
    quotesLength: currentQuotes.length,
    isFetching,
  };
};
