import { restartQuiz } from '../state/actions/actions';

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
	const percentage = (points / maxPoints) * 100;

	let emoji;

	if (percentage === 100) {
		emoji = '🥇';
	} else if (percentage > 80) {
		emoji = '🥈';
	} else if (percentage > 60) {
		emoji = '🥉';
	} else if (percentage > 50) {
		emoji = '🤔';
	} else {
		emoji = '😑';
	}

	return (
		<>
			<div className='result'>
				<span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
				{maxPoints} ({Math.ceil(percentage)}
				%)
			</div>

			<div className='highscore'>(Highscore: {highscore} points)</div>

			<button
				className='btn btn-ui'
				onClick={() => dispatch(restartQuiz())}
			>
				Restart Quiz
			</button>
		</>
	);
};

export default FinishScreen;
