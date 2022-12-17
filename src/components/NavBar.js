import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navBarItems = links.map(linkObj => {

    return <a key = {linkObj} href = {"#" + linkObj}>{linkObj}</a>

  })

  return <nav>{navBarItems}</nav>;
}

export default NavBar;
