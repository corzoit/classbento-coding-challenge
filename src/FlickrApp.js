import React, { useState } from 'react'

export const FlickrApp = () => {
    const [keyword, setKeyword] = useState('');

    const handleKeywordUpdate = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <>
            <h1>Flickr App</h1>
            <header className="mt-3">
                <input
                    type="text"
                    className="form-control"
                    value={keyword}
                    onChange={handleKeywordUpdate}
                    placeholder="Please enter a keyword to search"
                />
            </header>
            <section className="mt-3">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
