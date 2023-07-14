import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import HeroHeader from '@/components/hero-header'
import CategoryGrid from '@/components/category-grid'
import ProductSlider from '@/components/product-slider'
import PromoSection from '@/components/promo-section'
import ContactSection from '@/components/contact-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>

        <HeroHeader />
        <CategoryGrid />
        <ProductSlider />
        <PromoSection />
        <ContactSection />
        
      </Layout>
      
    </>
  )
}
