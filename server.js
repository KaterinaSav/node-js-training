var user = require ('./user');

var vasya = new user.User("Vasya");
var petya = new user.User("Petya");

vasya.hello(petya);