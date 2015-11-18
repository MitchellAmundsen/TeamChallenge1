'use strict';

//insert tests for EACH form field below!





describe('form password fields', function() {
	var password = element(by.model('pass1'));
	var confirmpassword = element(by.model('pass2'));

	beforeEach(function(){
    browser.get('http://localhost:8000/challenges/TeamChallenge1/');
  	})

  	it('should let user type in same password and not show error', function(){
  		password.sendKeys('testpassword');
  		confirmpassword.sendKeys('testpassword');

  		var errorbox = element(by.id('passerror'));
  		expect(errorbox.isPresent()).toEqual(false);

  	});
});

describe('form first and last name field', function() {
  var lastName = element(by.model('lastNameBox'));

    it('should let user type in no first name but a last name and not show error', function(){


      lastName.sendKeys('testlastname');

      var errorbox = element(by.id('nameerror'));
      expect(errorbox.isPresent()).toEqual(false);

    });
});

describe('form email field', function() {
  var email = element(by.model('emailBox'));

    it('should require user to type in a valid email address', function(){


      email.sendKeys('testemail@testdomain.com');

      var errorbox = element(by.id('emailerror'));
      expect(errorbox.isPresent()).toEqual(false);

    });
});

describe('form birthday field', function() {
  var birthday = element(by.model('birthdateBox'));

    it('should let user type in a birthday more than 13 years ago', function(){
      birthday.sendKeys('02-02-2000');

      var errorbox = element(by.id('bderror'));
      expect(errorbox.isPresent()).toEqual(false);

    });
});

describe('button field', function(){
  var button = element(by.id('submitbutton'));

  var birthday = element(by.model('birthdateBox'));
  var email = element(by.model('emailBox'));
  var firstName = element(by.id('firstNameBox'));
  var lastName = element(by.model('lastNameBox'));
  var password = element(by.model('pass1'));
  var confirmpassword = element(by.model('pass2'));

    it('should only submit when all forms are valid', function(){
      birthday.sendKeys('01-01-1996');
      email.sendKeys('testemail@testdomain.com');
      firstName.sendKeys('test');
      lastName.sendKeys('test');
      password.sendKeys('password');
      confirmpassword.sendKeys('password');

      button.click();
      var success = element(by.id("successAlert"));

      expect(success.isPresent()).toEqual(true);
    })
})

