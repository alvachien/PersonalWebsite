import React from "react";
import classNames from "classnames";

export default function Parallax(props) {
    const wrapperClasses = classNames({
        [classes["page-header"]]: true,
        [classes["header-filter"]]: true,
        [classes["clear-filter"]]: true,
        [classes["purple-filter"]]: true,
    });
    
    return (
        <div className={wrapperClasses} data-parallax="true" style={{ textShadow: `none`, backgroundImage: 'url("./bg2.jpg"' }}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-8 ml-auto mr-auto"}>
                        <div className={"brand"}>
                            <h1>{props.title}</h1>
                            <h3>A Badass Bootstrap 4 UI Kit based on Material Design.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
