"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PageTitle from "@/components/page-title"
import Newsletter from "@/components/newsletter"

export default function EducationPage() {
  const [activeLevel, setActiveLevel] = useState("beginner")
  const [activeFaqItems, setActiveFaqItems] = useState<number[]>([])

  // تبديل حالة عنصر الأسئلة الشائعة
  const toggleFaqItem = (id: number) => {
    setActiveFaqItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main>
      <PageTitle title="تعلم القرآن الكريم" description="مواد تعليمية في التجويد وأحكام التلاوة" />

      {/* قسم دروس التجويد */}
      <section className="tajweed-lessons">
        <div className="container">
          <h2 className="section-title">دروس التجويد</h2>
          <div className="level-tabs">
            <button
              className={`level-tab ${activeLevel === "beginner" ? "active" : ""}`}
              onClick={() => setActiveLevel("beginner")}
            >
              المبتدئين
            </button>
            <button
              className={`level-tab ${activeLevel === "intermediate" ? "active" : ""}`}
              onClick={() => setActiveLevel("intermediate")}
            >
              المتوسط
            </button>
            <button
              className={`level-tab ${activeLevel === "advanced" ? "active" : ""}`}
              onClick={() => setActiveLevel("advanced")}
            >
              المتقدم
            </button>
          </div>

          <div className={`lessons-container beginner-level ${activeLevel === "beginner" ? "active-level" : ""}`}>
            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="مخارج الحروف" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>مخارج الحروف</h3>
                <p>تعرف على المخارج الصحيحة للحروف العربية في القرآن الكريم</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 15 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="صفات الحروف" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>صفات الحروف</h3>
                <p>تعلم صفات الحروف العربية وتطبيقها في تلاوة القرآن الكريم</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 20 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="أحكام النون الساكنة" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>أحكام النون الساكنة والتنوين</h3>
                <p>شرح مفصل لأحكام النون الساكنة والتنوين: الإظهار، الإدغام، الإقلاب، الإخفاء</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 25 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`lessons-container intermediate-level ${activeLevel === "intermediate" ? "active-level" : ""}`}
          >
            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="المدود" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>أحكام المدود</h3>
                <p>شرح مفصل لأنواع المدود وأحكامها في القرآن الكريم</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 30 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="أحكام الميم الساكنة" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>أحكام الميم الساكنة</h3>
                <p>شرح مفصل لأحكام الميم الساكنة: الإخفاء الشفوي، الإدغام الشفوي، الإظهار الشفوي</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 20 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>
          </div>

          <div className={`lessons-container advanced-level ${activeLevel === "advanced" ? "active-level" : ""}`}>
            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="الوقف والابتداء" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>الوقف والابتداء</h3>
                <p>أحكام الوقف والابتداء في القرآن الكريم وعلاماته</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 35 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-image">
                <Image src="/placeholder.svg?height=200&width=300" alt="الروم والإشمام" width={300} height={200} />
              </div>
              <div className="lesson-content">
                <h3>الروم والإشمام</h3>
                <p>شرح مفصل لأحكام الروم والإشمام في التلاوة</p>
                <div className="lesson-meta">
                  <span>
                    <i className="fas fa-clock"></i> 25 دقيقة
                  </span>
                  <span>
                    <i className="fas fa-play-circle"></i> فيديو تعليمي
                  </span>
                </div>
                <Link href="#" className="btn primary-btn">
                  بدء الدرس
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاختبارات التفاعلية */}
      <section className="interactive-tests">
        <div className="container">
          <h2 className="section-title">اختبارات تفاعلية</h2>
          <p>اختبر معلوماتك في التجويد وأحكام التلاوة</p>

          <div className="tests-grid">
            <div className="test-card">
              <h3>اختبار مخارج الحروف</h3>
              <div className="test-info">
                <span>
                  <i className="fas fa-question-circle"></i> 20 سؤال
                </span>
                <span>
                  <i className="fas fa-clock"></i> 15 دقيقة
                </span>
              </div>
              <Link href="#" className="btn secondary-btn">
                بدء الاختبار
              </Link>
            </div>

            <div className="test-card">
              <h3>اختبار أحكام النون الساكنة والتنوين</h3>
              <div className="test-info">
                <span>
                  <i className="fas fa-question-circle"></i> 25 سؤال
                </span>
                <span>
                  <i className="fas fa-clock"></i> 20 دقيقة
                </span>
              </div>
              <Link href="#" className="btn secondary-btn">
                بدء الاختبار
              </Link>
            </div>

            <div className="test-card">
              <h3>اختبار المدود</h3>
              <div className="test-info">
                <span>
                  <i className="fas fa-question-circle"></i> 30 سؤال
                </span>
                <span>
                  <i className="fas fa-clock"></i> 25 دقيقة
                </span>
              </div>
              <Link href="#" className="btn secondary-btn">
                بدء الاختبار
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المواد التعليمية */}
      <section className="educational-materials">
        <div className="container">
          <h2 className="section-title">مواد تعليمية</h2>
          <p>تحميل مواد تعليمية لمساعدتك في تعلم التجويد</p>

          <div className="materials-grid">
            <div className="material-card">
              <div className="material-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="material-content">
                <h3>مذكرة أحكام التجويد</h3>
                <p>ملخص شامل لأحكام التجويد الأساسية</p>
                <Link href="#" className="btn outline-btn">
                  تحميل PDF
                </Link>
              </div>
            </div>

            <div className="material-card">
              <div className="material-icon">
                <i className="fas fa-file-image"></i>
              </div>
              <div className="material-content">
                <h3>خرائط ذهنية للتجويد</h3>
                <p>مجموعة من الخرائط الذهنية لتسهيل حفظ أحكام التجويد</p>
                <Link href="#" className="btn outline-btn">
                  تحميل الصور
                </Link>
              </div>
            </div>

            <div className="material-card">
              <div className="material-icon">
                <i className="fas fa-file-audio"></i>
              </div>
              <div className="material-content">
                <h3>تطبيقات صوتية</h3>
                <p>تسجيلات صوتية توضح النطق الصحيح للحروف والأحكام</p>
                <Link href="#" className="btn outline-btn">
                  تحميل MP3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">الأسئلة الشائعة</h2>

          <div className="faq-container">
            <div className={`faq-item ${activeFaqItems.includes(1) ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(1)}>
                <h3>ما هو علم التجويد؟</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  علم التجويد هو علم يُعنى بكيفية نطق حروف القرآن الكريم نطقاً صحيحاً، بإعطاء كل حرف حقه ومستحقه من الصفات
                  والمخارج وغيرها من الأحكام كالمدود والإدغام والإخفاء وغيرها.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaqItems.includes(2) ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(2)}>
                <h3>هل تعلم التجويد واجب؟</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  نعم، تعلم التجويد واجب على المسلم لقراءة القرآن الكريم بشكل صحيح، قال تعالى: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا". وقد
                  نقل علماء القراءات الإجماع على وجوب تعلم التجويد لمن أراد قراءة القرآن.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaqItems.includes(3) ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaqItem(3)}>
                <h3>كم من الوقت يحتاج المبتدئ لتعلم أساسيات التجويد؟</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  يمكن للمبتدئ تعلم أساسيات التجويد في فترة تتراوح بين شهر إلى ثلاثة أشهر بمعدل ساعة يومياً، لكن إتقان
                  التطبيق يحتاج إلى ممارسة مستمرة وتصحيح من قارئ متقن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
