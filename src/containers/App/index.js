import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

//import Header from 'components/Header';

import HomePage from '../HomePage';
import SearchPage from '../SearchPage';

const AppWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      {/*<Header />*/}
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/search" component={SearchPage} />
      </Switch>
    </AppWrapper>
  );
}
