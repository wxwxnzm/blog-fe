import React, { Component } from 'react';
import './App.css';
import CommonHead from '../head/commonHead';

let resizeTime = null;
class App extends Component {
  htmlFontSizeSet() {
    // 目前暂时用1024的宽度
    let docWid = document.documentElement.getBoundingClientRect().width;
    if (docWid < 1024) {
        document.documentElement.style.fontSize = `${docWid*16/1024}px`;
    }
  }
  resizeBind() {
    window.addEventListener('resize', () => {
      clearTimeout(resizeTime);
      resizeTime = window.setTimeout(() => {
        this.htmlFontSizeSet();
      }, 300)
    })
    
  }
  componentWillMount(){
      this.htmlFontSizeSet();
      this.resizeBind();
  }
  render() {
    return (
      <div className="App">
        <CommonHead></CommonHead>
      </div>
    );
  }
}

export default App;
