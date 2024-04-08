import { ACTION_TYPES } from '../types/actionTypes';
import { STATUS } from '../types/status';

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
			return { ...state, status: STATUS.ACTIVE };
		case ACTION_TYPES.NEW_ANSWER:
			return {
				...state,
				currAnswerIdx: action.payload,
			};
		default:
			throw new Error('Unknown action');
	}
};
