import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTransactionsList, addTransaction, editTransaction, deleteTransaction} from '../actions/transactionsActions'

import TransactionForm from './TransactionForm'

class Transactions extends Component {
    componentWillMount = () => {
        this.props.getTransactionsList()
    }

    handleAddTransaction = (event, values, other) => {
        event.preventDefault()
        console.log(values)
        console.log(other)
    }

    render = () => {
        return (
            <div>
                <h2>Transactions</h2>
                <table>
                    <tbody>
                    <TransactionForm handleAdd={this.props.addTransaction} 
                        handleEdit={this.handleEditTransaction}
                        handleDelete={this.handleDeleteTransaction} />
                    </tbody>
                </table>
                
                <table style={{ marginTop: 20, fontSize: 12 }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Computed</th>
                            <th>Category</th>
                            <th>No of Contributors</th>
                            <th>Bank</th>
                            <th>Account Name</th>
                            <th>Sum (GBP)</th>
                            <th>Sum (RON)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map(transaction => (
                            <TransactionForm key={transaction.id} 
                                data={transaction} 
                                handleAdd={this.props.addTransaction} 
                                handleEdit={this.props.editTransaction}
                                handleDelete={this.props.deleteTransaction} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(
    state => ({
        transactions: state.transactions.transactions,
        addFormData: state.transactions.addFormData
    }),
    {getTransactionsList, addTransaction, editTransaction, deleteTransaction}
  )(Transactions)