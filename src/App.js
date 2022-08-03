import './App.css';
import Navigation from './components/NavBar'
import Table from './components/tableList';
import Entry from './components/mainArea';
import Kotakpasien from './components/kotakpasien';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App mb-5">
      <Navigation/>
      <Table/> 
      <Entry/>
      <Kotakpasien/>
    </div>
  );
}

export default App;
