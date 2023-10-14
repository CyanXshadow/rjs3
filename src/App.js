import './App.css';
import ColorPicker from './components/Task3';

const colors = ["lightblue","cyan","lime","hotpink","purple","orange","white","indigo"];

function App() {
  return (
    <div>
    <ColorPicker colors={colors} />
    </div>
  );

}

export default App;