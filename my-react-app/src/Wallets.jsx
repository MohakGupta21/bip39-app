import React, { useEffect, useState } from 'react'
import Ellipse from "./assets/Group.svg";
import Bitcoin from "./assets/bitcoin.svg";
import Modal from "./Modal";
import axios from 'axios';

function Wallets() {
  const [wallets,setWallets] = useState([]);
  useEffect(()=>{
    const fetchWallets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/wallets');
        setWallets(response.data);
        // window.location.reload();
      } catch (err) {
        // setError('Failed to load transactions');
        console.log("Failed to oad wallets")
        console.log(err);
      } 
    };

    fetchWallets();
    console.log(wallets);
  },[])
  return (
    <>
        <Modal/>
        <button className="import" data-bs-target="#import_wallet" data-bs-toggle="modal">
        <img src={Ellipse} className="me-2" />
            Import Wallet
        </button>

        <div className='main-box'>
        <div>
            <p className="abt-coin">Total Coins - {wallets.length}</p>
            <table className="custom-table">
              <thead>
                <tr id="head">
                  <th>Coin</th>
                  <th>Holding</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  wallets.length>0 && wallets.map((val,ind)=>(
                    <tr key={ind}>
                    <td>
                      <img src={Bitcoin} className="me-2" />
                      {val?.name}
                    </td>
                    <td>{val?.balance}</td>
                    <td>
                      <i className="bi bi-archive"></i>
                    </td>
                  </tr>
                  ))
                }
                {/* <tr>
                  <td>
                    <img src={Bitcoin} className="me-2" />
                    Bitcoin
                  </td>
                  <td>BTC 0.00256</td>
                  <td>
                    <i className="bi bi-archive"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Bitcoin} className="me-2" />
                    Bitcoin 1
                  </td>
                  <td>BTC 0.00256</td>
                  <td>
                    <i className="bi bi-archive"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Bitcoin} className="me-2" />
                    Bitcoin 2
                  </td>
                  <td>BTC 0.00256</td>
                  <td>
                    <i className="bi bi-archive"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Bitcoin} className="me-2" />
                    Bitcoin 3
                  </td>
                  <td>BTC 0.00256</td>
                  <td>
                    <i className="bi bi-archive"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Bitcoin} className="me-2" />
                    Bitcoin 4
                  </td>
                  <td>BTC 0.00256</td>
                  <td>
                    <i className="bi bi-archive"></i>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default Wallets