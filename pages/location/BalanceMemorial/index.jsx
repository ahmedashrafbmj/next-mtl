import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import GoogleMapMemorial from '../../../components/pages/appartment-search/BalanceMemorial/Map'
import PropertiesBalanceMemorial from '../../../components/pages/appartment-search/BalanceMemorial/Apprtments'
export default function AppartmentSearch() {
  return (
    <PageContainer title='Balance Memorial'>
        <GoogleMapMemorial />
        <PropertiesBalanceMemorial/>
    </PageContainer>
  )
}