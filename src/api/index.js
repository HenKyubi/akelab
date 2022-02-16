/* eslint-disable import/no-anonymous-default-export */
import { post } from "axios";
import { URL, AKELAB } from "../config";

const getMovies = async () => {
  try {
    const { data } = await post(`${URL}/peliculas`, {
      Akelab: AKELAB,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getMovies,
};
