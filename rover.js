// bring in Message and Command Class Code into Rover
const Message = require("./message.js");
const Command = require("./command.js")


class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts; 
      }; 
       // function code (.this??) INSTRUSTIONS SAY OUTSIDE CONSTRUCTOR
   //response = rover.receivedMessage(message); // not sure how to do the function receive Message
   //TODO 
   //   1. Function recieves message object. 
   //   2. Then Returns a RESPONSE
   //        a) is a complex object with lots of Parts (i think the hardest part)
   //        b) handles the various types of commands
   //        c) Updates Rover Properties. 
   //        d) Puts Resuslts(updates) in an ARRAY. ( 5 things in array
   //             1. message
   //             2. results [is array with - completed, completed, roverStatus{ mode: "LOW_POWER",generatorWatts: 110, position: 98382 }     ]
   //    *** if the Command works then it will return "completed : true". If it is not completed (low-fuel) then it will return   "completed : false"  
//       *** roverStatus is an Array(object with an array??) inside the "results" array. It inclueds "mode" "generatorWatts" and "position". (look at part 4 instructions image)                  
   
      receiveMessage(message) {
         const results = [];
// for Loop Statment  loop over each command in the commands array of the message object
      for (let i = 0; i < message.commands.length; i++) {
         const command = message.commands[i];
         let result = { completed: true };
// if, else and else if statements to handle the differnt command types
         if (command.commandType === "MODE_CHANGE") {
            this.mode = command.value;
         } else if (command.commandType === "MOVE") {
               if (this.mode === "LOW_POWER") {
                  result.completed = false;
               } else {
                  this.position = command.value;
               }
         } else if (command.commandType === "STATUS_CHECK") {
            result.roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
               };
         }
         
// Push the result to the resultS array
         results.push(result);      
      }

// Return and Object containing the meassage.name and the results Array (return message & results)
      return {message: message.name, results: results};
      };
   };
  

module.exports = Rover;




//// BELOW IS JUST WHILE WORKING ON TESTS. DELETE AFTER
// let rover = new Rover(100);
// let commands = [
//    //   MOVE is commandType and 4321 is value from the Command Class
//    // when testing MOVE comment out the others. etc do one at time
//    new Command('MOVE', 4321),
//    new Command('STATUS_CHECK'),
//    new Command('MODE_CHANGE', 'LOW_POWER'),
//    new Command('MOVE', 3579),
//    new Command('STATUS_CHECK')
// ];
// let message = new Message('TA power', commands);
// let response = rover.receiveMessage(message);

// console.log(rover);
// //console.log(response);

// // below prints out the roverStatus Object in terminal
// console.log(JSON.stringify(response, null, 2));