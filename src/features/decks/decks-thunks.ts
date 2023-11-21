import { Dispatch } from 'redux'
import { AddDeckParams, decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  return decksAPI.addDeck(params).then(res => {
    dispatch(addDeckAC(res.data))
  })
}