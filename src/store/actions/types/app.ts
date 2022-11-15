import { UserProps } from '../../reducers/types';

export enum AppActionTypes {
  FETCH_DATA_STARTED = 'FETCH_DATA_STARTED',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
  CLEAR_DATA = 'CLEAR_DATA',
  DELETE_USER = 'DELETE_USER',
  TOGGLE_FAVORITE = 'ADD_TO_FAVORITE',
  DATA_FILTERED = 'DATA_FILTERED',
}

export type AppFetchStarted = {
  type: AppActionTypes.FETCH_DATA_STARTED;
};

export type AppFetchSuccess = {
  type: AppActionTypes.FETCH_DATA_SUCCESS;
  payload: UserProps[];
};

export type AppFetchError = {
  type: AppActionTypes.FETCH_DATA_ERROR;
  payload: {
    error: string;
  };
};

export type ClearData = {
  type: AppActionTypes.CLEAR_DATA;
};

export type ToggleFavorite = {
  type: AppActionTypes.TOGGLE_FAVORITE;
  payload: string;
};

export type FilteredData = {
  type: AppActionTypes.DATA_FILTERED;
};
export type DeleteUser = {
  type: AppActionTypes.DELETE_USER;
  payload: string;
};
