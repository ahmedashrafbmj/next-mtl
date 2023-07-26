import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import AwardBanner from '../../../components/pages/about/Awards/Banner'
import InTheNews from '../../../components/pages/about/Awards/InTheNews'
import OurAgents from '../../../components/pages/about/Awards/OurAgents'
import WeOneOfTheBest from '../../../components/pages/about/Awards/WeOneOfTheBest'
import WinningAwards from '../../../components/pages/about/Awards/WinningAwards'
import WinningYears from '../../../components/pages/about/Awards/WinningYears'
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';

export default function Awards() {
    return (
        <PageContainer title='Awards'>
            <AwardBanner />
            <WinningYears />
            <WinningAwards />
            <OurAgents />
            <InTheNews />
            <WeOneOfTheBest />
          <ContactUs />
        </PageContainer>
    )
}
