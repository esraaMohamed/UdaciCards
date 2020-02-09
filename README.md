# UdaciCards (Mobile Flashcards app)

This is the code for the final assessment project for Udacity's React Native course.

## TL;DR

To get started right away:

* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`
* if problems occur with app use `npm clean` or `yarn clean` to clear cache and then run `npm install` or `yarn install` and `npm start` or `yarn start` again
## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .expo
│   ├── packaged-info.json #DO NOT MODIFY
│   └── settings.json #DO NOT MODIFY
├── .expo-shared
│   └── assets.json #DO NOT MODIFY
├── assets
│   ├── icon.png #App icon
│   └── splash.png #Splash screen icon
├── actions
│   └── index.js # contains redux actions
├── middleware
│   ├── index.js # contains apply middleware
│   └── logger.js # container logger middleware
├── reducers
│   └── index.js # contains root reducer
└── components
│   ├── AddCard.js # This is the add card to deck component.
│   ├── AddDeck.js # The add deck component.
│   ├── Quiz.js # This component quiz component.
│   ├── SubmitButton # This is the submit button component.
│   ├── ViewDeck # this is the view deck component.
|   └── ViewDecks # this is the view decks component
└── utils
│   ├── colors.js # contains color values for the colors used in the app
│   ├── api.js # handles retrieving decks, retrieving a specific deck, adding a deck and adding cards to a deck using AsyncStorage
│   └── helpers.js # contains helper functions
└── App.js # This is the root component of the app.
└── app.json # contains application configuration for builds
```