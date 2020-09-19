import React from 'react';
import ChessHorde from '../chessHorde.png';

class inspiration extends React.Component {
    render() {
        return (
            <div class="flex-container" style={{
                display: "flex",
                width: "100%",
                height: "100%",
                paddingBottom: "50px"
            }}>
                <div style={{paddingLeft: "50px"}}>
                    <div style={{
                        color: "red", 
                        paddingBottom: "30px",
                        paddingTop: "50px"
                    }}>
                        <h1 style={{fontSize: "70px", fontFamily: "serif"}}><b>INSPIRATION</b></h1>
                    </div>
                    
                    <div style={{width: "65%"}}>
                        <h5 style={{color: "#f56042", fontFamily: "sans-serif"}}>CHESS [noun]:</h5>
                        <p style={{width: "inherit"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Et pharetra pharetra massa massa ultricies mi quis. Ut tortor pretium viverra 
                        suspendisse potenti. Viverra nibh cras pulvinar mattis. Duis at consectetur lorem 
                        donec massa.
                        </p>
                    </div>

                    <div style={{width: "65%"}}>
                        <h5 style={{color: "#f56042", fontFamily: "sans-serif"}}>GAMBIT [noun]:</h5>
                        <p style={{
                            width: "inherit"
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Et pharetra pharetra massa massa ultricies mi quis. 
                        Ut tortor pretium viverra suspendisse potenti. Viverra nibh cras pulvinar mattis.
                        </p>
                    </div>
                </div>
                <div style={{
                    display: "flex", 
                    justifyContent: "center", 
                    paddingRight: "200px", 
                    paddingTop: "50px"
                    }}>
                        <img src={ChessHorde} alt="chess logo"></img>
                </div>
            </div>
        );
    }
}

export default inspiration;