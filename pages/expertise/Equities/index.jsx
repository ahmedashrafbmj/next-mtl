import React from 'react'
import PageContainer from '../../../components/layout/PageContainer';
import EquitiesBanner from '../../../components/pages/expertise/Equities/Banner';
import Found from '../../../components/pages/expertise/Equities/Found';
import OurAnswer from '../../../components/pages/expertise/Equities/OurAnwer';
import Philippia from '../../../components/pages/expertise/Equities/PHILIPPIA';
import TheTeam from '../../../components/pages/expertise/Equities/TheTeam';
import GreenInitiative from '../../../components/pages/expertise/Equities/GreenInitiative';
import RecentNews from '../../../components/pages/expertise/Equities/RecentNews';
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';
import AdvantagePortal from '../../../components/pages/expertise/Equities/AdvantagePortal';
export default function Equities() {
    return (
        <PageContainer title='Equities'>
            <EquitiesBanner/>
            <Found/>
            <OurAnswer/>
            <Philippia/>
            <TheTeam/>
            <GreenInitiative/>
            <RecentNews/>
            <AdvantagePortal/>
            <ContactUs/>
        </PageContainer>
    )
}
