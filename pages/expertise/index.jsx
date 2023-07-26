import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import Awards from '../../components/pages/expertise/Awards'
import ExpertiseBanner from '../../components/pages/expertise/Banner'
import ContactUs from '../../components/pages/expertise/ContactUs'
import LivingHere from '../../components/pages/expertise/LivingHere'
import News from '../../components/pages/expertise/News'
import OurServices from '../../components/pages/expertise/OurServices'
import OurStats from '../../components/pages/expertise/OurStats'
import WhyBalanceOnLife from '../../components/pages/expertise/WhyBalanceOnLife'

export default function Expertise() {
    return (
        <PageContainer title='Expertise'>
            <ExpertiseBanner />
            <OurServices />
            <OurStats />
            <WhyBalanceOnLife />
            <Awards />
            <News />
            <ContactUs />
            <LivingHere />
        </PageContainer>
    )
}
