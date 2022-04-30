import {
    SELECT_PRODUCT,
    CHANGE_SELECTED_PRODUCT,
    FILTER_PRODUCTS,
    SORT_BY,
    CHANGE_PAGE
} from './../actions/productActions';
import {initStateType, ReduxActionType} from "./types/rootReducerTypes";
import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../actions/productActions";

export const initialState: initStateType = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            description: 'First product description',
            price: 11,
            creationDate: new Date().toString()
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Second product description',
            price: 22,
            creationDate: new Date().toString()
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Third product description',
            price: 33,
            creationDate: new Date().toString()
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Fourth product description',
            price: 44,
            creationDate: new Date().toString()
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'Third product description',
            price: 55,
            creationDate: new Date().toString()
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'Fourth product description',
            price: 66,
            creationDate: new Date().toString()
        },
    ],
    selectedProduct: null,
    selectedName: '',
    maxId: 6,
    filterText: '',
    sortBy: 'name',
    currentPage: 1
}

export const rootReducer = (
    state = initialState,
    action: ReduxActionType
) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const productsCopy = [...state.products]
            productsCopy.push(action.payload)
            return {...state, products: productsCopy, maxId: state.maxId + 1}
        }

        case EDIT_PRODUCT: {
            const productsCopy = [...state.products].filter(item => item.id !== action.payload.id)
            productsCopy.push(action.payload)
            return {...state, products: productsCopy}
        }

        case DELETE_PRODUCT: {
            const productsCopy = [...state.products].filter(item => item.id !== action.payload)
            return {...state, products: productsCopy}
        }

        case SELECT_PRODUCT:
            const selectedName = !!action.payload ? action.payload.name : '';
            return {...state, selectedProduct: action.payload, selectedName};

        case CHANGE_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}

        case FILTER_PRODUCTS:
            return {...state, filterText: action.payload}

        case SORT_BY:
            return {...state, sortBy: action.payload}

        case CHANGE_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}

