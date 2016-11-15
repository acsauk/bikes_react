## Objectives of project

Design a front end UI that displays information about bikes by consuming a JSON file. The user should be able to sort the bikes into a different order based on the bike class which should persist between page refreshes.

## Technologies used

Production:
- Javascript
- jQuery
- React.js
- MUIcss framework
- superagent

Testing:
- Mocha
- Enzyme
- Chai
- Nock

## How to run it

Ensure you have Node.js/npm installed on your system by typing `node -v` in your terminal/command line. If a version number appears then you're all set, otherwise see [here](https://docs.npmjs.com/getting-started/installing-node) for installation instructions.

Install all project modules and dependencies by typing the below command in your terminal/command line:

`$ npm install`

And then to start a local server type:

`$ npm run dev:hot`

Open your browser and navigate to `localhost:7700` and the app will be ready to use.

## Features

### Load bike info from API

This sends an AJAX request to the server to pull down the customer's info. I was encountering some issues pulling down from the mocky.io server during development with cross origin warnings preventing the page from loading so I hosted the JSON file on myjson.com to speed development.

The bike info is then displayed in a list summarising the bike name, description, class and photo. The links provided for photos don't seem to be active at the moment so there is a placeholder image for each bike.

### Bike Sorting

While I managed to come up with a way of sorting the bikes by class, I ran out of time before I could implement it in react. The idea is that the sort function will iterate over the bikeList array and evaluate if the class array associated with the bike matches the class that the user selects from a dropdown box. If there is a match the bike object will be moved to the top of the bikeList array - if not it will be moved to the bottom of the array which will result in a sorted array.

### Maintainability

I have tried to always use dynamic solutions to problems during the project such as writing a function to populate the drop down rather than hard coding the class names. This would allow any future bike classes to be displayed here if added to the JSON file. Admittedly the source of the classes is hardcoded in the App component but I again ran out of time before implementing an extraction function to get the unique classes from the JSON file.

## Future features

As the app did not fully meet the brief I have noted my thoughts behind achieving some of the other requirements.

### Persisting data

I was researching on how best to persist data between sessions in react and there was a mix of views betrween using cookies or localStorage. In the end I decided to use localStorage as it would ensure the information was more up to date based on a users last sort selection. A useful node package to achieve this is [react-pstate]https://github.com/mgechev/react-pstate and it looked like this would meet the requirements of the brief.

### Filters

If a user would want to see only bikes belonging to a certain class they could filter results rather than sort. For the current selection of 7 bikes sorting is fine but if there were many more it would be more practical to filter rather than sort. I was planning to achieve this by using the JavaScript filter() function and feeding in the user selection from a drop down.
