import { SORT, FETCH } from "../../constants";
import productData from "../../data/stackline_frontend_assessment_data_2021.json";

export const sortBy = key => ({
  type: SORT,
  key
});

export const fetchAction = data => ({
  type: FETCH,
  data
});

export function fetchData() {
  return dispatch => {
    try {
      dispatch(fetchAction(productData[0]));
    } catch (error) {
      console.error("Error loading JSON:", error);
      dispatch(fetchAction({}));
    }
  };
}