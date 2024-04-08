import { newAnswer } from '../state/actions/actions';

const Options = ({ question, dispatch, currAnswerIdx }) => {
	const isAnswered = currAnswerIdx !== null;

	return (
		<div className='options'>
			{question.options.map((option, idx) => {
				return (
					<button
						className={`btn btn-option ${idx === currAnswerIdx ? 'answer' : ''} ${
							isAnswered ? (idx === question.correctOption ? 'correct' : 'wrong') : ''
						}`}
						key={option}
						onClick={() => dispatch(newAnswer(idx))}
						disabled={isAnswered}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
};

export default Options;
