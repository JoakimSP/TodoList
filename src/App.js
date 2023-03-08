import TodoCard from "./components/TodoCard";
import InputForm from "./components/inputForm";
import { useState, createContext, useRef } from "react";
import data from './data/data.json'
import tailwind from './index.css'

export const NewTodoContext = createContext()

function App() {
  const [cards, addCard] = useState(data)
  const inputStrings = useRef({
    title : "",
    description : "",
    notes : "",
    date : ""
})



  function addNewTodo(e){
  e.preventDefault()
  const newCard = {...inputStrings}
  addCard(prevState => [...cards, newCard])
    
  }
  return (
    <NewTodoContext.Provider value={inputStrings}>
    <div className="flex items-center">
      <div className="flex flex-1 flex-wrap">
      {cards.map((card) => {
        return <TodoCard key={card.title} title={card.title} description={card.description} notes={card.notes} date={card.date} />
      })}
      </div>
        <InputForm newTodo={addNewTodo}/>
    </div>
    </NewTodoContext.Provider>
  );
}

export default App;
