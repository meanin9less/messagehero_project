import { createSlice } from "@reduxjs/toolkit";
//이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다…
const MHSlice = createSlice({
    name: "MH",
    initialState: {
        users: [
            { userId: "hyun", password: "1234", name: "최현범", contact: "01086648729", login: false, contacts: [], userStyle: []},
            { userId: "sihyun", password: "1234", name: "박시현", contact: "01012345678", login: false, contacts: [], userStyle: []},
            { userId: "changhyun", password: "1234", name: "지창현", contact: "01012345678", login: false, contacts: [], userStyle: []},
            { userId: "saeryeong", password: "1234", name: "장세령", contact: "01012345678", login: false, contacts: [], userStyle: []},
        ],
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
            const user = state.users.find((u) => u.userId === inputId);
            if (user) {
                if (user.password === inputPw) {
                    user.login = true;
                    for (let i = 0; i < state.users.length; i++) {
                        if (state.users[i].userId === user.userId) {
                            state.users[i] = user;
                            return;
                        };
                    };
                };
                alert("비밀번호가 잘못되었습니다.");
                return;
            };
            alert("아이디가 잘못되었습니다.");
            return;
        },
        logout: (state, actions) => {
            const user = state.users.find(u=>u.userId===actions.payload);
            user.login = false;
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].userId === user.userId) {
                    state.users[i] = user;
                    break;
                }
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

export const { login, logout, addContact } = MHSlice.actions;
export default MHSlice;