import React from 'react'
import PageContainer from '../../../components/layout/PageContainer';
import ArchitechtureBanner from '../../../components/pages/expertise/Architechture/Banner';
import TheGroup from '../../../components/pages/expertise/Architechture/TheGroup';
import Work from '../../../components/pages/expertise/Architechture/Work';
import ArchitechtureSlider from '../../../components/pages/expertise/Architechture/Slider';
import TheStaff from '../../../components/pages/expertise/Architechture/TheStaff';
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';
export default function Expertise() {
    return (
        <PageContainer title='Construction'>
         <ArchitechtureBanner/>
         <TheGroup/>
         <Work/>
         <ArchitechtureSlider/>
         <TheStaff/>
         <ContactUs/>
        </PageContainer>
    )
}
