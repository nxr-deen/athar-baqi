import Image from "next/image"
import PageTitle from "@/components/page-title"
import Newsletter from "@/components/newsletter"

export default function AboutPage() {
  return (
    <main>
      <PageTitle title="من نحن" description="تعرف على قصة وهدف موقع أثر باقي" />

      {/* قسم القصة */}
      <section className="about-story">
        <div className="container">
          <div className="about-content">
            <h2>قصة أثر باقي</h2>
            <p>بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين.</p>
            <p>
              أنا نورالدين بودربالة، شاب مسلم أسعى لإصلاح نفسي وغيري من خلال كلام الله عز وجل. بدأت رحلتي مع القرآن
              الكريم منذ الصغر، وكان حلمي دائماً أن أنشر كلام الله وأساهم في تعليمه ونشره بين الناس.
            </p>
            <p>
              انطلاقاً من قول النبي صلى الله عليه وسلم: "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع
              به، أو ولد صالح يدعو له"، قررت إنشاء موقع "أثر باقي" ليكون منصة لنشر تلاوات القرآن الكريم وتعليم أحكامه،
              سعياً للأجر المستمر والنفع الدائم.
            </p>
            <p>
              هدفي من هذا المشروع أن أجعل للقرآن مكاناً في حياة كل مسلم، وأن أسهّل الوصول إلى التلاوات والتعليم القرآني
              بطريقة عصرية وميسّرة، سائلاً المولى عز وجل أن يجعل هذا العمل خالصاً لوجهه الكريم وأن ينفع به.
            </p>
          </div>
          <div className="about-image">
            <Image src="/placeholder.svg?height=500&width=400" alt="صورة تعبيرية" width={400} height={500} />
          </div>
        </div>
      </section>

      {/* قسم الرؤية والرسالة */}
      <section className="vision-mission">
        <div className="container">
          <div className="vision-section">
            <div className="icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>رؤيتنا</h2>
            <p>
              أن يكون موقع "أثر باقي" منارة للقرآن الكريم في العالم الرقمي، وأن يساهم في نشر تعاليم القرآن وتيسير الوصول
              إليه لكل الناس.
            </p>
          </div>
          <div className="mission-section">
            <div className="icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>رسالتنا</h2>
            <p>
              تقديم محتوى قرآني متميز وميسر للجميع، وإثراء المحتوى العربي الإسلامي على الإنترنت بمواد تعليمية ذات جودة
              عالية، والمساهمة في نشر ثقافة القرآن الكريم وأحكامه.
            </p>
          </div>
          <div className="values-section">
            <div className="icon">
              <i className="fas fa-star"></i>
            </div>
            <h2>قيمنا</h2>
            <p>الإخلاص، الإتقان، الاستمرارية، التيسير، والمشاركة المجتمعية.</p>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section className="contact-info">
        <div className="container">
          <h2>تواصل معنا</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>البريد الإلكتروني</h3>
              <p>
                <a href="mailto:contact@atharbaqi.com">contact@atharbaqi.com</a>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>الهاتف</h3>
              <p>
                <a href="tel:+XXXXXXXXXX">+XX XXXX XXXX</a>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>وسائل التواصل الاجتماعي</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="Telegram">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج الرسائل */}
      <section className="contact-form">
        <div className="container">
          <h2>راسلنا</h2>
          <p>إذا كان لديك أي اقتراح أو استفسار، يمكنك مراسلتنا عبر النموذج التالي:</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">الاسم</label>
              <input type="text" id="name" placeholder="أدخل اسمك" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" placeholder="أدخل بريدك الإلكتروني" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">الموضوع</label>
              <input type="text" id="subject" placeholder="أدخل موضوع الرسالة" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">الرسالة</label>
              <textarea id="message" placeholder="اكتب رسالتك هنا" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              إرسال
            </button>
          </form>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
