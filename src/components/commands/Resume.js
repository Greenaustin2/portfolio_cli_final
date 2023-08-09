import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { pdfjs } from "react-pdf";
import "../../css/resumePdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Resume = () => {
  const [modal, setModal] = useState(false);
  //Modal state switcher
  const switchModal = () => {
    setModal(!modal);
  };
  //Modal closes on click outside modal area
  const onOverlayClick = (e) => {
    setModal(false);
    e.stopPropagation();
  };
  //sets modal state to true on load
  useEffect(() => {
    switchModal();
  }, []);
  //event listener for Escape key to close modal
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setModal(false);
    }
  });
  //styling for modal
  const customStyles = {
    content: {
      height: "90%",
      width: "40%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "#000000bf",
    },
  };
  return (
    <div className="full-screen" onClick={onOverlayClick}>
      <Modal
        closeTimeoutMS={500}
        isOpen={modal}
        ariaHideApp={false}
        appElement={document.getElementById("app")}
        style={customStyles}
      >
        <div className="container">
          <iframe
            className="pdf"
            src="http://localhost:3000/resume.pdf"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Resume;
