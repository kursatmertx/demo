let currentLanguage = 'en';

// Dil verilerini doğrudan tanımla
const translations = {
    en: {
        "navigation": {
            "menu_items": [
                "Home",
                "About",
                "Solutions",
                "Providers",
                "FAQ",
                "Contact"
            ]
        },
        "hero_section": {
            "subtitle": "MOST ADVANCED",
            "title": "Betting Infrastructure",
            "subtitle2": "Next-Gen Solutions",
            "description": "With years of experience, we craft scalable and secure solutions that drive the future of betting platforms.",
            "cta_button": "Get Started Today"
        },
        "about_section": {
            "title": "ABOUT NOWGAMING",
            "subtitle": "Why Now Gaming?",
            "description": "We have worked with many companies to create betting systems solutions for businesses and we are still growing.",
            "features": {
                "flexibility": {
                    "title": "Flexibility",
                    "description": "We've worked with over 400 companies to build blockchain solutions for their business.",
                    "items": [
                        {
                            "title": "Multi Platform : Nowgaming works seamlessly on every platform.",
                        },
                        {
                            "title": "Integration: Integrate your systems with API and plugin support.",
                        },
                        {
                            "title": "Tools: Use powerful pre-built tools.",
                        }
                    ]
                },
                "payments": {
                    "title": "Payments",
                    "descriptions": [
                        "Many payment methods are integrated.",
                        "Comprehensive branch network solution for betting companies."
                    ]
                },
                "security": {
                    "title": "Secure & Safe",
                    "descriptions": [
                        "Our system is regularly scanned, analysed and protected with the latest security updates.",
                        "24/7 Security Monitoring and Instant Alerts",
                        "Maximum security with authorisation and access controls"
                    ]
                }
            }
        },
        "solutions_section": {
            "title": "SOLUTIONS",
            "subtitle": "What does it mean for your business?",
            "description": "Deliver uninterrupted service to your customers, increase operational efficiency and gain a competitive advantage in your industry with our robust and reliable infrastructure.",
            "features": [
                {
                    "title": "Support",
                    "description": "Offering live chat and automated responses to assist with inquiries in real time."
                },
                {
                    "title": "Affiliate",
                    "description": "Collaborate with partners to drive traffic and earn commissions through referral programs."
                },
                {
                    "title": "Agent",
                    "description": "A system for managing agents and streamlining their operations for better performance."
                },
                {
                    "title": "Games",
                    "description": "Access thousands of games from a wide range of providers, offering endless variety and excitement."
                },
                {
                    "title": "Live Stream",
                    "description": "Watch live sports content in real-time, delivering the action straight to your screen."
                },
                {
                    "title": "Application",
                    "description": "Multi-platform applications designed for seamless access across all your devices."
                }
            ]
        },
        "providers_section": {
            "title": "PROVIDERS",
            "subtitle": "Most popular providers"
        },
        "faq_section": {
            "title": "FAQ",
            "subtitle": "Popular questions about Now Gaming",
            "description": "We've worked with over 400 companies to build blockchain solutions for their business, and we are still growing.",
            "questions": [
                {
                    "question": "What is Now Gaming?",
                    "answer": "Now Gaming is an infrastructure service developed for betting sites."
                },
                {
                    "question": "What should I do if I need help?",
                    "answer": "You can contact our support team 24/7. We can help you via email, phone or live chat."
                },
                {
                    "question": "Is there a demo version?",
                    "answer": "Yes, we have a demo version for you to test our service. With the demo you can experience how the system works. Please get in touch."
                },
                {
                    "question": "What process should I follow to obtain a licence?",
                    "answer": "As an intermediary in the licence purchase process, we guide you to choose the right type of licence. We offer the best options to suit your needs and help you complete your transaction smoothly."
                },
                {
                    "question": "How to calculate commission for affiliate programme?",
                    "answer": "The commission calculation is based on the model you choose. Various commission options are offered, for example, a fixed payment per user, or a percentage of the amount of bets made."
                }
            ]
        },
        "crypto_section": {
            "title": "Crypto Payments",
            "description": "With our infrastructure that supports all kinds of payment solutions, you can receive and send your payments with cryptocurrencies.",
            "cta_button": "Get started"
        },
        "contact_section": {
            "title": "CONTACT",
            "subtitle": "Contact Us",
            "info": {
                "location": {
                    "title": "Location",
                    "address": "1901 Thornridge Cir. Shiloh, Hawaii"
                },
                "contact": {
                    "title": "Contact",
                    "phones": ["+00(0) 000-0000", "+00(0) 000-0000"]
                },
                "email": {
                    "title": "Email",
                    "addresses": ["info@nowgaming.io", "support@nowgaming.io"]
                },
                "hours": {
                    "title": "Visit Between",
                    "schedule": {
                        "weekdays": "Mon - Sat : 8.00-5.00",
                    }
                }
            },
            "form": {
                "title": "Get In Touch Now",
                "placeholders": {
                    "name": "Your Name",
                    "email": "Your Email",
                    "message": "Enter you message....."
                },
                "submit_button": "Send Message"
            }
        },
        "footer": {
            "about_text": "Deliver uninterrupted service to your customers, increase operational efficiency and gain a competitive advantage in your industry with our robust and reliable infrastructure.",
            "copyright": "Copyright © 2025 NOW GAMING"
        }
    },
    tr: {
        "navigation": {
            "menu_items": [
                "Ana Sayfa",
                "Hakkında",
                "Çözümler",
                "Sağlayıcılar",
                "SSS",
                "İletişim"
            ]
        },
        "hero_section": {
            "subtitle": "EN GELİŞMİŞ",
            "title": "Bahis Altyapısı",
            "subtitle2": "Yeni Nesil Çözümler",
            "description": "Yılların deneyimiyle, bahis platformlarının geleceğini yönlendiren ölçeklenebilir ve güvenli çözümler üretiyoruz.",
            "cta_button": "Hemen Başlayın"
        },
        "about_section": {
            "title": "NOWGAMING HAKKINDA",
            "subtitle": "Neden Now Gaming?",
            "description": "İşletmeler için bahis sistemleri çözümleri oluşturmak için birçok şirketle çalıştık ve hala büyümeye devam ediyoruz.",
            "features": {
                "flexibility": {
                    "title": "Esneklik",
                    "description": "İşletmeleri için blok zinciri çözümleri oluşturmak üzere 400'den fazla şirketle çalıştık.",
                    "items": [
                        {
                            "title": "Çoklu Platform : Nowgaming her platformda sorunsuz çalışır.",
                        },
                        {
                            "title": "Entegrasyon : API ve eklenti desteği ile sistemlerinizi entegre edin.",
                        },
                        {
                            "title": "Araçlar : Önceden oluşturulmuş güçlü araçları kullanın.",
                        }
                    ]
                },
                "payments": {
                    "title": "Ödemeler",
                    "descriptions": [
                        "Birçok ödeme yöntemi entegre edilmiştir.",
                        "Bahis şirketleri için kapsamlı şube ağı çözümü."
                    ]
                },
                "security": {
                    "title": "Güvenlik & Koruma",
                    "descriptions": [
                        "Sistemimiz düzenli olarak taranmakta, analiz edilmekte ve en son güvenlik güncellemeleri ile korunmaktadır.",
                        "7/24 Güvenlik İzleme ve Anlık Uyarılar",
                        "Yetkilendirme ve erişim kontrolleri ile maksimum güvenlik"
                    ]
                }
            }
        },
        "solutions_section": {
            "title": "ÇÖZÜMLER",
            "subtitle": "İşletmeniz için ne anlama geliyor?",
            "description": "Sağlam ve güvenilir altyapımızla müşterilerinize kesintisiz hizmet sunun, operasyonel verimliliği artırın ve sektörünüzde rekabet avantajı elde edin.",
            "features": [
                {
                    "title": "Destek",
                    "description": "Sorulara gerçek zamanlı olarak yardımcı olmak için canlı sohbet ve otomatik yanıtlar sunar."
                },
                {
                    "title": "Affiliate",
                    "description": "Trafiği artırmak ve yönlendirme programları aracılığıyla komisyon kazanmak için iş ortaklarıyla işbirliği yapın."
                },
                {
                    "title": "Bayi",
                    "description": "Temsilcileri yönetmek ve daha iyi performans için operasyonlarını düzenlemek için bir sistem."
                },
                {
                    "title": "Oyunlar",
                    "description": "Sonsuz çeşitlilik ve heyecan sunan çok çeşitli sağlayıcılardan binlerce oyuna erişin."
                },
                {
                    "title": "Canlı Yayın",
                    "description": "Canlı spor içeriklerini gerçek zamanlı olarak izleyin, aksiyonu doğrudan ekranınıza getirin."
                },
                {
                    "title": "Uygulama",
                    "description": "Tüm cihazlarınızdan sorunsuz erişim için tasarlanmış çok platformlu uygulamalar."
                }
            ]
        },
        "providers_section": {
            "title": "SAĞLAYICILAR",
            "subtitle": "En popüler sağlayıcılar"
        },
        "faq_section": {
            "title": "SSS",
            "subtitle": "Now Gaming hakkında popüler sorular",
            "description": "İşletmeleri için blok zinciri çözümleri oluşturmak üzere 400'den fazla şirketle çalıştık ve hala büyümeye devam ediyoruz.",
            "questions": [
                {
                    "question": "Now Gaming nedir?",
                    "answer": "Now Gaming, bahis siteleri için geliştirilmiş bir altyapı hizmetidir."
                },
                {
                    "question": "Yardıma ihtiyacım olursa ne yapmalıyım?",
                    "answer": "7/24 destek ekibimizle iletişime geçebilirsiniz. Size e-posta, telefon veya canlı sohbet yoluyla yardımcı olabiliriz."
                },
                {
                    "question": "Demo sürümü var mı?",
                    "answer": "Evet, hizmetimizi test etmeniz için bir demo sürümümüz var. Demo ile sistemin nasıl çalıştığını deneyimleyebilirsiniz. Lütfen iletişime geçin."
                },
                {
                    "question": "Lisans almak için hangi süreci takip etmeliyim?",
                    "answer": "Lisans satın alma sürecinde bir aracı olarak, doğru lisans türünü seçmeniz için size rehberlik ediyoruz. İhtiyaçlarınıza en uygun seçenekleri sunuyor ve işleminizi sorunsuz bir şekilde tamamlamanıza yardımcı oluyoruz."
                },
                {
                    "question": "Ortaklık programı için komisyon nasıl hesaplanır?",
                    "answer": "Komisyon hesaplaması seçtiğiniz modele göre yapılır. Örneğin, kullanıcı başına sabit ödeme veya yapılan bahislerin tutarının yüzdesi gibi çeşitli komisyon seçenekleri sunulmaktadır."
                }
            ]
        },
        "crypto_section": {
            "title": "Kripto Ödemeleri",
            "description": "Her türlü ödeme çözümünü destekleyen altyapımız ile ödemelerinizi kripto para birimleri ile alabilir ve gönderebilirsiniz.",
            "cta_button": "Hemen başlayın"
        },
        "contact_section": {
            "title": "İLETİŞİM",
            "subtitle": "Bize Ulaşın",
            "info": {
                "location": {
                    "title": "Konum",
                    "address": "1901 Thornridge Cir. Shiloh, Hawaii"
                },
                "contact": {
                    "title": "İletişim",
                    "phones": ["+00(0) 000-0000", "+00(0) 000-0000"]
                },
                "email": {
                    "title": "E-posta",
                    "addresses": ["info@nowgaming.io", "support@nowgaming.io"]
                },
                "hours": {
                    "title": "Çalışma Saatleri",
                    "schedule": {
                        "weekdays": "Pazartesi - Cumartesi : 8.00-5.00",
                    }
                }
            },
            "form": {
                "title": "Şimdi İletişime Geçin",
                "placeholders": {
                    "name": "Adınız",
                    "email": "E-posta Adresiniz",
                    "message": "Mesajınızı girin....."
                },
                "submit_button": "Mesaj Gönder"
            }
        },
        "footer": {
            "about_text": "Sağlam ve güvenilir altyapımızla müşterilerinize kesintisiz hizmet sunun, operasyonel verimliliği artırın ve sektörünüzde rekabet avantajı elde edin.",
            "copyright": "Telif Hakkı © 2025 NOW GAMING"
        }
    }
};

// Verilen key'e göre nested obje içinden değer al
function getNestedValue(obj, key) {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    
    // Dropdown menüdeki dil butonlarını güncelle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.textContent = lang.toUpperCase();
    });

    // Menü öğelerini güncelle
    const menuItems = translations[lang].navigation.menu_items;
    
    // Desktop menü öğelerini güncelle
    const navigationLinks = document.querySelectorAll('.navigation li a');
    navigationLinks.forEach((link, index) => {
        if (menuItems[index]) {
            link.textContent = menuItems[index];
        }
    });
    
    // Mobil menü öğelerini güncelle
    const mobileNavigationLinks = document.querySelectorAll('.mobile-menu .navigation li a');
    mobileNavigationLinks.forEach((link, index) => {
        if (menuItems[index]) {
            link.textContent = menuItems[index];
        }
    });
}

// Çevirileri uygula
function applyTranslations() {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.dataset.langKey;
        const translation = getNestedValue(translations[currentLanguage], key);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Başlangıç çevirilerini uygula
    applyTranslations();
    
    // Dropdown menüdeki dil seçeneklerine tıklama olayı ekle
    document.querySelectorAll('.dropdown-menu a[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
        });
    });
}); 