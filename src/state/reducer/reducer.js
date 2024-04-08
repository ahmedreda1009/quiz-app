import { ACTION_TYPES } from '../types/actionTypes';
import { STATUS } from '../types/status';

const SECONDS_PER_QUESTION = 1;

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.DATA_RECIEVED:
			return {
				...state,
				questions: action.payload,
				status: STATUS.READY,
			};
		case ACTION_TYPES.DATA_FAILED:
			return {
				...state,
				status: STATUS.ERROR,
			};
		case ACTION_TYPES.ACTIVE:
			return {
				...state,
				status: STATUS.ACTIVE,
				remainingTime: state.questions.length * SECONDS_PER_QUESTION,
			};
		case ACTION_TYPES.NEW_ANSWER: {
			const currQuestion = state.questions.at(state.currQuestionIdx);

			return {
				...state,
				currAnswerIdx: action.payload,
				points:
					action.payload === currQuestion.correctOption
						? state.points + currQuestion.points
						: state.points,
			};
		}
		case ACTION_TYPES.NEXT_QUESTION:
			return {
				...state,
				currQuestionIdx: state.currQuestionIdx + 1,
				currAnswerIdx: null,
			};
		case ACTION_TYPES.FINISH_QUIZ:
			return {
				...state,
				status: STATUS.FINISHED,
				highscore:
					state.points > state.highscore
						? state.points
						: state.highscore,
			};
		case ACTION_TYPES.RESTART_QUIZ:
			return {
				...state,
				currQuestionIdx: 0,
				currAnswerIdx: null,
				status: STATUS.READY,
				points: 0,
			};
		case ACTION_TYPES.TIME_PASS:
			return {
				...state,
				remainingTime: state.remainingTime - 1,
				status:
					state.remainingTime <= 0 ? STATUS.FINISHED : STATUS.ACTIVE,
			};
		default:
			throw new Error('Unknown action');
	}
};
