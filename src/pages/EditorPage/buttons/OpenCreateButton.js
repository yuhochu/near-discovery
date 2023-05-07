import React from "react";
import { ModalTypes } from "../utils/const";

export default ({ setShowModal, disable }) => (
  <button
    disabled={disable.openCreateButton}
    className="btn"
    onClick={() => setShowModal(ModalTypes.AddModal)}
    style={{
      fontSize: "14px",
      height: "40px",
      lineHeight: "38px",
      paddingTop: "0",
      marginTop: "0",
      color: "#fff",
      fontWeight: "500",
    }}
  >
    Add
    <i
      className="bi bi-plus"
      style={{
        fontSize: "16px",
        fontWeight: "700",
      }}
    ></i>
  </button>
);
