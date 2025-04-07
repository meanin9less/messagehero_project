
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Header from './Header';
import Phonebook from './Phonebook';
import Message from './Message';
import Blacklist from './Blacklist';
import AddContact from './AddContact'; 
import UpdateContact from './UpdateContact';
import Customize from './Customize';
import CustomAdd from './CustomAdd';
import CustomRead from './CustomRead';
import BlackListSearchResult from './BlackListSearchResult';
import BlackListReport from './BlackListReport';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        <Route path='/header' element={<Header></Header>}>

          <Route path='/header/phonebook' element={<Phonebook></Phonebook>}>
            <Route index element={<AddContact></AddContact>}></Route>
            <Route path='/header/phonebook/:currentContactNum' element={<UpdateContact></UpdateContact>}></Route>
          </Route>

          <Route path='/header/message' element={<Message></Message>}></Route>

          <Route path='/header/blacklist' element={<Blacklist></Blacklist>}>
            <Route path='/header/blacklist/:searchedcontact' element={<BlackListSearchResult></BlackListSearchResult>}></Route>
            <Route path='/header/blacklist/blackListreport' element={<BlackListReport></BlackListReport>}></Route>
          </Route>

          <Route path='/header/customize' element={<Customize></Customize>}>
            <Route index element={<CustomAdd></CustomAdd>}></Route>
            <Route path='/header/customize/update/:styleTitle' element={<CustomRead></CustomRead>}></Route>
          </Route>
          
        </Route>
      </Routes>
  );
}

export default App;
