const initialState = {
  decks: [] as any[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: any): DecksState => {
  return state
}
