import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth } from 'contexts/auth';
import { PetitionService } from 'networking/services';
import { QUERY_KEY as USER_KEY } from '../queries/user';

export const useCreatePetition = () => {
  const history = useHistory();

  const mutation = useMutation(
    (petition) => PetitionService.createPetition({ petition }),
    {
      onSuccess: (response) => {
        history.push('/');

        toast.success('Tu solicitud ha sido creada exitosamente', {
          duration: 3500,
          icon: '👏',
          style: {
            minWidth: '250px',
          },
        });
      },
    }
  );

  return mutation;
};

export const useDeletePetition = () => {
  const queryClient = useQueryClient();
  const {
    user: { id: userId },
  } = useAuth();

  const mutation = useMutation(
    ({ petitionId }) => PetitionService.deletePetition({ petitionId }),
    {
      onSuccess: async (response) => {
        await queryClient.refetchQueries([USER_KEY, userId]);

        toast.success('Tu solicitud ha sido eliminada', {
          duration: 3500,
          icon: '👏',
          style: {
            minWidth: '250px',
          },
        });
      },
    }
  );

  return mutation;
};
