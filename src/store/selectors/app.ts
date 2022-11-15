import { RootState } from '../store';

export const getAllUsers = (state: RootState) => state.app.data;

export const getLoadingStatus = (store: RootState) => store.app.loading;

export const getFilteredStatus = (store: RootState) => store.app.filtered;
