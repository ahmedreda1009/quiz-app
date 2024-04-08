import { useEffect } from 'react';
import { finishQuiz, timePass } from '../state/actions/actions';

const Timer = ({ remainingTime, dispatch }) => {
	let minutes = Math.floor(remainingTime / 60);
	let seconds = remainingTime % 60;

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	useEffect(() => {
		if (remainingTime <= 0) return dispatch(finishQuiz());

		const intervalId = setInterval(() => {
			dispatch(timePass());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [dispatch, remainingTime]);

	return (
		<div className='timer'>
			{minutes}:{seconds}
		</div>
	);
};

export default Timer;
