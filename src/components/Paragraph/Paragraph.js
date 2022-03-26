import React from 'react';

const Paragraph = () => {
    return (
        <div>
            <h2>Difference between Props and State.</h2>
            <h3>Props: </h3>
            <h5>1.Props are read only.</h5>
            <h5>2.Props are immutable.</h5>
            <h5>3.Props can be accessed by the child component.</h5>
            <h5>4.Props are external and controlled by whatever renders the component.</h5>
            <h3>State: </h3>
            <h5>1.State changes can be asynchronous.</h5>
            <h5>2.State is mutable.</h5>
            <h5>3.State cannot accessed by child component.</h5>
            <h5>4.The state is internal and controlled by the react component itself.</h5>
            <h2>How react work?</h2>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is maintained by Facebook.While  a team of Facebook developers realized that the DOM is slow,then to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript.Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
        </div>
    );
};

export default Paragraph;