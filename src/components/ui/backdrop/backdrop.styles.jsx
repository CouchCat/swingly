import styled from 'styled-components';

export const BackdropContainer = styled.button`
  /* display: ${props => props.isOpen ? `block` : `none` }; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.isOpen ? 300 : -300};
  background-color: ${props => props.isOpen ? `rgba(0, 0, 0, 0.3)` : `rgba(0, 0, 0, 0)`} ;
  transition: background-color .5s ease-out;
`;
BackdropContainer.displayName = BackdropContainer;