import { createContext, useState } from "react";
import merge from 'lodash.merge'

const GlobalDetailsContext = createContext({
    buttonValue: '',
    setGlobalState: async globalState => { }
})


export const useGlobalState = () => {
    const setGlobalState = ({
        buttonValue
    }) => {
        updateGlobalState((curState) => {
            console.log(2, curState, buttonValue);
            return merge({ ...curState }, { buttonValue })
        })
    }
    const defaultState = {
        buttonValue: '',
        setGlobalState
    }
    const [globalState, updateGlobalState] = useState(defaultState)
    return globalState
}

export default GlobalDetailsContext
