import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import PetitionCard from 'components/PetitionCard';
import { useDeletePetition } from 'hooks/mutations/petition';

import styles from './Account.module.scss';

const Petitions = ({ petitions }) => {
  const { mutate } = useDeletePetition();

  const onDelete = useCallback(
    (id) => () => {
      mutate({ petitionId: id });
    },
    [mutate]
  );

  return (
    <>
      <div className="my-11 text-2xl flex gap-4">
        <h4>Mis solicitudes</h4>
        <Link className={styles.link} to="/crear-solicitud">
          Crear solicitud
        </Link>
      </div>
      <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center px-6">
        {petitions.map((petition) => (
          <PetitionCard
            petition={petition}
            key={petition.id}
            showOptions
            onDelete={onDelete(petition.id)}
          />
        ))}
      </section>
    </>
  );
};

export default Petitions;
