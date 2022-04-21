import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        'react native', 'react'
    ]
}

function courses (state = INITIAL_STATE, action: { type: any; title: any; }) {
    switch (action.type) {
        case 'ADD':
            return {...state, data: [...state.data, action.title]}
        default:
            return state
    }
}

const store = createStore(courses)

export default store