import React from "react";
import { ModalTypes } from "../utils/const";

export default ({ setShowModal, disable }) => (
  <button
    disabled={disable.openCreateButton}
    className="btn"
    style={{
      fontSize: "14px",
      height: "40px",
      lineHeight: "38px",
      paddingTop: "0",
      marginTop: "0",
      color: "#fff",
      fontWeight: "500",
    }}
    onClick={() => setShowModal(ModalTypes.RenameModal)}
  >
    Edit
    <i
      className="bi bi-pen"
      style={{
        fontSize: "12px",
        fontWeight: "700",
        marginLeft: "4px",
      }}
    ></i>
  </button>
);
