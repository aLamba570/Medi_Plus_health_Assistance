import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';

const websiteslist = () => {
  return (
      <div className="websiteslist">
          <PageNavbar/>
          <div className="container py-5">
            <p className="display-6 fw-bold mx-auto text-center pb-3"> List of Covid Relief Websites</p>

            <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <table className="table table-hover table-bordered border-secondary">
                        <thead className="table text-white" style={{"backgroundColor": "#650013"}}>
                            <th className="lead fs-4 p-2 px-5">Website Name</th>
                            <th className="lead fs-4 p-2 px-5">Website URL</th>
                        </thead>
                        <tbody>
                            <tr className="fs-5">
                                <td>Covid-19 Resource Database</td>
                                <td>
                                    <a href="https://bit.ly/3tw0JuA" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Verified Crowd Sourced Emergency Services Directory</td>
                                <td>
                                    <a href="https://life.coronasafe.network/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Delhi Government</td>
                                <td>
                                    <a href="http://corona.delhi.gov.in/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Covid-19 related Resources</td>
                                <td>
                                    <a href="https://mtssri.org/mod/page/view.php?id=419" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Verfied Resource Hub at one place</td>
                                <td>
                                    <a href="https://aweri.in/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Nation-wide Crowd Sourced Resources</td>
                                <td>
                                    <a href="https://covidresource.glideapp.io/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Twitter Search for Covid-19</td>
                                <td>
                                    <a href="https://covid19-twitter.in/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>Covid Army</td>
                                <td>
                                    <a href="https://covid.army/" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td>All COVID-19 Resources in India</td>
                                <td>
                                    <a href="https://bit.ly/3ey2002" target="_parent">
                                        Visit Site
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

          <Footer/>
      </div>
  );
};

export default websiteslist;
