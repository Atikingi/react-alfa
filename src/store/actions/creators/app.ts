import { AppActionTypes } from '../types/app';
import { UserProps } from '../../reducers/types';

export const fetchAppStarted = () => ({
  type: AppActionTypes.FETCH_DATA_STARTED,
});

export const fetchAppSuccess = (data: UserProps[]) => ({
  type: AppActionTypes.FETCH_DATA_SUCCESS,
  payload: [...data],
});

export const clearData = () => ({
  type: AppActionTypes.CLEAR_DATA,
});

export const fetchAppError = (error: unknown) => ({
  type: AppActionTypes.FETCH_DATA_ERROR,
  payload: {
    error,
  },
});

export const deleteUser = (id: string) => ({
  type: AppActionTypes.DELETE_USER,
  payload: id,
});

export const toggleFavorite = (id: string) => ({
  type: AppActionTypes.TOGGLE_FAVORITE,
  payload: id,
});

export const filteredData = () => ({
  type: AppActionTypes.DATA_FILTERED,
});
