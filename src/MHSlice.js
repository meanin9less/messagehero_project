import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
//이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다…
const MHSlice = createSlice({
    name: "MH",
    initialState: {
        users: [
            { userId: "hyun", password: "1234", name: "최현범", contact: "01086648729", contacts: [
                {name: "박시현", contact: "01012341231", etc: "프로젝트"},
                {name: "장세령", contact: "01012341232", etc: "프로젝트"},
                {name: "지창현", contact: "01012341233", etc: "프로젝트"},
            ], userStyle: []},
            { userId: "sihyun", password: "1234", name: "박시현", contact: "01012345678", contacts: [
                {name: "장세령", contact: "01012341232", etc: "프로젝트"},
                {name: "지창현", contact: "01012341233", etc: "프로젝트"},
                {name: "최현범", contact: "01012341234", etc: "프로젝트"},
            ], userStyle: []},
            { userId: "changhyun", password: "1234", name: "지창현", contact: "01012345678", contacts: [
                {name: "박시현", contact: "01012341231", etc: "프로젝트"},
                {name: "장세령", contact: "01012341232", etc: "프로젝트"},
                {name: "최현범", contact: "01012341234", etc: "프로젝트"},
            ], userStyle: []},
            { userId: "saeryeong", password: "1234", name: "장세령", contact: "01012345678", contacts: [
                {name: "박시현", contact: "01012341231", etc: "프로젝트"},
                {name: "지창현", contact: "01012341233", etc: "프로젝트"},
                {name: "최현범", contact: "01012341234", etc: "프로젝트"},
            ], userStyle: []},
        ],
        currentUser:null,
        basicStyle:[
            { id:1, title: "새해인사1", body: "안녕하세요"},
            { id:2, title: "새해인사2", body: "안녕하세요"},
            { id:3, title: "새해인사3", body: "안녕하세요"},
            { id:4, title: "새해인사4", body: "안녕하세요"},
        ],
        Blacklist:[
            { contact: "01012341231", fishingcount:0, spamcount:0 },
            { contact: "01012341232", fishingcount:0, spamcount:0 },
            { contact: "01012341233", fishingcount:0, spamcount:0 },
            { contact: "01012341234", fishingcount:0, spamcount:0 },
            { contact: "01012341234", fishingcount:1, spamcount:0 },
        ]
    //     usersPhonebook: [
    //         {userId: "hyun", contacts: []},
    //         {userId: "sihyun", contacts: []},
    //         {userId: "changhyun", contacts: []},
    //         {userId: "saeryeong", contacts: []},
    //     ],
    //     usersStyle: [
    //         {userId: "hyun", userStyle: []},
    //         {userId: "sihyun", userStyle: []},
    //         {userId: "changhyun", userStyle: []},
    //         {userId: "saeryeong", userStyle: []},
    //     ],
    },
    reducers: {
        login: (state, actions) => {
            const { inputId, inputPw } = actions.payload;
            for(let i=0; i<state.users.length; i++){
                if (state.users[i].userId===inputId){
                    if(state.users[i].userPw===inputPw){
                        state.currentUser = state.users[i];
                        alert("로그인하였습니다.");
                        return;
                    }
                }
                alert("비밀번호가 잘못되었습니다.");
                return;
            }
            alert("아이디가 잘못되었습니다.");
            return;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        searchContactList:(state, actions)=>{
            const {userId, search} = actions.payload;
            if(search){
                const userContacts = state.users.find(u=>u.userId === userId).contacts;
                const filterContacts = userContacts.contact.filter(c=>c.name.include(search));
                state.contactList = [...filterContacts.map(l=><li><p>{l.name}</p><Link to={l.contact}>{l.name}</Link></li>)];
            }
        },
        addContact:(state, actions)=>{
            const {userId, contact} = actions.payload;
            const userPhonebook = state.users.find(u=>u.userId===userId);

            if(userPhonebook.contacts.length>0){
                if(userPhonebook.contacts.find(c=> c.contact === contact.contact)){
                    alert("중복된 번호입니다.");
                    return;
                };
            }
            userPhonebook.contacts.push(contact);
            for(let i=0; i<state.users.length; i++){
                if(state.users[i].userId === userPhonebook.userId){
                    state.users[i] = userPhonebook;
                    return;
                }
            }
        }
    }
});

export const { login, logout, addContact, searchContactList } = MHSlice.actions;
export default MHSlice;