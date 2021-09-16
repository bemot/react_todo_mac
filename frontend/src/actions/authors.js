import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_AUTHORS,
  DELETE_AUTHOR,
  GET_AUTHOR,
  ADD_AUTHOR,
  EDIT_AUTHOR,
} from "./types";

// GET AUTHORS
export const getAuthors = () => async (dispatch) => {
  const res = await axios.get("/api/authors/");
  dispatch({
    type: GET_AUTHORS,
    payload: res.data,
  });
};

// DELETE AUTHOR
export const deleteAuthor = (id) => async (dispatch) => {
  await axios.delete(`/api/authors/${id}/`);
  dispatch({
    type: DELETE_AUTHOR,
    payload: id,
  });
  history.push("/");
};

// authors
// GET AUTHOR
export const getAuthor = (id) => async (dispatch) => {
  const res = await axios.get(`/api/authors/${id}/`);
  dispatch({
    type: GET_AUTHOR,
    payload: res.data,
  });
};

// ADD AUTHOR
export const addAuthor = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/authors/", { ...formValues });
  dispatch({
    type: ADD_AUTHOR,
    payload: res.data,
  });
  dispatch(reset("AuthorForm")); // フォーム送信後、値をクリアする
};

// EDIT AUTHor
export const editAuthor = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/authors/${id}/`, formValues);
  dispatch({
    type: EDIT_AUTHOR,
    payload: res.data,
  });
  history.push("/");
};
