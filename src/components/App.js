import React from 'react';
import {connect} from 'react-redux';
import "./App.css";

const App = ({active, count, onReset, onStart, onPause}) => (

    <div className="container">
        <div className="app-wrapper">
            <header className="header">Timer</header>
            <div className="counter">
                <span>{count}</span>
                <div className="btn-block">
                    <br/>
                    <button className="btn start" onClick={onStart} disabled={active}>Start</button>
                    <button className="btn pause" onClick={onPause} disabled={!active}>Pause</button>
                    <button className="btn reset" onClick={onReset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        active: state.active,
        reset: state.reset,
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch({type: 'START'}),
        onPause: () => dispatch({type: 'PAUSE'}),
        onReset: () => dispatch({type: 'RESET'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
