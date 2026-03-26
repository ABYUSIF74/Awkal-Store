import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Send, MessageCircle, Zap, ShieldCheck, Clock, DollarSign, CheckCircle2, Star } from 'lucide-react';

const WHATSAPP_NUMBER = "1210359895"; // Replace with actual number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً عوكل ستور، أريد الاستفسار عن خدمات السوشيال ميديا.")}`;

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
            عوكل ستور
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>تواصل معنا</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-emerald-400 font-semibold text-sm">
              ✨ الخيار الأول لنمو حساباتك
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              أفضل خدمات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                السوشيال ميديا
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              نقدم لك حلولاً متكاملة لزيادة المتابعين، التفاعلات، والمشاهدات على جميع منصات التواصل الاجتماعي بأسعار تنافسية وجودة عالية.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                <span>اطلب الآن على واتساب</span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <span>تصفح الخدمات</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا المميزة</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">اختر المنصة التي تريد تكبير حسابك عليها، ونحن نتكفل بالباقي.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TikTok', icon: TikTokIcon, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
              { name: 'Instagram', icon: Instagram, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
              { name: 'Facebook', icon: Facebook, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
              { name: 'X (Twitter)', icon: Twitter, color: 'text-zinc-100', bg: 'bg-zinc-100/10', border: 'border-zinc-100/20' },
              { name: 'Telegram', icon: Send, color: 'text-sky-500', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className={`p-6 rounded-3xl bg-zinc-900 border ${platform.border} hover:bg-zinc-800/80 transition-colors group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${platform.bg} ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                <ul className="space-y-3">
                  {['متابعين حقيقيين', 'لايكات وتفاعلات', 'مشاهدات عالية'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-neon-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار عوكل ستور؟</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">نحن نضمن لك أفضل تجربة لنمو حساباتك بأمان وسرعة.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'تنفيذ سريع', desc: 'نبدأ بتنفيذ طلبك فور تأكيد الدفع لضمان أسرع النتائج.', icon: Zap, color: 'text-yellow-400' },
              { title: 'أسعار تنافسية', desc: 'نقدم أفضل الأسعار في السوق مع الحفاظ على الجودة.', icon: DollarSign, color: 'text-green-400' },
              { title: 'دعم 24/7', desc: 'فريق الدعم الفني متواجد دائماً للرد على استفساراتك.', icon: Clock, color: 'text-blue-400' },
              { title: 'خدمة موثوقة', desc: 'آلاف العملاء يثقون بخدماتنا لتكبير حساباتهم بأمان.', icon: ShieldCheck, color: 'text-purple-400' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">آراء عملائنا</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">نفخر بثقة عملائنا ونجاح حساباتهم معنا.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">"خدمة ممتازة وسريعة جداً! زاد عدد المتابعين عندي بشكل ملحوظ في وقت قصير. أنصح الجميع بالتعامل مع عوكل ستور."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-500">
                    ع
                  </div>
                  <div>
                    <div className="font-bold">عميل مميز</div>
                    <div className="text-sm text-zinc-500">صاحب متجر إلكتروني</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">مستعد لتكبير حسابك؟</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              تواصل معنا الآن على واتساب واحصل على استشارة مجانية لأفضل الباقات المناسبة لحسابك.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-10 py-5 rounded-full font-black text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-1"
            >
              <MessageCircle className="w-7 h-7" />
              <span>اطلب الآن على واتساب</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800 text-center text-zinc-500">
        <p>© {new Date().getFullYear()} عوكل ستور. جميع الحقوق محفوظة.</p>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 hover:bg-emerald-400 transition-all"
        aria-label="تواصل معنا على واتساب"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Ping Animation */}
        <span className="absolute w-full h-full rounded-full bg-emerald-500 opacity-50 animate-ping -z-10"></span>
      </motion.a>
    </div>
  );
}
