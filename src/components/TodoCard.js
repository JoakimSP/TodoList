import React from 'react'

export default function TodoCard(props) {
    const {
        title,
        description,
        dueDate,
        notes,
    } = props
  return (

        <div className='flex flex-col items-center border-8 border-gray-500 w-60 rounded-3xl p-8 gap-4 w-auto'>
            <h1 className='text-3xl'>{title}</h1>
            <h3 className='text-xl' >{description}</h3>
            <p className='italic'>{notes}</p>
            
            <ul className='list-disc'>
                <li>dsa</li>

            </ul>
            <h2 className='text-2xl font-bold self-end'>{dueDate}</h2>
            </div>

  )
}
