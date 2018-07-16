function (user, context, callback) {
    var whitelist = [ 'john.paul.rowan@auth0.com', ]; //authorized users
    var userHasAccess = whitelist.some(
      function (email) {
        return email === user.email;
      });

    if (!userHasAccess) {
      return callback(new UnauthorizedError(
        'Whitelisting has been applied to this tenant. ' + 
        'Your account must be registered with an account admin to proceed.'));
    }

    callback(null, user, context);
}