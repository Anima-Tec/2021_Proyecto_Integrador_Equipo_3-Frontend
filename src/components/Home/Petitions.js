import { ReactComponent as EmptyStatePetition } from 'assets/empty-state-petition.svg';
import EmptyState from 'components/EmptyState';
import PetitionCard from 'components/PetitionCard';
import UnderlinedTitle from 'components/UnderlinedTitle';
import Loading from 'components/Loading';
import SeeMoreLink from './SeeMoreLink';

const Petitions = ({ data, status }) => (
  <>
    <div className="mt-11 text-4xl flex gap-4 items-center">
      <UnderlinedTitle>
        <h3>Solicitudes</h3>
      </UnderlinedTitle>
      <SeeMoreLink to="/solicitudes">Ver mas</SeeMoreLink>
    </div>

    {status === 'loading' && (
      <div className="my-11 w-full flex justify-center items-center">
        <Loading />
      </div>
    )}
    {status === 'success' && data.length > 0 && (
      <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center">
        {data?.map((petition) => (
          <PetitionCard key={petition.id} petition={petition} />
        ))}
      </section>
    )}

    {status === 'error' && (
      <p className="my-11 w-full flex justify-center items-center">
        Ha ocurrido un error al cargar las peticiones
      </p>
    )}
    {status === 'success' && !data.length && (
      <EmptyState
        icon={<EmptyStatePetition />}
        text="No se han encontrado solicitudes para mostrar"
      />
    )}
  </>
);

export default Petitions;
