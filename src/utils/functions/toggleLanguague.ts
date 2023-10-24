import { useDispatch, useSelector } from 'react-redux';
import { setIdiom } from '../../state/idiom';
//types
import IdiomState from '../../types/state';

const useToggleLanguage = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(setIdiom(idiom === 'ENG' ? 'ESP' : 'ENG'));
  };

  return toggleLanguage;
};

export default useToggleLanguage;
