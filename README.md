## CS 4690 - Angularified Project

The following repository contains code whose purpose is to display student information using a list of student data stored in JSON files. The code is written using a couple of pieces of the mean stack, although not fully implementing the entire stack. It's a work in progress and will get there eventually.

The code was originally written using a hefty amount of jquery and bootstrap, but has been refactored to use Angular (v1), and implements design principles for Material Design using materialize.js.

## But why?

Although the following code doesn't actually affect any data for actual students, it is a proof of concept that has allowed me and my fellow class members to practice design and programming principles in a real world setting.

## Installation

Step 1: Have node (version 6.*), npm, and mongoDB installed. Make sure mongo is running on port 27017. 

Step 2: Clone the repository to your local drive.

Step 3: Browse to location on local drive where repository was cloned in your terminal. In the folder containing the package.json, type "npm install". This should install all of the neccessary modules to get the app up and running

Step 4: Type "npm run addStudents" to create a students collection in your mongo db, and add some records to it. 

Step 5: Type "npm start" to boot up the app. 

All done! The server will display to the console that it is listening. Head to your browser and type "localhost:3000" in the URL. It should look like this:

![](https://github.com/CaseyLeeMurphy/cs4690/blob/master/indexPage.png)
## API Reference

Please head to the following link for an API Reference guide:
https://docs.google.com/spreadsheets/d/1lyz3gjmhb16lDoHzpJCTbfdjxWaJrBBAtga8kw4Kn-Q/edit?usp=sharing

## Copyright

All of the code was written by me (Casey Lee Murphy). Although the code is being posted to github in a very open environment, I will not be held responsible for any malicious copying of this data.
This code is left here as a reference for others on the path to learning and is not intented to help you get an "A" by simply copy/pasting.

Cheers!
