import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import {connect} from 'react-redux'

import Home from './components/Home'
import Transactions from './components/transactions/Transactions'

const styles = {
    separator: {
        marginLeft: 10,
        marginRight: 10
    },
    wrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'sans-serif'
    },
    title : {

    },
    nav: {

    },
    link: {
        textDecoration: 'none',
        color: '#faa'
    },
    activeLink: { 
        color: '#f11' 
    }
}

class App extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <h1 style={styles.title}>Cmoney</h1>
                <nav style={styles.nav}>
                    <NavLink exact style={styles.link} activeStyle={styles.activeLink} to="/">Home</NavLink>
                    <span style={styles.separator}>|</span>
                    <NavLink style={styles.link} activeStyle={styles.activeLink} to="/transactions">Transactions</NavLink>
                </nav>
                <hr />
                <div>
                    {this.props.isSpinnerShowing && (<div>Loading</div>)}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/transactions" component={Transactions}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isSpinnerShowing: state.layout.isSpinnerShowing
    })
  )(App)