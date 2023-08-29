import {Deck} from "./decks-api.ts";

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "DECKS/SET-DECKS":
      return {
        ...state,
        decks: action.decks
      }

    case 'DECKS/ADD-DECK':
      return {
        ...state,
        decks: [action.deck, ...state.decks]
      }

    default: return state
  }
}


type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS' as const,
  decks
})

export const addDeckAC = (deck: Deck) => ({
  type: 'DECKS/ADD-DECK' as const,
  deck
})