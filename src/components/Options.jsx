import { newAnswer } from '../state/actions/actions';

const Options = ({ question, dispatch }) => {
	return (
		<div className='options'>
			{question.options.map((option, idx) => {
				return (
					<button
						className='btn btn-option'
						key={option}
						onClick={() => dispatch(newAnswer(idx))}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
};

export default Options;
