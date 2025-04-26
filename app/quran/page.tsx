"use client"

import { useState } from "react"
import PageTitle from "@/components/page-title"
import Newsletter from "@/components/newsletter"

// نموذج بيانات السورة
interface Surah {
  id: number
  name: string
  number: number
  type: "مكية" | "مدنية"
  ayahs: number
  listens: number
  text: string
  tafseer: string
  category: "short" | "medium" | "long"
  audioSrc: string
}

// بيانات السور
const surahs: Surah[] = [
  {
    id: 1,
    name: "سورة الفاتحة",
    number: 1,
    type: "مكية",
    ayahs: 7,
    listens: 1254,
    text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)",
    tafseer:
      "سورة الفاتحة هي أم الكتاب وأعظم سورة في القرآن الكريم، تتضمن الثناء على الله عز وجل وتوحيده والإقرار بيوم الحساب، وتوضح علاقة العبد بربه، وهي تشمل دعاء العبد ربه الهداية إلى الصراط المستقيم وتجنب طريق المغضوب عليهم والضالين.",
    category: "short",
    audioSrc: "#",
  },
  {
    id: 2,
    name: "سورة البقرة (الآيات 1-10)",
    number: 2,
    type: "مدنية",
    ayahs: 286,
    listens: 986,
    text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم (1) ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ (2) الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ (3) وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ (4) أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ (5) إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ (6) خَتَمَ اللَّهُ عَلَى قُلُوبِهِمْ وَعَلَى سَمْعِهِمْ وَعَلَى أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ (7) وَمِنَ النَّاسِ مَنْ يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُمْ بِمُؤْمِنِينَ (8) يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ وَمَا يَشْعُرُونَ (9) فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ (10)",
    tafseer:
      'تبدأ سورة البقرة بالحروف المقطعة "الم"، ثم تصف القرآن بأنه كتاب لا شك فيه وهو هداية للمتقين. توضح الآيات صفات المؤمنين من إيمان بالغيب وإقامة الصلاة والإنفاق والإيمان بما أنزل. ثم تبين حال الكافرين والمنافقين وصفاتهم.',
    category: "long",
    audioSrc: "#",
  },
  {
    id: 3,
    name: "سورة الإخلاص",
    number: 112,
    type: "مكية",
    ayahs: 4,
    listens: 1543,
    text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ (1) اللَّهُ الصَّمَدُ (2) لَمْ يَلِدْ وَلَمْ يُولَدْ (3) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (4)",
    tafseer:
      "سورة الإخلاص هي سورة توحيد خالصة، تعدل ثلث القرآن كما صح في الحديث. تبين صفات الله عز وجل من الوحدانية والصمدية وأنه ليس بوالد ولا مولود، ولا يوجد من يماثله أو يشبهه سبحانه وتعالى.",
    category: "short",
    audioSrc: "#",
  },
  {
    id: 4,
    name: "سورة الفلق",
    number: 113,
    type: "مكية",
    ayahs: 5,
    listens: 1021,
    text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)",
    tafseer:
      "سورة الفلق من سور الاستعاذة، يأمر الله فيها نبيه والمؤمنين بالاستعاذة برب الفلق (الصبح) من شر جميع المخلوقات، وشر الليل إذا أقبل بظلامه، وشر السحرة، وشر الحاسدين. وهي من السور التي يستعيذ بها المسلم من الشرور المختلفة.",
    category: "short",
    audioSrc: "#",
  },
  {
    id: 5,
    name: "سورة الناس",
    number: 114,
    type: "مكية",
    ayahs: 6,
    listens: 1122,
    text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)",
    tafseer:
      "سورة الناس من سور الاستعاذة، يأمر الله فيها نبيه والمؤمنين بالاستعاذة برب الناس وملكهم وإلههم، من شر الوسواس الخناس الذي يوسوس في صدور الناس سواء من الجن أو الإنس. وهي آخر سورة في القرآن الكريم.",
    category: "short",
    audioSrc: "#",
  },
]

