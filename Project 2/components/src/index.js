import React from 'react';
import reactDom from 'react-dom';
// import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" comment="Nice Blog!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Alex" timeAgo="Today at 2:30 PM" comment="Good work." avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00 AM"comment="Keep up the hard work!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
                {/* Giving a prop to component makes it unique. */}
            
            {/* Passing the comment detail into the card  (the approval card.)*/}
        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'));
