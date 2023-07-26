import PageContainer from '../components/layout/PageContainer'
import HomeBanner from '../components/pages/home/Banner';
import OurResident from '../components/pages/home/OurResident';
import OurExpertise from '../components/pages/home/OurExpertise';
import OurStats from '../components/pages/home/OurStats';
import WhyBalanceOnLife from '../components/pages/home/WhyBalanceOnLife';
import OurPeople from '../components/pages/home/OurPeople';
import Articles from '../components/pages/home/Articles';
import ContactUs from '../components/pages/home/ContactUs';
import Header from '../components/shared/headers/Header';

export default function Home() {
  return (
    <PageContainer title='Home' header={<Header/>}>
      <HomeBanner />
      <OurResident /> 
      <OurExpertise />
      {/* <OurStats /> */}
      <WhyBalanceOnLife />
      <OurPeople />
      {/* <Articles /> */}
      {/* <ContactUs /> */}
    </PageContainer >
  )
}
