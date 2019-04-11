# train_scheduler
App that works w/ Firebase to store and retrieve data

## Instructions
User enters the following information:
* Train Name
* Destination
* First train departure time
* Frequency of train runs

The data entered is stored in a Firebase database.

The Current Train Table will populate with the information input as well as calculate the next arrival and the minutes until the next train arrives. This is done by using moment.js