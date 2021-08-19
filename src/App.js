import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from 'components/Loading';

const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const App = () => (
  <BrowserRouter>
    <Suspense delayMs={500} fallback={<Loading />}>
      <Switch>
        <Route path="/iniciar-sesion">
          <SignInPage />
        </Route>
        <Route path="/registro">
          <SignUpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
