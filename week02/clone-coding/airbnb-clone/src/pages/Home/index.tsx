import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Main from "./Main";

function HomePage() {
  const [selectedRoomConcept, setSelectedRoomCeoncept] = useState<string>("");

  return (
    <div id="home">
      <Header />
      <Nav
        selectedRoomConcept={selectedRoomConcept}
        setSelectedRoomCeoncept={setSelectedRoomCeoncept}
      />
      {selectedRoomConcept !== "" && (
        <Main selectedRoomConcept={selectedRoomConcept} />
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
