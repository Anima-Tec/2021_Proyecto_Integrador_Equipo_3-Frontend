import { Fragment, useRef } from 'react';

import PetitionCard from 'components/PetitionCard';
import Loading from 'components/Loading';
import UnderlinedTitle from 'components/UnderlinedTitle';
import { useIntersectionObserver } from 'hooks/intersectionObserver';
import { usePetitions } from 'hooks/queries/petitions';

import styles from 'components/Donations/Donations.module.scss';

const Petitions = () => {
  const loadMoreRef = useRef();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    usePetitions();

  const handleLoadMore = () => fetchNextPage();

  useIntersectionObserver({
    elementRef: loadMoreRef,
    enabled: hasNextPage,
    onIntersect: fetchNextPage,
  });

  return (
    <div className="px-6">
      <div className="mt-11 text-4xl">
        <UnderlinedTitle>
          <h3>Solicitudes</h3>
        </UnderlinedTitle>
      </div>
      {status === 'success' && (
        <>
          <section className="my-20 mx-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center">
            {data.pages.map((page) => (
              <Fragment key={page.currentPage}>
                {page.data.map((petition) => (
                  <PetitionCard key={petition.id} petition={petition} />
                ))}
              </Fragment>
            ))}
          </section>
          {hasNextPage && !isFetchingNextPage && (
            <div className="my-6 w-full flex justify-center items-center">
              <button
                type="button"
                className={styles['load-more-button']}
                ref={loadMoreRef}
                onClick={handleLoadMore}
              >
                Cargar mas
              </button>
            </div>
          )}
        </>
      )}

      {(status === 'loading' || isFetchingNextPage) && (
        <div className="my-11 w-full flex justify-center items-center">
          <Loading />
        </div>
      )}

      {status === 'error' && (
        <p className="my-11 w-full flex justify-center items-center">
          Ha ocurrido un error al cargar las solicitudes
        </p>
      )}

      {status === 'success' && !(data.pages[0].data.length > 0) && (
        <p className="my-11 w-full flex justify-center items-center">
          No se han encontrado solicitudes para mostrar
        </p>
      )}
    </div>
  );
};

export default Petitions;
