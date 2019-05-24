import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'

//State { houses: []}, methods: get all houses from database, delete house from database

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses: []
        }

       
    }

    componentDidMount=()=>{
      axios.get('/api/homes').then((res)=>{
          
          this.setState({
              houses: res.data
          })
      })
    }

    render(){
        const house= this.state.houses.map((item, i)=>{
            return(
                <House key={i} house={item} houseName={item.name} houseAddress={item.address} houseCity={item.city} houseState={item.state} houseZip={item.zip} />
            )
        })

        return(
            <div>Dashboard
            <House house={house}/>
           <button><Link to ='/wizard'>Add New Property</Link></button>
            </div>
        )
    }
}

export default Dashboard