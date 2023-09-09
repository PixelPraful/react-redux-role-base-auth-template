import { type RootState } from '../types/reduxState';

const initialState: RootState = {
  app: {
    errorMessage: '',
    successMessage: '',
    userRole: 'admin',
    isAuthenticated: false,
  },
  ajaxCallsInProgress: 0
};

export default initialState;
