import {fetchTransactions} from '../api/transactionsService'
import shortid from 'shortid'
import {showSpinner, hideSpinner} from './layoutActions'

import {
    TRANSACTIONS_GET_LIST,
    TRANSACTIONS_ADD,
    TRANSACTIONS_EDIT,
    TRANSACTIONS_DELETE
} from './constants'

export const getTransactionsList = () => {
    return (dispatch) => {
        dispatch(showSpinner())
        fetchTransactions().then(transactions => {
            dispatch({
                type:TRANSACTIONS_GET_LIST, 
                payload: transactions
            })
            dispatch(hideSpinner())
        }).catch(error => {
            dispatch(hideSpinner())
            console.error(error)
        })
    }
}

export const addTransaction = (payload) => {
    payload.id = shortid.generate()
    return (dispatch) => {
        dispatch(showSpinner())
        dispatch({
            type:TRANSACTIONS_ADD, 
            payload: payload
        })
        dispatch(hideSpinner())
    }
}

export const editTransaction = (payload) => {
    return (dispatch) => {
        dispatch(showSpinner())
        dispatch({
            type:TRANSACTIONS_EDIT, 
            payload: payload
        })
        dispatch(hideSpinner())
    }
}

export const deleteTransaction = (payload) => {
    return (dispatch) => {
        dispatch(showSpinner())
        dispatch({
            type:TRANSACTIONS_DELETE, 
            payload: payload
        })
        dispatch(hideSpinner())
    }
}