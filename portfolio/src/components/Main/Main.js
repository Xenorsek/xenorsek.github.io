import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Container from "./containers/Container";
import { Container as Layout } from "@mui/material";
function Main() {
    return(
        <Layout className="layout">
            <Header />
            <Container />
            <Footer />
        </Layout>
    );
}

export default Main;