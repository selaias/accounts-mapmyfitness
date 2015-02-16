# accounts-mapmyfitness

Login service for MapMyFitness accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Strava services. Example:

```
ServiceConfiguration.configurations.remove({
    service: "mapMyFitness"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "mapMyFitness" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with MapMyFitness button.