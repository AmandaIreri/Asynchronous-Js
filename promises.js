// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
async function messageLog(message, delayTime) {
 await new Promise(resolve => setTimeout(resolve,delayTime));
 console.log(message);
} 
 
messageLog("You will achieve your dreams.",3000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const users = [3020, 4650, 4560, 3021];




function getUserData(id) {


 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 const userData = { id, name: `User ${id}` };
 resolve(userData);
 }, 1000);
 });
}
async function logUserData() {
 for (const userId of userIds) {
 try {
 const userData = await getUserData(userId);
 console.log(`User ID ${userId}: ${userData.name}`);
 } catch (error) {
 console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
 }
 }
 }
 logUserData()




 



 // Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
async function messageLog(message, delayTime) {
      await new Promise(resolve => setTimeout(resolve,delayTime));
      console.log(message);
    } 
     
    messageLog("You will never walk alone.",2000)
    
    
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const userIds = [2031, 2024, 2023, 2045];
function getUserData(id) {
    
    
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    
    const userData = { id, name: `User ${id}` };
    resolve(userData);
    }, 1000);
    });
   }
   async function logUserData() {
    for (const userId of userIds) {
    try {
    const userData = await getUserData(userId);
    console.log(`User ID ${userId}: ${userData.name}`);
    } catch (error) {
    console.error(`Error fetching data for ${userId}: ${error.message}`);
    }
    }
    }
    logUserData()
   
    
    // You have an asynchronous function performTask() that returns a Promise. 
    // The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask()
    // and logs a custom success message if the task is successful, and a custom error message if there's an error.
    async function performTask() {
    
    
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        
        resolve('Succeful');
        reject('You have an error')
        
        }, 1000);
        });
       }
       
       const Task = async ()=>{
        
        try{
        await performTask
        console.log('message: Successful');
        }catch{
        console.log('error: You have an error');
        }
       }
       newTask();
    // Retry Logic:
    // Scenario:
    // Write a function unstableTask that:
    
    // 1.Accepts a taskName and failureProbability (a number between 0 and 1).
    // 2. Returns a Promise that:
    // Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
    // Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
    // Write another function executeWithRetry that:
    
    // Accepts a taskName, retries, and failureProbability.
    // Uses a retry mechanism to attempt the unstableTask up to retries times.
    // Logs whether the task succeeded or failed after all attempts.
    function unstableTask(taskName, failureProbability) {
     return new Promise((resolve, reject) => {
     const randomValue = Math.random();
     if (randomValue > failureProbability) {
     
     resolve(`Task "${taskName}" succeeded`);
     } else {
     
     reject(new Error(`Task "${taskName}" failed`));
     }
     });
    }
    async function executeWithRetry(taskName, retries, failureProbability) {
     for (let attempt = 2; attempt => retries; attempt++) {
     try {
     await unstableTask(taskName, failureProbability);
     console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
     return;
     } catch (error) {
     console.error(`Attempt ${attempt}: ${error.message}`);
     }
     }
     console.log(`All ${retries} attempts failed for task "${taskName}"`);
    }
     
    executeWithRetry('Runtime', 2, 0);
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 resolve('Succeful');
 reject('You have an error')
 
 }, 1000);
 });

const newTask = async ()=>{
 
 try{
 await performTask
 console.log('message: Successful');
 }catch{
 console.log('error: You have an error');
 }
}
newTask();
// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.
function unstableTask(taskName, failureProbability) {
 return new Promise((resolve, reject) => {
 const randomValue = Math.random();
 if (randomValue > failureProbability) {
 
 resolve(`Task "${taskName}" succeeded`);
 } else {
 
 reject(new Error(`Task "${taskName}" failed`));
 }
 });
}
async function executeWithRetry(taskName, retries, failureProbability) {
 for (let attempt = 2; attempt => retries; attempt++) {
 try {
 await unstableTask(taskName, failureProbability);
 console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
 return;
 } catch (error) {
 console.error(`Attempt ${attempt}: ${error.message}`);
 }
 }
 console.log(`All ${retries} attempts failed for task "${taskName}"`);
}
 
executeWithRetry('Runtime', 2, 0);