"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav")
      const menuToggle = document.querySelector(".menu-toggle")

      if (
        isMenuOpen &&
        nav &&
        !nav.contains(event.target as Node) &&
        menuToggle &&
        !menuToggle.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Close menu when pressing Escape
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isMenuOpen])

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>أثر باقي</h1>
        </div>
        <nav className={isMenuOpen ? "active" : ""}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/quran" className={pathname === "/quran" ? "active" : ""}>
                التلاوات
              </Link>
            </li>
            <li>
              <Link href="/education" className={pathname === "/education" ? "active" : ""}>
                التعليم
              </Link>
            </li>
            <li>
              <Link href="/articles" className={pathname === "/articles" ? "active" : ""}>
                المقالات
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/support" className={pathname === "/support" ? "active support-btn" : "support-btn"}>
                ادعم الموقع
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  )
}
