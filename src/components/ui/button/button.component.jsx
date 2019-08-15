import React from 'react';
import {
  CustomButton
} from './button.style';

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <CustomButton onClick={onClick}>
        {children}
      </CustomButton>
    </>
  );
}

export default Button;