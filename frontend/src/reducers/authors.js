import _ from "lodash";
import {
  GET_AUTHORS,
  DELETE_AUTHOR,
  GET_AUTHOR,
  ADD_AUTHOR,
  EDIT_AUTHOR,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    //authors
    case GET_AUTHOR:
    case GET_AUTHORS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case ADD_AUTHOR:
    case EDIT_AUTHOR:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case DELETE_AUTHOR:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
