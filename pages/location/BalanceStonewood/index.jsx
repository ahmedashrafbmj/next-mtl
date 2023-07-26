import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import PropertiesBalanceWoodStone from '../../../components/pages/appartment-search/BalanceStoneWood/Properties'
import GoogleMapBalanceStonewood from '../../../components/pages/appartment-search/BalanceStoneWood/Maps'
export default function AppartmentSearch() {
  return (
    <PageContainer title='Balance on Stone Wood Hill '>
        <GoogleMapBalanceStonewood/>
        <PropertiesBalanceWoodStone/>
    </PageContainer>
  )
}