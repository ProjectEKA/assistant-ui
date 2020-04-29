import { useContext } from 'react';
import StateContext from './StateContext';
import StateProvider from './StateProvider';

const initialState = {
  name: 'Assistant Portal',
};

const reducer = (state, _action) => state;

const useStateValue = () => useContext(StateContext);

export {
  initialState,
  reducer,
  useStateValue,
};

export default StateProvider;
