import {useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {useEffect} from "react";
import {fetchDecksTC} from "../decks-thunks.ts";

export const useFetchDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector((state) => state.decks.decks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [])

    return {
        decks
    }
}