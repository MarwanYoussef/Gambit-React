import React from 'react';
import NavigationBar from './mainView/topNavigation';
import Slider from './mainView/slider';
import Footer from './mainView/footer';

class main extends React.Component {
    render() {
        return(
            <div style={{
                backgroundColor: 'red',
                width: '100%',
                height: '100%'
            }}>
                <NavigationBar></NavigationBar>
                <Slider></Slider>
                <Footer></Footer>
            </div>
        );
    }
}

export default main;