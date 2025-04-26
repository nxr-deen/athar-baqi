import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>أثر باقي</h3>
            <p>مبادرة لنشر تلاوات القرآن الكريم وتعليم أحكامه، سعياً للأجر المستمر والنفع الدائم.</p>
          </div>
          <div className="footer-links">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <Link href="/">الرئيسية</Link>
              </li>
              <li>
                <Link href="/quran">التلاوات</Link>
              </li>
              <li>
                <Link href="/education">التعليم</Link>
              </li>
              <li>
                <Link href="/articles">المقالات</Link>
              </li>
              <li>
                <Link href="/about">من نحن</Link>
              </li>
              <li>
                <Link href="/support">ادعم الموقع</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>تواصل معنا</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> <a href="mailto:contact@atharbaqi.com">contact@atharbaqi.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i> <a href="tel:+XXXXXXXXXX">+XX XXXX XXXX</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>جميع الحقوق محفوظة &copy; 2025 - أثر باقي</p>
        </div>
      </div>
    </footer>
  )
}
