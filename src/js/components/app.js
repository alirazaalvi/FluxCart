/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/catalog.js');
var Cart = require('../components/cart.js');

var APP = React.createClass({
    render: function() {
        return (<div>
                    <h1>Lets Shop</h1>
                    <Catalog />
                    <h1>Cart</h1>
                    <Cart />
                </div>);
    }
});

module.exports = APP;