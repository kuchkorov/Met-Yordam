import { useState, useEffect, Fragment } from 'react'
import './main.css'
import axios from "axios"

function Main() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
         fetch('http://localhost:3000/articles')
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch(err => {
            console.log(err);
        })
    }, [])
    console.log(articles);

   

    return (
        <div className='article-main container my-5'>
            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        So'ngi maqolalar
                    </h3>

                    <div className="blog-post">
                        <div className="row">
                            {articles && articles.map((value) => {
                                return (
                                    <div key={value.id} className="main-blog">
                                        <div className="col-sm-3">
                                            <span className="last_posts__img">
                                             <img src={value.img} alt="value.name" />  
                                            </span>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="last_posts_div">
                                                <div className="last_posts__big">
                                                    <a className="last_posts" href="/journal/oriens-volume-3-issue-6/">
                                                        <span className="last_posts__content">
                                                            <div className="news-meta">
                                                                {value.date}
                                                                {/* <span>09.06.2023</span> */}
                                                            </div>
                                                            <span className="last_posts__title">
                                                                {/* ORIENS Volume 3 ISSUE 6 */}
                                                                {value.name}
                                                            </span>
                                                        </span>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

                {/* /////////////// RIGHT SIDE /////////// */}

                <div className="col-md-4">
                    <div className="position-sticky" style={{ top: "2rem" }}>
                        <div className="p-4 mb-3 bg-body-tertiary rounded">
                            <h4 className="fst-italic">TAHRIRIYAT</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>

                        <div className="p-4">
                            <ul className="list-group text-center text-uppercase">
                                <li className="list-group-item my-1" aria-current="true">Tahrir hay'ati</li>
                                <li className="list-group-item my-1">Maqola talablari</li>
                                <li className="list-group-item my-1">Axborot xati</li>
                                <li className="list-group-item my-1">Ommaviy offerta</li>
                                <li className="list-group-item my-1">Xizmatlar</li>
                            </ul>
                        </div>

                        <div className="p-4 fst-italic">
                            <h4 className="fst-italic">Jurnal indexlari</h4>
                            <img src="https://inscience.uz/templates/images/openaccess.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/google-scholar.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/cyberleninka.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/index-copernicus.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/researchbib.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/internet-archive.png" className='img-fluid p-2' alt="" />
                            <img src="https://oriens.uz/media/indexes/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png" className='img-fluid p-2' alt="" />
                        </div>

                        <div>
                            <h4 className="fst-italic2">So'ngi yangiliklar</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">Example blog post title</h6>
                                            <small className="text-body-secondary">January 15, 2023</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">This is another blog post title</h6>
                                            <small className="text-body-secondary">January 14, 2023</small>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                        <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                        <div className="col-lg-8">
                                            <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                                            <small className="text-body-secondary">January 13, 2023</small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>





                        {/* <div className="p-4">
                            <h4 className="fst-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main