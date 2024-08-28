
import './App.css';
import  { DataProvider } from './context/DataContext';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
     <DataProvider>
      <Start/>
      {/* //Quize page */}
      <Quiz/>
      <Result/>
     </DataProvider>

     
    </div>
  );
}

export default App;
