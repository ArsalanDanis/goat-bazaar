// DemoCard.js
import React from 'react';

const bookData = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publication_year: 1960,
    genre: ['Fiction', 'Classic'],
    description: 'A classic novel depicting racial injustice in the American South.',
    cover_image: '/img1.jpg',
    price: 155,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publication_year: 1949,
    genre: ["Dystopian", "Science Fiction"],
    description: "A dystopian novel portraying a totalitarian society.",
    cover_image: "img2.jpg",
    price: 369,
  },
  // Add similar objects for other books
];

const DemoCard = () => {
  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5" style={{width:'600px'}}>
          <div className="row">
            {bookData.map((book) => (
              <div key={book.id} className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                <div className="card">
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">{book.title}</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: '35px', height: '35px' }}
                    >
                      <p className="text-white mb-0 small">x4</p>
                    </div>
                  </div>
                  <img src={book.cover_image} className="card-img-top" alt={book.title} style={{height:'400px'}} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          {book.genre.join(', ')}
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>${book.price}</s>
                      </p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{book.author}</h5>
                      <h5 className="text-dark mb-0">${book.price}</h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Published: <span className="fw-bold">{book.publication_year}</span>
                      </p>
                      {/* Additional book details can be added here */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoCard;

