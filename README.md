# Дополнительный урок 01 для спринта 04 (Четверг)

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)


### Задание 1
1. Написать get-запрос за decks (в файле decks-api.ts) и протипизировать ответ (fetchDecks). Параметры типизровать не надо
2. Отправить запрос из компонента DecksList


### Задание 2
1. Написать action creator (setDecksAC)
2. Написать case в decksReducer
3. Задиспатчить action в компоненте DecksList
4. Получить decks из redux state в компоненте DecksList
5. Отрендерить decks, используя компонент DeckItem

### Задание 3
1. Вынести асинхронную логику из компонента DecksList в FetchDecksTC

#### Задание 4
1. Написать post-запрос в decksAPI (addDeck)
2. Написать addDeckTC и addDeckAC (+case в decksReduces)
3. Задиспатчить thunk при отправке формы в компоненте AddNewDeckForm (в функции onSubmit)