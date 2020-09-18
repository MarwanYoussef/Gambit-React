import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import StartButtonIcon from '@material-ui/icons/NavigateNext';


class footer extends React.Component {
    render() {
        return (
            <div class="flex-container" style={{display: "flex", color: "white"}}>
                <div style={{paddingLeft: "150px", paddingBottom: "30px"}}>
                    <FacebookIcon color="white"></FacebookIcon>
                    <InstagramIcon></InstagramIcon>
                    <TwitterIcon></TwitterIcon>
                    <LinkedinIcon></LinkedinIcon>
                </div>
                <div style={{
                    paddingBottom: "15px", 
                    position: "absolute", 
                    right: "0",
                    paddingRight: "135px"
                }}>
                    <Button
                        variant="outlined"
                        color="default"
                        size="medium"
                        startIcon={<StartButtonIcon color="primary"></StartButtonIcon>}>
                        <b style={{color: "white"}}>Start</b>
                    </Button>
                </div>
            </div>
        );
    }
}

export default footer;