const Command = require('../command.js');



describe("Command class", function() {
// TEST 1 !!!!!
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
// TEST 2 !!!!!
  it("constructor sets command type", function() {   
 let modeCommandObject = new Command("MODE_CHANGE", "LOW_POWER");
    expect(modeCommandObject.commandType).toEqual("MODE_CHANGE");
  });
// TEST 3 !!!!!
  it("constructor sets a value passed in as the 2nd argument", function(){
   let moveCommandObject = new Command("MOVE",12000);
    expect(moveCommandObject.value).toEqual(12000);
  })
});

// TEST 2 & 3
// - Create a new insist(object) of of the Command Class
// - check if the commandType matches