import { ACTION_TYPES } from '../types/actionTypes';

const recieveData = (data) => {
	return { type: ACTION_TYPES.DATA_RECIEVED, payload: data };
};

const dataFailed = () => {
	return { type: ACTION_TYPES.DATA_FAILED };
};

const quizActive = () => {
	return { type: ACTION_TYPES.ACTIVE };
};

const newAnswer = (idx) => {
	return { type: ACTION_TYPES.NEW_ANSWER, payload: idx };
};

const nextQuestion = () => {
	return { type: ACTION_TYPES.NEXT_QUESTION };
};

const finishQuiz = () => {
	return { type: ACTION_TYPES.FINISH_QUIZ };
};

const restartQuiz = () => {
	return { type: ACTION_TYPES.RESTART_QUIZ };
};

const timePass = () => {
	return { type: ACTION_TYPES.TIME_PASS };
};

export {
	recieveData,
	dataFailed,
	quizActive,
	newAnswer,
	nextQuestion,
	finishQuiz,
	restartQuiz,
	timePass,
};
