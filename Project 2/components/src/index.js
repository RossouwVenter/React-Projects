import React from 'react';
import reactDom from 'react-dom';
// import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'));
