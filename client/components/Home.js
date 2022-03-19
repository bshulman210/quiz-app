import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from '../store/questions';

export const Home = (props) => {
  const dispatch = useDispatch();
  const QuestionData = useSelector((state) => state.QuestionData);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  console.log(QuestionData);

  return (
    <div>
      <h1>NASA's Astronomy Picture of the Day</h1>
      <h3>- {nasaData.title} -</h3>
      {nasaData.media_type === 'image' ? (
        <div className="imageContainer">
          <img
            className="nasaImage"
            src={nasaData.url}
            width="750"
            height="500"
          />
        </div>
      ) : (
        <div className="imageContainer">
          <iframe
            className="nasaImage"
            width="750"
            height="500"
            src={`${videoURL}&autoplay=1&loop=1`}
          />
        </div>
      )}
      <p className="imageDescription">{nasaData.explanation}</p>
    </div>
  );
};

export default Home;
