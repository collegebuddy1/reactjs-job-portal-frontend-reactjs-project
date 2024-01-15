import React, { useState } from 'react'
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import Sidebar from '../Component/Sidebar';
import Main from '../Component/Main';
export default function Dashboard() {
  return (
    <div>
      <Nav />
      <Sidebar />

      <Main />
      <Footer />
    </div>
  );
}
