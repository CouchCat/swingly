import React, { useState } from 'react';
import {
  ExampleBgLogoContainer,
  ExampleButton,
  ExampleBgLogo
} from './example-container.styles';
import { CSSTransition } from 'react-transition-group';
// import { addMockEventsToDb } from '../../redux/dummy-data/dummy-event-data';

const ExampleContainer = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <CSSTransition 
        in={isOpen}
        classNames='example'
        timeout={300}
        unmountOnExit>
        <ExampleBgLogoContainer transName='example'>
          <ExampleBgLogo>
            S
          </ExampleBgLogo>
        </ExampleBgLogoContainer>
      </CSSTransition>
      <ExampleButton primary onClick={() => setOpen(!isOpen)}>Toggle</ExampleButton>
      {/* <ExampleButton primary onClick={() => addMockEventsToDb(1, 'jYfFcg7Yo3S5pWCviMtijlOidPv1')}>Toggle</ExampleButton> */}
    </>
  );
}


export default ExampleContainer;