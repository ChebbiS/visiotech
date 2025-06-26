import Pages from "../../components/Pages.tsx";
import {Container} from "@mui/material";
import Carrousel from "../../components/Carrousel.tsx";
import CarrouselTop from "../../components/CarrouselTop.tsx";

const Dashboard= () => {
    return (
        <>
            <Pages title="Dashboard">
                <Container>
                    <Carrousel />
                </Container>
                <Container>
                    <CarrouselTop />
                </Container>



            </Pages>
        </>

    );
};

export default Dashboard;
