import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function CustomLink({children, ...props}) {
    return <>
        <Link {...props} className={"button " + props.className}>{children}</Link>
    </>
}

export default CustomLink;
