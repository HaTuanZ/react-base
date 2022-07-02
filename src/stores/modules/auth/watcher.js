import { takeLatest } from "redux-saga/effects";
import { LOG_IN_ACTION, loginAction } from "./actions/login";

const watchers = [takeLatest(LOG_IN_ACTION, loginAction)];

export default watchers;
