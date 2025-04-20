/**
 * أثر باقي - ملف جافاسكريبت للوظائف التفاعلية
 * Enhanced version with modern JS practices, accessibility and improved functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // تهيئة جميع الوظائف التفاعلية للموقع
    initializeSite();
});

/**
 * تهيئة جميع وظائف الموقع
 */
const initializeSite = () => {
    // قائمة التنقل للشاشات الصغيرة
    setupMobileMenu();

    // تصفية المقالات (إذا كنا في صفحة المقالات)
    setupArticlesFilter();

    // تفعيل مشغل الصوت والأزرار
    setupAudioPlayers();

    // إعداد نموذج الاشتراك في النشرة البريدية
    setupNewsletterForm();

    // إعداد نماذج الاتصال
    setupContactForms();

    // إعداد أزرار التبرع
    setupDonationButtons();
    
    // تفعيل تتبع المحتوى المرئي للمستخدم
    setupIntersectionObserver();
};

/**
 * إعداد قائمة التنقل للشاشات الصغيرة بإمكانيات محسنة
 * مع دعم إمكانية الوصول وإغلاق القائمة عند النقر خارجها
 */
const setupMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!menuToggle || !nav) return;
    
    // إضافة خاصية ARIA للإشارة إلى حالة القائمة
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'mobile-nav');
    nav.setAttribute('id', 'mobile-nav');
    
    // تنفيذ الضغط على زر القائمة
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // منع التمرير على الصفحة الخلفية عند فتح القائمة
        document.body.classList.toggle('menu-open');
        
        // التركيز على أول عنصر في القائمة عند فتحها
        if (!isExpanded) {
            setTimeout(() => {
                const firstNavItem = nav.querySelector('a');
                if (firstNavItem) firstNavItem.focus();
            }, 100);
        }
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
    
    // إضافة إمكانية الإغلاق باستخدام زر ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            menuToggle.focus(); // إعادة التركيز إلى زر القائمة
        }
    });
};

/**
 * إعداد تصفية المقالات مع تحسينات إمكانية الوصول والتجربة
 */
const setupArticlesFilter = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const articleCards = document.querySelectorAll(".article-card");

  if (filterButtons.length === 0) return;

  const filterContainer = filterButtons[0].parentElement;

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    const filter = button.getAttribute("data-filter");
    const filterName = button.textContent.trim();
    let visibleCount = 0;

    articleCards.forEach((card) => {
      const matchesFilter =
        filter === "all" || card.getAttribute("data-category") === filter;

      if (matchesFilter) {
        card.style.display = "block";
        card.style.opacity = "1";
        card.style.transform = "none";
        visibleCount++;
      } else {
        card.style.display = "none";
        card.style.opacity = "";
        card.style.transform = "";
      }
    });

    const filterAnnouncement =
      document.getElementById("filter-announcement") ||
      (() => {
        const el = document.createElement("div");
        el.id = "filter-announcement";
        el.setAttribute("aria-live", "polite");
        el.className = "sr-only";
        document.body.appendChild(el);
        return el;
      })();

    filterAnnouncement.textContent = `تم تطبيق فلتر ${filterName}. عرض ${visibleCount} من المقالات.`;
  });

  filterButtons.forEach((button) => {
    button.setAttribute("role", "button");
    button.setAttribute(
      "aria-pressed",
      button.classList.contains("active") ? "true" : "false"
    );
  });
};

/**
 * إعداد مشغلات الصوت وأزرار التحميل والمشاركة مع تحسينات إضافية
 */
