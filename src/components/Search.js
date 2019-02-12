import React from 'react';
import Sugg from './Sugg';

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            input:''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleOnChange(e){
        let data = e.target.value
        this.setState({
            input:data
        })

    }
    render(){
        let style = {
            width:"80%",
            height:"8%",
            outline:"none",
            border:"2px solid orange",
            borderRadius:"5px",
            fontSize:"100%",
            marginTop:"5%",
            marginLeft:"9%",
            background:"#f2f2f2",
            padding:"0 0 0 10px"
        }
        return(
            <React.Fragment>
                <input type="text" placeholder="Search city name" onChange={this.handleOnChange} autoComplete="off" value={this.state.input} name="city" style={style} className="city-search"/>
                <Sugg data={this.state.input}  />
            </React.Fragment>   
        )
    }
}

export default Search