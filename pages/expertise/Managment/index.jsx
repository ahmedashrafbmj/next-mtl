import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import ManagmentBanner from '../../../components/pages/expertise/Managment/Banner'
import Listed from '../../../components/pages/expertise/Managment/Listed'
import Offer from '../../../components/pages/expertise/Managment/Offer'
import FootPrint from '../../../components/pages/expertise/Managment/FootPrint'
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs'
import Protfolio from '../../../components/pages/expertise/Managment/Protfolio'
import Belive from '../../../components/pages/expertise/Managment/Belive'
import Knowledge from '../../../components/pages/expertise/Managment/Knowledge'
import CaseStudy from '../../../components/pages/expertise/Managment/CaseStudy'
export default function Expertise() {
    return (
        <PageContainer title='Managment'>
            <ManagmentBanner/>
            <Listed/>
            <Offer/>
            <FootPrint/>
            <Protfolio/>
            <Belive/>
            <Knowledge/>
            <CaseStudy/>
            <ContactUs/>
            
         
        </PageContainer>
    )
}
