import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import BaseLayout from './components/layout/BaseLayout';
import BoardList from './components/board/board_list';

function App() {
  return (
    <div className='container'>
      <h1>My Shop Board </h1>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='board' element={<BoardList />}>
            <Route path='list/:currentPage' element={<BoardList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
