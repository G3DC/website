import { HeroSection } from "@/components/custom-ui/home/HeroSection"
import { NavBar } from "@/components/custom-ui/home/NavBar"
import { Footer } from "@/components/custom-ui/home/Footer"

export function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  )
}
