# self-care-center
## Overview
How can I care for myself? One way is with affirmations and mantras! You will be building an app that helps users remind themselves of their inherant value!

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

The spec for this project can be found [here](). 

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events

## Setup

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!

## Workflow
Make sure you're utilizing git best practices and commiting frequently. 

### Iteration 0: Build Out Comp
- Images are below
- An assets directory is provided in the repo, and colors are provided in the CSS file.

### Iteration 1: Add Random Affirmation and Mantra feature

- When a user selects a message option  and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category
- When the message appears, the mediation icon disappears from the message area

### Iteration 2: Error Handling and Clear Button

- The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a message is visible. When the clear button is clicked and the food is removed, the image of the meditation icon should re-appear.
- User should not be able to click the "Receive Message" button selected a message option.

_Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!_

### Iteration 4: Adding a Recipe

- The user can click an "Add a Recipe" button, which will display a form to add a new recipe at the bottom of the page
- The user can add a type and a name, click the "Add New" recipe and that recipe will be added to the appropriate list
- When a new recipe is added, that recipe should automatically display instead of the cookpot icon

_NOTE: None of this needs to persist on page refresh_

### Iteration 5: BONUS ROUND (Ideas for Extensions)

_NOTE: This round is not required, and you should absolutely not be working on this unless your UI is solid and you are 100% sure that all of Iterations 1-4 are fully functional and bug free._

- Add a loading animation when a user clicks the "Let's Cook" button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
- When a user tries to add to a recipe type that does not exist, we see an error message, OR the new category gets added!
- Add the ability to delete a recipe (ie: when a recipe shows up, show a button that says "I don't like this recipe" (or something similar), and remove it from the array so that it will not show up any more (does not need to persist on page load). Make sure to alert the user in some way that the recipe has been removed. 
- Make sure that the same recipe (single item or entire meal) won't be generated more than once. Make sure to add error handling for when a user "runs out of recipes." (does not need to persist on page load)
- Additional functionality for entire meal -> add the ability to swap out meal items. Note: Make sure your design for this matches the theme
- CYOA Extension! Make sure you run your idea by instructors
<hr/>

### Message Lists (Feel free to use your own instead!)

#### Affirmations

- I forgive myself and set myself free.
- I believe I can be all that I want to be.
- I am in the process of becoming the best version of myself.
- I have the freedom & power to create the life I desire.
-I choose to be kind to myself and love myself unconditionally.
- My possibilities are endless.
- I am worthy of my dreams.
- I am enough. 
- I deserve to be healthy and feel good.
- I am full of energy and vitality and my mind is calm and peaceful.
- Every day I am getting healthier and stronger.
- I honor my body by trusting the signals that it sends me.
- I manifest perfect health by making smart choices.

#### Mantras
- Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.
- Don’t let yesterday take up too much of today.
- Every day is a second chance.
- Tell the truth and love everyone. 
- I am free from sadness.
- I am enough.
- In the beginning it is you, in the middle it is you and in the end it is you.
- I love myself.
- I am present now.
- Inhale the future, exhale the past.
- This too shall pass.
- Yesterday is not today.
- The only constant is change.
- Onward and upward.
- I am the sky, the rest is weather.