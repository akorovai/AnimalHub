import React, {useEffect, useState} from "react";

import { MainBox} from './HomePage.styled'
import ButtonBox from "./ButtonBox";
import {Container} from "../../GlobalStyles";

const HomePage = () => {
    const [isNotEmpty, setIsNotEmpty] = useState(null);

    useEffect(() => {
        let isMounted = true;
        (async function fetchData() {
            fetch("http://localhost:3000")
                .then((response) => response.json())
                .then((data) => {
                    if (isMounted) {
                        setIsNotEmpty(data.isNotEmpty);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setIsNotEmpty(false);
                });
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    return (<Container>
            <MainBox>
                <h1>Actions</h1>
                {isNotEmpty && <ButtonBox to={"/animals"}> Show List </ButtonBox>}
                <ButtonBox to={"/add"}>Add new Animal</ButtonBox>
            </MainBox>
        </Container>);
};

export default HomePage;