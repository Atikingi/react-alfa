import axios from 'axios';
import {
  fetchAppStarted,
  fetchAppSuccess,
  fetchAppError,
  clearData,
} from '../creators/app';
import { API_URL } from '../../../constants/constants';
import { CommonThunkAction } from '../../store';
import { UserProps } from '../../reducers/types';

const addFavoriteProperty = (usersArray: UserProps[]) => {
  usersArray.map((user: UserProps) => (user.favorite = false));
};

export const fetchData = (): CommonThunkAction => async (dispatch) => {
  dispatch(clearData());
  dispatch(fetchAppStarted());

  try {
    const response = await axios.get(`${API_URL}?results=6`);
    const { results } = response?.data;

    if (results) {
      addFavoriteProperty(results);
      dispatch(fetchAppSuccess(results));
    }
  } catch (error) {
    dispatch(fetchAppError(error));
  }
};
