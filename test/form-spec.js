'use strict';

//insert tests for EACH form field below!





describe('form password fields', function() {
	var password = element(by.model('pass1'));
	var confirmpassword = element(by.model('pass2'));

	beforeEach(function(){
    browser.get('http://localhost:8000/TeamChallenge1/');
  	})

  	it('should let user type in same password and not show error', function(){
  		password.sendKeys('testpassword');
  		confirmpassword.sendKeys('testpassword');

  		var errorbox = element(by.id('passerror'));
  		expect(errorbox.isPresent()).toEqual(false);

  	});
});