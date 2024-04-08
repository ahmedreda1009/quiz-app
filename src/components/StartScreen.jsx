import { quizActive } from '../state/actions/actions';

const StartScreen = ({ numQuestions, dispatch }) => {
	return (
		<div>
			<h2>Welcome to the React Quiz!</h2>
			<h3>{numQuestions} questions to test your React mastery</h3>
			<button className='btn btn-ui' onClick={() => dispatch(quizActive())}>
				Let&apos;s start
			</button>
		</div>
	);
};

export default StartScreen;
