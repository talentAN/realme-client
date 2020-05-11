import React from "react";
import Sticks from "./Sticks";
import Edit from "../components/stick/Edit";
import NavList from "../components/stick/NavList";
import AuthCenter from "../components/stick/AuthCenter";
import Footer from "../components/stick/Footer";

const QuickLinks = () => {
  return (
    <Sticks>
      <Edit />
      <AuthCenter />
      <NavList />
      <Footer />
    </Sticks>)
}

export default QuickLinks