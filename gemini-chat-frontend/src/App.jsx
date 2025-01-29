import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/Api'
import { BookLoaderComponent } from './components/BookLoaderComponent '

function App() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleQuestionSubmit = async (question) => {
    setLoading(true)
    setResponse(null)

    try {
      const apiResponse = await fetchChatResponse(question)
      console.log(question)
      setResponse(apiResponse)
    } catch (error) {
      alert("Failed To Get Answer From Imran")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center'>
        <h1 className='text-uppercase py-2'>Chat with Imran & hasan</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} />
      
      {loading ? (<BookLoaderComponent/>): (
        <ChatResponse response={ response} />
      )}
      
    </div>
  )
}

export default App
