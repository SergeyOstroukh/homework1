import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any

    switch (action.type) {
        case 'sort': {
            const sortOrder = action.payload;
            const sortedUsers = [...state].sort((a, b) => {
                if (sortOrder === 'up') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return sortedUsers;
        }
        case 'check': {
            const minAge = action.payload;
            const filteredUsers = state.filter(user => user.age >= minAge);
            return filteredUsers;
        }
        default:
            return state;
    }
}