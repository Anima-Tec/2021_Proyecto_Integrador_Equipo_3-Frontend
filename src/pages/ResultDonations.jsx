import React from 'react';

import Header from 'components/Header';
import ListDonatations from 'components/ListDonations';

const ResultDonations = () => {
  return (
    <div>
          <header> <Header /> </header>
          <ListDonatations />
          <footer>THIS IS THE FOOTER</footer>
    </div>
  );
};
export default ResultDonations;
