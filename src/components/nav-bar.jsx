import Link from "react-router-dom";
import { Button } from '../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/highlights', label: 'Highlights' },
    { href: '/team', label: 'Team' },
  ]

  return (
    (<header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="/placeholder.svg"
            alt="MLSA MIET Logo"
            width={40}
            height={40}
            className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold">MLSA MIET</span>
            <span className="text-xs text-muted-foreground">Communicate. Collaborate. Create.</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Button variant="default" size="sm">
            Join Us
          </Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Button variant="default" size="sm" onClick={() => setIsOpen(false)}>
                Join Us
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>)
  );
}
