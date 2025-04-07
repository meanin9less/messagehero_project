import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
//이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다…
const MHSlice = createSlice({
    name: "MH",
    initialState: {
        users: [
            {
                userId: "hyun", password: "1234", name: "최현범", contact: "01086648729", add: 0, contacts: [
                    { name: "박시현", contact: "01012341231", etc: "프로젝트" },
                    { name: "장세령", contact: "01012341232", etc: "프로젝트" },
                    { name: "지창현", contact: "01012341233", etc: "프로젝트" },
                ], userStyle: [
                    { title: "새해인사1", body: "안녕하세요1" },
                    { title: "새해인사2", body: "안녕하세요2" },
                    { title: "새해인사3", body: "안녕하세요3" },
                    { title: "새해인사4", body: "안녕하세요4" },
                ]
            },
            {
                userId: "sihyun", password: "1234", name: "박시현", contact: "01012345678", contacts: [
                    { name: "장세령", contact: "01012341232", etc: "프로젝트" },
                    { name: "지창현", contact: "01012341233", etc: "프로젝트" },
                    { name: "최현범", contact: "01012341234", etc: "프로젝트" },
                ], userStyle: [
                    { title: "새해인사1", body: "안녕하세요" },
                    { title: "새해인사2", body: "안녕하세요" },
                    { title: "새해인사3", body: "안녕하세요" },
                    { title: "새해인사4", body: "안녕하세요" },
                ]
            },
            {
                userId: "changhyun", password: "1234", name: "지창현", contact: "01012345678", contacts: [
                    { name: "박시현", contact: "01012341231", etc: "프로젝트" },
                    { name: "장세령", contact: "01012341232", etc: "프로젝트" },
                    { name: "최현범", contact: "01012341234", etc: "프로젝트" },
                ], userStyle: [
                    { title: "새해인사1", body: "안녕하세요" },
                    { title: "새해인사2", body: "안녕하세요" },
                    { title: "새해인사3", body: "안녕하세요" },
                    { title: "새해인사4", body: "안녕하세요" },
                ]
            },
            {
                userId: "saeryeong", password: "1234", name: "장세령", contact: "01012345678", contacts: [
                    { name: "박시현", contact: "01012341231", etc: "프로젝트" },
                    { name: "지창현", contact: "01012341233", etc: "프로젝트" },
                    { name: "최현범", contact: "01012341234", etc: "프로젝트" },
                ], userStyle: [
                    { title: "새해인사1", body: "안녕하세요" },
                    { title: "새해인사2", body: "안녕하세요" },
                    { title: "새해인사3", body: "안녕하세요" },
                    { title: "새해인사4", body: "안녕하세요" },
                ]
            },
        ],
        currentUser: null,
        blackList: [
            { contact: "01012341231", fishingCount: 0, spamCount: 45 },
            { contact: "01012341232", fishingCount: 23, spamCount: 0 },
            { contact: "01012341233", fishingCount: 23, spamCount: 45 },
        ]
    },
    reducers: {
        ///////////////로그인 로그아웃 시작////////////////
        login: (state, actions) => {
            const { inputId, inputPw } = actions.payload;
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].userId === inputId) {
                    if (state.users[i].password === inputPw) {
                        state.currentUser = state.users[i];
                        alert("로그인하였습니다.");
                        return;
                    }
                    alert("비밀번호가 잘못되었습니다.");
                    return;
                }
            }
            alert("아이디가 잘못되었습니다.");
            return;
        },
        logout: (state) => {
            state.users.map(u => u.userId === state.currentUser.userId ? state.currentUser : u);
            state.currentUser = null;
        },
        ////// 로그인 로그아웃 끝//////
        ////// 연락처 검색, 추가, 수정, 삭제 시작////////
        searchContactList: (state, actions) => {
            const { userId, search } = actions.payload;
            if (search) {
                const userContacts = state.users.find(u => u.userId === userId).contacts;
                const filterContacts = userContacts.contact.filter(c => c.name.include(search)).sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                state.contactList = [...filterContacts.map(l => <li><p>{l.name}</p><Link to={l.contact}>{l.name}</Link></li>)];
            }
        },
        addContact: (state, actions) => {
            const inputContact = actions.payload;
            for (let c of state.currentUser.contacts) {
                if (c.contact === inputContact.contact) {
                    alert("중복된 번호입니다.");
                    return;
                }
            }
            state.currentUser = {
                ...state.currentUser,
                contacts: [...state.currentUser.contacts, inputContact].sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            };
        },
        updateContact: (state, actions) => {
            const { currentContactNum, name, contact, etc } = actions.payload;
            for (let i = 0; i < state.currentUser.contacts.length; i++) {
                if (state.currentUser.contacts[i].contact === currentContactNum) {
                    state.currentUser.contacts[i] = { name, contact, etc };
                    break;
                }
            }
            state.currentUser = {
                ...state.currentUser,
                contacts: [...state.currentUser.contacts].sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            }
        },
        deleteContact: (state, actions) => {
            const currentContactNum = actions.payload;
            state.currentUser.contacts = state.currentUser.contacts.filter(c => c.contact !== currentContactNum);
            state.currentUser = {
                ...state.currentUser,
                contacts: [...state.currentUser.contacts].sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            }
        },
        ///////////////연락처 검색 추가 수정 삭제 끝////////////////
        ///////////블랙리스트 추가 /////////////
        addBlackList: (state, actions) => {
            const { inputContact, fishing, spam } = actions.payload;
            const searchReport = state.blackList.find(b => b.contact === inputContact);
            if (searchReport) {
                searchReport.fishingCount += fishing; 
                searchReport.spamCount += spam;
            } else {
                state.blackList = [
                    ...state.blackList,
                    { contact: inputContact, fishingCount: fishing, spamCount: spam }
                ];
            }
        },
        //////////////블랙리스트 추가 끝///////////////
        /////////////사용자 정의 시작/////////////////////
        customAdd: (state, actions) => {
            const { title, body } = actions.payload;
            state.currentUser={
                ...state.currentUser,
                userStyle:[...state.currentUser.userStyle, {title, body}],
            }
        },
        customUpdate: (state, actions) => {
            const {styleTitle, title, body} = actions.payload;
            for(let i=0; i<state.currentUser.userStyle.length; i++){
                if(state.currentUser.userStyle[i].title === styleTitle){
                    state.currentUser.userStyle[i] = {title, body};
                    break;
                }
            }
            state.currentUser = {
                ...state.currentUser,
                userStyle:[
                    ...state.currentUser.userStyle
                ]
            }
        },
        customDelete:(state, actions) =>{
            const styleTitle = actions.payload;
            state.currentUser = {
                ...state.currentUser,
                userStyle:[
                    ...state.currentUser.userStyle.filter(s=>s.title !== styleTitle)
                ]
            }
        }
    }
});

export const { login, logout, //로그인
            addContact, searchContactList, updateContact, deleteContact, //연락처
            customAdd, customUpdate, customDelete, //사용자정의 서식
            addBlackList, //블랙리스트 추가
        } = MHSlice.actions;
export default MHSlice;