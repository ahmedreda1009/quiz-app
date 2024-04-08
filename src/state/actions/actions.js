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

export { recieveData, dataFailed, quizActive, newAnswer };
