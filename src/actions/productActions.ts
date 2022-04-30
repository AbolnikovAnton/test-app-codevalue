import {ProductType, ReduxActionType} from "../reducers/types/rootReducerTypes";

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const CHANGE_SELECTED_PRODUCT = 'CHANGE_SELECTED_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SORT_BY = 'SORT_BY';
export const CHANGE_PAGE = 'CHANGE_PAGE'

export const addProductAction = (product: ProductType): ReduxActionType => ({
    type: ADD_PRODUCT,
    payload: product
})

export const editProductAction = (product: ProductType): ReduxActionType => ({
    type: EDIT_PRODUCT,
    payload: product
})

export const deleteProductAction = (id: number): ReduxActionType => ({
    type: DELETE_PRODUCT,
    payload: id
})

export const selectProductAction = (product: ProductType | null): ReduxActionType => ({
    type: SELECT_PRODUCT,
    payload: product
})

export const changeSelectedProductAction = (product: ProductType | null): ReduxActionType => ({
    type: CHANGE_SELECTED_PRODUCT,
    payload: product
})

export const filterProductsAction = (text: string): ReduxActionType => ({
    type: FILTER_PRODUCTS,
    payload: text
})

export const sortByAction = (sort: string): ReduxActionType => ({
    type: SORT_BY,
    payload: sort
})

export const changePageAction = (page: number): ReduxActionType => ({
    type: CHANGE_PAGE,
    payload: page
})