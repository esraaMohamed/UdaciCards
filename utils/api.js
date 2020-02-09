import React from 'react';
import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'udacicards:decks'

const initialDecks = () => {
    return {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
}

const parseDecks = (results) => {
    return (results) ? JSON.parse(results) : initialDecks()
}

export const getDecks = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(parseDecks)
}

export const getDeck = (title) => {
    return AsyncStorage.getItem(title)
}

export const saveDeckTitle = (title) => {
    console.log("deck title ", title)
    getDecks().then((decks) => {
        if (!decks[title]) {
            decks[title] = {
                title: title,
                questions: []
            }
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        }
    })
}

export const addCard = (title, card) => {
    getDecks().then((decks) => {
        if (decks[title] && decks[title]['questions']) {
            decks[title]['questions'].push(card)
        }
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    })
}

export const removeDeck = (deckTitle) => {
    getDecks().then((decks) => {
        AsyncStorage.removeItem(deckTitle).then(
            (decks) =>  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks)))
    })
}