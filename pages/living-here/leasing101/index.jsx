import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import LeasingApartmentSearch from '../../../components/pages/living-here/leasing101/ApartmentSearch'
import Leasing101Banner from '../../../components/pages/living-here/leasing101/Banner'
import Leasing101FAQ from '../../../components/pages/living-here/leasing101/FAQ'
import Leasing101FindYourPlace from '../../../components/pages/living-here/leasing101/FindYourPlace'
import Leasing101livingGetReadyImages from '../../../components/pages/living-here/leasing101/livingGetReadyImages'

export default function GetReadyToRent() {
  return (
    <PageContainer title='Leasing 101'>
        <Leasing101Banner />
        <Leasing101livingGetReadyImages />
        {/* <Leasing101FindYourPlace /> */}
        <Leasing101FAQ />
        <LeasingApartmentSearch />
    </PageContainer>
  )
}