const setupAudioPlayers = () => {
    const recitationCards = document.querySelectorAll('.recitation-card');
    
    if (recitationCards.length === 0) return;
    
    recitationCards.forEach(card => {
        const audioPlayer = card.querySelector('audio');
        const shareButton = card.querySelector('.share-btn');
        const downloadButton = card.querySelector('.download-btn');
        
        if (audioPlayer) {
            // إضافة عناصر تحكم مخصصة للمشغل الصوتي
            setupCustomAudioControls(card, audioPlayer);
            
            // معالجة حالة الخطأ في تحميل الملف الصوتي
            audioPlayer.addEventListener('error', () => {
                const errorMessage = card.querySelector('.audio-error') || (() => {
                    const el = document.createElement('div');
                    el.className = 'audio-error';
                    el.textContent = 'عذراً، حدث خطأ أثناء تحميل الملف الصوتي.';
                    card.querySelector('.audio-controls')?.appendChild(el);
                    return el;
                })();
                
                errorMessage.style.display = 'block';
            });
        }
        
        // إعداد زر المشاركة
        if (shareButton) {
            shareButton.addEventListener('click', () => {
                const recitationTitle = card.querySelector('h3')?.textContent || 'تلاوة قرآنية';
                
                // فتح نافذة مشاركة نظام التشغيل إذا كانت متوفرة
                if (navigator.share) {
                    navigator.share({
                        title: recitationTitle,
                        text: `استمع إلى ${recitationTitle} على موقع أثر باقي`,
                        url: window.location.href
                    })
                    .catch(error => console.warn('حدث خطأ في المشاركة:', error));
                } else {
                    // إنشاء قائمة مشاركة مخصصة
                    createCustomShareMenu(shareButton, recitationTitle);
                }
            });
        }
        
        // إعداد زر التحميل
        if (downloadButton) {
            downloadButton.addEventListener('click', () => {
                const audioSource = audioPlayer?.querySelector('source');
                const audioSrc = audioSource?.src || audioPlayer?.src;
                
                if (audioSrc) {
                    // إظهار مؤشر التحميل
                    downloadButton.classList.add('loading');
                    const originalText = downloadButton.textContent;
                    downloadButton.textContent = 'جارِ التحميل...';
                    
                    // محاولة تحميل الملف
                    fetch(audioSrc)
                        .then(response => {
                            if (!response.ok) throw new Error('فشل تحميل الملف');
                            return response.blob();
                        })
                        .then(blob => {
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            const filename = card.querySelector('h3')?.textContent?.trim() || 'تلاوة';
                            
                            link.href = url;
                            link.download = `${filename}.mp3`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                            
                            // إعادة الزر لحالته الأصلية
                            downloadButton.classList.remove('loading');
                            downloadButton.textContent = originalText;
                        })
                        .catch(error => {
                            console.error(error);
                            alert('عذرًا، لا يمكن تحميل الملف الصوتي حاليًا.');
                            
                            // إعادة الزر لحالته الأصلية
                            downloadButton.classList.remove('loading');
                            downloadButton.textContent = originalText;
                        });
                } else {
                    alert('عذرًا، لا يمكن تحميل الملف الصوتي حاليًا.');
                }
            });
        }
    });
};

/**
 * إنشاء عناصر تحكم مخصصة للمشغل الصوتي
 */
