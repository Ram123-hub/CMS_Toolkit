import React from 'react';
import styled from 'styled-components';
import './index.css';

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Post = ({ title, content, image, video }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <p>{content}</p>
      {image && <PostImage src={image} alt={title} />}
      {video && (
        <VideoContainer>
          <Video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      )}
    </PostContainer>
  );
};

export default Post;
