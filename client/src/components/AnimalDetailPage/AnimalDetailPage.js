import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
    AnimalDetailBox,
    ButtonContainer,
    Container,
    DeleteButton,
    ReturnLink,
    UpdateButton
} from './AnimalDetailPage.styles'

const AnimalDetailPage = () => {
    const [animal, setAnimal] = useState({});
    const {animalId} = useParams();

    useEffect(() => {
        (async function fetchData() {
            fetch(`http://localhost:3000/animals/${animalId}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setAnimal(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    window.location.href = 'http://localhost:3001/error';
                });
        })();
    }, [animalId]);

    function handleDelete() {
        (async function fetchData() {
            fetch(`http://localhost:3000/animals/${animalId}`, {
                method: "DELETE",
            }).then(() => {
                window.location.href = 'http://localhost:3001/animals'
            }).catch((error) => {
                console.error("Error fetching data:", error);
                window.location.href = 'http://localhost:3001/error';
            });
        })();

    }

    function handleUpdate() {
        (async function fetchData() {
            fetch(`http://localhost:3000/animals/${animalId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(animal),
            }).then(() => {
                window.location.href = `http://localhost:3001/animals/modification/${animal.id}`
            }).catch((error) => {
                console.error("Error fetching data:", error);
                window.location.href = 'http://localhost:3001/error';
            });
        })();
    }

    return (
        <Container>
            <AnimalDetailBox>
                {animal.id ? (
                    <>
                        <h1>Animal Details</h1>
                        <ul>
                            <li>ID: {animal.id}</li>
                            <li>Name: {animal.name}</li>
                            <li>Age: {animal.age}</li>
                            <li>Species: {animal.species}</li>
                            <li>Color: {animal.color}</li>
                            <li>Sound: {animal.sound}</li>
                        </ul>
                        <ButtonContainer>

                            <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                        </ButtonContainer>
                        <ReturnLink to={"/animals"}>Return</ReturnLink>

                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </AnimalDetailBox>
        </Container>
    );
};

export default AnimalDetailPage;
