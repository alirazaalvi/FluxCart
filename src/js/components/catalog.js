/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToCart = require('../components/addtocart.js');

function getCatalog() {
    return {items: AppStore.getCatalog()}
}

var Catalog =
    React.createClass({
        getInitialState: function() {
            return getCatalog();
        },
        render:function() {
            var storeItems = this.state.items.map(function(item, index) {
                return <tr key={index}>
                        <td>{item.title}</td>
                        <td>${item.cost}</td>
                        <td><AddToCart item={item} /></td>
                    </tr>
            }.bind(this));
        return (

                <table className="table table-hover" >
                    {storeItems}
                </table>
            )
        }
    });

module.exports = Catalog;