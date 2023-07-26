import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import GetApartmentSearch from '../../../components/pages/living-here/get-ready-to-rent/ApartmentSearch'
import GetReadyToRentBanner from '../../../components/pages/living-here/get-ready-to-rent/Banner'
import GetReadyToRentFAQ from '../../../components/pages/living-here/get-ready-to-rent/FAQ'
import FindYourPlace from '../../../components/pages/living-here/get-ready-to-rent/FindYourPlace'
import GetReadyToRentImages from '../../../components/pages/living-here/get-ready-to-rent/ReadyToRent'

export default function GetReadyToRent() {
  return (
    <PageContainer title='Get Ready To Rent'>
        <GetReadyToRentBanner />
        <FindYourPlace />
        <GetReadyToRentFAQ />
        <GetReadyToRentImages />
        <GetApartmentSearch />
    </PageContainer>
  )
}
