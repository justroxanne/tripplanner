import './App.css'

function App() {

  return (
    <div className="app">
      <h1>
        Trip planner
      </h1>
      <div style={{height: "100%"}}>
        <div style={{backgroundColor: "var(--main-color)", height: "40%"}}></div>
        <div style={{backgroundColor: "var(--second-color)", height: "40%"}}></div>
      </div>
    </div>
  )
}

export default App
