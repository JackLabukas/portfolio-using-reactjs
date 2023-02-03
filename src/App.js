import React, { Component } from "react";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route id="home-route" path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-gallery" element={<ProjectGallery />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
