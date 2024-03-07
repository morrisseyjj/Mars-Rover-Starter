const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');



describe("Rover class", function() {
  // 7 tests here!
// TEST 7 !!!!!!
it("constructor sets position and default values for mode and generatorWatts", function(){
    let roverObject = new Rover("position", "NORMAL", 110);
  
        expect(roverObject.position).toEqual("position");
        expect(roverObject.mode).toEqual("NORMAL");
        expect(roverObject.generatorWatts).toEqual(110);
});
// TEST 8 !!!!!
it("response returned by receiveMessage contains the name of the message", function(){
  let command = new Command("MODE_CHANGE", "NORMAL");
  let message = new Message("TA power", command);  
  let rover = new Rover();
  let response = rover.receiveMessage(message);

      expect(response.message).toEqual("TA power");
}); 
// TEST 9 !!!!!
it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let command = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
  let message = new Message("Test message with two commands", command);
  let rover = new Rover();
  let response = rover.receiveMessage(message);

    expect(response.results.length).toEqual(2);
});
// TEST 10 !!!!!
it("responds correctly to the status check command", function(){
  let rover = new Rover(98382);
  
});





});
//
