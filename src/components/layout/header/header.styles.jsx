import styled from 'styled-components';
import Button from '../../ui/button/button.component';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette.primary.main };
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:first-of-type {
    font-size: 2rem;
  }
`;
HeaderContainer.displayName = 'HeaderContainer';

export const HeaderButtons = styled(Button)`
  margin-left: ${props => props.theme.spacing(2)};
  margin-right: ${props => props.theme.spacing(2)};
  padding: 0;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  @media(hover: hover) {
    :hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const Logo = styled(Link)`
  font-family: 'Oleo Script', 'Open Sans', sans-serif; 
  text-transform: none;
  ${({ theme }) => theme.typo.h3 };
`;