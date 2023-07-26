import React from 'react'
import PageContainer from '../../../components/layout/PageContainer';
import ProtfolioBanner from '../../../components/pages/expertise/Protfolio/banner';
import OurResults from '../../../components/pages/expertise/Protfolio/OURRESULTS';
import DropMoments from '../../../components/pages/expertise/Protfolio/DropMoments';
import Slider from '../../../components/pages/expertise/Protfolio/Slider';
import Housestudents from '../../../components/pages/expertise/Protfolio/HouseStudents';
import BuiltRent from '../../../components/pages/expertise/Protfolio/BuiltRent';
import Findlocation from '../../../components/pages/expertise/Protfolio/FindLocation';
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs';
export default function Expertise() {
    return (
        <PageContainer title='Protfolio'>
            <ProtfolioBanner/>
            <OurResults/>
            <DropMoments/>
            <Slider/>
            <Housestudents/>
            <BuiltRent/>
            <Findlocation/>
            <ContactUs/>
            
         
        </PageContainer>
    )
}
