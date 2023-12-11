import React, { useContext } from "react";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
    const { buttonId, buttonName, buttonText, buttonType, buttonDisabled, buttonLink, buttonClass, buttonColor, buttonStartIcon, buttonEndIcon, buttonSize, buttonAriaLabel, buttonOnClick } = props

    switch (buttonType) {
        case 'primaryButton1':
            return <Button
                variant='contained'
                id={buttonId}
                name={buttonName}
                disabled={buttonDisabled}
                classes={buttonClass}
                color={buttonColor}
                // startIcon={buttonStartIcon}
                // endIcon={buttonEndIcon}
                size='large'
                aria-label={buttonAriaLabel}
                onClick={buttonOnClick}
            >{buttonText}</Button>
            break;
        case 'primaryButton2':
            return <Button
                variant='outlined'
                id={buttonId}
                name={buttonName}
                disabled={buttonDisabled}
                classes={buttonClass}
                color={buttonColor}
                // startIcon={buttonStartIcon}
                // endIcon={buttonEndIcon}
                size='large'
                aria-label={buttonAriaLabel}
                onClick={buttonOnClick}
            >{buttonText}</Button>
            break;
        default:
            return <Button
                variant='text'
                id={buttonId}
                name={buttonName}
                disabled={buttonDisabled}
                classes={buttonClass}
                color={buttonColor}
                // startIcon={buttonStartIcon}
                // endIcon={buttonEndIcon}
                size='large'
                aria-label={buttonAriaLabel}
                onClick={buttonOnClick}
            >{buttonText}</Button>
    }

}

export default ButtonComponent