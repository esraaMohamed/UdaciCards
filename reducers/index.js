import {RETRIEVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK} from "../actions";

Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter( key => predicate(obj[key]) )
        .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

const decks = (state = {}, action) => {
    switch (action.type) {
        case RETRIEVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            };
        case DELETE_DECK:
            const title = action.title
            return Object.filter(state, deck => deck.title !== title.deckTitle)
        case ADD_CARD:
            return {
                ...state,
                [action.title]: {
                    questions: state[action.title].questions.concat({
                        'question': action.question,
                        'answer': action.answer
                    })
                }
            };
        default:
            return state
    }
}

export default decks