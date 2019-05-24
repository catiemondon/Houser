import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from './../../ducks/store'


//State {name:'', address: '', city: '', state: '', zip: 0}
//Methods: handle input change, post new house to database
class Wizard extends Component{
    constructor(){
        super()
        const reduxState= store.getState()
        this.State={
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
        //this.handleInputChange= this.handleInputChange.bind(this)
        //replaced this bind with the public class field syntax

    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                store: store.getState()
            })
        })
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddHome=(e)=>{
        axios.post('/api/house', {name: this.state.name,address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip })
    }

    resetState=()=>{
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        })
    }

    render(){
       
        return(
            <div> Wizard

                <form>
                    <input placeholder='name' name='name'></input>
                    <input placeholder='address' name='address'></input>
                    <input placeholder='city' name='city'></input>
                    <input placeholder='state' name='state'></input>
                    <input placeholder='zip' name='zip'></input>
                </form>
                <button onClick={this.resetState()}><Link to='/'>Cancel</Link></button>
                
                
                 </div>
            
        )
    }
}

export default Wizard