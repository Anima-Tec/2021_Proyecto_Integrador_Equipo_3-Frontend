import { useDonationsAndPetitions } from 'hooks/queries/home';
import UserInfo from './UserInfo';
import Donations from './Donations';
import Petitions from './Petitions';

const Home = () => {
  const { donationsStatus, donationsData, petitionsStatus, petitionsData } =
    useDonationsAndPetitions();

  return (
    <div className="px-6 mt-11">
      <UserInfo />
      <Donations status={donationsStatus} data={donationsData} />
      <Petitions status={petitionsStatus} data={petitionsData} />
    </div>
  );
};

export default Home;
