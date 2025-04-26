import Image from "next/image"
import PageTitle from "@/components/page-title"
import Newsletter from "@/components/newsletter"

export default function SupportPage() {
  return (
    <main>
      <PageTitle title="ادعم الموقع" description="كن شريكاً معنا في نشر الخير والأجر الجاري" />

      {/* قسم مقدمة الدعم */}
      <section className="support-intro">
        <div className="container">
          <div className="support-content">
            <h2>لماذا ندعو للدعم؟</h2>
            <p>بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين.</p>
            <p>
              يعتمد موقع "أثر باقي" على دعم المحسنين للاستمرار في نشر كلام الله وتعليم أحكامه. وبفضل الله ثم بفضل دعمكم،
              نسعى لتطوير المحتوى وتحسين الخدمات المقدمة.
            </p>
            <p>
              قال رسول الله صلى الله عليه وسلم: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ". فبدعمك لهذه المنصة، تكون شريكًا في كل
              استماع لتلاوة أو استفادة من درس أو مقال.
            </p>
          </div>
          <div className="support-image">
            <Image src="/placeholder.svg?height=300&width=400" alt="صورة تعبيرية للدعم" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* أوجه الدعم */}
      <section className="support-ways">
        <div className="container">
          <h2 className="section-title">كيف يمكنك الدعم؟</h2>
          <div className="ways-grid">
            <div className="way-card">
              <div className="icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>التبرع المادي</h3>
              <p>يمكنك المساهمة بمبلغ مالي لدعم استمرارية الموقع وتطويره، مهما كان المبلغ صغيراً فهو يصنع فرقاً.</p>
              <a href="#donation-form" className="btn primary-btn">
                تبرع الآن
              </a>
            </div>
            <div className="way-card">
              <div className="icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <h3>المشاركة والنشر</h3>
              <p>شارك الموقع والتلاوات على وسائل التواصل الاجتماعي، فكل مشاركة تصل بكلام الله إلى آذان جديدة.</p>
              <div className="social-share">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Telegram">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
            <div className="way-card">
              <div className="icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>تقديم الاقتراحات</h3>
              <p>ساهم بأفكارك واقتراحاتك لتطوير الموقع وإضافة ميزات جديدة تفيد المسلمين في تعلم القرآن.</p>
              <a href="#suggestion-form" className="btn secondary-btn">
                قدم اقتراحاً
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج التبرع */}
      <section className="donation-form" id="donation-form">
        <div className="container">
          <h2 className="section-title">التبرع المادي</h2>
          <p className="section-description">اختر طريقة التبرع المناسبة لك</p>

          <div className="donation-methods">
            <div className="donation-method">
              <h3>التبرع الشهري</h3>
              <p>تبرع بمبلغ شهري ثابت لدعم استمرارية الموقع</p>
              <div className="amount-options">
                <button className="amount-btn">5 دولار</button>
                <button className="amount-btn">10 دولار</button>
                <button className="amount-btn">20 دولار</button>
                <button className="amount-btn custom-amount">مبلغ آخر</button>
              </div>
              <button className="btn primary-btn">تبرع الآن</button>
            </div>

            <div className="donation-method">
              <h3>تبرع لمرة واحدة</h3>
              <p>تبرع بمبلغ لمرة واحدة حسب استطاعتك</p>
              <div className="amount-options">
                <button className="amount-btn">10 دولار</button>
                <button className="amount-btn">20 دولار</button>
                <button className="amount-btn">50 دولار</button>
                <button className="amount-btn custom-amount">مبلغ آخر</button>
              </div>
              <button className="btn primary-btn">تبرع الآن</button>
            </div>
          </div>

          <div className="payment-options">
            <h3>وسائل الدفع المتاحة</h3>
            <div className="payment-methods">
              <div className="payment-method">
                <Image src="/placeholder.svg?height=40&width=60" alt="PayPal" width={60} height={40} />
                <span>PayPal</span>
              </div>
              <div className="payment-method">
                <Image src="/placeholder.svg?height=40&width=60" alt="بطاقة ائتمانية" width={60} height={40} />
                <span>بطاقة ائتمانية</span>
              </div>
              <div className="payment-method">
                <Image src="/placeholder.svg?height=40&width=60" alt="تحويل بنكي" width={60} height={40} />
                <span>تحويل بنكي</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مشاريع مستقبلية */}
      <section className="future-projects">
        <div className="container">
          <h2 className="section-title">ماذا نخطط للمستقبل؟</h2>
          <p className="section-description">تبرعاتكم تساهم في تحقيق هذه المشاريع</p>

          <div className="projects-timeline">
            <div className="project-item">
              <div className="project-dot"></div>
              <div className="project-content">
                <h3>تطبيق للهواتف الذكية</h3>
                <p>تطوير تطبيق للهواتف الذكية يتيح الاستماع للتلاوات ومتابعة الدروس بسهولة في أي وقت وبدون إنترنت.</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-dot"></div>
              <div className="project-content">
                <h3>ترجمة المحتوى</h3>
                <p>ترجمة المحتوى التعليمي لعدة لغات لتعميم النفع وتوسيع دائرة المستفيدين.</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-dot"></div>
              <div className="project-content">
                <h3>تسجيل تلاوات بجودة عالية</h3>
                <p>تحسين جودة التسجيلات وإضافة تلاوات جديدة بمعايير صوتية عالية.</p>
              </div>
            </div>
            <div className="project-item">
              <div className="project-dot"></div>
              <div className="project-content">
                <h3>منصة تفاعلية للتعلم</h3>
                <p>تطوير منصة تفاعلية لتعليم التجويد وأحكام القرآن بأسلوب سهل وممتع.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج الاقتراحات */}
      <section className="suggestion-form" id="suggestion-form">
        <div className="container">
          <h2 className="section-title">شاركنا اقتراحاتك</h2>
          <p className="section-description">رأيك يهمنا ويساعدنا على التطوير</p>

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
              <label htmlFor="suggestion-type">نوع الاقتراح</label>
              <select id="suggestion-type" required>
                <option value="" disabled selected>
                  اختر نوع الاقتراح
                </option>
                <option value="content">محتوى جديد</option>
                <option value="feature">ميزة جديدة</option>
                <option value="improvement">تحسين موجود</option>
                <option value="bug">إبلاغ عن خطأ</option>
                <option value="other">آخر</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="suggestion">الاقتراح</label>
              <textarea id="suggestion" placeholder="اكتب اقتراحك هنا" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              إرسال الاقتراح
            </button>
          </form>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
