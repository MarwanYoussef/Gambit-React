import React from 'react';
import chessLogo from '../chessLogo.png';

class inspiration extends React.Component {
    render() {
        return (
            <div class="flex-container" style={{display: "flex"}}>
                <div style={{paddingLeft: "50px"}}>
                    <div style={{
                        color: "red", 
                        paddingBottom: "30px",
                        paddingTop: "50px"
                    }}>
                        <h1><b>INSPIRATION</b></h1>
                    </div>
                    
                    <div>
                        <h5 style={{color: "#f56042"}}>CHESS [noun]:</h5>
                        <p>
                            lorem ipsum a7e bo7eeh
                        </p>
                    </div>

                    <div>
                        <h5 style={{color: "#f56042"}}>GAMBIT [noun]:</h5>
                        <p>
                            lorem ipsum a7e bo7eh
                        </p>
                    </div>
                </div>
                <div>
                    <img 
                        src={chessLogo} 
                        alt="chessLogo"
                        width="70%"
                        height="90%"
                        style={{
                            paddingLeft: "400px",
                            paddingTop: "50px",
                            borderTopLeftRadius: "50% 50%",
                            borderTopRightRadius: "50% 50%",
                            borderBottomRightRadius: "50% 50%",
                            borderBottomLeftRadius: "50% 50%"
                        }}>
                    </img>
                </div>
            </div>
        );
    }
}

export default inspiration;