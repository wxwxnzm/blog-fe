import React, { Component } from 'react';
import './commonHead.css';
import bg from '../assets/img/head_bg.jpg'

const bgStyle = {
    backgroundImage: `url(${bg})`
}

export default class CommonHead extends Component {
    render() {
        return (
            <header >
                <nav className="tc">
                    <ul className="df h-center">
                        <li className="menus-item tc pointer tr2 active">博客</li>
                        <li className="menus-item tc pointer tr2">关于</li>
                        <li className="menus-item tc pointer tr2">前 十</li>
                    </ul>
                </nav>
                <div className="bg df rel" style={bgStyle}>
                    <div className="word abs-center c_fff">
                        <h1>同学,李时珍的皮</h1>
                        <div className="df v-center h-center">
                            <div className="line-2"></div>
                            <h4>泉水指挥拿五杀</h4>
                            <div className="line-2"></div>

                        </div>
                    </div>
                </div>
                <div className="empty"></div>
            </header>
        )
    }
}