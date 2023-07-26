import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import PropertiesBalanceWaterLoo from '../../../components/pages/appartment-search/BalanceWaterLoo/Properties'
import GoogleMapBalanceWaterLoo from '../../../components/pages/appartment-search/BalanceWaterLoo/Map'
export default function AppartmentSearch() {
  return (
    <PageContainer title='Balance on Stone Wood Hill '>
        <GoogleMapBalanceWaterLoo/>
        <PropertiesBalanceWaterLoo/>
    </PageContainer>
  )
}