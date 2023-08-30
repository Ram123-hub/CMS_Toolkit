import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const BlogListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const BlogList = ({ posts }) => {
  return (
    <BlogListContainer>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} image={post.image} video={post.video} />
      ))}
    </BlogListContainer>
  );
};

export default BlogList;
