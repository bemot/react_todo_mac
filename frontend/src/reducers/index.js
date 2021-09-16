import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todos from "./todos";
import authors from "./authors";

export default combineReducers({
  form: formReducer,
  todos,
  authors,
});
