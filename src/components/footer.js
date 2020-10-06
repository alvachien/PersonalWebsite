import React from "react"

export default function Footer({ children }) {
  return (
    <footer className={"footer footer-default"}>
      <div className={"container"}>
        <nav className={"float-left"}>
          <ul>
            <li>
              <a href="/">
                AlvaChien.com
            </a>
            </li>
          </ul>
        </nav>
        <div className={"copyright float-right"}>
          &copy;
        <script>
            document.write(new Date().getFullYear())
        </script>, made with <i className={"material-icons"}>favorite</i> by
        <a href="https://www.creative-tim.com/" target="blank">Creative Tim</a> for a better web.
      </div>
      </div>
    </footer>
  );
}

