import React from 'react'
import AllText from '../../../components/pages/about/ourvision/AllText'
import ReadyToRent from '../../../components/pages/living-here/ReadyToRent'
import FindYourPlace from '../../../components/pages/living-here/get-ready-to-rent/FindYourPlace'
import AllPics from '../../../components/pages/about/ourvision/AllPics'
import PageContainer from '../../../components/layout/PageContainer'

export default function OurVision() {
    return (
        <>
            <PageContainer title="Our Vision">
                <h1 className="text-center bg-grea">Our Vision</h1>
                <AllText />
                <ReadyToRent />
                <FindYourPlace />
                <AllPics />
            </PageContainer>
        </>
    )
}