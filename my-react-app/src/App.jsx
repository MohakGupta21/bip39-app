import { useState } from "react";
import "./App.css";
import Wallets from "./Wallets";
import Transactions from "./Transactions";
import Sidebar from "./Sidebar";
import axios from "axios";

function App() {
  const [isWallet, setIsWallet] = useState(true);
  const [transaction, setTransaction] = useState(false);

  async function syncItems(){
    try {
      const response = await axios.post('http://localhost:8080/process-sync');

      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  function toggleClass(e) {
    document.getElementById(e.target.id).classList.add("highlighted");

    if (e.target.id === "wallet") {
      if (document.getElementById("transact").classList.contains("highlighted"))
        document.getElementById("transact").classList.remove("highlighted");

      setIsWallet(true);
      setTransaction(false);
    } else {
      if (document.getElementById("wallet").classList.contains("highlighted"))
        document.getElementById("wallet").classList.remove("highlighted");

      setIsWallet(false);
      setTransaction(true);
    }
  }

  return (
    <div>
      <p className="text-end p-3 text-warning" onClick={syncItems}>
        <span>
          <i className="bi bi-arrow-repeat"></i>
        </span>{" "}
        Synced
      </p>
      {
        isWallet && <Wallets/>
      }
      {
        transaction && <Transactions/>
      }
      <Sidebar onEvent={toggleClass}/>

    </div>
  );
}

export default App;
