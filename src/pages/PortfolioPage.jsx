import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';

function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-content">
      <Portfolio selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  );
}

export default PortfolioPage;