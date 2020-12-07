import React from 'react'
import "./Org.scss"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Org() {
    return (
        <div className="container mt-5 mb-5" id="org">
            <div className="row">
                <div className="col-sm-12">
                    <div className="qodef-image-with-rotate-text-holder">
                        <div className="qodef-image-with-rotate-text-inner">
                            <p className="qodef-image-with-rotate-text qodef-bg-text--animated qodef--appear">
                                <span className="qodef-bg-text-char qodef--show">Org...</span>
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
                    <div className="card profileCard">
                        <div className="card-img-top text-center">
                            <img src="/profile-1.jpeg" alt="" className="profilePic img-fluid" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Arvavind Ashok Avnekar</h3>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Member subtitle</h6>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci autem doloribus animi eaque laudantium ea distinctio, sunt quo quaerat.</p>
                            <div className="social">
                                <a href="/" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                                <a href="/" target="_blank">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card profileCard">
                        <div className="card-img-top text-center">
                            <img src="/profile-2.jpeg" alt="" className="profilePic img-fluid" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Arvavind Ashok Avnekar</h3>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Member subtitle</h6>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci autem doloribus animi eaque laudantium ea distinctio, sunt quo quaerat.</p>
                            <div className="social">
                                <a href="/" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                                <a href="/" target="_blank">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card profileCard">
                        <div className="card-img-top text-center">
                            <img src="/profile-3.jpeg" alt="" className="profilePic img-fluid" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>Arvavind Ashok Avnekar</h3>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Member subtitle</h6>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum adipisci autem doloribus animi eaque laudantium ea distinctio, sunt quo quaerat.</p>
                            <div className="social">
                                <a href="/" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                                <a href="/" target="_blank">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
