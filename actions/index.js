export const RETRIEVE_DECKS = 'RETRIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'


export const retrieveDecks = (decks) => {
    return {
        type: RETRIEVE_DECKS,
        decks
    }
}

export const addDeck = (title) => {
    return {
        type: ADD_DECK,
        title
    }
}

export const addCardToDeck = (title, card) => {
    return {
        type: ADD_CARD,
        question: card.question,
        answer: card.answer,
        title: title
    }
}

export const deleteDeck = (title) => {
    return {
        type: DELETE_DECK,
        title
    }
}
