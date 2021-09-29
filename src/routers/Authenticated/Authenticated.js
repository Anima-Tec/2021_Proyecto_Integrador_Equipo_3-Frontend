import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import WelcomeModal from 'components/WelcomeModal';

const DonationsPage = lazy(() => import('pages/DonationsPage'));
const CreateDonationPage = lazy(() => import('pages/CreateDonationPage'));
const DonationPage = lazy(() => import('pages/DonationPage'));
const UpdateUserPage = lazy(() => import('pages/UpdateUserPage'));
const RequestsPage = lazy(() => import('pages/RequestsPage'));

const Authenticated = () => (
  <>
    <Switch>
      <Route exact path="/">
        <DonationsPage />
      </Route>
      <Route exact path="/donacion/:id">
        <DonationPage />
      </Route>
      <Route exact path="/crear-donacion">
        <CreateDonationPage />
      </Route>
      <Route exact path="/editar-usuario">
        <UpdateUserPage />
      </Route>
      <Route exact path="/solicitudes">
        <RequestsPage />
      </Route>
    </Switch>
    <WelcomeModal />
  </>
);

export default Authenticated;
