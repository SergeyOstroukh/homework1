import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                state.sort(function (a, b) {
                    let nameA = a.name
                    let nameB = b.name
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
            }
            else if (action.payload === "down"){
                state.sort(function (b, a) {
                    let nameA = a.name
                    let nameB = b.name
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
            }

            return [...state]
        }
        case 'check': {
            const filteredUsers = state.filter(user => user.age >= action.payload);
            return [...filteredUsers];


           // need to fix
        }
        default:
            return state
    }
}