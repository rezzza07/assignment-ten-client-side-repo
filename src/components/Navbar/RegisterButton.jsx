import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>Register</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 17px; 
    font-weight: 600; /* semi-bold */
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow, transform;
    background: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    
    padding: 0 1.8em; /* slightly smaller horizontal padding */
    border-radius: 0.3em;
    color: #fff;
    height: 2.4em; /* slightly smaller height */
    text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    transition: box-shadow 0.15s ease, transform 0.15s ease;
  }

  button:hover {
    
    transform: translateY(-0.1em);
  }

  button:active {
    box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
    transform: translateY(0em);
  }
`;

export default Button;
