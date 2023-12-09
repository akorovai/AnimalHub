import {Container} from "../../GlobalStyles";
import {ModifyBox} from "./ModifyAnimalPage.styles";
import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import NewInputFieldValue from "../AddAnimalPage/NewInputFieldValue";
import {AddButton} from "../AddAnimalPage/AddAnimalPage.styles";
import {ReturnLink} from "../AnimalDetailPage/AnimalDetailPage.styles";

const ModifyAnimalPage = () => {
    const [oldAnimal, setOldAnimal] = useState({
        name: "",
        age: "",
        species: "",
        color: "",
        sound: "",
    });

    const animalRef = useRef({});
    const {animalId} = useParams();
    const [addButtonPressed, setAddButtonPressed] = useState(false);

    const validations = {
        name: () => oldAnimal.name.length < 3 && oldAnimal.name.length > 0,
        age: () => oldAnimal.age !== '' && (isNaN(parseInt(oldAnimal.age)) || oldAnimal.age <= 0),
        species: () => oldAnimal.species.length < 3 && oldAnimal.species.length > 0,
        color: () => oldAnimal.color.length < 3 && oldAnimal.color.length > 0,
        sound: () => oldAnimal.sound.length < 2 && oldAnimal.sound.length > 0,
    };

    useEffect(() => {
        let isMounted = true;
        (async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/animals/${animalId}`);
                animalRef.current = await response.json();
                if (isMounted) {
                    setOldAnimal({
                        name: "",
                        age: "",
                        species: "",
                        color: "",
                        sound: "",
                    });
                }

            } catch (error) {
                console.error("Error fetching data:", error);
                window.location.href = 'http://localhost:3001/error';
            }
        })();
        return () => {
            isMounted = false;
        }
    }, [animalId]);

    const renderInputField = (placeholder, name, validation, errorText) => (
        <NewInputFieldValue
            thePlaceholder={placeholder}
            theName={name}
            theValue={oldAnimal[name]}
            handleInputChange={handleInputChange}
            theValidation={addButtonPressed && validation()}
            errorText={errorText}
        />
    );

    const handleUpdateAnimal = async () => {
        const updatedFields = {};


        Object.keys(oldAnimal).forEach((key) => {
            updatedFields[key] = oldAnimal[key] !== "" ? oldAnimal[key] : animalRef.current[key];
        });

        if (Object.values(validations).some((validation) => validation())) {
            setAddButtonPressed(true);
            return
        }

        try {
            const response = await fetch(`http://localhost:3000/animals/modify/${animalId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFields),
            });

            if (response.ok) {
                window.location.href = `http://localhost:3001/animals/${animalId}`;
            } else {
                console.error("Error modifying pet:", response.statusText);
                window.location.href = 'http://localhost:3001/error';
            }
        } catch (error) {
            console.error("Error modifying pet:", error);
            window.location.href = 'http://localhost:3001/error';
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setOldAnimal({
            ...oldAnimal,
            [name]: value,
        });
    };

    return (
        <Container>
            <ModifyBox>
                <h3>Modify Your Pet</h3>
                <h3>New Pet</h3>
                {renderInputField(`Name: ${animalRef.current.name}`, "name", validations.name, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField(`Age: ${animalRef.current.age}`, "age", validations.age, "* Wprowadź liczbę większą lub równą 0")}
                {renderInputField(`Species: ${animalRef.current.species}`, "species", validations.species, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField(`Color: ${animalRef.current.color}`, "color", validations.color, "* Wprowadź co najmniej 3 znaki!")}
                {renderInputField(`Sound: ${animalRef.current.sound}`, "sound", validations.sound, "* Wprowadź co najmniej 2 znaki!")}
                <br/>
                <AddButton onClick={handleUpdateAnimal}>
                    Modify
                </AddButton>
                <ReturnLink to={`/animals/${animalId}`}>Return</ReturnLink>
            </ModifyBox>
        </Container>
    );
};

export default ModifyAnimalPage;
