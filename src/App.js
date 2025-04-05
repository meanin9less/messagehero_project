
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
// import Phonebook from './Phonebook';
import Message from './Message';
import Blacklist from './Blacklist';
import Customize from './Customize';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/header' element={<Header></Header>}>
          {/* <Route path='/header/phonebook' element={<Phonebook></Phonebook>}>
            <Route></Route>
            <Route path='/header/phonebook/:contact'></Route>
          </Route> */}
          <Route path='/header/message' element={<Message></Message>}></Route>
          <Route path='/header/blacklist' element={<Blacklist></Blacklist>}></Route>
          <Route path='/header/customize' element={<Customize></Customize>}>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
