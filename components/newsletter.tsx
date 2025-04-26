"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage({ text: "الرجاء إدخال بريد إلكتروني صحيح.", type: "error" })
      return
    }

    // تحقق من صحة صيغة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ text: "الرجاء إدخال بريد إلكتروني صحيح.", type: "error" })
      return
    }

    setIsSubmitting(true)

    // محاكاة إرسال الطلب إلى الخادم
    try {
      // في التطبيق الفعلي، هنا يتم إرسال الطلب إلى الخادم
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setMessage({ text: "تم الاشتراك بنجاح! شكراً لانضمامك إلى نشرتنا البريدية.", type: "success" })
      setEmail("")

      // إخفاء رسالة النجاح بعد 5 ثوان
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (error) {
      setMessage({ text: "حدث خطأ أثناء الاشتراك. الرجاء المحاولة مرة أخرى.", type: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <h2>اشترك في نشرتنا البريدية</h2>
        <p>ليصلك كل جديد من التلاوات والمقالات</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn primary-btn" disabled={isSubmitting}>
            {isSubmitting ? "جارِ الاشتراك..." : "اشتراك"}
          </button>
        </form>
        {message && (
          <div className={`form-message ${message.type}`} style={{ marginTop: "1rem" }}>
            {message.text}
          </div>
        )}
      </div>
    </section>
  )
}
