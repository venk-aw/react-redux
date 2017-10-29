import {
    SHOW_SPINNER,
    HIDE_SPINNER//,
    // SHOW_INFO, 
    // SHOW_WARNING, 
    // SHOW_ERROR,
    // HIDE_MESSAGE
} from './constants'

export const showSpinner = () => ({type: SHOW_SPINNER})
export const hideSpinner = () => ({type: HIDE_SPINNER})