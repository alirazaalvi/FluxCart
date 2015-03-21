var Dispatcher = require('flux/lib/Dispatcher');
var assign = require('react/lib/object.assign')

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;