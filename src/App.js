import logo from './logo.svg';
import './App.css';
import  { DataProvider } from './context/DataContext';
import Start from './components/Start';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
     <DataProvider>
      <Start/>
      {/* //Quize page */}
      <Quiz/>

     </DataProvider>

     
    </div>
  );
}

export default App;
