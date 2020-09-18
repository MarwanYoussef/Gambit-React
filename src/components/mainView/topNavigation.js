import React from 'react';

class topNavigation extends React.Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse" id="navbar10">
                            <ul class="navbar-nav nav-fill w-100">
                                <li class="nav-item">
                                    <a class="nav-link" href=".">INSPIRATION</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">WHAT IS GAMBIT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">THE PLAYERS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="."><b>GAMBIT</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">THE GAME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">SKILL LEVEL</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">PHILOSOPHY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=".">LETS PLAY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default topNavigation;