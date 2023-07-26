// import Link from 'next/link';
// import React, { useState } from 'react'

// export default function Header() {
//     const [Toggle, setToggle] = useState(false);

//     return (
//         <div>
//             {/* Main header start */}
//             <header className="main-header mh-3 header-transparent">
//                 <div className="container">
//                     <nav className="navbar navbar-expand-lg navbar-light">
//                         <Link href={"/"} className="navbar-brand logos">
//                             <img src="/img/logos/logo-2.png" alt="logo" className="logo-none-2" />
//                             <img src="/img/logos/logo.png" alt="logo" className="logo-none" />
//                         </Link>
//                         <button className="navbar-toggler" type="button" onClick={() => setToggle(!Toggle)}>
//                             <span className="navbar-toggler-icon" />
//                         </button>
//                         <div className={Toggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" href={"/location"}>
//                                         Apartment Search
//                                     </Link>
//                                 </li>
//                                 {/* <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         Living Here
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">List Layout</a>
//                                             <ul className="dropdown-menu">
//                                                 <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
//                                                 <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
//                                                 <li><a className="dropdown-item" href="#">Fullwidth</a></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Grid Layout</a>
//                                             <ul className="dropdown-menu">
//                                                 <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
//                                                 <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
//                                                 <li><a className="dropdown-item" href="#">Fullwidth</a></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Map View</a>
//                                             <ul className="dropdown-menu">
//                                                 <li><a className="dropdown-item" href="#">Map List 1</a></li>
//                                                 <li><a className="dropdown-item" href="#">Map List 2</a></li>
//                                                 <li><a className="dropdown-item" href="#">Map Grid 1</a></li>
//                                                 <li><a className="dropdown-item" href="#">Map Grid 2</a></li>
//                                                 <li><a className="dropdown-item" href="#">Map FullWidth</a></li>
//                                             </ul>
//                                         </li>
//                                         <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Property Detail</a>
//                                             <ul className="dropdown-menu">
//                                                 <li><a className="dropdown-item" href="#">Property Detail 1</a></li>
//                                                 <li><a className="dropdown-item" href="#">Property Detail 2</a></li>
//                                                 <li><a className="dropdown-item" href="#">Property Detail 3</a></li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item dropdown">
//                                     <Link className="nav-link dropdown-toggle" href={"/living-here"}>
//                                         Living Here
//                                     </Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                         <li><Link href={"/living-here"} className="dropdown-item">Living Here</Link></li>
//                                         <li><Link href={"/living-here/get-ready-to-rent"} className="dropdown-item">Get Ready to Rent</Link></li>
//                                         <li><Link href={"/living-here/leasing101"} className="dropdown-item">Leasing 101</Link></li>
//                                         <li><a className="dropdown-item" href="#">Resident Portal</a></li>
//                                         <li><a className="dropdown-item" href="https://balance-on-life-admin.vercel.app/employee/login" rel='noreferrer' target={"_blank"}>Employee Portal</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <Link className="nav-link dropdown-toggle" href={"/expertise"}>
//                                         Expertise
//                                     </Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                         <li><Link className="dropdown-item" href={"/expertise"}>Expertise</Link></li>
//                                         <li><a className="dropdown-item" href="#">Why BOL</a></li>
//                                         <li><a className="dropdown-item" href="#">Portfolio</a></li>
//                                         <li><a className="dropdown-item" href="#">Equities</a></li>
//                                         <li><a className="dropdown-item" href="#">Management</a></li>
//                                         <li><a className="dropdown-item" href="#">Construction</a></li>
//                                         <li><a className="dropdown-item" href="#">Architecture & Design</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         About
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                         <li><a className="dropdown-item" href="#">About</a></li>
//                                         <li><a className="dropdown-item" href="#">LeaderShip</a></li>
//                                         <li><a className="dropdown-item" href="#">Newsroom</a></li>
//                                         <li><a className="dropdown-item" href="#">Awards</a></li>
//                                         <li><a className="dropdown-item" href="#">Impact</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                         Careers
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                         <li><a className="dropdown-item" href="#">Careers</a></li>
//                                         <li><a className="dropdown-item" href="#">Job Search</a></li>
//                                     </ul>
//                                 </li>
//                                 {/* <li className="nav-item">
//                                     <a href="#" className="nav-link link-color"><i className="fa fa-plus" /> Submit Property</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#full-page-search" className="nav-link link-color"><i className="fa fa-search" /></a>
//                                 </li> */}
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     )
// }
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [Toggle, setToggle] = useState(false);

    return (

        <header className="main-header mh-3 header-transparent">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href={"/"} className="navbar-brand logos">
                        <img src="/img/logos/logo (2).png" alt="logo" className="logo-none-2" />
                        <img src="/img/logos/logo (2).png" alt="logo" className="logo-none" />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={() => setToggle(!Toggle)}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={Toggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href={"#"}>
                                    Team
                                </Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <li><Link href={'/location/BalanceMemorial'} className="dropdown-item">Balance on Memorial </Link></li>
                                    <li><Link href='/location/BalanceStonewood' className="dropdown-item">Balance on Stone Wood Hill </Link></li>
                                    <li><Link href='/location/BalanceWaterLoo' className="dropdown-item">Balance on Waterloo </Link></li>
                                   </ul> */}
                            </li>
                         
                            <li className="nav-item ">
                                <Link className="nav-link " href={"#"}>
                                    Service
                                </Link>
                         
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" href={"#"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PATIENTS
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href={"/about"}>About</Link></li>
                                    <li><Link className="dropdown-item" href={"/about/Leader"}>LeaderShip</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link "href={"#"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DENTISTS
                                </Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={"#"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                QUESTIONNAIRE
                                </Link>
                             
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={"#"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                REFERRAL
                                </Link>
                             
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
