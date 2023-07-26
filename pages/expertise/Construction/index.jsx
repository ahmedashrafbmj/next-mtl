import React from 'react'
import PageContainer from '../../../components/layout/PageContainer';
import ConstructionBanner from '../../../components/pages/expertise/Construction/Banner';
import ATeam from '../../../components/pages/expertise/Construction/Ateam'; 
import ConstructionSlider from '../../../components/pages/expertise/Construction/Slider';
import SuccessStory from '../../../components/pages/expertise/Construction/SuccessStory';
import OurTeam from '../../../components/pages/expertise/Construction/OurTeam';
import Reducing from '../../../components/pages/expertise/Construction/Reducing';
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';
export default function Expertise() {
    return (
        <PageContainer title='Construction'>
            <ConstructionBanner/>
            <ATeam/>
            <ConstructionSlider/>
            <SuccessStory/>
            <OurTeam/>
            <Reducing/>
            <ContactUs/>

            
         
        </PageContainer>
    )
}