const setupCustomAudioControls = (card, audioPlayer) => {
    // إنشاء حاوية عناصر التحكم إذا لم تكن موجودة
    let controlsContainer = card.querySelector('.audio-controls');
    if (!controlsContainer) {
        controlsContainer = document.createElement('div');
        controlsContainer.className = 'audio-controls';
        audioPlayer.parentNode.insertBefore(controlsContainer, audioPlayer.nextSibling);
    }
    
    // إنشاء زر التشغيل/الإيقاف
    const playButton = document.createElement('button');
    playButton.className = 'play-btn';
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    playButton.setAttribute('aria-label', 'تشغيل');
    
    // إنشاء شريط التقدم
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progress = document.createElement('div');
    progress.className = 'progress';
    
    // إنشاء عرض الوقت
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    timeDisplay.textContent = '00:00 / 00:00';
    
    // إضافة العناصر إلى الحاوية
    progressBar.appendChild(progress);
    progressContainer.appendChild(progressBar);
    controlsContainer.appendChild(playButton);
    controlsContainer.appendChild(progressContainer);
    controlsContainer.appendChild(timeDisplay);
    
    // تنفيذ وظيفة زر التشغيل/الإيقاف
    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            // إيقاف جميع مشغلات الصوت الأخرى
            document.querySelectorAll('audio').forEach(audio => {
                if (audio !== audioPlayer && !audio.paused) {
                    audio.pause();
                    const otherCard = audio.closest('.recitation-card');
                    const otherPlayBtn = otherCard?.querySelector('.play-btn');
                    if (otherPlayBtn) {
                        otherPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
                        otherPlayBtn.setAttribute('aria-label', 'تشغيل');
                    }
                }
            });
            
            audioPlayer.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
            playButton.setAttribute('aria-label', 'إيقاف');
        } else {
            audioPlayer.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            playButton.setAttribute('aria-label', 'تشغيل');
        }
    });
    
    // تحديث شريط التقدم أثناء التشغيل
    audioPlayer.addEventListener('timeupdate', () => {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // تحديث عرض الوقت
        const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
        const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
        const durationMinutes = Math.floor(audioPlayer.duration / 60) || 0;
        const durationSeconds = Math.floor(audioPlayer.duration % 60) || 0;
        
        timeDisplay.textContent = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes.toString().padStart(2, '0')}:${durationSeconds.toString().padStart(2, '0')}`;
    });
    
    // تحديث حالة الزر عند انتهاء التشغيل
    audioPlayer.addEventListener('ended', () => {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.setAttribute('aria-label', 'تشغيل');
        progress.style.width = '0%';
    });
    
    // إضافة القدرة على النقر على شريط التقدم للانتقال في الصوت
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        
        audioPlayer.currentTime = (clickX / width) * duration;
    });
};

/**
 * إنشاء قائمة مشاركة مخصصة للمتصفحات التي لا تدعم واجهة المشاركة الأصلية
 */
const createCustomShareMenu = (button, title) => {
    // إزالة أي قوائم مشاركة سابقة
    document.querySelectorAll('.custom-share-menu').forEach(menu => menu.remove());
    
    // إنشاء قائمة مشاركة جديدة
    const shareMenu = document.createElement('div');
    shareMenu.className = 'custom-share-menu';
    
    const shareTitle = document.createElement('p');
    shareTitle.textContent = 'مشاركة:';
    shareMenu.appendChild(shareTitle);
    
    // إضافة خيارات المشاركة
    const shareOptions = [
        { name: 'Facebook', icon: 'fab fa-facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&t=${encodeURIComponent(title)}` },
        { name: 'Twitter', icon: 'fab fa-twitter', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}` },
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + window.location.href)}` },
        { name: 'نسخ الرابط', icon: 'fas fa-link', action: 'copy' }
    ];
    
    shareOptions.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerHTML = `<i class="${option.icon}"></i> ${option.name}`;
        
        optionButton.addEventListener('click', () => {
            if (option.action === 'copy') {
                navigator.clipboard.writeText(window.location.href)
                    .then(() => {
                        const originalText = optionButton.textContent;
                        optionButton.textContent = 'تم نسخ الرابط!';
                        setTimeout(() => {
                            optionButton.innerHTML = `<i class="${option.icon}"></i> ${option.name}`;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('فشل نسخ الرابط:', err);
                        alert('لم نتمكن من نسخ الرابط. الرجاء المحاولة مرة أخرى.');
                    });
            } else {
                window.open(option.url, '_blank');
            }
            
            shareMenu.remove();
        });
        
        shareMenu.appendChild(optionButton);
    });
    
    // إضافة خيار الإغلاق
    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn';
    closeButton.textContent = 'إغلاق';
    closeButton.addEventListener('click', () => shareMenu.remove());
    shareMenu.appendChild(closeButton);
    
    // إضافة القائمة إلى المستند
    document.body.appendChild(shareMenu);
    
    // تموضع القائمة بالقرب من الزر
    const buttonRect = button.getBoundingClientRect();
    shareMenu.style.position = 'absolute';
    shareMenu.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;
    shareMenu.style.left = `${buttonRect.left + window.scrollX}px`;
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!shareMenu.contains(e.target) && e.target !== button) {
            shareMenu.remove();
        }
    }, { once: true });
};

/**
 * إعداد نموذج الاشتراك في النشرة البريدية مع التحقق من صحة الإدخال
 */
