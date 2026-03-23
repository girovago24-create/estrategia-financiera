import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { DownloadSection } from '@/components/sections/DownloadSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DownloadSection />
      <CTASection />
    </>
  )
}
