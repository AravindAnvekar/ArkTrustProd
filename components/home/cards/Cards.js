import React from 'react'

export default function Cards() {
    return (
        <div className="container mt-5 mb-5" id="work">
            <div className="row">
                <div className="col-sm-12">
                    <div className="qodef-image-with-rotate-text-holder">
                        <div className="qodef-image-with-rotate-text-inner">
                            <p className="qodef-image-with-rotate-text qodef-bg-text--animated qodef--appear">
                                <span className="qodef-bg-text-char qodef--show">Work</span>
                            </p>
                        </div>
                    </div>
                    <h2 className="t2">
                        Lorem ipsum dolor sit amet consectetur.
          </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src="/blg-1.jpg" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cumque dicta possimus cum aspernatur eligendi.</p>
                            <a href="#" className="link">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src="/blg-2.jpg" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cumque dicta possimus cum aspernatur eligendi.</p>
                            <a href="#" className="link">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src="/blg-3.jpg" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cumque dicta possimus cum aspernatur eligendi.</p>
                            <a href="#" className="link">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
