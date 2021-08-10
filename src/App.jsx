import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MyPage = lazy(() => import('pages/MyPage'));
const ResultDonations = lazy(() => import('pages/ResultDonations'));

const App = () => (
  <BrowserRouter>
    <Suspense delayMs={500} fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/">
          <MyPage />
        </Route>
      </Switch>
    </Suspense>
    <Suspense delayMs={500} fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/result">
          <ResultDonations />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
  
);

export default App;
