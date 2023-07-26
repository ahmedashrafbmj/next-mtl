import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import GoogleMap from '../../components/pages/appartment-search/Map'
import NextMove from '../../components/pages/appartment-search/NextMove'
import Properties from '../../components/pages/appartment-search/Properties'

export default function AppartmentSearch() {
  return (
    <PageContainer title='Apartment Search'>
        <GoogleMap />
        <Properties />
        <NextMove />
    </PageContainer>
  )
}