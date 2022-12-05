import {ActionsType} from "./store";

export type ActionType = ReturnType<typeof AC>

export type Type = {
}

export const AC = () => ({type: ''} as const)

const initialState: Type = {

}



export const counterReducer = (state = initialState, action: ActionsType): Type => {
    switch (action.type) {
        case "":
            return state
        default:
throw new Error("action.type is undefined!")
    }
}
