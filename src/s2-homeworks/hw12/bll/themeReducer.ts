
export type InitStateType={
    themeId:number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {...state, themeId:action.id}
        }

        default:
            return state
    }
}

export type ActionType = ChangeTM

export type ChangeTM = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
