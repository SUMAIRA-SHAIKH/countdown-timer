#! /usr/bin/env node

console.log((chalk.bold.bgMagentaBright.yellowBright("\n\t\t~~~welcome to countdown-Timer~~~\n\t\t\t~~created by Sumaira Aziz~~\n\t\t======================\n")))

// new Date object

let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(chalk.bold.green("Current date is: "),year + "-" + month + "-" + date)

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(chalk.bold.green("YYYY-MM-DD HH:MM:SS format"),year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

// prints time in MM:SS format
console.log(chalk.bold.green("MM:SS"),minutes + ":" + seconds)
//

let ts = Date.now();

// timestamp in milliseconds
console.log(chalk.bold.green("time in milliseconds: "),ts)

// timestamp in seconds
console.log((chalk.bold.green("curent time seconds : "),Math.floor(ts/1000)))
//
import inquirer from 'inquirer';

/*
const date_event: any = {

    HAJJ_Day: "2024-6-14",
    Birth_Day:"2024-10-21",
    Independence_Day: "2024-7-14",
    Bakra_Eid: "2024-6-15",
    New_Year: "2025-0-01",
    Iqbal_Day:"2024-10-9",
    Jinnah_Day:"2024-11-25",
    Labour_Day:"2024-05-01"


};



//-------------------------------Function to prompt user for event selection-------------------------------

async function calculateTimeRemaining() {

    let ch: any  ={
    
        name: "time",
        type: "list",
        message: `${chalk.yellowBright.bold.italic.underline("\nSelect the Event:")}`,
        choices: ["HAJJ_Day","Independence_Day","Labour_Day", "Bakra_Eid", "New_Year","Iqbal_Day","Jinnah_Day","countdwn","Exit"]
    }
    
        let ask =await inquirer.prompt(ch)
    
        let selected_event = ask.time

        if (ask.time === "Exit")
            
            {
            return false;  // Exit the loop if "Exit" option is selected
            }
    
    // Continue the loop if Event selected

        const dateParts = date[ask.time].split("-");
        calculate(selected_event, parseInt(dateParts[0]), parseInt(dateParts[1]), parseInt(dateParts[2]));
    
        return true; 
    } 
        
//------------------Function to calculate and display time remaining for an event-----------------------------

function calculate(a:string , year: number, month:number, day:number)

{
 
    let targetDate = `${year}-${(month+1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T00:00:00`;
        
    let targetTime = new Date(targetDate).getTime();
    
    let currTime = new Date().getTime();
        
    const daysRemaining = Math.floor((targetTime - currTime) / (1000 * 60 * 60 * 24));
    
    const hoursRemaining = Math.floor(((targetTime - currTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const minutesRemaining = Math.floor(((targetTime - currTime) % (1000 * 60 * 60)) / (1000 * 60));
    
    const secondsRemaining = Math.floor(((targetTime - currTime) % (1000 * 60)) / 1000);
    
//------------------------- Display remaining time for the event-----------------------------------------


        console.log(chalk.greenBright.bold(`\nDays Remaining ${chalk.magentaBright.bold.italic.underline(a)} : ${chalk.magentaBright.bold.italic.underline(daysRemaining)} days: ${chalk.magentaBright.bold.italic.underline(hoursRemaining)} hours: ${chalk.magentaBright.bold.italic.underline(minutesRemaining)} minutes: ${chalk.magentaBright.bold.italic.underline(secondsRemaining)} secs `));
}

//-------------------------- Main function to run the program-------------------------------------------


    async function run() 
    
    {
        let continueLoop = true;

        while (continueLoop)
            
            {
            continueLoop = await calculateTimeRemaining();
            }

       
    console.log(chalk.redBright(`\n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`))
    console.log(chalk.redBright(`\t\tTHANKS FOR USING -CLI-COUNTDOWN-TIMER`))
    console.log(chalk.redBright(`\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`))

    }
        
//run()
*/




//
console.log(chalk.bold.bgYellowBright.redBright("~~COUNTDOWN OF SECONDS FROM CURRENT TIME SECONDS~~"))

// current timestamp in milliseconds

//import chalk for colour text
import chalk from 'chalk';
//import seconds countdown{
import {differenceInSeconds} from 'date-fns';
import { min } from 'date-fns/fp/min';

//import { differenceInMinutes } from 'date-fns';

//import { secondsInHour } from 'date-fns/constants';

function countdwn(){
let input = seconds;
function startTime(value: number){
    const initialValue = new Date().setSeconds(new Date().getSeconds() + value)
    const intervalTime = new Date(initialValue);
    setInterval((() => {
        const currentTime = new Date();

        //countdown start
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        //const timeDiffs = differenceInMinutes(intervalTime, currentTime);

        if(timeDiff <= 0){
            console.log(chalk.bold.green("Timer has expired!"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24))/ 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.bold.magenta(`${min.toString().padStart(2, "0")} minutes and ${sec.toString().padStart(2, "0")} seconds left`))
        }), 1000)
}

startTime(input)
}
countdwn()
//run()

/*

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


// prints date & time in YYYY-MM-DD format
console.log(year + "/" + month + "/" + date);

*/