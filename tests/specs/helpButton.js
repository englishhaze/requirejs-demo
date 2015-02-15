/**
 * Define a suite of tests with a name and a callback function
 */
define(['app/helpButton'], function(helpButton) {
    
  describe("Test the help button", function() {
    
    // Local variables 
  

    // Function to run before each test 
    //beforeEach(function() {
    //    // Do any test setup required here
    //});

    /**
     * Standard test using the 'it' function to describe the test
     * and define the function to perform the test
     */ 
    it("test button should do this thing", function() {
	var itDidTheThing = true;
	// Code to actually test that it does that thing
        //demonstrates use of custom matcher
        expect(itDidTheThing).toBe(true);
    });    
  });
});
