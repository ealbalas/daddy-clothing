import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categories) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
}

export const fetchCategoriesFailed = (error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}

export const fetchCategoriesAsync = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const response = await getCategoriesAndDocuments('categories');

            dispatch(fetchCategoriesSuccess(response));
        } catch (error) {
            dispatch(fetchCategoriesFailed(error));
        }
    }
}