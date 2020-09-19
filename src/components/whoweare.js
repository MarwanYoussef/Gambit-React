import React from 'react';
import ChessHorse from '../chessHorde.png';

class whoweare extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#660033",
                textAlign: "center",
                paddingTop: "50px",
                paddingBottom: "50px",
                width: "100%",
                height: "100%"
            }}>
                <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
                    <h1 style={{color: "red", fontFamily: "Helvitica", fontSize: "50px"}}><b>WHO WE ARE</b></h1>
                    <p style={{color: "white", fontFamily: "Arial"}}>
                        <b>
                        Gambit Communications is a consultancy founded by Jamal Al Mawed bringing together
                        <br></br>
                        experienced communication talent spanning agency and client side, corporate and
                        <br></br>
                        consumer, regional and international.
                        </b>
                    </p>
                </div>

                <div style={{display: "flex", justifyContent: "center", paddingLeft: "30px"}}>
                    <div style={{display: "flex", color: "white", paddingRight: "20px"}}>
                        <img src={ChessHorse} alt="chess horse"></img>
                        <p style={{paddingTop: "30px", width: "50%", fontFamily: "Arial"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Et pharetra pharetra massa massa ultricies mi quis. 
                        Ut tortor pretium viverra suspendisse potenti.
                        </p>
                    </div>
                    
                    <div style={{display: "flex", color: "white"}}>
                        <img src={ChessHorse} alt="chess king"></img>
                        <p style={{paddingTop: "30px", width: "50%", fontFamily: "Arial"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Et pharetra pharetra massa massa ultricies mi quis. 
                        Ut tortor pretium viverra suspendisse potenti.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default whoweare;