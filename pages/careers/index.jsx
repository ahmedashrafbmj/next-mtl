import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import CareersBanner from '../../components/pages/careers/Banner'
import Managers from '../../components/pages/careers/Manager'
export default function Careers() {
    return (
        <PageContainer title='Careers'>
            <CareersBanner/>
            <Managers />
            {/* <DoingBusniess/> */}
            {/* <ResponsibleManagement/> */}
            {/* <Offer/> */}
            {/* <SoundLike/>
            <Benifits/>
            <Careersearch/> */}
        </PageContainer>
    )
}
