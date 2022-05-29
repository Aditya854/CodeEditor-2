import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Editor from "./pages/EditorPage";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Toaster position="top-right"
        toastOptions={{
          success: {
            theme:{
              primary: '#4aed88',
            }
          }
        }}>
          
        </Toaster>
      </div>
      <Router>
          <div className="App">
            <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='/editor/:roomID' element={<Editor/>} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
