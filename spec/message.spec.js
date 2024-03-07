const Message = require('../message.js');
const Command = require('../command.js');



describe("Message class", function() {
// TEST 4 !!!!!
    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
      expect( function() { new Message();}).toThrow(new Error("name required."));
    });
// TEST 5 !!!!!
    it("constructor sets name", function(){
        let commandObject = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
        let messageObject = new Message("constructor sets name", commandObject);

        expect(messageObject.name).toEqual("constructor sets name");
    })
// TEST 6 !!!!!!
    it("contains a commands array passed into the constructor as the 2nd argument", function(){
        let commandObject = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
        let messageObject = new Message("Test message with two commands", commandObject);

        expect(messageObject.commands).toEqual(commandObject);
    })
 });


