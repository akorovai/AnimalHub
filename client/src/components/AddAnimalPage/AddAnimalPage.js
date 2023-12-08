import React, { useState } from "react";
import { AddButton, FormBox } from './AddAnimalPage.styles';
import { Container } from "../../GlobalStyles";
import NewInputFieldValue from "./NewInputFieldValue";
import {ReturnLink} from "../AnimalDetailPage/AnimalDetailPage.styles";

const AddAnimalPage = () => {
    const [petData, setPetData] = useState({
        name: "",
        age: "",
        species: "",
        color: "",
        sound: "",
    });

    const [addButtonPressed, setAddButtonPressed] = useState(false);

    const validations = {
        name: petData.name.length < 3,
        age: petData.age < 0 || isNaN(parseInt(petData.age)),
        species: petData.species.length < 3,
        color: petData.color.length < 3,
        sound: petData.sound.length < 2,
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPetData({
            ...petData,
            [name]: value,
        });
    };

    const handleAddPet = async () => {
        if (Object.values(validations).some((validation) => validation)) {
            setAddButtonPressed(true);
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/animals/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(petData),
            });
            if (response.ok) {
                window.location.href = 'http://localhost:3001/animals';
            } else {
                console.error("Error adding pet:", response.statusText);
                window.location.href = 'http://localhost:3001/error';
            }
        } catch (error) {
            console.error("Error adding pet:", error);
            window.location.href = 'http://localhost:3001/error';
        }
    };

    const renderInputField = (placeholder, name, validation, errorText) => (
        <NewInputFieldValue
            thePlaceholder={placeholder}
            theName={name}
            theValue={petData[name]}
            handleInputChange={handleInputChange}
            theValidation={addButtonPressed && validation}
            errorText={errorText}
        />
    );

    return (
        <Container>
            <FormBox>
                <h3>New Pet</h3>
                {renderInputField("Name", "name", validations.name, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField("Age", "age", validations.age, "* Wprowadź liczbę większą lub równą 0")}
                {renderInputField("Species", "species", validations.species, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField("Color", "color", validations.color, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField("Sound", "sound", validations.sound, "* Wprowadź co najmniej 2 znaki!")}
                <br />
                <AddButton onClick={handleAddPet}>
                    Add
                </AddButton>
                <ReturnLink to={"/"}>Return</ReturnLink>
            </FormBox>
        </Container>
    );
};

export default AddAnimalPage;
