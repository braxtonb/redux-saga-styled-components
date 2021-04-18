import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import styled from 'styled-components';
import QuoteList from './components/QuoteList';
import { initializeStore, initializeSagaMiddleware } from './store';

const store = initializeStore();
initializeSagaMiddleware();

const Wrapper = styled.div`
  background-color: #262c46;
  min-height: 100vh;
  padding: 40px;
`;

const App = () => {
  return (
    <StoreProvider store={store}>
      <Wrapper>
        <QuoteList />
      </Wrapper>
    </StoreProvider>
  );
};

export default App;
