import { STATUS } from './types/status';

export const initialState = {
	questions: [],
	// loading, error, ready
	status: STATUS.LOADING,
	currQuestionIdx: 0,
	currAnswerIdx: null,
	points: 0,
	highscore: 0,
	remainingTime: null,
};
