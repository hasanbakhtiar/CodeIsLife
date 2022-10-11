import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss'
import myphoto from './img/unsplash.jpg';
class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello World</h1>
            <div className="box"></div>
            <img width="300" src={myphoto} alt="" />
            </>
        )
    }
}
ReactDOM.render(<App />,document.querySelector('#root'));