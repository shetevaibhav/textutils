
import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';
function App() {
  return (
    <>
      <div className="App">
      <Navbar name="TextUtils"/>
      <div className="container">
      <Textarea heading="Enter Text Here for Analysis"/>
      </div>
    </div>
    </>
  );
}
export default App;
