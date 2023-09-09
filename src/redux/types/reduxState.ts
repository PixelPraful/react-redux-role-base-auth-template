
export interface AppState {
  errorMessage: string
  successMessage: string
  isAuthenticated: boolean
  userRole: 'admin' | 'user' // Define the possible values for userRole here
};

export interface RootState {
  app: AppState
  ajaxCallsInProgress: number
};
