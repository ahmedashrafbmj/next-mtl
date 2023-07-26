import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import AboutBanner from '../../components/pages/about/Banner'
import See from '../../components/pages/about/See'
import OurBelifs from '../../components/pages/about/OurBelifs'
import InternelPower from '../../components/pages/about/InternelPower'
import Results from '../../components/pages/about/Results'
import Happen from '../../components/pages/about/Happen'
import AboutAwards from '../../components/pages/about/Award'
import Impact from '../../components/pages/about/Impact'
import Carrers from '../../components/pages/about/Carrers'
import AboutNews from '../../components/pages/about/News'
export default function About() {
  return (
    <PageContainer title='About'>
        {/* <AboutBanner/>
        <See/>
        <OurBelifs/>
        <InternelPower/>
        <Results/>
        <Happen/>
        <AboutAwards />
        <Impact/> */}
        <Carrers />
        <br/>
        <div className="container">
        <h4 className='mt-4'> <b>Balance on Life, is an Oklahoma Based Real Estate investment group specialized in ground up and value-add Multifamily investment opportunities throughout the state of Oklahoma. </b></h4>
                            <h4 className='mt-4'> <b>Our vertically integrated business platform uniquely positions our teammates to achieve superior balance in life and business and timely delivery of projects by harboring in-house every major Realty functional group spanning across developer, broker, contractor and operator specialties. </b></h4>
                            <h4 className='mt-4'>We are regional experts in Acquisition, Development, Construction, and Asset Management, and as such, provide our clients turnkey Multifamily Realty investment solutions that deliver timely projects and above market experience opportunities.</h4>

        </div>
        {/* <AboutNews /> */}
    </PageContainer>
  )
}