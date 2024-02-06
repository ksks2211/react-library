import React from 'react';
import styled from '@emotion/styled';


interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large' | 'default';
}

const StyledButton = styled.button`
/* Basic button styling */
display: inline-flex;
align-items: center;
justify-content: center;
padding: 8px 16px;
border: none;
border-radius: 4px;
font-size: 1rem;
cursor: pointer;
transition: background-color 0.2s ease-in-out, 
            transform 0.1s ease-in-out;

/* Variants */
&.primary {
  background-color: #007BFF;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
}

&.secondary {
  background-color: #6C757D;
  color: white;

  &:hover {
    background-color: #565e64;
  }

  &:active {
    transform: scale(0.98);
  }
}

/* Sizes */
&.small {
  padding: 4px 8px;
  font-size: 0.875rem;
}

&.large {
  padding: 12px 24px;
  font-size: 1.25rem;
}
`;

export const MyButton: React.FC<MyButtonProps> = ({ variant = 'primary', size = 'default', children, ...props }) => {
  return (
    <StyledButton className={`${variant} ${size}`} {...props}>
      {children}
    </StyledButton>
  );
};