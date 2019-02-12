import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Sugg extends Component{
    constructor(props){
        super(props)
        this.state = {
            val:undefined
        }
    }
    componentDidUpdate(){
        fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.props.data}&types=(cities)&key=AIzaSyAYpVreZuMJaCV4eao-rOpVay4Q8FqLgN4&sessiontoken=1234567890`)
        .then(res => res.json())
        .then(ans => {
            let loc = ans.predictions.map(city =>{
                return <NavLink to={{
                    pathname:`/weather`,
                    state:{
                        name:city.structured_formatting.main_text
                    }
                }}>
                        <li style={{padding:"10px 1px"}}>
                                <img alt="img" style={{width:"22px",height:"20px",padding:"10px 0 0 1px"}} src="https://www.freeiconspng.com/uploads/location-symbol-png-circle-location-icon-13.png" />
                                {city.structured_formatting.main_text}
                        </li>
                    </NavLink>
            })
            this.setState({
                val:loc
            })
        })
    }
    render(){
        console.log(this.props.data.length)
        let style = {
            width:"81%",
            height:"auto",
            marginLeft:"9%",
            display:this.state.val?"block":"none",
            boxShadow:this.state.val?"5px 8px 8px #cccccc":"none"
        }
        let list_style = {
            listStyleType:"none",
            border:this.props.data.length?"1px solid #cccccc":"none",
            borderRadius:"5px"
        }
        return(
            <div className="sugg-card" style={style}>
                <ul className="sugg-list" style={list_style}>
                    {this.state.val}
                </ul>
            </div>
        )
    }

}

export default Sugg