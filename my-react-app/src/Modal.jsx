import axios from "axios";
import React, { useState } from "react";

function Modal() {
  const [mnemonic,setMnemonic] = useState("");
  const [name,setName] = useState("");

  const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/import-wallet',{
          name,mnemonic
        });

        console.log(response.data);
        alert("Wallet Added");
      } catch (error) {
        console.log(error.response?.data?.error);
        alert("An Error Occured -"+error.response?.data?.error);
      }
  }
  return (
    <div
      className="modal fade"
      id="import_wallet"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content popup">
          <h1 className="py-5 text-center" style={{ fontSize: "24px" }}>
            Import Wallet
          </h1>
          <button
            type="button"
            className="pos btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="container wallet-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="label">
                  Enter your wallet name :
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mnemonic" className="label">
                  Enter your Mnemonic :
                </label>
                <textarea
                  className="input"
                  id="mnemonic"
                  rows="4"
                  onChange={(e)=>setMnemonic(e.target.value)}
                  value={mnemonic}
                />
              </div>

              <button type="submit" className="btn colored">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
