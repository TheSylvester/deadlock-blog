'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, RssIcon, Bell, Share2, ArrowRight } from 'lucide-react'

export function FixedNewsBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#4D4445] text-[#D3D3D3]">
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/more-screenshots-of-deadlock-ex-neon-prime-v0-18s59q3hmy0d1-geeoABHqwqjwx3jYxTWDfjp5vw994u.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.3)',
        }}
      />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3BagwmJp1L6PzTsKlGudjMfeIOY2m0.png"
                  alt="Deadlock Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-['Cinzel'] text-[#F4EED8] text-2xl font-bold">DEADLOCK</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-[#D3D3D3] hover:text-[#FFC700] transition-colors font-semibold">News</Link>
                <Link href="#" className="text-[#D3D3D3] hover:text-[#FFC700] transition-colors font-semibold">Patch Notes</Link>
                <Link href="#" className="text-[#D3D3D3] hover:text-[#FFC700] transition-colors font-semibold">Heroes</Link>
                <Link href="#" className="text-[#D3D3D3] hover:text-[#FFC700] transition-colors font-semibold">Community</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-[#D3D3D3] hover:text-[#00FF00] hover:bg-[#43484E]/20">
                <RssIcon className="h-5 w-5" />
                <span className="sr-only">RSS Feed</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-[#D3D3D3] hover:text-[#00FF00] hover:bg-[#43484E]/20">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Full-width Hero Banner with Side Articles */}
        <section className="relative bg-black/30">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 relative">
                <Image
                  src="https://project8-data.community.forum/attachments/28/28471-f99e851a756fd4e24e356e700bfdc476.jpg?hash=urreBpPM3w"
                  alt="Neon District Map Update"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg border border-[#F4EED8]/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg border border-[#F4EED8]/20" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-[#FF4D4D] text-white rounded">
                    MAP UPDATE
                  </div>
                  <h1 className="font-['Cinzel'] text-3xl md:text-4xl font-bold text-[#F4EED8] mb-2">
                    Neon District: Vertical Combat Evolved
                  </h1>
                  <p className="text-[#D3D3D3] max-w-2xl mb-4">
                    Major parkour improvements and strategic hazard placements transform the urban battleground. New rooftop paths and electrifying danger zones redefine vertical gameplay.
                  </p>
                  <Button className="bg-[#00FF00] text-black hover:bg-[#FFC700]">
                    View Changes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors rounded-md">
                  <CardHeader className="flex flex-row items-center space-x-4 p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-heroes-of-deadlock-v0-p94w7b6rdx1d1-NctDyX5xGRuQnr6Nx4HDuMXtM9n5Jg.webp"
                      alt="Grey Talon Hero"
                      width={60}
                      height={60}
                      className="rounded-md object-cover w-[60px] h-[60px]"
                    />
                    <div>
                      <CardTitle className="text-[#F4EED8]">New Hero: Grey Talon Joins the Fight</CardTitle>
                      <CardDescription className="text-[#D3D3D3]">
                        A cunning predator emerges with advanced energy bow technology
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors rounded-md">
                  <CardHeader className="flex flex-row items-center space-x-4 p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26232-cca3fa93e3001a198fd32c5ba61abc10-yTQsGBKSt2R1uxdRIm3RoYGnxVABzs.png"
                      alt="Championship Series"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] text-lg">
                        Deadlock Championship Series Announced
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3]">
                        Get ready for the ultimate test of skill
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors rounded-md">
                  <CardHeader className="flex flex-row items-center space-x-4 p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6-1024x576-e51wntZJ6AQCrLzVwbbU8wjI9OyM4u.webp"
                      alt="New Map Teaser"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] text-lg">
                        New Map Teaser: Neon Alley
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3]">
                        A glimpse into the upcoming urban battleground
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors rounded-md">
                  <CardHeader className="flex flex-row items-center space-x-4 p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720.jpg-K5HqMmB8BbKekh8388Fgz4TjkCFQs9.jpeg"
                      alt="Community Artwork"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] text-lg">
                        Community Spotlight: Artwork Showcase
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3]">
                        Featuring the best fan creations this month
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section with Background */}
        <section className="relative bg-black/30 py-4">
          <div className="container mx-auto px-4">
            {/* Latest News Articles */}
            <section className="mb-12">
              <h2 className="font-['Cinzel'] text-2xl font-bold text-[#F4EED8] mb-6 pl-1">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26232-cca3fa93e3001a198fd32c5ba61abc10-yTQsGBKSt2R1uxdRIm3RoYGnxVABzs.png"
                      alt="Deadlock Tournament"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] mb-2">
                        Deadlock Pro League: Week 3 Recap
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3] mb-4">
                        Highlights from the intense matches and standout performances
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#D3D3D3]">2 days ago</span>
                        <Button variant="ghost" size="sm" className="text-[#00FF00] hover:text-[#FFC700]">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6-1024x576-e51wntZJ6AQCrLzVwbbU8wjI9OyM4u.webp"
                      alt="New Weapon Skins"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] mb-2">
                        Neon Fury: New Weapon Skin Collection
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3] mb-4">
                        Light up the battlefield with these electrifying new skins
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#D3D3D3]">4 days ago</span>
                        <Button variant="ghost" size="sm" className="text-[#00FF00] hover:text-[#FFC700]">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-black/30 border-[#F4EED8]/20 hover:border-[#00FF00]/50 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/more-screenshots-of-deadlock-ex-neon-prime-v0-18s59q3hmy0d1-geeoABHqwqjwx3jYxTWDfjp5vw994u.webp"
                      alt="Balance Changes"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <CardTitle className="font-['Playfair_Display'] text-[#F4EED8] mb-2">
                        Upcoming Balance Changes: Developer Insights
                      </CardTitle>
                      <CardDescription className="text-[#D3D3D3] mb-4">
                        Our team discusses the philosophy behind the latest tweaks
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#D3D3D3]">1 week ago</span>
                        <Button variant="ghost" size="sm" className="text-[#00FF00] hover:text-[#FFC700]">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Matchmaking Schedule */}
            <section className="mb-12">
              <h2 className="font-['Cinzel'] text-3xl font-bold text-[#F4EED8] mb-6">Matchmaking Schedule</h2>
              <Card className="bg-black/30 border-[#F4EED8]/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-['Playfair_Display'] text-xl text-[#F4EED8] mb-2">Playtest Schedule</h3>
                      <p className="text-[#D3D3D3] mb-2">
                        <span className="font-semibold">Monday - Thursday:</span> 14:00 - 02:00 Local Time
                      </p>
                      <p className="text-[#D3D3D3]">
                        <span className="font-semibold">Friday - Sunday:</span> 10:00 - 02:00 Local Time
                      </p>
                    </div>
                    <div>
                      <p className="text-[#00FF00] font-semibold mb-2">STATUS: Matchmaking open until 02:00</p>
                      <p className="text-[#D3D3D3]">Region: EUROPE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Patch Notes Preview */}
            <section className="mb-12">
              <h2 className="font-['Cinzel'] text-3xl font-bold text-[#F4EED8] mb-6">Latest Patch Notes</h2>
              <Card className="bg-black/30 border-[#F4EED8]/20">
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display'] text-[#F4EED8]">Patch 1.23 Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Grey Talon: New hero added to the roster</li>
                    <li>Abrams: Reduced cooldown on ultimate ability</li>
                    <li>Dynamo: Increased movement speed</li>
                    <li>General: Improved matchmaking algorithm</li>
                  </ul>
                  <Button className="mt-4 bg-[#00FF00] text-black hover:bg-[#FFC700]">
                    Read Full Patch Notes
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F4EED8]/20 mt-0 bg-black/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#D3D3D3]"> 2024 Deadlock. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-[#D3D3D3] hover:text-[#FFC700] transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-[#D3D3D3] hover:text-[#FFC700] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-[#D3D3D3] hover:text-[#FFC700] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}