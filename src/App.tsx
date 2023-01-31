import './App.css'
import FlipButton from './flip-button'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://mediatool.com" target="_blank">
          <img src="https://mediatool.com/wp-content/uploads/mediatool-logo-blue.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Flip Button Exercise</h1>
      <FlipButton numButtons={5} />
      <div className="card">
        <p>
          Create a flip button component according to the specification and add examples of using it here below.
        </p>
      </div>
    </div>
  )
}

export default App
