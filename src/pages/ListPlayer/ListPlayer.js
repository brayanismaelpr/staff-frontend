import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import ListPlayer from "../../components/ListPlayer/ListPlayer";

export default function ListPlayer() {
    return(
        <>
            <Header />
            <main className="">
                <ListPlayer />
            </main>
            <Footer />
        </>
    );
}