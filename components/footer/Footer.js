import React from 'react'
import "./Footer.scss"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>ARKTrust</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className="social">
                            <a href="/">
                                <FaFacebookF />
                            </a>
                            <a href="/">
                                <FaLinkedinIn />
                            </a>
                            <a href="/">
                                <FaTwitter />
                            </a>
                            <a href="/">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4">

                        <address>
                            <strong>Twitter, Inc.</strong><br />
                            1355 Market St, Suite 900<br />
                                    San Francisco, CA 94103<br />
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                    <div className="col-sm-4">
                        <ul className="list-unstyled footer-nav">
                            <li>
                                <Link href="/">
                                    <a >Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#org">
                                    <a>Organiaztion</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#work">
                                    <a>Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Donations</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Blood Bank</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
