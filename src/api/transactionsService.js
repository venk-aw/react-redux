const transactionsUrl = 'http://localhost:3001/transactions'

export const fetchTransactions = () => {
    return fetch(transactionsUrl).then(res => res.json())
}

export const addTransaction = () => {

}