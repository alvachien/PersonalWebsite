import React from "react"

export default function Container({ children }) {
  return (
    <div className={"main main-raised"}>
      <div className={"container"}>
        <div className={"section text-center"}>
          {children}
        </div>
      </div>
    </div>
  );
}

