import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { STATUS } from './state/types/status';
import { dataFailed, recieveData } from './state/actions/actions';
import { reducer } from './state/reducer/reducer';
import { initialState } from './state/initialState';

function App() {
	const [{ questions, status, currQuestionIdx, currAnswerIdx }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const numQuestions = questions.length;

	useEffect(() => {
		fetch('http://localhost:8000/questions')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// console.log(data);
				dispatch(recieveData(data));
			})
			.catch((err) => {
				console.log(err);
				dispatch(dataFailed());
			});
	}, []);

	return (
		<div className='app'>
			<Header />

			<Main>
				{status === STATUS.LOADING && <Loader />}
				{status === STATUS.ERROR && <Error />}
				{status === STATUS.READY && (
					<StartScreen numQuestions={numQuestions} dispatch={dispatch} />
				)}
				{status === STATUS.ACTIVE && (
					<Question question={questions[currQuestionIdx]} dispatch={dispatch} />
				)}
			</Main>
		</div>
	);
}

export default App;
