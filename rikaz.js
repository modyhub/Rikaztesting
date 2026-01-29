       // Religious Packages Data
        const relPackagesData = [
            {
                id: 1,
                title: "باقة طالب العلم",
                price: 150,
                currency: "دولار",
                period: "شهري",
                icon: "fas fa-book-open-reader",
                image: "https://images.unsplash.com/photo-1584281723358-461f7555806e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                imageText: "بداية الرحلة مع كتاب الله",
                features: ["حفظ جزئين شهرياً", "حصتان أسبوعياً", "تصحيح التلاوة", "متابعة دورية"],
                unavailable: ["إجازة بالسند"],
                options: [{ label: "وقت الحصص", name: "time", opts: ["صباحي", "مسائي"] }],
                badge: "الأكثر طلباً"
            },
            {
                id: 2,
                title: "باقة الحافظ المتقن",
                price: 300,
                currency: "دولار",
                period: "شهري",
                icon: "fas fa-quran",
                image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                imageText: "إتقان الحفظ والتدبر",
                features: ["حفظ 4 أجزاء شهرياً", "4 حصص أسبوعياً", "شرح معاني الآيات", "شهادة إتمام"],
                unavailable: ["إجازة بالسند"],
                options: [{ label: "المستوى", name: "level", opts: ["مبتدئ", "متوسط", "متقدم"] }],
                badge: "متميز"
            },
            {
                id: 3,
                title: "باقة الإجازة والسند",
                price: 500,
                currency: "دولار",
                period: "شهري",
                icon: "fas fa-scroll",
                image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                imageText: "نيل شرف السند المتصل",
                features: ["ختمة كاملة للإجازة", "حصص يومية", "دراسة متون التجويد", "إجازة بالسند المتصل"],
                unavailable: [],
                options: [{ label: "الرواية", name: "narration", opts: ["حفص", "ورش", "قالون"] }],
                badge: "نخبة"
            }
        ];

        const relWhatsappNum = "+905013584744"; // تم استخدام رقمك الموجود في الكود

        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('relPkgContainer');
            
            relPackagesData.forEach(pkg => {
                const card = document.createElement('div');
                card.className = 'rel-pkg-card';
                
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
                    <div class="rel-pkg-card-header">
                        <div class="rel-pkg-icon"><i class="${pkg.icon}"></i></div>
                        <h3 class="rel-pkg-name">${pkg.title}</h3>
                        <div class="rel-pkg-price">${pkg.price} <span>${pkg.currency}/${pkg.period}</span></div>
                    </div>
                    <div class="rel-pkg-img-box" style="background-image: url('${pkg.image}')">
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
                        }