import React, { Component } from 'react'

//No state, no methods
class House extends Component{



    render(){
        return(
            <div>House
            {this.props.house.name}
            <button>delete</button>
            </div>
            )
    }
}

export default House