const setupNewsletterForm = () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        
        if (!emailInput || !emailInput.value.trim()) {
            showFormMessage(newsletterForm, 'الرجاء إدخال بريد إلكتروني صحيح.', 'error');
            return;
        }
        
        // تحقق من صحة صيغة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showFormMessage(newsletterForm, 'الرجاء إدخال بريد إلكتروني صحيح.', 'error');
            return;
        }
        
        // إظهار حالة التحميل
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'جارِ الاشتراك...';
        submitButton.disabled = true;
        
        // محاكاة إرسال الطلب إلى الخادم
        setTimeout(() => {
            // في التطبيق الفعلي، هنا يتم إرسال الطلب إلى الخادم
            
            // إعادة الزر إلى حالته الأصلية
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // إظهار رسالة النجاح
            showFormMessage(newsletterForm, 'تم الاشتراك بنجاح! شكراً لانضمامك إلى نشرتنا البريدية.', 'success');
            emailInput.value = '';
        }, 1500);
    });
};

/**
 * إعداد نماذج الاتصال مع التحقق من صحة الإدخال والتحليل المحسن
 */
const setupContactForms = () => {
    const forms = {
        contact: document.querySelector('.contact-form form'),
        suggestion: document.querySelector('.suggestion-form form')
    };
    
    for (const [formType, form] of Object.entries(forms)) {
        if (!form) continue;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // التحقق من صحة الحقول
            if (!validateForm(form)) return;
            
            // إظهار حالة التحميل
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'جارِ الإرسال...';
            submitButton.disabled = true;
            
            // جمع بيانات النموذج
            const formData = new FormData(form);
            const formDataObj = Object.fromEntries(formData.entries());
            
            // محاكاة إرسال البيانات إلى الخادم
            setTimeout(() => {
                // في التطبيق الفعلي، هنا يتم إرسال البيانات إلى الخادم
                
                // إعادة الزر إلى حالته الأصلية
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                // إظهار رسالة النجاح المناسبة
                const successMessages = {
                    contact: 'تم إرسال رسالتك بنجاح، وسنقوم بالرد عليك في أقرب وقت ممكن.',
                    suggestion: 'تم إرسال اقتراحك بنجاح، شكراً لمساهمتك معنا!'
                };
                
                showFormMessage(form, successMessages[formType], 'success');
                form.reset();
            }, 1500);
        });
    }
};

/**
 * التحقق من صحة حقول النموذج
 */
const validateForm = (form) => {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    // إزالة رسائل الخطأ السابقة
    form.querySelectorAll('.field-error').forEach(error => error.remove());
    
    requiredFields.forEach(field => {
        // إزالة علامة الخطأ السابقة
        field.classList.remove('error');
        
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // إضافة رسالة خطأ
            const errorMessage = document.createElement('div');
            errorMessage.className = 'field-error';
            errorMessage.textContent = 'هذا الحقل مطلوب';
            field.parentNode.appendChild(errorMessage);
        } else if (field.type === 'email') {
            // التحقق من صحة صيغة البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                
                // إضافة رسالة خطأ
                const errorMessage = document.createElement('div');
                errorMessage.className = 'field-error';
                errorMessage.textContent = 'الرجاء إدخال بريد إلكتروني صحيح';
                field.parentNode.appendChild(errorMessage);
            }
        }
    });
    
    return isValid;
};

/**
 * إظهار رسالة للمستخدم بعد إرسال النموذج
 */
const showFormMessage = (form, message, type) => {
    // إزالة الرسائل السابقة
    form.querySelectorAll('.form-message').forEach(msg => msg.remove());
    
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // إضافة الرسالة إلى بداية النموذج أو نهايته
    form.appendChild(messageElement);
    
    // إزالة الرسالة بعد فترة زمنية (للرسائل الناجحة)
    if (type === 'success') {
        setTimeout(() => {
            messageElement.classList.add('fade-out');
            setTimeout(() => {
                messageElement.remove();
            }, 500);
        }, 5000);
    }
};

/**
 * إعداد أزرار التبرع بإمكانيات محسنة
 */
