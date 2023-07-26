import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import ApartmentSearch from '../../components/pages/living-here/ApartmentSearch'
import LivingHereBanner from '../../components/pages/living-here/Banner'
import FAQ from '../../components/pages/living-here/FAQ'
import FindYourPlace from '../../components/pages/living-here/FindYourPlace'
import ModernLiving from '../../components/pages/living-here/ModernLiving'
import ReadyToRent from '../../components/pages/living-here/ReadyToRent'

export default function LivingHere() {
  return (
    <PageContainer title='Living Here'>
        <LivingHereBanner />
        <ModernLiving />
        <ReadyToRent />
        {/* <FindYourPlace /> */}
        <FAQ />
        <ApartmentSearch />
    </PageContainer>
  )
}
