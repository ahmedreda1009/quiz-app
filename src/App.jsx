import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import { STATUS } from './state/types/status';
import {
	dataFailed,
	finishQuiz,
	nextQuestion,
	recieveData,
} from './state/actions/actions';
import { reducer } from './state/reducer/reducer';
import { initialState } from './state/initialState';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Timer from './components/Timer';
import data from './data/data.js';

function App() {
	const [
		{
			questions,
			status,
			currQuestionIdx,
			currAnswerIdx,
			points,
			highscore,
			remainingTime,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const numQuestions = questions.length;
	const maxPoints = questions.reduce(
		(acc, question) => acc + question.points,
		0
	);

	useEffect(() => {
		// fetch('http://localhost:8000/questions')
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((data) => {
		// 		// console.log(data);
		// 		dispatch(recieveData(data));
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		dispatch(dataFailed());
		// 	});
		dispatch(recieveData(data));
	}, []);

	return (
		<div className='app'>
			<Header />

			<Main>
				{status === STATUS.LOADING && <Loader />}
				{status === STATUS.ERROR && <Error />}
				{status === STATUS.READY && (
					<StartScreen
						numQuestions={numQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === STATUS.ACTIVE && (
					<>
						<Progress
							currQuestionIdx={currQuestionIdx}
							numQuestions={numQuestions}
							points={points}
							maxPoints={maxPoints}
							currAnswerIdx={currAnswerIdx}
						/>
						<Question
							question={questions[currQuestionIdx]}
							dispatch={dispatch}
							currAnswerIdx={currAnswerIdx}
						/>

						<footer>
							<Timer
								remainingTime={remainingTime}
								dispatch={dispatch}
							/>
							{currAnswerIdx !== null &&
								currQuestionIdx < numQuestions - 1 && (
									<button
										className='btn btn-ui'
										onClick={() => dispatch(nextQuestion())}
									>
										Next Question
									</button>
								)}

							{currAnswerIdx !== null &&
								currQuestionIdx === numQuestions - 1 && (
									<button
										className='btn btn-ui'
										onClick={() => dispatch(finishQuiz())}
									>
										Finish Quiz
									</button>
								)}
						</footer>
					</>
				)}
				{status === STATUS.FINISHED && (
					<FinishScreen
						points={points}
						maxPoints={maxPoints}
						highscore={highscore}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
}

export default App;
