import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import ImpactBanner from '../../../components/pages/about/impact/Banner'
import Belive from '../../../components/pages/about/impact/Belive'
import DoingBusniess from '../../../components/pages/about/impact/DoingBusniess'
import ResponsibleManagement from '../../../components/pages/about/impact/ResponsibleManagement'
import Offer from '../../../components/pages/about/impact/Greatingcommunity'
import SubBanner from '../../../components/pages/about/impact/Subbanner'
import EncologicalImpact from '../../../components/pages/about/impact/EncologicalImpact'
import SharingNews from '../../../components/pages/about/impact/News'
import WorkPlace from '../../../components/pages/about/impact/WorkPlace'
import LoveWhere from '../../../components/pages/about/impact/loveWhere'
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs'

export default function Impact() {
    return (
        <PageContainer title='Impact'>
            <ImpactBanner/>
            <Belive />
            <DoingBusniess/>
            <ResponsibleManagement/>
            <Offer/>
            <EncologicalImpact />
            <SharingNews/>
            <SubBanner />
            <WorkPlace />
            <LoveWhere />
            <ContactUs/>
        
        </PageContainer>
    )
}
