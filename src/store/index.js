import {configureStore,createSlice} from '@reduxjs/toolkit';

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
        login(state,action){
            state.isLoggedIn=true
        },
        logout(state,action){
            state.isLoggedIn=false
        }
    }
});

export const patientSlice=createSlice({
    name:'patientSlice',
    initialState:{
        patients:[
        {id:1,name:'Shubman Gill',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care',userPhoto:'https://upload.wikimedia.org/wikipedia/commons/3/34/Shubman_Gill_2023_%28cropped%29.jpg'},
        {id:2,name:'Rohit Sharma',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care',userPhoto:'https://upload.wikimedia.org/wikipedia/commons/3/34/Shubman_Gill_2023_%28cropped%29.jpg'},
        {id:3,name:'Virat Kohli',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:4,name:'Shreyas Iyer',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:5,name:'KL Rahul',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:6,name:'Surya Kumar',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:7,name:'Ravindra Jadeja',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:8,name:'Kuldeep Yadav',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:9,name:'Mohammed Siraj',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:10,name:'Mohammed Shami',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:11,name:'Jasprit Bumrah',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:12,name:'Shardul Thakur',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Gautam Gambhir',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'MS Dhoni',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Zaheer Khan',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Suresh Raina',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Yusuf Pathan',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Munaf Patel',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Hardik Pandya',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Krunal Pandya',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Deepak Chahar',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Rahul Chahar',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Yuzi Chahal',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Smriti Mandhana',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'},
        {id:13,name:'Shreyanka Patil',policyID:'112233',policy_end_date:'12/12/197',policy_company:'Tata Health Care'}
    ]}
})

export const authActions=authSlice.actions;
export const patientActions=patientSlice.actions;

export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        patientData:patientSlice.reducer
    }
});