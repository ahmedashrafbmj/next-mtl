import Link from 'next/link'
import React from 'react'

export default function LeasingApartmentSearch() {
    return (
        <div className="categories content-area-4 bg-light">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h4>APARTMENT SEARCH</h4>
                    <h1>Are you prepared to take action now?</h1>
                    <div className="btn-sections">
                        <Link href="/location" className="btn btn-lg btn-primary-lg-outline">SEARCH</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
