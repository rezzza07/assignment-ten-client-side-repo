// Error.jsx
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

const Error = () => {
  const navigate = useNavigate(); // useNavigate works in react-router too

  return (
    <Wrapper>
      <Content>
        <h1>404</h1>
        <h2>Oops! Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => navigate('/')}>
           Back to Home
        </button>
      </Content>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #05062d;
`;

const Content = styled.div`
  text-align: center;
  color: #fff;

  h1 {
    font-size: 8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ccc;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export default Error;