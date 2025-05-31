import type { Metadata } from "next"
import { Shield, BookOpen, ShoppingCart, Users, ArrowRight, Terminal, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
  description:
    "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses in ethical hacking and cybersecurity.",
  keywords:
    "cybersecurity, ethical hacking, security blog, hacker tools, cybersecurity courses, Bangladesh, penetration testing",
  authors: [{ name: "Cyber Ethix BD" }],
  openGraph: {
    title: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
    description:
      "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Ethix BD - Cybersecurity Knowledge & Ethical Hacking",
    description:
      "Leading cybersecurity platform in Bangladesh offering security blogs, hacker tools, and comprehensive courses.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      {/* Header */}
      <header className="border-b border-green-500/20 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-green-400" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Cyber Ethix BD</h1>
                <p className="text-sm text-green-400/80 hidden sm:block">
                  Empowering Cybersecurity Knowledge & Ethical Hacking
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">
                Blog
              </Link>
              <Link href="/store" className="text-gray-300 hover:text-green-400 transition-colors">
                Store
              </Link>
              <Link href="/courses" className="text-gray-300 hover:text-green-400 transition-colors">
                Courses
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Art of
              <span className="text-green-400 block">Ethical Hacking</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Bangladesh's premier cybersecurity community. Learn, practice, and excel in ethical hacking with our
              comprehensive resources, tools, and expert-led courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Terminal className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Security Blog */}
            <Card className="bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-500/10 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-green-400 transition-colors">
                  Security Blog
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Stay updated with the latest cybersecurity trends, vulnerabilities, and defense strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Zap className="h-4 w-4 text-green-400" />
                    <span>Latest threat intelligence</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Lock className="h-4 w-4 text-green-400" />
                    <span>Security best practices</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Terminal className="h-4 w-4 text-green-400" />
                    <span>Technical tutorials</span>
                  </div>
                </div>
                <Link href="/blog" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:scale-105 transition-transform">
                    Explore Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hacker Store */}
            <Card className="bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-500/10 rounded-full w-fit">
                  <ShoppingCart className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-green-400 transition-colors">
                  Hacker Store
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Professional-grade cybersecurity tools and resources for ethical hackers and security professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Penetration testing tools</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Terminal className="h-4 w-4 text-green-400" />
                    <span>Security software</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <BookOpen className="h-4 w-4 text-green-400" />
                    <span>Educational resources</span>
                  </div>
                </div>
                <Link href="/store" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:scale-105 transition-transform">
                    Visit Store
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Courses */}
            <Card className="bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-500/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-green-400 transition-colors">
                  Courses
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Comprehensive cybersecurity courses designed by industry experts to advance your skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Ethical hacking certification</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Lock className="h-4 w-4 text-green-400" />
                    <span>Network security</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Zap className="h-4 w-4 text-green-400" />
                    <span>Incident response</span>
                  </div>
                </div>
                <Link href="/courses" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:scale-105 transition-transform">
                    Browse Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Security Articles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Premium Tools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-400">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-green-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold text-white">Cyber Ethix BD</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering the next generation of cybersecurity professionals in Bangladesh through education, tools,
                and community.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Security Blog
                </Link>
                <Link href="/store" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Hacker Store
                </Link>
                <Link href="/courses" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Courses
                </Link>
                <Link href="/community" className="block text-gray-400 hover:text-green-400 transition-colors">
                  Community
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Dhaka, Bangladesh</p>
                <p>info@cyberethixbd.com</p>
                <p>+880 1XXX-XXXXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Cyber Ethix BD. All rights reserved. | Securing Bangladesh's Digital Future
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
