import React from "react";
import { useState } from "react";

function Sidebar({ onEvent }) {
  const [selColor1,setSelColor1] = useState("#E2C19D");
  const [selColor2,setSelColor2] = useState("#fff");

  return (
    <div className="aside">
      <ul className="list">
        <li id="wallet" className="list-item highlighted" onClick={(e) => {
          setSelColor1("#E2C19D");
          setSelColor2("#fff");
          onEvent(e);
        }
        }>
          <span className="me-2">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="23.8" height="21" rx="3" fill="#1E2328" />
              <path
                d="M17.4186 16.6H7.09302C5.93892 16.6 5 15.6611 5 14.507V6.69303C5 5.53893 5.93892 4.60001 7.09302 4.60001H17.4186C18.5727 4.60001 19.5116 5.53893 19.5116 6.69303V14.507C19.5116 15.6611 18.5727 16.6 17.4186 16.6ZM18.6744 9.34418H15.6047C14.9122 9.34418 14.3488 9.90753 14.3488 10.6C14.3488 11.2925 14.9122 11.8558 15.6047 11.8558H18.6744V9.34418ZM18.6744 12.693H15.6047C14.4506 12.693 13.5116 11.7541 13.5116 10.6C13.5116 9.4459 14.4506 8.50698 15.6047 8.50698H18.6744V6.69303C18.6744 6.00058 18.1111 5.4372 17.4186 5.4372H7.09302C6.40057 5.4372 5.8372 6.00055 5.8372 6.69303V14.507C5.8372 15.1994 6.40054 15.7628 7.09302 15.7628H17.4186C18.1111 15.7628 18.6744 15.1995 18.6744 14.507V12.693Z"
                fill={selColor1}
              />
              <path
                d="M16.5768 11H16.0187C15.7875 11 15.6001 10.8126 15.6001 10.5814C15.6001 10.3502 15.7875 10.1628 16.0187 10.1628H16.5768C16.808 10.1628 16.9954 10.3502 16.9954 10.5814C16.9954 10.8126 16.808 11 16.5768 11Z"
                fill="white"
              />
            </svg>
          </span>
          Wallets
        </li>
        <li id="transact" className="list-item" onClick={(e) => {
          setSelColor2("#E2C19D");
          setSelColor1("#fff");
          onEvent(e);
          }}>
          <span className="me-2">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="23.8" height="21" rx="3" fill="#1E2328" />
              <path
                d="M17.3536 14.3536C17.5488 14.1583 17.5488 13.8417 17.3536 13.6464L14.1716 10.4645C13.9763 10.2692 13.6597 10.2692 13.4645 10.4645C13.2692 10.6597 13.2692 10.9763 13.4645 11.1716L16.2929 14L13.4645 16.8284C13.2692 17.0237 13.2692 17.3403 13.4645 17.5355C13.6597 17.7308 13.9763 17.7308 14.1716 17.5355L17.3536 14.3536ZM7 14.5L17 14.5V13.5L7 13.5L7 14.5Z"
                fill={selColor2}
              />
              <path
                d="M6.64645 5.64645C6.45118 5.84171 6.45118 6.15829 6.64645 6.35355L9.82843 9.53553C10.0237 9.7308 10.3403 9.7308 10.5355 9.53553C10.7308 9.34027 10.7308 9.02369 10.5355 8.82843L7.70711 6L10.5355 3.17157C10.7308 2.97631 10.7308 2.65973 10.5355 2.46447C10.3403 2.2692 10.0237 2.2692 9.82843 2.46447L6.64645 5.64645ZM17 5.5L7 5.5L7 6.5L17 6.5L17 5.5Z"
                fill={selColor2}
              />
            </svg>
          </span>
          Last Transactions
        </li>
      </ul>
      <div>
        <button className="bottom-button">Support</button>
      </div>
    </div>
  );
}

export default Sidebar;
