       // Religious Packages Data
const relPackagesData = [
  {
    id: 1,
    title: "دورة شرح التحفة",
    price: 150,
    currency: "دولار",
    period: "شهرين",
    icon: "fas fa-book",
    backgroundImage: "Altuhfaitkan.jpeg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "إتقان متن التحفة",
    features: ["مدة الدورة شهرين", "3 حصص أسبوعياً", "مدة الحصة 40 دقيقة"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 2,
    title: "دورة شرح الجزرية",
    price: 275,
    currency: "دولار",
    period: "3 أشهر",
    icon: "fas fa-scroll",
    backgroundImage: "aljezeriaa.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#1B4D3E",
    imageText: "شرح متن الجزرية",
    features: ["مدة الدورة 3 أشهر", "3 حصص أسبوعياً", "مدة الحصة 60 دقيقة"],
    unavailable: [],
    options: [],
    badge: "متقدمة"
  },
  {
    id: 3,
    title: "دورة محو الأمية",
    price: 350,
    currency: "دولار",
    period: "6 أشهر",
    icon: "fas fa-pen",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/iCqBJLKHedBeadFO.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "تعلم القراءة والكتابة",
    features: ["مدة الدورة 6 أشهر", "4 حصص أسبوعياً", "مدة الحصة ساعة", "حلقة فردية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 4,
    title: "دورة تأهيل معلمة رشيدي",
    price: 300,
    currency: "دولار",
    period: "شهرين",
    icon: "fas fa-chalkboard-teacher",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/WaLztRHlUxCYsfUR.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "إعداد معلمات",
    features: ["مدة الدورة شهرين", "3 حصص أسبوعياً", "مدة الحصة 40 دقيقة"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 5,
    title: "ختمة إجازة بالسند",
    price: 450,
    currency: "دولار",
    period: "9 أشهر",
    icon: "fas fa-certificate",
    backgroundImage: "senadmutasill.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "إجازة بالسند المتصل",
    features: ["مدة 9 أشهر", "3 حصص أسبوعياً", "30 دقيقة", "حلقة فردية"],
    unavailable: [],
    options: [],
    badge: "نخبة"
  },
  {
    id: 6,
    title: "ختمة إجازة بالسند (مكثفة)",
    price: 300,
    currency: "دولار",
    period: "3 أشهر",
    icon: "fas fa-bolt",
    backgroundImage: "senadmutasill.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#1B4D3E",
    imageText: "برنامج مكثف",
    features: ["مدة 3 أشهر", "6 حصص أسبوعياً", "30 دقيقة"],
    unavailable: [],
    options: [],
    badge: "مكثف"
  },
  {
    id: 7,
    title: "حلقة الحفظ الغيبي",
    price: 450,
    currency: "دولار",
    period: "9 أشهر",
    icon: "fas fa-brain",
    backgroundImage: "ghaibisave.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "حفظ متقن",
    features: ["مدة 9 أشهر", "3 حصص أسبوعياً", "30 دقيقة", "فردية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 8,
    title: "ختمة ضبط وإتقان",
    price: 300,
    currency: "دولار",
    period: "6 أشهر",
    icon: "fas fa-quran",
    backgroundImage: "khitmaDatit.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "ضبط التلاوة",
    features: ["مدة 6 أشهر", "3 حصص أسبوعياً", "30 دقيقة", "فردية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 9,
    title: "دورة جزء عمّ وتبارك",
    price: 130,
    currency: "دولار",
    period: "3 أشهر",
    icon: "fas fa-child",
    backgroundImage: "tabarakAndammaa.png",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "تحفيظ للأطفال",
    features: ["من 6 إلى 12 سنة", "3 حصص أسبوعياً", "حصص فردية"],
    unavailable: [],
    options: [],
    badge: "أطفال"
  },
  {
    id: 10,
    title: "دورة جزء عمّ",
    price: 100,
    currency: "دولار",
    period: "شهرين",
    icon: "fas fa-baby",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/ZGxsujpEuMvEbvRN.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "بداية التحفيظ",
    features: ["من 4 إلى 6 سنوات", "3 حصص أسبوعياً", "30 دقيقة", "فردية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 11,
    title: "دورة الرشيدي قراءة وكتابة",
    price: 150,
    currency: "دولار",
    period: "3 أشهر",
    icon: "fas fa-language",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/hsFXrDENFAOurcdO.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "قراءة وكتابة",
    features: ["من 4 إلى 12 سنة", "3 حصص أسبوعياً", "30 دقيقة", "فردية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
    id: 12,
    title: "حلقة جماعية لتعليم العربية",
    price: 75,
    currency: "دولار",
    period: "3 أشهر",
    icon: "fas fa-users",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/rRzpTLpJsjWFcqXA.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "الطريقة النورانية",
    features: ["عدد 5 طلاب", "60 دقيقة", "جماعية"],
    unavailable: [],
    options: [],
    badge: "جماعي"
  },
  {
    id: 13,
    title: "حلقة تفسير وتدبُّر جزء عمّ",
    price: 40,
    currency: "دولار",
    period: "شهر ونصف",
    icon: "fas fa-lightbulb",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663227563266/zFtdZxovjJVXiLlW.jpg",
    overlay: "rgba(13, 46, 28, 0.75)",
    textColor: "#ffffff",
    imageText: "تفسير جزء عمّ",
    features: ["5–6 طلاب", "40 دقيقة", "جماعية"],
    unavailable: [],
    options: [],
    badge: ""
  },
  {
  id: 14,
  title: "مشروع الحافظ الصغير",
  price: 50,
  currency: "دولار",
  period: "حتى 3 سنوات",
  icon: "fas fa-quran",
  backgroundImage: "Alhalzagir.png",  
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "الحافظ الصغير",
  features: [
    "تحفيظ القرآن بطرق ابتكارية",
    "حلقة جماعية",
    "مدة الحلقة ساعتين",
    "5–6 حلقات",
    "الدفع على دفعات"
  ],
  unavailable: [],
  options: [],
  badge: ""
},
{
  id: 15,
  title: "مشروع حملة القرآن",
  price: 50,
  currency: "دولار / شهريًا",
  period: "سنة ونصف",
  icon: "fas fa-book-open",
  backgroundImage: "kidsreadingqurann.png",
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "حملة القرآن",
  features: [
    "العمر 6–12 سنة",
    "حلقة جماعية",
    "مدة الحلقة ساعتين ونصف",
    "5–6 حلقات",
    "الدفع السنوي على دفعات"
  ],
  unavailable: [],
  options: [],
  badge: ""
},
{
  id: 16,
  title: "مشروع حروف النور",
  price: 35,
  currency: "دولار / شهريًا",
  period: "3 أشهر",
  icon: "fas fa-font",
  backgroundImage: "hurufalnur.png",
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "حروف النور",
  features: [
    "تعليم القراءة والكتابة",
    "العمر 3–10 سنوات",
    "حلقة جماعية",
    "مدة الحلقة ساعة ونصف"
  ],
  unavailable: [],
  options: [],
  badge: ""
},
{
  id: 17,
  title: "مشروع كوني مربية ناجحة",
  price: 200,
  currency: "دولار",
  period: "شهرين ونصف لكل دورة",
  icon: "fas fa-chalkboard-teacher",
  backgroundImage: "kunimurebiyenajeha.png",
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "كوني مربية ناجحة",
  features: [
    "تربية الطفل تحت 6 سنوات",
    "الأساليب التربوية وفق السيرة",
    "كيف أكون قدوة",
    "غرس القيم النافعة"
  ],
  unavailable: [],
  options: [],
  badge: ""
},
{
  id: 18,
  title: "دورة مخارج الحروف والصفات",
  price: 130,
  currency: "دولار",
  period: "شهرين ونصف",
  icon: "fas fa-microphone",
  backgroundImage: "makherijalhurufsabaashar.png",
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "مخارج الحروف",
  features: [
    "شرح نظري وتطبيق عملي",
    "تصحيح نطق الحروف كاملًا",
    "تدريب مباشر صوت وصورة"
  ],
  unavailable: [],
  options: [],
  badge: ""
},
{
  id: 19,
  title: "المسابقة القرآنية الرمضانية",
  price: 50,
  currency: "دولار",
  period: "شهر (رمضان)",
  icon: "fas fa-trophy",
  backgroundImage: "musabakaalabakara.png",
  overlay: "rgba(13, 46, 28, 0.75)",
  textColor: "#ffffff",
  imageText: "مسابقة رمضانية",
  features: [
    "حفظ سورة البقرة خلال شهر",
    "حلقة جماعية",
    "ذكور + إناث",
    "هدايا ومكافآت مالية للأوائل"
  ],
  unavailable: [],
  options: [],
  badge: "رمضان"
}
];

        const relWhatsappNum = "+963996841921"; // تم استخدام رقمك الموجود في الكود
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('relPkgContainer');
            
            relPackagesData.forEach(pkg => {
                const card = document.createElement('div');
                card.className = 'rel-pkg-card';
                
                // إضافة كلاس للبطاقات ذات الخلفية البيضاء
                if (pkg.textColor === "#ffffff" && pkg.overlay === "rgba(13, 46, 28, 0.75)") {
                    card.classList.add('header-light');
                }
                
                const badge = pkg.badge ? `<div class="rel-pkg-badge">${pkg.badge}</div>` : '';
                
                let featuresHTML = pkg.features.map(f => `<li>${f}</li>`).join('');
                featuresHTML += pkg.unavailable.map(f => `<li class="rel-pkg-unavailable">${f}</li>`).join('');
                
                let optionsHTML = pkg.options.map(opt => `
                    <div class="rel-pkg-select-group">
                        <label class="rel-pkg-label">${opt.label}</label>
                        <select class="rel-pkg-select" name="${opt.name}">
                            ${opt.opts.map(o => `<option value="${o}">${o}</option>`).join('')}
                        </select>
                    </div>
                `).join('');
                
                const msg = encodeURIComponent(`السلام عليكم، أرغب في الاشتراك في ${pkg.title} (سعرها: ${pkg.price} ${pkg.currency}) عبر منصة ركاز`);
                const waLink = `https://wa.me/${relWhatsappNum.replace(/\D/g, '')}?text=${msg}`;
                
                card.innerHTML = `
                    ${badge}
                    <div class="rel-pkg-card-header" style="background: ${pkg.overlay};">
                        <div class="rel-pkg-icon"><i class="${pkg.icon}" style="color: ${pkg.textColor};"></i></div>
                        <h3 class="rel-pkg-name" style="color: ${pkg.textColor};">${pkg.title}</h3>
                        <div class="rel-pkg-price" style="color: ${pkg.textColor};">${pkg.price} <span>${pkg.currency}/${pkg.period}</span></div>
                    </div>
                    <div class="rel-pkg-img-box" style="background-image: url('${pkg.backgroundImage}')">
                        <div class="rel-pkg-img-overlay">${pkg.imageText}</div>
                    </div>
                    <div class="rel-pkg-body">
                        <ul class="rel-pkg-features">${featuresHTML}</ul>
                        ${optionsHTML}
                        <a href="${waLink}" target="_blank" class="rel-pkg-whatsapp-btn">
                            <i class="fab fa-whatsapp"></i>
                            اشترك الآن عبر واتساب
                        </a>
                    </div>
                `;
                container.appendChild(card);
            });
        });

        function toggleMenu() {
                        document.getElementById("navLinks").classList.toggle("active");
                        }; 

function openWhatsApp(teacherName) {
    const message = `السلام عليكم اريد الاشتراك مع الاستاذ ${teacherName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${relWhatsappNum}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 120) {
        // نزول
        header.classList.add("nav-hidden");
        header.classList.remove("nav-visible");
    } else {
        // صعود
        header.classList.remove("nav-hidden");
        header.classList.add("nav-visible");
    }

    lastScroll = currentScroll;
});
