import React from "react";

export default function Header(props) {
  return (
    <nav className={"navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"}>
      <div className={"container"}>
        <div className={"navbar-translate"}>
          <a className={"navbar-brand"} href="/">
            {props.title}
          </a>
          <button className={"navbar-toggler"} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"sr-only"}>Toggle navigation</span>
            <span className={"navbar-toggler-icon"}></span>
            <span className={"navbar-toggler-icon"}></span>
            <span className={"navbar-toggler-icon"}></span>
          </button>
        </div>
        <div className={"collapse navbar-collapse"}>
          <ul className={"navbar-nav ml-auto"}>
            <li className={"nav-item"}>
              <a href="/alvablog" className={"nav-link"}>
                <i className={"material-icons"}>apps</i> Alva Blogs
              </a>
            </li>
            <li className={"nav-item"}>
              <a href="/fishblog" className={"nav-link"}>
                <i className={"material-icons"}>apps</i> Fish Blogs
              </a>
            </li>
            <li className={"nav-item"}>
              <a href="/about" className={"nav-link"}>
                <i className={"material-icons"}>apps</i> About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
