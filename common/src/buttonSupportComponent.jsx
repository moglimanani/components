import ButtonComponent from "./components/buttonComponent";
import GlobalDetailsContext from './contexts/appstate/GlobalContext';
import { useContext } from 'react';

const ButtonSupportComponent = () => {
    const { buttonValue, setGlobalState } = useContext(GlobalDetailsContext)
    console.log(1, buttonValue, setGlobalState);
    const clickHandler = (e) => {
        console.log(1, e.target, e.target.innerText, setGlobalState);
        setGlobalState({ buttonValue: e.target.innerText })
    }
    return (
        <>
            <div>1{buttonValue}</div>

            <ButtonComponent buttonText="Add Button" buttonOnClick={clickHandler} />
            <ButtonComponent buttonType='primaryButton1' buttonText="Primary1 Button" buttonOnClick={clickHandler} />
            <ButtonComponent buttonType='primaryButton2' buttonText="primaryButton2 Button" buttonOnClick={clickHandler} />
        </>
    )
}


export default ButtonSupportComponent