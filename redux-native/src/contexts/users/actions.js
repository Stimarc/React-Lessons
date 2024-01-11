import { REMOVE_USER } from "./constants"

export const removeUser = user => {
    return {
        type: REMOVE_USER,
        user
    }
}