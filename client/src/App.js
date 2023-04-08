import './App.css';
import PersonCard from './components/PersonsCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {'Jared'} 
      lastName = {'Sunday'}
      age = {34}
      hairColor = {'Dark Brown'} />
      <PersonCard 
      firstName = {'Alex'} 
      lastName = {'Ponce'}
      age = {21}
      hairColor = {'Dark Brown'} />
      <PersonCard 
      firstName = {'Khrista'} 
      lastName = {'Kwhaja'}
      age = {45}
      hairColor = {'Dark Brown'} />
      <PersonCard 
      firstName = {'yoda'} 
      lastName = {'yogurt'}
      age = {145}
      hairColor = {'none'} />
    </div>
  );
}

export default App;
