import React, { useState } from 'react'

export default function ChatInput({onSubmit}) {

    const [question,setQuestion] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (question.trim()) {
            onSubmit(question)
            setQuestion("")
        }
    }
  return (
      <div className='container my-4'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="question" className='my-2'>Ask me I am Ready to Answer</label>
                <input
                    placeholder='enter your question'
                    type='text'
                    className='form-control'
                    id='question'
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                />
              </div>
              {/* <button className='btn btn-primary my-2'>Ask Me</button> */}
          </form>
          
    </div>
  )
}
