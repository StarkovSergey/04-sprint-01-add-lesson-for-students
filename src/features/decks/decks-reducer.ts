const initialState = {
  decks: [],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action): DecksState => {
  return state
}
