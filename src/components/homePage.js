'use strict';

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className='jumbotron'>
                <h1>this is an h1</h1>
                <p>this is react stuff</p>
            </div>
        );
    }
});

module.exports = Home;