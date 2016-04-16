if (Meteor.isClient) {
  // counter starts at 0
  Template.inputFromUser.events({
    'submit .new-comment'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const form = event.target;
      const textValue = form.text.value;

      console.log("The value of target is...", form);
      console.log("The value of textValue is...", textValue);

      // Insert a task into the collection
      collectiveSupp.insert({
        supportText: textValue,
        createdAt: new Date(), // current time
      });

      // Clear form
      form.text.value = 'You are done!!!';
    },
  });

  // Single value - use an expression

  // Changing single value that needs to be calculated - use a function to calculate + expression

  // Multiple values in a single row of HTML - use a dictonary + "with"

  // Multuple values in Multiple Rows of HTML - use a Collection + "each"


Template.inputFromOthers.helpers(commentOutputHelperDictionary);

/*
  Session.setDefault('counter', 0);
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
*/

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}