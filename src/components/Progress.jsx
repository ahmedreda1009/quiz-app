const Progress = ({ currQuestionIdx, numQuestions, points, maxPoints, currAnswerIdx }) => {
	return (
		<header className='progress'>
			<progress max={numQuestions} value={currQuestionIdx + Number(currAnswerIdx !== null)} />
			<p>
				Question <strong>{currQuestionIdx + 1} / </strong>
				{numQuestions}
			</p>
			<p>
				<strong>
					{points} / {maxPoints}
				</strong>
			</p>
		</header>
	);
};

export default Progress;
