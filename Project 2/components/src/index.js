import React from 'react';
import reactDom from 'react-dom';
// import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" comment="Nice Blog!" src={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:30 PM" comment="Good work."/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00 AM"comment="Keep up the hard work!"/>
            {/* Giving a prop to component makes it unique. */}
        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'));
