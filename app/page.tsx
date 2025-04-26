import Link from "next/link"
import Image from "next/image"
import Newsletter from "@/components/newsletter"
import SocialMedia from "@/components/social-media"

export default function Home() {
  return (
    <main>
      {/* قسم الترحيب */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h2>
            <h3>﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾</h3>
            <p>
              أهلاً بكم في موقع أثر باقي، مبادرة لنشر تلاوات القرآن الكريم وتعليم أحكامه، سعياً للأجر المستمر والنفع
              الدائم
            </p>
            <div className="cta-buttons">
              <Link href="/quran" className="btn primary-btn">
                استمع للتلاوات
              </Link>
              <Link href="/about" className="btn secondary-btn">
                تعرف علينا
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/home.jpg" alt="صورة قرآن كريم" width={600} height={600} />
          </div>
        </div>
      </section>

      {/* أحدث التلاوات */}
      <section className="latest-recitations">
        <div className="container">
          <h2 className="section-title">أحدث التلاوات</h2>
          <div className="recitations-grid">
            <RecitationCard title="سورة الفاتحة" listens={1254} />
            <RecitationCard title="سورة البقرة (1-10)" listens={986} />
            <RecitationCard title="سورة الإخلاص" listens={1543} />
          </div>
          <div className="view-more">
            <Link href="/quran" className="btn outline-btn">
              جميع التلاوات
            </Link>
          </div>
        </div>
      </section>

      {/* نبذة مختصرة */}
      <section className="about-brief">
        <div className="container">
          <div className="about-content">
            <h2>من نحن</h2>
            <p>
              نورالدين بودربالة شاب مسلم يحاول إصلاح نفسه وغيره. أنشأنا موقع "أثر باقي" لنشر تلاوات القرآن الكريم وتعليم
              أحكامه، سعياً للاستفادة من الحديث النبوي الشريف "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم
              ينتفع به، أو ولد صالح يدعو له".
            </p>
            <Link href="/about" className="btn secondary-btn">
              اقرأ المزيد
            </Link>
          </div>
          <div className="about-image">
            <Image src="/about.jpg" alt="صورة تعبيرية" width={400} height={400} />
          </div>
        </div>
      </section>

      {/* المقالات */}
      <section className="articles-preview">
        <div className="container">
          <h2 className="section-title">أحدث المقالات</h2>
          <div className="articles-grid">
            <ArticleCard
              title="فضل تلاوة القرآن الكريم"
              excerpt="تعرف على فضائل تلاوة القرآن الكريم وأثرها في حياة المسلم..."
              imageUrl="/placeholder.svg?height=200&width=350"
              imageAlt="فضل تلاوة القرآن"
            />
            <ArticleCard
              title="كيف تحفظ القرآن بسهولة؟"
              excerpt="نصائح عملية وخطوات منهجية تساعدك على حفظ القرآن الكريم..."
              imageUrl="/placeholder.svg?height=200&width=350"
              imageAlt="كيف تحفظ القرآن"
            />
          </div>
          <div className="view-more">
            <Link href="/articles" className="btn outline-btn">
              جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* النشرة البريدية */}
      <Newsletter />

      {/* وسائل التواصل */}
      <SocialMedia />
    </main>
  )
}

// مكون بطاقة التلاوة
function RecitationCard({ title, listens }: { title: string; listens: number }) {
  return (
    <div className="recitation-card">
      <div className="recitation-title">
        <h3>{title}</h3>
        <span className="listen-count">
          <i className="fas fa-headphones"></i> {listens}
        </span>
      </div>
      <div className="audio-player">
        <audio controls>
          <source src="#" type="audio/mpeg" />
          متصفحك لا يدعم مشغل الصوت.
        </audio>
      </div>
      <div className="recitation-actions">
        <button className="share-btn">
          <i className="fas fa-share-alt"></i> شارك الأجر
        </button>
        <button className="download-btn">
          <i className="fas fa-download"></i> تحميل
        </button>
      </div>
    </div>
  )
}

// مكون بطاقة المقالة
function ArticleCard({
  title,
  excerpt,
  imageUrl,
  imageAlt,
}: {
  title: string
  excerpt: string
  imageUrl: string
  imageAlt: string
}) {
  return (
    <div className="article-card">
      <div className="article-image">
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} width={350} height={200} />
      </div>
      <div className="article-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link href="/articles" className="read-more">
          اقرأ المزيد <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  )
}
