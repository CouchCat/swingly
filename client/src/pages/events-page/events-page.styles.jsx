import styled from 'styled-components';

export const EventsPageContainer = styled.div`
  display: flex;
  height: 50rem;
  width: 100%;
  background-color: grey;
  justify-content: center;
  margin-top: ${props => props.theme.layout.header.height};
`;
EventsPageContainer.displayName = 'EventsPageContainer';