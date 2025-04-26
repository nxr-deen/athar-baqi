"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PageTitle from "@/components/page-title"
import Newsletter from "@/components/newsletter"

// نموذج بيانات المقالة
interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  categoryLabel: string
  imageUrl: string
}

// بيانات المقالات
const articles: Article[] = [
  {
    id: 1,
    title: "فضل تلاوة القرآن الكريم",
    excerpt: "تعرف على فضائل تلاوة القرآن الكريم وأثرها في حياة المسلم، وكيف يكون القرآن شفيعاً لصاحبه يوم القيامة...",
    date: "15 مارس 2025",
    category: "quran",
    categoryLabel: "فضائل القرآن",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 2,
    title: "كيف تحفظ القرآن بسهولة؟",
    excerpt:
      "نصائح عملية وخطوات منهجية تساعدك على حفظ القرآن الكريم بطريقة سليمة ومتينة، مع الحفاظ على المراجعة المستمرة...",
    date: "10 مارس 2025",
    category: "tajweed",
    categoryLabel: "التجويد والقراءة",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 3,
    title: "تأملات في سورة الرحمن",
    excerpt: "وقفات تأملية مع آيات سورة الرحمن، وما فيها من دلالات على نعم الله الكثيرة التي تستوجب الشكر والعبادة...",
    date: "5 مارس 2025",
    category: "thoughts",
    categoryLabel: "خواطر إيمانية",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 4,
    title: "أسلوب القرآن في الترغيب والترهيب",
    excerpt: "دراسة في أساليب القرآن الكريم في الترغيب والترهيب، وكيف تؤثر هذه الأساليب على نفسية المسلم...",
    date: "28 فبراير 2025",
    category: "studies",
    categoryLabel: "دراسات قرآنية",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 5,
    title: "أخطاء شائعة في تلاوة القرآن وكيفية تجنبها",
    excerpt: "أهم الأخطاء الشائعة التي يقع فيها القراء عند تلاوة القرآن الكريم، وكيفية تصحيحها وتجنبها...",
    date: "20 فبراير 2025",
    category: "tajweed",
    categoryLabel: "التجويد والقراءة",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
  {
    id: 6,
    title: "العِبر المستفادة من قصص القرآن",
    excerpt: "ماذا نستفيد من قصص القرآن الكريم في واقعنا المعاصر، وكيف نطبق دروسها في حياتنا اليومية...",
    date: "15 فبراير 2025",
    category: "quran",
    categoryLabel: "فضائل القرآن",
    imageUrl: "/placeholder.svg?height=250&width=400",
  },
]

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  // تصفية المقالات حسب الفئة
  const filteredArticles =
    activeFilter === "all" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <main>
      <PageTitle title="المقالات والخواطر" description="مقالات وخواطر إيمانية عن القرآن الكريم وتدبره" />

      {/* قسم تصفية المقالات */}
      <section className="articles-filter">
        <div className="container">
          <div className="filter-options">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
            >
              جميع المقالات
            </button>
            <button
              className={`filter-btn ${activeFilter === "quran" ? "active" : ""}`}
              onClick={() => setActiveFilter("quran")}
              aria-pressed={activeFilter === "quran"}
            >
              فضائل القرآن
            </button>
            <button
              className={`filter-btn ${activeFilter === "tajweed" ? "active" : ""}`}
              onClick={() => setActiveFilter("tajweed")}
              aria-pressed={activeFilter === "tajweed"}
            >
              التجويد والقراءة
            </button>
            <button
              className={`filter-btn ${activeFilter === "thoughts" ? "active" : ""}`}
              onClick={() => setActiveFilter("thoughts")}
              aria-pressed={activeFilter === "thoughts"}
            >
              خواطر إيمانية
            </button>
            <button
              className={`filter-btn ${activeFilter === "studies" ? "active" : ""}`}
              onClick={() => setActiveFilter("studies")}
              aria-pressed={activeFilter === "studies"}
            >
              دراسات قرآنية
            </button>
          </div>
        </div>
      </section>

      {/* قسم المقالات */}
      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="article-card" data-category={article.category}>
                <div className="article-image">
                  <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} width={400} height={250} />
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="date">
                      <i className="far fa-calendar-alt"></i> {article.date}
                    </span>
                    <span className="category">{article.categoryLabel}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link href={`/articles/${article.id}`} className="read-more">
                    اقرأ المزيد <i className="fas fa-arrow-left"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم تصفح الصفحات */}
      <section className="pagination">
        <div className="container">
          <div className="pagination-controls">
            <a href="#" className="pagination-prev disabled">
              <i className="fas fa-chevron-right"></i> السابق
            </a>
            <div className="pagination-numbers">
              <a href="#" className="active">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <span>...</span>
              <a href="#">8</a>
            </div>
            <a href="#" className="pagination-next">
              التالي <i className="fas fa-chevron-left"></i>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
