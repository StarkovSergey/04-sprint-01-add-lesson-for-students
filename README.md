# Дополнительный урок 01 для спринта 04 (Четверг)

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

Задание 1 (пишем get-запрос) - 5 минут
1.Написать get-запрос за decks и протипизировать ответ (fetchDecks). (Параметры указывать и типизировать не надо)
2.Отправить запрос при монтировании компонента DecksList


Задание 2 (redux flow) - отрисовать колоды, используя redux state, 10 минут
1. Написать action creator (setDecksAC)
2. Написать case в reducer для этого action
3. Задиспатчить action в компоненте DecksList
4. Получить decks из redux state в компоненте DecksList
5. Отрендерить decks, используя компонент DeckItem

Задание 3 (async redux flow)
Вынести асинхронную логику из компонента DecksList
___
1. Написать fetchDecksTC (файл decks-thunks.ts)
2. Использовать fetchDecksThunk в компоненте DecksList


Задание 4 (post-запрос)
1. Написать post-запрос в decksAPI (addDeck) - будем работать только с name
2. Написать addDeckTC и addDeckAC (+case в decksReducer)
3. Задиспатчить thunk при отправке формы в компоненте AddNewDeckForm (функция onSubmit, name берём из data)