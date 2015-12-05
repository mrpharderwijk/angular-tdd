angular.module('AddressBook', [])
  .service('contactService', function($http) {
    this.contacts = [];

    $http.get('localhost:9001/contacts', function(res) {
      console.log(res);
    });
  });