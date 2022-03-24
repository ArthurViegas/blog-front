import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { requestApi } from '../services/blogApi'

function AppProvider({ children }) {
  const [allPosts, setPosts] = useState([])
  const [accessToken, setAccessToken]= useState('');

  const getAllPosts = async () => {
    const posts = await requestApi();
    setPosts(posts)
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  return(
    <AppContext.Provider value={{allPosts, setAccessToken}}>
      { children }
      </AppContext.Provider>
  );
};
export default AppProvider
