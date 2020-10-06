import React from "react";

export default function Parallax(props) {
    return (
      <div className={"page-header header-filter"} style={{ backgroundImage: "url(" + props.image + ")" }}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-md-8 ml-auto mr-auto"}>
              <div className={"brand text-center"}>
                <h1>{props.title}</h1>
                <h3 className={"title text-center"}>Subtitle</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
