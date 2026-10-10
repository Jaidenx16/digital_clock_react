import { format } from 'date-fns';
import './App.css'
function App() {
   return (
    <p className="clock">
      {format(new Date(), 'MMM dd, yyyy h:mm:ss a')}
    </p>
   )
  }
  export default App
