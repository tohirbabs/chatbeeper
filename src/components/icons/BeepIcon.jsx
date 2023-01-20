import React from "react";

export default function BeepIcon({ active }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? (
        <>
          <path
            d="M16.6667 4.16667H33.3333C41.6667 4.16667 45.8333 8.33334 45.8333 16.6667V43.75C45.8333 44.8958 44.8958 45.8333 43.75 45.8333H16.6667C8.33334 45.8333 4.16668 41.6667 4.16668 33.3333V16.6667C4.16668 8.33334 8.33334 4.16667 16.6667 4.16667Z"
            fill="#386FA4"
            stroke="#386FA4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.2917 25H17.7083"
            stroke="#EBEBEB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 32.2917V17.7083"
            stroke="#EBEBEB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M9.83317 2.83331H19.1665C23.8332 2.83331 26.1665 5.16665 26.1665 9.83331V25C26.1665 25.6416 25.6415 26.1666 24.9998 26.1666H9.83317C5.1665 26.1666 2.83317 23.8333 2.83317 19.1666V9.83331C2.83317 5.16665 5.1665 2.83331 9.83317 2.83331Z"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.5835 14.5H10.4168"
            stroke="#fff"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 18.5834V10.4167"
            stroke="#fff"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
}
