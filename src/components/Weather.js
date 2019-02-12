import React from 'react';
import MainTemp from './MainTemp';


class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            weather:{}
        }
    }
    
    componentDidMount(){
        let { name } = this.props.location.state
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2d97f0371d7c1063606f4c432fb4e403`)
        .then(res => {
            if(!res.ok){
                console.log("something went wrong")
            }
            return res.json()
        })
        .then(ans =>{
            console.log(ans)
            if(ans.cod === '404'){
                console.log('yes')
                this.setState({
                    weather:"Information not available"
                })
                
            }else{
                this.setState({
                    weather:{
                        humidity:ans.main.humidity,
                        pressure:ans.main.pressure,
                        temp:ans.main.temp,
                        temp_max:ans.main.temp_max,
                        temp_min:ans.main.temp_min,
                        name:ans.name,
                        visi:ans.visibility,
                        background:ans.weather[0].main,
                        weather_des:ans.weather[0].description,
                        icon:ans.weather[0].icon,
                        wind_speed:ans.wind.speed
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
            return(
            <div>
                <div className="container">
                    <MainTemp data={this.state.weather} />
                </div>
            </div>
        )
    }
}

export default Weather

