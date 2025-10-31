import React from 'react';

function Portfolio({ selectedProject, setSelectedProject }) {
  const portfolioItems = [
    { id: 1, title: 'Cabin', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop' },
    { id: 2, title: 'Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' },
    { id: 3, title: 'Circus', image: 'https://images.unsplash.com/photo-1533035336122-611dc8e501c1?w=400&h=300&fit=crop' },
    { id: 4, title: 'Game', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop' },
    { id: 5, title: 'Safe', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop' },
    { id: 6, title: 'Submarine', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop' }
  ];

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          
          <div className="star-divider dark">
            <div className="line"></div>
            <span className="star">★</span>
            <div className="line"></div>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="portfolio-item"
                onClick={() => setSelectedProject(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <span className="plus-icon">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <h2>{selectedProject.title}</h2>
            
            <div className="star-divider dark">
              <div className="line"></div>
              <span className="star">★</span>
              <div className="line"></div>
            </div>

            <img src={selectedProject.image} alt={selectedProject.title} />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisque velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.</p>

            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;