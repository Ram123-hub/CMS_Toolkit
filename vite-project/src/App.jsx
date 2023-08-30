import React from 'react';
import styled from 'styled-components';
import Header from './header';
import BlogList from './BlogList';
import {posts} from './PostData';
import './index.css';



const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
`;


const App = () => {
  return (
    <AppContainer>
      <Header />
      <BlogList posts={posts} />
    </AppContainer>
  );
};

export default App;

