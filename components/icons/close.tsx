import React, { PureComponent } from "react";

export class Close extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
      >
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M85.1 18h16.8V2H85.1v16zM83 20h21V0H83v20zm6.787-8.144l2.227-2.121-2.227-2.122 1.485-1.414L93.5 8.321l2.227-2.122 1.485 1.414-2.227 2.122 2.227 2.121-1.485 1.414-2.227-2.121-2.228 2.121-1.485-1.414z"
          transform="translate(-83)"
        />
      </svg>
    );
  }
}
