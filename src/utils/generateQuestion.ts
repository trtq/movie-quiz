import Axios from 'axios';
import { DIFFICULTIES } from './difficulties/difficulties';
import { DIFFICULTY } from './difficulties/types';
import { TQuestion } from '../screens/GameScreen/types';
import { MOVIE_URL_ROOT, MOVIEDB_API_KEY } from '@env';

const shuffleArray = (array: unknown[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const generateQuestion = async (difficulty: DIFFICULTY): Promise<TQuestion | undefined> => {
  const date = new Date();
  // a year of the generated question is random, the range depends on the difficulty
  const year = date.getFullYear() - Math.round(Math.random() * DIFFICULTIES[difficulty].years);
  // same with the page in the list of results
  const page = 1 + Math.round(Math.random() * DIFFICULTIES[difficulty].pages);
  // fakeResults - amount of incorrect results that will be generated. "- 1" - because one will be correct
  const fakeResults = DIFFICULTIES[difficulty].results - 1;
  const moviesResp = await Axios(
    `${MOVIE_URL_ROOT}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=vote_count.desc&page=${page}&primary_release_year=${year}&with_original_language=en`,
    { timeout: 3000 },
  );
  if (moviesResp.status !== 200 || !moviesResp.data) {
    throw 'results are incorrect';
  }
  if (moviesResp.data && moviesResp.data.results) {
    const movie = moviesResp.data.results[Math.floor(Math.random() * moviesResp.data.results.length)];
    const similarResp = await Axios.get(
      `${MOVIE_URL_ROOT}/movie/${movie.id}/similar?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`,
      { timeout: 3000 },
    );
    if (similarResp.status !== 200 || !similarResp.data) {
      throw 'result for a similar movie search are incorrect';
    }
    if (similarResp.data && similarResp.data.results && similarResp.data.results.length > fakeResults) {
      const result: TQuestion = {
        id: movie.id,
        picture: movie.backdrop_path,
        correctName: movie.original_title,
        answers: [{ id: movie.id, name: movie.original_title, correct: true }],
      };
      let similarsCopy = [...similarResp.data.results];
      similarsCopy = similarsCopy.slice(0, 8);
      shuffleArray(similarsCopy);
      const similarAnswers = similarsCopy.slice(0, fakeResults);
      for (const similar of similarAnswers) {
        result.answers.push({ id: similar.id, name: similar.original_title, correct: false });
      }
      shuffleArray(result.answers);
      return result;
    } else {
      //this throw happends a lot as there are occasionally movies without any "similar movies"
      throw 'couldnt get similar movies or not enough of them';
    }
  } else {
    throw 'no results';
  }
};
