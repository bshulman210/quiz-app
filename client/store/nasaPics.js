import axios from 'axios';

const nasaApiKey = '7GG1fKttKDEIDdf7qftNYfQ14hHuV4FP9X6mXvUN';

// ACTION TYPE
const SET_APOD = 'SET_APOD';

// ACTION CREATOR
const setAPOD = (pictureData) => {
  return {
    type: SET_APOD,
    pictureData,
  };
};

// THUNK CREATOR
export const fetchAPOD = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
    );
    dispatch(setAPOD(data));
  } catch (error) {
    console.log(error);
  }
};

// REDUCER
export default function (state = {}, action) {
  switch (action.type) {
    case SET_APOD:
      return action.pictureData;
    default:
      return state;
  }
}
