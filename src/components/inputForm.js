import React from 'react'
import {useContext } from 'react'
import { NewTodoContext } from '../App'

export default function InputForm(props) {
    const newTodoCard = useContext(NewTodoContext)
    console.log(newTodoCard)
    const {
        newTodo,
    } = props

    function updateNewCard(e){
        const inputValue = e.target.value
        newTodoCard[e.target.id] = inputValue
        console.log(newTodoCard[e.target.id])
    }
  return (

    <div className="flex flex-1 justify-center items-center">
        <form onSubmit={newTodo} className="p-44">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Title</label>
            <input onChange={updateNewCard} type="text" id="title" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="What are you going to do?" />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Description</label>
            <textarea onChange={updateNewCard} id="description" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Describe in detail your mission" />
          </div>
          <div className="mb-6">
            <label htmlFor="notes" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Notes</label>
            <textarea onChange={updateNewCard} id="notes" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Any notes?" />
          </div>
          <div className="mb-6">
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Date</label>
            <input onChange={updateNewCard} type="date" id="date" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"/>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

        </form>
      </div>
  )
}
