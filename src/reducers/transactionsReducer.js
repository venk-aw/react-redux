import {
    TRANSACTIONS_GET_LIST,
    TRANSACTIONS_ADD,
    TRANSACTIONS_EDIT,
    TRANSACTIONS_DELETE
} from '../actions/constants'

const initState = {
    transactions: [],
    addFormData: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case TRANSACTIONS_GET_LIST:
            return {...state, transactions: action.payload}
        case TRANSACTIONS_ADD:
            return {...state, transactions: state.transactions.concat([action.payload])}
        case TRANSACTIONS_EDIT:
            return {...state, transactions: state.transactions.map(
                transaction => transaction.id === action.payload.id ? action.payload : transaction
            )}
        case TRANSACTIONS_DELETE:
            return {...state, transactions: state.transactions.filter(
                transaction => transaction.id !== action.payload
            )}
    default:
        return state
    }
}
