import React, {Component} from 'react'

const styles = {
}

const emptyFormData = {
    id: '',
    date:'',
    description: '',
    category: '',
    bank: '',
    accountName: '',
    sum: '',
}

export default class TransactionForm extends Component {
    constructor () {
        super()
        this.state = {
            formData: emptyFormData
        }
    }

    componentDidMount = () => {
        this.props.data && this.setState({formData: this.props.data})
    }

    handleChange = (field, event) => {
        let newFormData = {...this.state.formData}
        newFormData[field] = event.target.value
        this.setState({ formData: newFormData })
    }

    handleSave = () => {
        if (this.props.data) {
            this.props.handleEdit(this.state.formData)
        } else {
            this.props.handleAdd(this.state.formData) 
            this.clearForm()
        }
    }

    handleDelete = () => {
        this.props.handleDelete(this.state.formData.id)
    }

    clearForm = () => {
        this.setState({ formData: emptyFormData })
    }
    render = () => { 
        return (
            <tr style={styles.form}>
                <td><input style={{ width: 70 }} type="text" placeholder="date" value={this.state.formData.date} onChange={this.handleChange.bind(this, 'date')}/></td>
                <td><input style={{ width: 300 }} type="text" placeholder="description" value={this.state.formData.description} onChange={this.handleChange.bind(this, 'description')}/></td>
                <td><input type="text" placeholder="category" value={this.state.formData.category} onChange={this.handleChange.bind(this, 'category')}/></td>
                <td><input type="text" placeholder="bank" value={this.state.formData.bank} onChange={this.handleChange.bind(this, 'bank')}/></td>
                <td><input type="text" placeholder="accountName" value={this.state.formData.accountName} onChange={this.handleChange.bind(this, 'accountName')}/></td>
                <td><input style={{ width: 60 }} type="number" placeholder="Sum (GBP)" value={this.state.formData.sum} onChange={this.handleChange.bind(this, 'sum')}/></td>
                <td>
                    <button onClick={this.handleSave}>{this.props.data ? 'Update' : 'Add'}</button>
                    {this.props.data && <button onClick={this.handleDelete}>X</button>}
                </td>
            </tr>
        )
    }
}