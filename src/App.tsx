import { motion } from "motion/react";
import { Heart, MapPin, Clock, ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect, type ComponentType } from "react";
import { SiInstagram, SiFacebook, SiSwiggy, SiZomato } from "react-icons/si";

type SocialPlatform = {
  name: string;
  handle: string;
  href: string;
  brandColor: string;
  accent: string;
  Icon: ComponentType<{ size?: number }>;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "Instagram",
    handle: "@_waflie6",
    href: "https://www.instagram.com/_waflie6/",
    brandColor: "#E1306C",
    accent: "#F77737",
    Icon: SiInstagram,
  },
  {
    name: "Zomato",
    handle: "Order in 30 mins",
    href: "#",
    brandColor: "#E23744",
    accent: "#F8C24E",
    Icon: SiZomato,
  },
  {
    name: "Swiggy",
    handle: "Fast doorstep delivery",
    href: "#",
    brandColor: "#FC8019",
    accent: "#FFB36A",
    Icon: SiSwiggy,
  },
  {
    name: "Facebook",
    handle: "Waflie Community",
    href: "#",
    brandColor: "#1877F2",
    accent: "#66A3FF",
    Icon: SiFacebook,
  },
];

const hexToRgba = (hex: string, alpha: number) => {
  const normalizedHex = hex.replace("#", "");
  const fullHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => char + char)
          .join("")
      : normalizedHex;

  const colorInt = Number.parseInt(fullHex, 16);
  const r = (colorInt >> 16) & 255;
  const g = (colorInt >> 8) & 255;
  const b = colorInt & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-[1920px] mx-auto px-8 md:px-20 flex justify-between items-center">
        <div className="text-3xl font-headline font-semibold tracking-tight text-primary cursor-pointer hover:opacity-80 transition-opacity">
          Waflie
        </div>

        <div className="hidden md:flex gap-12 items-center font-body text-[13px] uppercase tracking-[0.2em] font-medium text-primary/70">
          <a href="#" className="editorial-link text-primary">Home</a>
          <a href="#menu" className="editorial-link hover:text-primary transition-colors">Menu</a>
          <a href="#about" className="editorial-link hover:text-primary transition-colors">About</a>
          <a href="#contact" className="editorial-link hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end text-[11px] uppercase tracking-widest text-primary/60 font-medium">
            <span>Vinay Nagar, Gwalior</span>
            <span>+91 7987486964</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-2.5 bg-primary text-white rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-secondary transition-all duration-300 soft-shadow"
          >
            <span>Say Thanks</span>
            <Heart size={14} fill="currentColor" />
          </motion.button>
          <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-8 flex flex-col gap-6 font-body text-[13px] uppercase tracking-widest font-medium text-primary/70"
        >
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const zomato = socialPlatforms.find((platform) => platform.name === "Zomato");
  const heroSocials = socialPlatforms.filter((platform) => ["Instagram", "Swiggy"].includes(platform.name));

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-surface-bright">
      <div className="absolute inset-0 waffle-texture opacity-60"></div>
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 z-20"
        >
          <span className="inline-block text-[12px] uppercase tracking-[0.4em] text-secondary font-semibold mb-6 opacity-80">Gwalior's Finest Pâtisserie</span>
          <h1 className="text-7xl md:text-[100px] font-headline font-bold text-primary mb-8 leading-[0.9] tracking-tighter">
            Poetry <br />
            <span className="italic font-normal text-secondary/80 ml-8">in every</span><br />
            Bite.
          </h1>
          <p className="text-lg md:text-xl font-body text-on-surface-variant/80 mb-12 max-w-md leading-relaxed">
            When words fail, our waffles speak the language of soul. Freshly ironed, warmly served.
          </p>
          <div className="flex flex-col items-start gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={zomato?.href ?? "#"}
              target={zomato?.href?.startsWith("http") ? "_blank" : undefined}
              rel={zomato?.href?.startsWith("http") ? "noreferrer" : undefined}
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-white rounded-full font-bold text-[13px] uppercase tracking-widest transition-all soft-shadow"
              style={{ backgroundColor: zomato?.brandColor ?? "#E23744" }}
            >
              {zomato && <zomato.Icon size={17} />}
              <span>Order on Zomato</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex flex-wrap items-center gap-3">
              {heroSocials.map((platform) => (
                <motion.a
                  key={platform.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href={platform.href}
                  target={platform.href.startsWith("http") ? "_blank" : undefined}
                  rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold border border-transparent"
                  style={{
                    color: platform.brandColor,
                    backgroundColor: hexToRgba(platform.brandColor, 0.12),
                    borderColor: hexToRgba(platform.brandColor, 0.32),
                  }}
                >
                  <platform.Icon size={14} />
                  <span>{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 relative flex justify-end"
        >
          <div className="relative w-full aspect-[4/5] max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden soft-shadow z-10 transform translate-x-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyFKy2l2RWgSgB0Yq4lU0a1VZxW0zwZnKDw66FUlC7mWkjirI1IA46NCxBS3CPLFwlmKaS8ll-9BzHmU4ZTBUBmxSvsSyDiNgYQapFZj-O00mEL2htD1QF5Tj_cxLs6U6RGg1z5ESHRR6I3uPO4woZA9H27nZqOhpkPQbSRg7FJFvJd0TVjsejvOtbvzA_tveq1tTbCwrM6reIoehQo8xGQTNnPI2M9u3e4qAudOn_zDn2oGJZDKLk8Ob_QA-zbi24wOCE1jMxt6A5" 
                alt="Glistening waffles" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -left-20 w-64 h-80 rounded-[1.5rem] overflow-hidden border-[12px] border-white soft-shadow z-20 hidden md:block"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDszXvzD3ffZ7uzCd7LJMUJ0EMtOzjiz2OHQN-yTDoCrf0sq0xVYzo2SHOSxLBq3zSebiJOk3lcUhVztEbSYi24nIWh48ps4PWJp0xkCGVt9ogmdR5-wFl8QyBXId3eS1QDfi-wSvGhgahSQ83HazmThxh7EQ5AnWJIABrffpbbT09oM06yJRmO4yOlpTmgFSFU7h5cQteLMLwGHzNvDj-hXV63IG1m2yl-iilg0hRlfNeT0iyOHAmBAMKBk_j2DCcp8GWV1-mLDYrH" 
                alt="Waffle detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-container/30 rounded-full -z-10 blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.4em] text-secondary font-bold mb-4 block">Visual Diary</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary leading-tight">Capturing the <br /><span className="italic font-normal">Soul of Waflie</span></h2>
          </div>
          <a href="#" className="editorial-link uppercase text-xs tracking-[0.3em] font-bold text-primary mb-2">View Gallery</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-4 aspect-[3/4] overflow-hidden rounded-2xl soft-shadow group"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDszXvzD3ffZ7uzCd7LJMUJ0EMtOzjiz2OHQN-yTDoCrf0sq0xVYzo2SHOSxLBq3zSebiJOk3lcUhVztEbSYi24nIWh48ps4PWJp0xkCGVt9ogmdR5-wFl8QyBXId3eS1QDfi-wSvGhgahSQ83HazmThxh7EQ5AnWJIABrffpbbT09oM06yJRmO4yOlpTmgFSFU7h5cQteLMLwGHzNvDj-hXV63IG1m2yl-iilg0hRlfNeT0iyOHAmBAMKBk_j2DCcp8GWV1-mLDYrH" 
              alt="Reel 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 md:mt-24 aspect-[4/5] overflow-hidden rounded-2xl soft-shadow group"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRg5nSLIr1wwlu_KhtpTJVSvBJklITgOVaoLVEJxSVwnDsrOhVGqXTSuGDBkHdhzWfwKPAhREAFHbu4xnBo2z4END_45qGd-Avq56OAlAacvZpw3VkmM5SiW9ksFBe2206uJSwX9LJf477NZioLMY0Dkbde2yE1xkJ6UXZWsqEd9_P7358qqoO5yZRGV0pS85WPLn8KFxCcbk_NK5SEN58iP-rxfzlra8oERnxVDj13x0yzquFy1wrBtv7Qa2wygQlR4IzQJHnGPDc" 
              alt="Reel 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-3 aspect-square overflow-hidden rounded-2xl soft-shadow group"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHb_YfnfKf9SqRN1FtNpU52mRlF9HKN178rolC8XzF76nGbkxGiEdSni9VyCICvgwD9kyCsWTFoyM5leyGdLCOrITuSddnnFa9JmA8-pILzSckZ7JBr-qLvj-LxyixNAYabSR1hm12vTrBaeEqwQ2A2uKramrMELD_LSVIWKb8eGeC2yshOaqk9poBV9FA2QVakUcsnTJZS9NpsyBC4GRExe5RgB9I3zqQlyJeGawccx2G4ZhNY6QAY6lQm5aPJZF_WAgKfYKf37JB" 
              alt="Reel 3" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const items = [
    {
      name: "Classic Belgian",
      price: "₹199",
      desc: "Traditional golden waffle served with locally sourced honey & whipped butter.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO6yW7Mrn89ZZFgWUBQrrM6EGCJjmr-MIJlNm6HVoaJucGlhVDy54sb6qnmpkukRRDlkJ9b1geUwKZwRP7z6UUvRV4VsRYnMAwo4EfdH73BeltroRuSX6NW8Xsso9rchbNwM65yFFp0goubilX_9ePMawftQ78oCq6CnXWedoanSnQ7MrAoeRfgbeJ94pWTA9u-fBMUUJ6U_x2knqrPEGHoWOCO7K_tcnWK9NTVFdieCIEsGmyijc8BOTxWc268Vfrn7QLm23tjE8e"
    },
    {
      name: "Berry Bliss",
      price: "₹229",
      desc: "A curated burst of seasonal strawberries and blueberries on a crisp bed.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqNozRS2LTiQIpLrS7TACBmk3TZW01enZ1jswyJ8adO9eLtikxSae7jOsJI64xK9Q6SczQqthQUBuqbAIgjXWDSqpWjchYdiezoPePx59uDN4lIoIfF0XM60DgifC4NONge76lLuwEF_L3L0AMpjTXgsgktNLnx1jgoxKxQua-fgxvenYaw17MIEqb2_dRCzziLPL7BckXCRGa0pJbbBzTYZDMvRbvRvtWV8bntg7K1oAkpKeMeGU3JBQSTnf2za-llwzD09CQpsZ-",
      offset: true
    },
    {
      name: "Chocolate Lava",
      price: "₹249",
      desc: "Decadent double chocolate batter with a signature molten core.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChw6qB8iNk1hGgv2MoEl4ZVbxsgrnRoguD435r2CU9lQbYLD95_ORmf6rqzhlYXxQFFSn8Eixg29ZH3fBoviBVVKYHzKnkxbMDucNviqtZzxNPwvki6n5YK9mZU0h6WcTENPbbHZklBx6Oy8L4XntMvE8UKCVGMt3G4N1KM9G9RMSKBS1v6JJEDVvZN40FxgCZQJo5ea2Dcn9neJJTv7PNhaz7KIbxtcVKEGHBrDUvccgf57APRubjVamxOhH5NUhkV_U2fe7eMEy2"
    },
    {
      name: "Savory Cheese",
      price: "₹189",
      desc: "Infused with sharp cheddar and artisanal herbs for a sophisticated bite.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2dOR8j586y6_PU6g1vmZ76Ppj9KqyQHLA9ElfiOmcTueNSu7Itt_thjIPJwx-5pvLn_P8ChS1uY6XlC-KH-9keYz5JEH4K9rOgdIyt1Dpt5uyk4-7GWhi6NEgJYo6jGmdRhEJs6XwrY_3sCu3HtYFyKJ5LuOkyArnTfysaWN2Byt6Qu_lSFVQJfOHDtXvrNn6owSTz43p2V4mUAkQy8jThvSNmwQ-fvmCOryxFFSuDas6riF5KVTMOQ8pz6YE3kKJiV7SGQaTOcLq",
      offset: true
    }
  ];

  return (
    <section id="menu" className="py-32 bg-surface-container-low/50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-6">The Waffle Collection</h2>
          <div className="flex flex-wrap justify-center gap-10 mt-12 text-[11px] uppercase tracking-[0.3em] font-bold text-primary/40">
            <button className="text-primary border-b border-primary pb-2">All Creations</button>
            <button className="hover:text-primary transition-colors pb-2">Sweet Notes</button>
            <button className="hover:text-primary transition-colors pb-2">Savory Tales</button>
            <button className="hover:text-primary transition-colors pb-2">Vegan Choice</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group cursor-pointer ${item.offset ? "lg:translate-y-12" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-white mb-8 soft-shadow-sm group-hover:soft-shadow transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-baseline border-b border-primary/10 pb-4 mb-4">
                <h3 className="text-2xl font-headline font-medium text-primary">{item.name}</h3>
                <span className="text-sm font-body text-secondary font-bold">{item.price}</span>
              </div>
              <p className="text-sm font-body text-on-surface-variant/70 leading-relaxed mb-6">{item.desc}</p>
              <button className="editorial-link text-[11px] uppercase tracking-widest font-bold text-primary">Add to Curation</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square bg-white rounded-3xl soft-shadow p-4 relative overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4ak2pWWH_sN499ryEOWVCo8RnLA_EICZizd7xy_pmy4kVOhA4hf3OBgpgoRX1wiL-ubL8uZIx3Xvom4EFUVnDUiXWs4DIr7UutNEQ0z6IXKLI_QT3BOww17nDul2_TfQ0QJYx0pStjuNoDD9QQvn-SLKah7wBlMQVVZVuYfQGb8kuwWqddyNfbUI-T_CFniz8PtOnjvzZ40Cg-yARNXB2KbaMP-_23Ca5aLKiqNR-XxCzDRUctEQ3_beAc8oOgQfvm7r0pL6pULl" 
              alt="The Space" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/50 rounded-full blur-2xl -z-10"></div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-[12px] uppercase tracking-[0.5em] text-secondary font-bold mb-6 block">Our Essence</span>
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-10 leading-tight">Your Pastel Haven <br />in Gwalior</h2>
          <p className="text-xl font-headline italic text-on-surface-variant/80 mb-12 leading-relaxed border-l-2 border-primary-container pl-8">
            "Waflie is a pocket of quiet joy in Vinay Nagar. A place where every batch is a conversation, and every plate is a labor of love."
          </p>
          <div className="grid grid-cols-3 gap-12 pt-8 border-t border-primary/10">
            <div>
              <div className="text-3xl font-headline font-bold text-primary mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Artisanal</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-primary mb-1">Daily</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Fresh Baked</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-primary mb-1">#1</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Destination</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-headline font-bold text-primary mb-8">Let's Connect</h2>
            <p className="text-on-surface-variant/70 mb-12 max-w-sm">Planning an event or just want to say hi? Reach out to us through the form or our socials.</p>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <input type="text" id="name" placeholder="Full Name" className="w-full bg-transparent border-0 border-b border-primary/10 py-4 focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent" />
                <label htmlFor="name" className="absolute left-0 top-4 text-xs uppercase tracking-widest font-bold text-primary/40 transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">Full Name</label>
              </div>
              <div className="group relative">
                <input type="email" id="email" placeholder="Email Address" className="w-full bg-transparent border-0 border-b border-primary/10 py-4 focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent" />
                <label htmlFor="email" className="absolute left-0 top-4 text-xs uppercase tracking-widest font-bold text-primary/40 transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">Email Address</label>
              </div>
              <div className="group relative">
                <textarea id="message" placeholder="Your Message" rows={1} className="w-full bg-transparent border-0 border-b border-primary/10 py-4 focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent resize-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-xs uppercase tracking-widest font-bold text-primary/40 transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">Message</label>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-xl text-[12px] uppercase tracking-[0.3em] font-bold soft-shadow hover:bg-secondary transition-all">
                Send Inquiry
              </button>
            </form>
            <div className="mt-20 space-y-6">
              <div className="flex items-center gap-6 text-[13px] font-medium text-primary">
                <Clock size={20} />
                <span className="tracking-wide">Mon-Sun: 10:00 AM — 10:00 PM</span>
              </div>
              <div className="flex items-center gap-6 text-[13px] font-medium text-primary">
                <MapPin size={20} />
                <span className="tracking-wide">Vinay Nagar, Gwalior, MP</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[600px] bg-surface-container-low rounded-[2rem] overflow-hidden soft-shadow group">
            <div className="h-full w-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrUXhfHz7B6kwAI2Xembczl0p3CH69KLf_-tfr8FUnhhSlIEWqQEKHz_izz80DP9XIcsrX38hnG7P7Tr2iuWZ8YX_K2KgJhVkVTfnu1s89H2ceRCGebBQ-Hl6ZbRG3viIW2VJuO6SDieDQ3psKw9c5Yx4SlRw_uANMa_wikNZw8jZgx9I8uYoW41yEuoctTGUWfHCJhGlGbbb7QdI52RhxediRsMZY1ZJtLQmkL4uoINYln7Xa1e02YDb1Q1nfruT01_ZDQZJXbGiU" 
                alt="Map Location" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-primary rounded-full animate-ping absolute"></div>
                <div className="w-6 h-6 bg-primary rounded-full relative border-4 border-white soft-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialPlatformsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-surface-container-low/40">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.35em] text-secondary font-bold mb-4 block">
            Find Waflie Everywhere
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Follow, Order, and Stay in the Loop
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target={platform.href.startsWith("http") ? "_blank" : undefined}
              rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-6 border border-primary/10 soft-shadow-sm hover:soft-shadow transition-all duration-500"
              style={{
                boxShadow: `0 12px 32px -18px ${hexToRgba(platform.brandColor, 0.5)}`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${hexToRgba(platform.accent, 0.16)}, ${hexToRgba(platform.brandColor, 0.2)})`,
                  color: platform.brandColor,
                }}
              >
                <platform.Icon size={28} />
              </div>

              <h3 className="text-2xl font-headline font-semibold text-primary mb-2">
                {platform.name}
              </h3>
              <p className="text-sm font-body text-on-surface-variant/75 mb-5">
                {platform.handle}
              </p>

              <div className="text-[11px] uppercase tracking-[0.25em] font-bold"
                style={{ color: platform.brandColor }}
              >
                {platform.href === "#" ? "Link Coming Soon" : "Visit Now"}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary/5 pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 pb-20 border-b border-primary/10">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-headline font-bold text-primary mb-8">Waflie</div>
            <p className="text-on-surface-variant/70 max-w-sm leading-relaxed text-sm">
              Refined tastes, aesthetic moments, and the finest waffles in Gwalior. A boutique cafe experience designed for the soul.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target={platform.href.startsWith("http") ? "_blank" : undefined}
                  rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
                  className="editorial-link w-fit inline-flex items-center gap-2"
                >
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md"
                    style={{
                      color: platform.brandColor,
                      backgroundColor: hexToRgba(platform.brandColor, 0.14),
                    }}
                  >
                    <platform.Icon size={14} />
                  </span>
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Legal</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" className="editorial-link w-fit">Privacy Policy</a>
              <a href="#" className="editorial-link w-fit">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-primary/40">
          <span>© 2024 Waflie Cafe. All Rights Reserved.</span>
          <span>Open Mon-Sun — 10:00 to 22:00</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="grain-texture min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Menu />
        <About />
        <Contact />
        <SocialPlatformsSection />
      </main>
      <Footer />
    </div>
  );
}
