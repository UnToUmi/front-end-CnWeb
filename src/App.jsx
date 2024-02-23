
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRouter from './routers/UserRouter';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<UserRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
