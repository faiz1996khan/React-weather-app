import React, {Component} from 'react';
import pi from '../images/weather_climate_-05-512.png';
import hu from '../images/humidity-512.png';
import vi from '../images/118188-200.png';
import te from '../images/Termomether_-_Cold-512.png';
import wn from '../images/56086.png';


class MainTemp extends Component{
    render(){
        let style = {
            height:"auto",
            boxShadow:"5px 8px 8px #7E7E7E",
            border:"1px solid #e3e3e3",
            margin:"5% 0 0 0"
        }
        if(this.props.data === 'Information not available'){
            return(
                <div>
                    <h1 style={{textAlign:"center",background:"url('https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/12/1450973046wordpress-errors.png') no-repeat center"}}>ERROR:404 The information you are looking for is not available or Name you choose is not correct</h1>   
                </div>
            )
        }else{
            let color;
            console.log(this.props.data.background)
            if(this.props.data.background === 'Rain')
                color = '#1F85DE'
            else if(this.props.data.background === 'Smoke')
                color = '#431012'
            else if(this.props.data.background === 'Haze')
                color = '#c4c4c4'
            else if(this.props.data.background === 'Snow')
                color = '#78E7E5'
            else if(this.props.data.background === 'Clouds')
                color = '#11348D'
            else if(this.props.data.background === 'Clear')
                color = '#8BBEDF'
            return(
                <React.Fragment>
                    <div className="row" style={style}>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <h1 style={{padding:"0",margin:"0",color:color}}>{this.props.data.name}</h1>
                            <h2 style={{fontWeight:"lighter"}}>{Date()}</h2>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <p style={{fontSize:"111px",color:color}} className="text-center" >{Math.round(this.props.data.temp-273.15)}&#8451;</p>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <img alt="icon" className="img-responsive" src={`http://openweathermap.org/img/w/${this.props.data.icon}.png`} style={{width:"40%",height:"auto",marginTop:"20%"}} /><br />
                            <h3>{this.props.data.weather_des === undefined?this.props.data.weather_des:this.props.data.weather_des.toUpperCase()}</h3>
                        </div>
                    </div>
                    <div className="row" style={{margin:"5% 0 0 2%",height:"auto"}}>
                        <div className="col-md-4" >
                            <div className="row" style={{boxShadow:"5px 8px 8px #7E7E7E",border:"1px solid #e3e3e3"}}>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <h3 style={{color:color}}>PRESSURE</h3>
                                    <h2 style={{color:"black"}}>{this.props.data.pressure}hpa</h2>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <img src={pi} alt="pimage" style={{width:"100%",marginTop:"10%"}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row" style={{boxShadow:"5px 8px 8px #7E7E7E",border:"1px solid #e3e3e3"}}>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <h3 style={{color:color}}>HUMIDITY</h3>
                                    <h2 style={{color:"black"}}>{this.props.data.humidity}%</h2>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <img src={hu} alt="pimage" style={{width:"100%",marginTop:"10%"}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row" style={{boxShadow:"5px 8px 8px #7E7E7E",border:"1px solid #e3e3e3"}}>
                                <div className="col-md-8 col-sm-8 col-xs-8">
                                    <h3 style={{color:color}}>VISIBILITY</h3>
                                    <h2 style={{color:"black"}}>{this.props.data.visi === undefined?"NA":this.props.data.visi}</h2>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    <img src={vi} alt="pimage" style={{width:"100%",marginTop:"10%"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{margin:"5% 0 0 2%",height:"auto"}}>
                        <div className="col-md-6 col-sm-6 col-xs-6" >
                            <div className="row" style={{border:"1px solid #e3e3e3",boxShadow:"5px 8px 8px #7E7E7E",}}>
                                <div className="col-md-6">
                                    <h2 style={{color:color}}>WIND</h2>
                                    <h2 style={{color:"black"}}>{this.props.data.wind_speed}m/s</h2>
                                </div>
                                <div className="col-md-6">
                                    <img alt="icon" style={{width:"40%"}} src={wn} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6" >
                            <div className="row" style={{border:"1px solid #e3e3e3",boxShadow:"5px 8px 8px #7E7E7E",}}>
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    <h3 style={{fontSize:"18px",color:color,wordBreak:"break-all"}}>MIN TEMPERATURE <span>{Math.round(this.props.data.temp_min-273.15)}&#8451;</span></h3>
                                    <h3 style={{fontSize:"18px",color:color,wordBreak:"break-all"}}>MAX TEMPERATURE <span>{Math.round(this.props.data.temp_max-273.15)}&#8451;</span></h3>
                                </div>
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    <img alt="icon" style={{width:"60%" }} src={te} />
                                </div>
                            </div>      
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default MainTemp