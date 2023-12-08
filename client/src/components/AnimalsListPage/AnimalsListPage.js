import { useEffect, useState } from "react";
import { Container, AnimalTableBox, StyledLink, ReturnButton} from "./AnimalsListPage.styles";



const AnimalsListPage = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        (async function fetchData(){
            try {
                const response = await fetch("http://localhost:3000/animals");
                const data = await response.json();
                setAnimals(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setAnimals([]);
            }
        })();
    }, []);

    return (
        <Container>
            <AnimalTableBox>
                <h3>Table of Pets</h3>

                <ReturnButton onClick={() =>   window.location.href = 'http://localhost:3001'}>Return</ReturnButton>
                {Array.isArray(animals) && animals.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Species</th>
                            <th scope="col">Color</th>
                            <th scope="col">Sound</th>
                        </tr>
                        </thead>
                        <tbody>
                        {animals.map((animal) => (
                            <tr key={animal.id}>
                                <td>{animal.id}</td>
                                <td>
                                    <StyledLink to={`/animals/${animal.id}`}>
                                        {animal.name}
                                    </StyledLink>
                                </td>
                                <td>{animal.age}</td>
                                <td>{animal.species}</td>
                                <td>{animal.color}</td>
                                <td>{animal.sound}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading</p>
                )}
            </AnimalTableBox>
        </Container>
    );
};

export default AnimalsListPage;
