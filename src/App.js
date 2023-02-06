import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import BaseLayout from './components/layout/BaseLayout';
import BoardList from './components/board/board_list';
import BoardView from './components/board/board_view';
import BoardWrite from './components/board/board_write';

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
          <Route path='board/view/:currentPage/:num' element={<BoardView />} />
          <Route path='board/write' element={<BoardWrite />} />
          <Route
            path='board/write/:currentPage/:num/:ref/:re_step/:re_level'
            element={<BoardWrite />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