const setupDonationButtons = () => {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountButtons = document.querySelectorAll('.custom-amount');
    const donationForm = document.querySelector('.donation-form');
    
    // إعداد أزرار المبالغ المحددة مسبقاً
    if (amountButtons.length > 0) {
        const buttonContainer = amountButtons[0].parentElement;
        
        buttonContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.amount-btn');
            if (!button) return;
            
            // إزالة التنشيط عن جميع الأزرار في نفس المجموعة
            amountButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            
            // تنشيط الزر المضغوط
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            
            // تحديث قيمة المبلغ في النموذج إذا كان موجوداً
            const amountInput = donationForm?.querySelector('input[name="amount"]');
            if (amountInput && !button.classList.contains('custom-amount')) {
                const amount = button.getAttribute('data-amount');
                amountInput.value = amount;
            }
        });
    }
    
    // إعداد أزرار المبلغ المخصص
    if (customAmountButtons.length > 0) {
        customAmountButtons.forEach(button => {
            button.addEventListener('click', () => {
                // إظهار نافذة منبثقة للإدخال مع تحسين التجربة
                const currentAmount = button.getAttribute('data-amount') || '';
                
                // إنشاء نافذة منبثقة للإدخال
                const overlay = document.createElement('div');
                overlay.className = 'modal-overlay';
                
                const modal = document.createElement('div');
                modal.className = 'modal custom-amount-modal';
                
                const modalContent = document.createElement('div');
                modalContent.className = 'modal-content';
                
                const title = document.createElement('h3');
                title.textContent = 'أدخل المبلغ الذي ترغب بالتبرع به';
                
                const inputContainer = document.createElement('div');
                inputContainer.className = 'amount-input-container';
                
                const currencySymbol = document.createElement('span');
                currencySymbol.className = 'currency-symbol';
                currencySymbol.textContent = 'دولار';
                
                const amountInput = document.createElement('input');
                amountInput.type = 'number';
                amountInput.min = '1';
                amountInput.step = '1';
                amountInput.value = currentAmount || '';
                amountInput.placeholder = 'أدخل المبلغ';
                inputContainer.appendChild(amountInput);
                inputContainer.appendChild(currencySymbol);

                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'modal-buttons';

                const confirmButton = document.createElement('button');
                confirmButton.className = 'confirm-btn';
                confirmButton.textContent = 'تأكيد';

                const cancelButton = document.createElement('button');
                cancelButton.className = 'cancel-btn';
                cancelButton.textContent = 'إلغاء';

                buttonContainer.appendChild(confirmButton);
                buttonContainer.appendChild(cancelButton);

                modalContent.appendChild(title);
                modalContent.appendChild(inputContainer);
                modalContent.appendChild(buttonContainer);
                modal.appendChild(modalContent);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);

                // تركيز الإدخال بعد إظهار النافذة
                setTimeout(() => amountInput.focus(), 100);

                // تنفيذ زر التأكيد
                confirmButton.addEventListener('click', () => {
                    const amount = amountInput.value.trim();
                    if (amount && !isNaN(amount) && Number(amount) > 0) {
                        button.setAttribute('data-amount', amount);
                        const amountInput = donationForm?.querySelector('input[name="amount"]');
                        if (amountInput) {
                            amountInput.value = amount;
                        }
                        overlay.remove();
                    } else {
                        alert('الرجاء إدخال مبلغ صحيح');
                    }
                });

                // تنفيذ زر الإلغاء
                cancelButton.addEventListener('click', () => {
                    overlay.remove();
                });

                // إغلاق النافذة عند النقر خارجها
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        overlay.remove();
                    }
                });
                // إغلاق النافذة عند الضغط على زر ESC
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        overlay.remove();
                    }
                }, { once: true });
            }
            )
        });
    }
};

// تحديد التبويبات الخاصة بالمستويات وحاويات الدروس
const levelTabs = document.querySelectorAll('.level-tab');
const lessonsContainers = document.querySelectorAll('.lessons-container');

