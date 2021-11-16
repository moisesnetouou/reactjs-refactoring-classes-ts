import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Modal } from "./components/Modal";
import { ModalContext } from "./context/ModalContext";

import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onOpenModal() {
    setIsModalOpen(false);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider value={[]}>
      <GlobalStyle />
      <Router>
        <Modal
          isOpen={isModalOpen}
          setIsOpen={handleCloseModal}
          onOpenModal={onOpenModal}
        />
        <Routes />
      </Router>
    </ModalContext.Provider>
  );
}

export default App;
