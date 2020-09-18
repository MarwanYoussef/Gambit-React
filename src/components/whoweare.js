import React from 'react';
import ChessHorse from '../chessHorde.png';

class whoweare extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#660033",
                textAlign: "center",
                paddingTop: "50px",
                paddingBottom: "50px"
            }}>
                <div>
                    <h1 style={{color: "red"}}><b>WHO WE ARE</b></h1>
                    <p style={{color: "white"}}>
                        <b>
                        Gambit Communications is a consultancy founded by Jamal Al Mawed bringing together
                        <br></br>
                        experienced communication talent spanning agency and client side, corporate and
                        <br></br>
                        consumer, regional and international.
                        </b>
                    </p>
                </div>

                <div style={{display: "flex"}}>
                    <div style={{display: "flex"}}>
                        <img src={ChessHorse} alt="chess horse" style={{borderRadius: "50%"}}></img>
                        <p>
                            lorem ipsum bala7
                        </p>
                    </div>
                    
                    <div style={{display: "flex"}}>
                        <img src={ChessHorse} alt="chess king" style={{borderRadius: "50%"}}></img>
                        <p>
                            lorem ipsum bala7 part2
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default whoweare;