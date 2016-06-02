var AppDispatcher = require('../dispatcher/Dispatcher'),
  BookingConstants = require('../constants/BookingConstants');

module.exports = {
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
