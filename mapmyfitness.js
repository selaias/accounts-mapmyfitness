Accounts.oauth.registerService('mapMyFitness');
if (Meteor.isClient) {
  Meteor.loginWithMapMyFitness = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    MapMyFitness.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.mapMyFitness'],
    forOtherUsers: ['services.mapMyFitness.username']
  });
}
