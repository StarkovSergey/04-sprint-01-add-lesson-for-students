import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {
  const {decks} = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
    </ul>
  )
}
