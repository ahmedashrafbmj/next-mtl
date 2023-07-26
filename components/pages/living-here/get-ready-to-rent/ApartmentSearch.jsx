import React from 'react'
import Link from 'next/link'
export default function GetApartmentSearch() {
    return (
        <div className="categories content-area-4 bg-grea">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h4>APARTMENT SEARCH</h4>
                    <h1> <Link href={"/living-here/get-ready-to-rent"}>Are you prepared to take action now?</Link></h1>
                    <div className="btn-sections">
                    <a href="https://tenantsinmind.managebuilding.com/Resident/rental-application/new" className="btn btn-lg btn-primary-lg-outline">SEARCH</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
