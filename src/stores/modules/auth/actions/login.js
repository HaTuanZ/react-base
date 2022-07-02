import { put, call } from "redux-saga/effects";
import { login } from "@/services/apis";

export const LOG_IN_ACTION = 'LOG_IN_ACTION';
export const LOG_IN_SUCCESS = `${LOG_IN_ACTION}_SUCCESS`;
export const LOG_IN_FAILURE = `${LOG_IN_ACTION}FAILURE`;


export function* loginAction(payload) {
  try {
    const response = yield call(login, payload);
    yield [put({ type: LOG_IN_SUCCESS, response })];
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE, error });
  }
}