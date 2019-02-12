import React, {Component} from 'react';
import Header from './Header';
import Search from './Search';

class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Search />
            </React.Fragment>
        )
    }
}

export default Home