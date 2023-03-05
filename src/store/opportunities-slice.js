const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sideBarContent: [
        {
            id: 1,
            type: 'Job',
            name: 'Amazon',
            title: 'Web developer',
            location: 'Mumbai, India',
            applicationStartDate: '01 Mar 23, 11:59 PM IST',
            applicationEndDate: '03 Mar 23, 11:59 PM IST',
            experience: "3-4",
            salary: "12,00,000",
            eligibility: 'Graduate'
        },
        {
            id: 2,
            type: 'Internship',
            name: 'Apple',
            title: 'Data Analyst',
            location: 'Mumbai, India',
            applicationStartDate: '01 Mar 23, 11:59 PM IST',
            applicationEndDate: '03 Mar 23, 11:59 PM IST',
            duration: '12',
            salary: "1,00,000",
            eligibility: 'Graduate'
        },
        {
            id: 3,
            type: 'Job',
            name: 'Tesla',
            title: 'Software Developer',
            location: 'Delhi, India',
            applicationStartDate: '01 Mar 23, 11:59 PM IST',
            applicationEndDate: '03 Mar 23, 11:59 PM IST',
            experience: "3-4",
            salary: "1,00,000",
            eligibility: 'Graduate'
        },
    ],
    jobDescription: null
}

const opportunitiesSlice = createSlice({
    name: 'opportunities',
    initialState,
    reducers: {
        loadJobDetails: (state, actions) => {
            console.log(actions.payload.jobData)
            state.jobDescription = actions.payload.jobData
        }
    }
})

export const opportunitiesActions = opportunitiesSlice.actions
export default opportunitiesSlice