import { ErrorText } from "./AddAnimalPage.styles";
import React from "react";

const NewInputFieldValue = ({ thePlaceholder, theName, theValue, handleInputChange, theValidation, errorText }) => {
    return (
        <>
            <input
                placeholder={thePlaceholder}
                name={theName}
                value={theValue}
                onChange={handleInputChange}
            />
            { theValidation && (
                <ErrorText>{errorText}</ErrorText>
            )}
        </>
    );
};

export default NewInputFieldValue;
