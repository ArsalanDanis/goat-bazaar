"use client"

import './productDetails.css'

const ProductDetails = () => {
 
  return (
    <>
      
      <section className="bg-light productDetComp border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
                {/* Pills navs */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                  {/* Add more tabs as needed */}
                  <li className="nav-item d-flex" role="presentation">
                    <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">
                      Specification
                    </a>
                  </li>
                </ul>
                {/* Pills content */}
                <div className="tab-content" id="ex1-content">
                  {/* Add content for each tab */}
                  <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <p className="support">
                      With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                      nulla pariatur.
                    </p>
                    {/* Add more content */}
                    <div className="row mb-2">
                      <div className="col-12 col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <i className="fas fa-check text-success me-2 "></i><p className="support">Some great feature name here</p>
                          </li>
                          {/* Add more features */}
                        </ul>
                      </div>
                      <div className="col-12 col-md-6 mb-0">
                        <ul className="list-unstyled">
                          {/* Add more features */}
                        </ul>
                      </div>
                    </div>
                    <table className="table border mt-3 mb-2">
                      <tr>
                        <th className="py-2 support ">Display:</th>
                        <td className="py-2 support">Book backlit display with IPS</td>
                      </tr>
                      {/* Add more specifications */}
                    </table>
                  </div>
                  {/* Add content for other tabs */}
                </div>
                {/* Pills content */}
              </div>
            </div>
            <div className="col-lg-4">
              {/* Similar items */}
              <div className="px-0 border rounded-2 shadow-0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Similar items</h5>
                    {/* Add more similar items */}
                    <div className="d-flex mb-3">
                      <a href="#" className="me-3">
                        {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt="similar item" /> */}
                      </a>
                      <div className="info">
                        <a href="#" className="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong className="text-dark"> $38.90</strong>
                      </div>
                    </div>
                    {/* Add more similar items */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