// عند الضغط على أحد التبويبات
levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // إزالة الحالة النشطة من جميع التبويبات والحاويات
        levelTabs.forEach(t => t.classList.remove('active'));
        lessonsContainers.forEach(c => c.classList.remove('active-level'));

        // تفعيل التبويب الحالي وعرض الدروس المرتبطة به
        tab.classList.add('active');
        const level = tab.getAttribute('data-level');
        document.querySelector(`.${level}-level`).classList.add('active-level');
    });
});

// تحديد جميع عناصر الأسئلة الشائعة
const faqItems = document.querySelectorAll('.faq-item');

// عند الضغط على السؤال
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // تبديل حالة العنصر الحالي (فتح أو إغلاق)
        item.classList.toggle('active');

        // إغلاق باقي الأسئلة المفتوحة (اختياري)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// عرض / إخفاء النص
document.querySelectorAll('.toggle-text-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.closest('.surah-content').querySelector('.surah-text');
    text.classList.toggle('active');
    btn.textContent = text.classList.contains('active') ? 'اخفِ النص' : 'اعرض النص';
  });
});

// عرض / إخفاء التفسير
document.querySelectorAll('.toggle-tafseer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tafseer = btn.closest('.surah-content').querySelector('.tafseer');
    tafseer.classList.toggle('active');
    btn.textContent = tafseer.classList.contains('active') ? 'اخفِ التفسير' : 'اعرض التفسير';
  });
});

// زر المشاركة باستخدام Web Share API
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const surahContent = btn.closest('.surah-content');
    const title = surahContent.querySelector('h3').textContent;
    const text = surahContent.querySelector('.surah-text')?.textContent || '';

    if (navigator.share) {
      navigator.share({
        title: `استمع إلى ${title}`,
        text: text,
        url: window.location.href
      }).catch(err => {
        console.error('خطأ في المشاركة:', err);
      });
    } else {
      alert("المشاركة غير مدعومة في هذا المتصفح.");
    }
  });
});

// زر التحميل - مثال: لو كنت حاطط رابط داخل data-audio
document.querySelectorAll('.download-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const audioUrl = btn.getAttribute('data-audio');
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('لا يوجد رابط تحميل متاح.');
    }
  });
});

// نربط حدث الكتابة (input) على حقل البحث
document.getElementById('searchInput').addEventListener('input', function () {
  // نأخذ قيمة البحث ونجعلها حروف صغيرة لتسهيل المقارنة
  const query = this.value.trim().toLowerCase();

  // نحدد جميع عناصر السور في الصفحة
  const surahs = document.querySelectorAll('.surah-card');

  // نمر على كل سورة ونقرر هل نعرضها أو نخفيها
  surahs.forEach(surah => {
    // نأخذ عنوان السورة (اسمها) ونجعل الحروف صغيرة
    const title = surah.querySelector('h3').textContent.toLowerCase();

    // إذا كان اسم السورة يحتوي على الكلمة المكتوبة في البحث، نعرضها
    if (title.includes(query)) {
      surah.style.display = 'block'; // عرض السورة
    } else {
      surah.style.display = 'none'; // إخفاء السورة
    }
  });
});

document.getElementById("searchInput").addEventListener("input", filterSurahs);

function filterSurahs() {
  const query = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const surahs = document.querySelectorAll(".surah-info");
  const resultsCountElement = document.getElementById("resultsCount");
  const noResultsElement = document.getElementById("noResults");
    console.log(resultsCountElement)
  let matchCount = 0; // Counter for results
    // Reset the results count
    if (matchCount === 0) {
    resultsCountElement.style.display = "block";
  }
  // Loop through all surah items and apply filtering based only on the title
  surahs.forEach((surah) => {
    const title = surah.querySelector("h3")?.textContent.toLowerCase() || "";
    // Check if the title matches the search query
    const matchesText = title.includes(query);

    // Show or hide surah based on match condition
    if (matchesText) {
      surah.style.display = "block";
      matchCount++;
    } else {
      surah.style.display = "none";
    }
  });

  // Update the results count text
  resultsCountElement.textContent = `عدد النتائج: ${matchCount}`;

  // Show or hide "no results" message
  if (matchCount === 0) {
    noResultsElement.style.display = "block";
  } else {
    noResultsElement.style.display = "none";
  }
}
