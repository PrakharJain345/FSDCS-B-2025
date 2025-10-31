import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="container">
      <h1>Welcome to React App</h1>
      <h2 style={{ backgroundColor: 'cyan', color: 'white' }}>Student Profiles</h2>
      <Gallery />
    </div>
  );
}

export default App;
