import './App.css';
import AddStudent from './components/students/AddStudent';
import StudentList from './components/students/StudentList';

function App() {
  return (
    <div className="App">
      <AddStudent/>
      <StudentList/>
    </div>
  );
}

export default App;
