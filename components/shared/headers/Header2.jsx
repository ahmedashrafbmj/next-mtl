import Link from 'next/link'
import React, { useState } from 'react'

export default function Header2() {
    const [Toggle, setToggle] = useState(false);

    return (
        <header className="main-header">
         <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href={"/"} className="navbar-brand logos">
                        <img src="/img/logos/logo.png" alt="logo" className="logo-none-2" />
                        <img src="/img/logos/logo.png" alt="logo" className="logo-none" />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={() => setToggle(!Toggle)}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={Toggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href={"/location"}>
                                    Locations
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <li><Link href={'/location/BalanceMemorial'} className="dropdown-item">Balance on Memorial </Link></li>
                                    <li><Link href='/location/BalanceStonewood' className="dropdown-item">Balance on Stone Wood Hill </Link></li>
                                    <li><Link href='/location/BalanceWaterLoo' className="dropdown-item">Balance on Waterloo </Link></li>
                                   </ul>
                            </li>
                            {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Living Here
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">List Layout</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                                                <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                                                <li><a className="dropdown-item" href="#">Fullwidth</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Grid Layout</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                                                <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                                                <li><a className="dropdown-item" href="#">Fullwidth</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Map View</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Map List 1</a></li>
                                                <li><a className="dropdown-item" href="#">Map List 2</a></li>
                                                <li><a className="dropdown-item" href="#">Map Grid 1</a></li>
                                                <li><a className="dropdown-item" href="#">Map Grid 2</a></li>
                                                <li><a className="dropdown-item" href="#">Map FullWidth</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Property Detail</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Property Detail 1</a></li>
                                                <li><a className="dropdown-item" href="#">Property Detail 2</a></li>
                                                <li><a className="dropdown-item" href="#">Property Detail 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href={"/living-here"}>
                                    Living Here
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link href={"/living-here"} className="dropdown-item">Living Here</Link></li>
                                    <li><Link href={"/living-here/get-ready-to-rent"} className="dropdown-item">Get Ready to Rent</Link></li>
                                    <li><Link href={"/living-here/leasing101"} className="dropdown-item">Leasing 101</Link></li>
                                    <li><a className="dropdown-item" href="https://signin.managebuilding.com/Resident/portal/global-login" rel='noreferrer' target={"_blank"}>Resident Portal</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href={"/about"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href={"/about"}>About</Link></li>
                                    <li><Link className="dropdown-item" href={"/about/Leader"}>LeaderShip</Link></li>
                                    <li><Link className="dropdown-item" href={"/about/ouvision"}>OurVision</Link></li>
                                    {/* <li><Link className="dropdown-item" href={"/about/newsroom"}>Newsroom</Link></li>
                                    <li><Link className="dropdown-item" href={"/about/awards"}>Awards</Link></li>
                                    <li><Link className="dropdown-item" href={"/about/impact"}>Impact</Link></li> */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href={"/about/ouvision"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our Vision
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href={"/about/ouvision"}>Our Vision</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href={"/careers"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Careers
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href={"/careers"}>Careers</Link></li>
                                    <li><a className="dropdown-item" href="https://balance-on-life-admin.vercel.app/employee/login" target={"_blank"} rel="noreferrer">Employee Portal</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                    <a href="#" className="nav-link link-color"><i className="fa fa-plus" /> Submit Property</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#full-page-search" className="nav-link link-color"><i className="fa fa-search" /></a>
                                </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
