import { AsyncStorage } from 'react-native';
import storage from "./asyncStorageUtility";

const decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
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
};



export const getDecks = () => {
    storage.setItem('decks', decks).then(r => {
        console.log(r)
    })
    storage.getItem('decks').then(
        decks => decks
    )
};

export const cardsCount = (title) => {
    const decks = AsyncStorage.getItem('decks')
    return decks[title].questions.length
}

export const getDeck = title => {
    const decks = AsyncStorage.getItem('decks')
    return decks[title]
};

export const saveDeckTitle = title => {
    let newDeck = {};
    newDeck[title] = {title: title, questions: []};
    decks[title] = newDeck
    AsyncStorage.setItem('decks', decks);
};

export const addCardToDeck = (title, card) => {
    let deck = decks[title]
    let question = card.question
    let answer = card.answer
    deck.questions.push({question, answer})
    AsyncStorage.setItem('decks', decks);
}
