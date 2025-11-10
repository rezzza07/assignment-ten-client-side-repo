import React from 'react';
import styled from 'styled-components';

const RegisterButton = () => {
  return (
    <StyledWrapper>
      <button>
        <span className="text">Register</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    align-items: center;
    background-image: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 6px 15px -5px; /* smaller shadow */
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 14px; /* smaller font */
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 100px; /* smaller width */
    padding: 1px; /* smaller padding */
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    /* Keep the gradient always visible */
    background-image: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
    padding: 10px 16px; /* smaller inner padding */
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    font-weight: 600; /* semi-bold text */
  }

  button:hover span {
    /* Remove hover effect */
    background-image: linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%);
  }

  button:active {
    transform: scale(0.95);
  }
`;

export default RegisterButton;
