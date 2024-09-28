import React, { useEffect, useState } from "react";
import Bitcoin from "./assets/bitcoin.svg";
import Received from "./assets/Vector.svg";
import axios from "axios";

function Transactions() {
  const [trans,setTrans] = useState({})

  useEffect(()=>{
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/all-transactions');
        setTrans(response.data);
        // window.location.reload();
      } catch (err) {
        console.log('Failed to load transactions');
        console.log(err);
      } 
    };

    fetchTransactions();
    console.log(trans);
  },[])
  return (
    <>
      <h1 className="theading">Transactions</h1>
      <div className="main-box">
        <p className="abt-coin">Total transactions - {trans.length}</p>
        <table className="custom-table">
          <thead>
            <tr id="head">
              <th>Coin</th>
              <th>Wallet</th>
              <th>Amount</th>
              <th>Result</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              trans.length>0 && trans.map((val,ind)=>(
                <tr key={ind}> 
                <td className="d-flex">
                  <img src={Bitcoin} className="me-2" />
                  <div>
                    <div className="date">{val?.date}</div>
                    <div className="time">{val?.time}</div>
                  </div>
                </td>
                <td>{val?.name}</td>
                <td>
                  <div style={{ color: "#8484F1" }}>
                    <img src={Received} />
                    {val?.result}
                  </div>
                </td>
                <td>
                  <div style={{ color: "#8484F1" }}>{val?.status}</div>
                </td>
                <td>
                  <i className="bi bi-archive"></i>
                </td>
              </tr>
              ))
            }

            {/* <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr>
            <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr>
            <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr>
            <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr>
            <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr>
            <tr>
              <td className="d-flex">
                <img src={Bitcoin} className="me-2" />
                <div>
                  <div className="date">12/11/2020</div>
                  <div className="time">10:31:20 AM</div>
                </div>
              </td>
              <td>Aru</td>
              <td>
                <div style={{ color: "#8484F1" }}>
                  <img src={Received} />
                  Received
                </div>
              </td>
              <td>
                <div style={{ color: "#8484F1" }}>SUCCESS</div>
              </td>
              <td>
                <i className="bi bi-archive"></i>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
