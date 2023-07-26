import React from 'react'
import PageContainer from '../../../components/layout/PageContainer';
import WhyBhBanner from '../../../components/pages/expertise/whyBol/WhyBolBanner';
import SolutionFocused from '../../../components/pages/expertise/whyBol/Solution-Focused';
import Powerhouse from '../../../components/pages/expertise/whyBol/PowerHouse'
import Performance from '../../../components/pages/expertise/whyBol/Perfomance';
import Measure from '../../../components/pages/expertise/whyBol/Measure';
import Fusion from '../../../components/pages/expertise/whyBol/Fusion';
import Marketing from '../../../components/pages/expertise/whyBol/Marketing';
import Aylist from '../../../components/pages/expertise/whyBol/Aylist';
import Advanced from '../../../components/pages/expertise/whyBol/Advanced';
import StrategicSupport from '../../../components/pages/expertise/whyBol/StrageticSupport';
import StrategicUnderstanding from '../../../components/pages/expertise/whyBol/strategicUnderstanding';
import JudiciousSourcing from '../../../components/pages/expertise/whyBol/judiciouSourcing';
import MoreIntelligent from '../../../components/pages/expertise/whyBol/MoreIntelligent';
import RecentHeadline from '../../../components/pages/expertise/whyBol/RecentHeadline';
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';

export default function Expertise() {
    return (
        <PageContainer title='Expertise'>
          <WhyBhBanner/>
          <SolutionFocused/>
          <Powerhouse/>
          <Performance/>
          <Measure/>
          <Fusion/>
          <Marketing/>
          <Aylist/>
          <Advanced/>
          <StrategicSupport/>
          <StrategicUnderstanding/>
          <JudiciousSourcing/>
          <MoreIntelligent/>
          <RecentHeadline/>
          <ContactUs/>
        </PageContainer>
    )
}