export default function QuranPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("quran-order")
  const [activeTexts, setActiveTexts] = useState<number[]>([])
  const [activeTafseers, setActiveTafseers] = useState<number[]>([])

  // تصفية السور حسب البحث والفئة
  const filteredSurahs = surahs.filter((surah) => {
    const matchesSearch = surah.name.includes(searchQuery) || searchQuery === ""
    const matchesCategory =
      categoryFilter === "all" ||
      (categoryFilter === "makkah" && surah.type === "مكية") ||
      (categoryFilter === "madinah" && surah.type === "مدنية") ||
      categoryFilter === surah.category

    return matchesSearch && matchesCategory
  })

  // ترتيب السور
  const sortedSurahs = [...filteredSurahs].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "popularity":
        return b.listens - a.listens
      case "newest":
        return b.id - a.id
      default: // quran-order
        return a.number - b.number
    }
  })

  // تبديل عرض النص
  const toggleText = (id: number) => {
    setActiveTexts((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // تبديل عرض التفسير
  const toggleTafseer = (id: number) => {
    setActiveTafseers((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main>
      <PageTitle title="تلاوات القرآن الكريم" description="استمع إلى تلاوات عطرة للقرآن الكريم" />

      {/* قسم البحث والتصفية */}
      <section className="search-filter">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              id="searchInput"
              placeholder="ابحث عن سورة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="filter-options">
            <div className="filter-group">
              <span>الترتيب حسب:</span>
              <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="quran-order">ترتيب المصحف</option>
                <option value="name-asc">اسم السورة (أ-ي)</option>
                <option value="name-desc">اسم السورة (ي-أ)</option>
                <option value="popularity">الأكثر استماعاً</option>
                <option value="newest">الأحدث</option>
              </select>
            </div>
            <div className="filter-group">
              <span>التصنيف:</span>
              <select id="category-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="all">الكل</option>
                <option value="short">السور القصيرة</option>
                <option value="medium">السور المتوسطة</option>
                <option value="long">السور الطويلة</option>
                <option value="makkah">المكية</option>
                <option value="madinah">المدنية</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* قسم السور */}
      <section className="quran-surahs">
        <div className="container">
          <div className="surahs-grid">
            {sortedSurahs.map((surah) => (
              <div key={surah.id} className="surah-card">
                <div className="surah-header">
                  <div className="surah-info">
                    <h3>{surah.name}</h3>
                    <div className="surah-meta">
                      <span className="surah-number">{surah.number}</span>
                      <span className="surah-type">{surah.type}</span>
                      <span className="surah-ayahs">{surah.ayahs} آيات</span>
                    </div>
                  </div>
                  <div className="surah-stats">
                    <span className="listen-count">
                      <i className="fas fa-headphones"></i> {surah.listens}
                    </span>
                  </div>
                </div>
                <div className="surah-content">
                  <div className="audio-player">
                    <audio controls>
                      <source src={surah.audioSrc} type="audio/mpeg" />
                      متصفحك لا يدعم مشغل الصوت.
                    </audio>
                  </div>
                  <div className={`surah-text toggle-content ${activeTexts.includes(surah.id) ? "active" : ""}`}>
                    <p>{surah.text}</p>
                  </div>
                  <div className={`tafseer toggle-content ${activeTafseers.includes(surah.id) ? "active" : ""}`}>
                    <h4>تفسير مختصر</h4>
                    <p>{surah.tafseer}</p>
                  </div>
                  <div className="surah-actions">
                    <button className="toggle-text-btn" onClick={() => toggleText(surah.id)}>
                      {activeTexts.includes(surah.id) ? "اخفِ النص" : "اعرض النص"}
                    </button>
                    <button className="toggle-tafseer-btn" onClick={() => toggleTafseer(surah.id)}>
                      {activeTafseers.includes(surah.id) ? "اخفِ التفسير" : "اعرض التفسير"}
                    </button>
                    <button className="share-btn">
                      <i className="fas fa-share-alt"></i> شارك الأجر
                    </button>
                    <button className="download-btn">
                      <i className="fas fa-download"></i> تحميل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الورد اليومي */}
      <section className="daily-wird">
        <div className="container">
          <h2 className="section-title">برنامج الورد اليومي</h2>
          <p className="section-desc">اجعل للقرآن نصيباً من يومك من خلال برنامج الورد اليومي المقترح</p>

          <div className="wird-options">
            <div className="wird-option-card">
              <div className="wird-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>المبتدئ</h3>
              <p>صفحة واحدة يومياً</p>
              <p className="wird-duration">وقت التلاوة: ~5 دقائق</p>
              <button className="btn secondary-btn">ابدأ اليوم</button>
            </div>

            <div className="wird-option-card">
              <div className="wird-icon">
                <i className="fas fa-tree"></i>
              </div>
              <h3>المتوسط</h3>
              <p>ربع حزب يومياً</p>
              <p className="wird-duration">وقت التلاوة: ~15 دقيقة</p>
              <button className="btn secondary-btn">ابدأ اليوم</button>
            </div>

            <div className="wird-option-card">
              <div className="wird-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>المتقدم</h3>
              <p>جزء كامل يومياً</p>
              <p className="wird-duration">وقت التلاوة: ~45 دقيقة</p>
              <button className="btn secondary-btn">ابدأ اليوم</button>
            </div>

            <div className="wird-option-card custom">
              <div className="wird-icon">
                <i className="fas fa-sliders-h"></i>
              </div>
              <h3>مخصص</h3>
              <p>حدد وردك المفضل</p>
              <p className="wird-duration">حسب اختيارك</p>
              <button className="btn primary-btn">تخصيص</button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
