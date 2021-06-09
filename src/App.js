import Main from './components/main'
import ToggleContextProvider from './contexts/toggle';

function App() {
  return (
    <div className="App">
      <ToggleContextProvider>
        <Main />  
      </ToggleContextProvider>
    </div>
  )
}

export default App;
