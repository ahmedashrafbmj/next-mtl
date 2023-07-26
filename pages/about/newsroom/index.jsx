import React from 'react'
import PageContainer from '../../../components/layout/PageContainer'
import NewsRoomBanner from '../../../components/pages/about/newsroom/Banner'
import Post from '../../../components/pages/about/newsroom/Posts'
import GoodPost from '../../../components/pages/about/newsroom/GoodPosts'
import LatestStories from '../../../components/pages/about/newsroom/LatestStories'
import ContactUs from '../../../components/pages/expertise/whyBol/ContactUs'
export default function About() {
  return (
    <PageContainer title='NewsRoom'>
        <NewsRoomBanner />
        <Post />
        <GoodPost/>
        <LatestStories/>
        <ContactUs/>
    </PageContainer>
  )
}