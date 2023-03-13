import useDefaultCall from 'common/hooks/use-default-call';
import { useDispatch } from 'react-redux';
import { cardsActions } from 'common/store/cards-slice';
import { resultsActions } from '../store/results-slice';
import { useNavigate } from 'react-router-dom';
export default function useGetResults() {
  const { defaultCall } = useDefaultCall();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function callSuccess(results: any, headerId: string) {
    dispatch(
      cardsActions.setCurrentOpenFeatureCards({
        cardAction: 'add',
        cardId: 'results',
      })
    );

    console.log(results.data.data);

    dispatch(resultsActions.setCurrentResults(results.data.data));
    dispatch(resultsActions.setResultHeaderId(headerId));
  }

  const handleSearch = (searchQuery: string) => {
    const directory = `/recipes/search?search_query=${searchQuery}`;

    navigate(directory);

    const callConfig = {
      axiosConfig: {
        url: directory,
        method: 'get',
      },
      callSuccess: (results: any) => {
        callSuccess(results, 'search');
      },
      errorHeader: 'search failed',
    };
    defaultCall(callConfig);
  };

  const handleGetFavourites = () => {
    const directory = '/recipes/favourites';

    navigate(directory);

    const callConfig = {
      axiosConfig: {
        url: directory,
        method: 'get',
      },
      callSuccess: (results: any) => {
        callSuccess(results, 'favourites');
      },
      errorHeader: 'something went wrong',
    };
    defaultCall(callConfig);
  };

  const handleGetRootDirectory = (rootDirectory: string) => {
    const directory = `/recipes/${rootDirectory}`;

    navigate(directory);
    const callConfig = {
      axiosConfig: {
        url: `/recipes/directories?root_directory=${rootDirectory}`,
        method: 'get',
      },
      callSuccess: (results: any) => {
        callSuccess(results, rootDirectory);
      },
      errorHeader: 'something went wrong',
    };
    defaultCall(callConfig);
  };

  return { handleSearch, handleGetFavourites, handleGetRootDirectory };
}
