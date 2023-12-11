import GlobalDetailsContext from "../appstate/GlobalContext"
import { useGlobalState } from "../appstate/GlobalContext"
const GlobalProvider = ({ children }) => {
    return (
        <GlobalDetailsContext.Provider value={useGlobalState()}>
            {children}
        </GlobalDetailsContext.Provider>
    )
}

export default GlobalProvider