import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import WhatSee from '../../../components/pages/about/Leader/WhatSee'
import LeaderBanner from '../../../components/pages/about/Leader/Banner'
import ExecutiveLeader from '../../../components/pages/about/Leader/ExecutiveLeader'
import RegionalLeader from '../../../components/pages/about/Leader/ReginalLeadership'
import EquitiesLeader from '../../../components/pages/about/Leader/EquitiesLeaderShip'
import WorkHere from '../../../components/pages/about/Leader/WorkHere'
import LeaderNews from '../../../components/pages/about/Leader/News'
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs'
import Leasing101livingGetReadyImages from '../../../components/pages/living-here/leasing101/livingGetReadyImages'
export default function About() {
  return (
    <PageContainer title='LeaderShip'>
    <LeaderBanner />
    <WhatSee />
    <ExecutiveLeader />
    <RegionalLeader />
    <Leasing101livingGetReadyImages />
    {/* <EquitiesLeader /> */}
    {/* <WorkHere /> */}
    {/* <LeaderNews /> */}
    <ContactUs />
    </PageContainer>
  )
}