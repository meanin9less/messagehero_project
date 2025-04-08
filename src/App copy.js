
import { Route, Routes } from 'react-router-dom';
import Intro from './Intro';
import Login from './Login';
import Phonebook from './Phonebook';
import Blacklist from './Blacklist';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';
import Customize from './Customize';
import CustomAdd from './CustomAdd';
import CustomRead from './CustomRead';
import BlackListSearchResult from './BlackListSearchResult';
import BlackListReport from './BlackListReport';
import Main from './Main';
import SignUp from './SignUp';
import Message1 from './Message1';
import MessageBasicStyle from './MessageBasicStyle';
import MessageMyStyle from './MessageMyStyle';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Intro></Intro>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/login/sign-up' element={<SignUp></SignUp>}></Route>
      
      <Route path='/main/' element={<Main></Main>}>

        <Route path='/main/phonebook' element={<Phonebook></Phonebook>}>
          <Route index element={<AddContact></AddContact>}></Route>
          <Route path='/main/phonebook/:currentContactNum' element={<UpdateContact></UpdateContact>}></Route>
        </Route>

        <Route path='/main/message' element={<Message1></Message1>}>
          <Route index element={<MessageBasicStyle></MessageBasicStyle>}></Route>
          <Route path="/main/message/MessageMyStyle" element={<MessageMyStyle></MessageMyStyle>}></Route>          
        </Route>

        <Route path='/main/blacklist' element={<Blacklist></Blacklist>}>
          <Route path='/main/blacklist/:searchedcontact' element={<BlackListSearchResult></BlackListSearchResult>}></Route>
          <Route path='/main/blacklist/blackListreport' element={<BlackListReport></BlackListReport>}></Route>
        </Route>

        <Route path='/main/customize' element={<Customize></Customize>}>
          <Route index element={<CustomAdd></CustomAdd>}></Route>
          <Route path='/main/customize/update/:styleTitle' element={<CustomRead></CustomRead>}></Route>
        </Route>

      </Route>




    </Routes>
  );
}

export default App;
