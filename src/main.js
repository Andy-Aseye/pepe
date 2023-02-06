import React from "react";
import './style.css';
import Twitter from './assets/Twitter.png';
import Discord from './assets/Discord.png';
import Whitepaper from './assets/Whitepaper.png';
import Menu from './assets/menu.png';
import Pepe from './assets/Logo free 1.png';
import leftArr from './assets/arrow left.png';
import rightArr from './assets/arrow right.png';
import pepeBody from './assets/Pepe.png';
import Sparkles from './assets/bottom-r.png';
import Star1 from './assets/star-l.png';
import Star2 from './assets/star-r.png';


export default function Main () {




    return (
            <div className="page-container">
                <div>
                    <div className="navbar">
                        <div className="menu-btn">
                            <img src={Menu} alt="btn"/>
                        </div>
                        <div className="menu-right">
                            <div className="socials-link">
                            <ul>
                                <li><a href="/"><img src={Twitter} alt="icon"/></a></li>
                                <li><a href="/"><img src={Discord} alt="icon"/></a></li>
                                <li><a href="/"><img src={Whitepaper} alt="icon"/></a></li>
                            </ul>
                            </div>
                            <button className="connect-btn">Connect</button>
                        </div>
                    </div>
                    <div className="star-container-1">
                        <img src={Star1} alt="star-img" className="star"/>
                    </div>
                    <div className="sparkles" id="sparkles-l">
                        <img src={Sparkles} alt="star-sparkles" className="stars-sparkles"/>
                    </div>
                    <div className="header-img">
                        <img src={Pepe} alt="header-img" className="pepe-img"/>
                    </div>
                    <div className="star-container" >
                        <img src={Star2} alt="star-img" className="star"/>
                    </div>
                    <div className="message-container">
                    <div className="message-box">
                        <h1>Come on in, Degen</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        <div className="bottom-items">
                            <div className="left">
                            <h3>1/3</h3>
                            <div className="arrow-btn">
                                <button><img src={leftArr} alt="left-arrow"/></button>
                                <button><img src={rightArr} alt="right-arrow"/></button>
                            </div>
                            </div>
                            <div className="right">
                                <h3>Demo</h3>
                                <button>Connect & play</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-container">

                    </div>
                    </div>
                    <div className="pepe">
                        <img src={pepeBody} alt="Pepe-body" className="pepe-body"/>
                    </div>
                    <div className="sparkles" id="sparkles-r">
                        <img src={Sparkles} alt="sparkles-img" className="stars-sparkles"/>
                    </div>
                </div>
            </div>

    );
}