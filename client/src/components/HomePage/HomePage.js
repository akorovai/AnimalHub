import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {Container, MainBox, ButtonBox} from './HomePage.styled'
const HomePage = () => {
    const [isNotEmpty, setIsNotEmpty] = useState(null);

    useEffect(() => {
        (async function fetchData(){
            fetch("http://localhost:3000")
                .then((response) => response.json())
                .then((data) => {
                    setIsNotEmpty(data.isNotEmpty);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setIsNotEmpty(false);
                });
        })();
    }, []);

    return (
        <Container>
            <MainBox>
                <h1>Actions</h1>
                {isNotEmpty ?
                    <ButtonBox>
                        <Link to="/animals">Show List</Link>
                    </ButtonBox>
                    : null}
                <ButtonBox>
                    <Link to={"/add"}>Add new Animal</Link>
                </ButtonBox>
            </MainBox>
        </Container>
    );
};

export default HomePage;