/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

//   With the usual Users and Todo lists: 

//   - Prompt the user for a user ID. Using the value, 
//      find all the todos that are 
//      Incomplete and console.log them.

/* Tips
- Don't forget to clear interval once it's done running
- It's perfectly okay to prompt a user for details while other stuff (i.e. the interval) is running
- Keep your code separated into functions for easier readability later

Challenge
- Prompt the user to enter a property (e.g. 'email' or 'address') and then console.log a list of name - given property. E.g. for email it would look along the lines of: 

Bob Marley - bob@marley.com
Steven Hawking - hawk@this.co.uk */



//   - Prompt the user for a letter
// let userLetter = prompt('Enter a letter')

// //   - Find all the users who's name contains the letter 
// const newUserArray = users.filter(function(user){
//       let userName = user.name.toUpperCase()
//       return userName.includes(userLetter.toUpperCase())
//   }
// )
// console.log(newUserArray)

//   - The second way
// function findUser (userLetter){
//   return users.filter(function(user){
//           let userName = user.name.toUpperCase()
//           return userName.includes(userLetter.toUpperCase())
//     }
//   )    
// }
// console.log(findUser(userLetter))


//   - Say hi to those users in the console - but only 1 greeting every 2 seconds.

    // 1 - Say hi to those users in the console
    
  //   function sayHiToUsers(newUserArray){
  //       for(const user of newUserArray){
  //         // 2 - but only 1 greeting every 2 seconds
  //         let intervalId = setInterval(function(){
  //           console.log(`Hi ${user.name}!`)
  //           // clearInterval(intervalId)
  //         }, 2000)
  //       }
  //     }
  // sayHiToUsers(newUserArray)

   

  //   - Prompt the user for a user ID. 
  //     Using the value, find all the todos that are Incomplete and 
  //     console.log them

  //   - Prompt the user for a user ID. 
  let userId = Number(prompt(`What's your id number?`))

  //     Using the value, find all the todos that are Incomplete
  function findIncompletedTodos() {
      return todos.filter(function(todo){
              if(userId === todo.userId){ 
                if(todo.completed === false) return true
                  }
               }        
             ) 
           }
  console.log(`These are incompleted todos of userId ${userId}:`)
  console.log(findIncompletedTodos())
  //     console.log them
  
  // console.log(`Incompleted todos are: \n ${findIncompletedTodos (userId)}`)s