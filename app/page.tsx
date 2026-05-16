"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

/* ================= OTC PRODUCTS ================= */

const products = [
  {
    title: "Vitamin & Supplement",
    desc: "Daily vitamins to maintain your immune system.",
    img: "/images/vitamin.jpg",
    tag: "Wellness",
  },
  {
    title: "Cold & Flu Medicine",
    desc: "Relief for cough, flu, and fever symptoms.",
    img: "/images/flu.jpg",
    tag: "Health",
  },
  {
    title: "Digestive Medicine",
    desc: "Medicine for stomach issues and digestion.",
    img: "/images/digestive.jpg",
    tag: "OTC",
  },
  {
    title: "Personal Care",
    desc: "Skincare, baby care, and hygiene essentials.",
    img: "/images/personalcare.jpg",
    tag: "Daily Care",
  },
];

const testimonials = [
  {
    name: "Alberta Honylia Novitasari",
    text: "produk yg dijual lengkap, muter kemana2 nyari obat terus dapet nya disini, harga nya murah juga. yg layanin juga baik dan informatif bgt makasih kakkk",
  },
  {
    name: "Camelia_ftr",
    text: "Luar biasa apotek Ikhsan Care, tempatnya strategis sehingga mudah ditemukan (khususnya yang cari apotek di sekitar Jati Padang), frontlinernya ramah dan informatif, obat-obatnya lengkap, semoga semakin sukses kedepannya✨️",
  },
  {
    name: "Hilal",
    text: "Apotek Super lengkap untuk area pasar minggu dan sekitar nya harga okee bangett dan pelayan nya gercep bangettt",
  },
  {
    name: "Pambudi Yudha",
    text: "Apotiknya lengkap, harganya murah, pelayanannya ramah. Dapat gratis tes gula darah dan cek tekanan darah juga. Mantap. Sukses terus apotik ikhsan care",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">

{/* NAVBAR */}
<header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">

    {/* LOGO */}
    <Link
      href="#home"
      className="flex items-center gap-3 group"
    >
      <img
        src="/images/logo.png"
        alt="Ikhsan Care Logo"
        className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 group-hover:text-green-700 transition">
        Ikhsan Care
      </span>
    </Link>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-green-600 text-3xl p-2 rounded-lg hover:bg-green-50 transition"
    >
      ☰
    </button>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex gap-6 items-center">
      <Link href="#home" className="hover:text-green-600 transition">Home</Link>
      <Link href="#services" className="hover:text-green-600 transition">Order</Link>
      <Link href="#eco" className="hover:text-green-600 transition">Eco Program</Link>
      <Link href="#review" className="hover:text-green-600 transition">Reviews</Link>
    </div>

  </nav>

  {/* MOBILE MENU */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t ${
      open ? "max-h-96 py-4" : "max-h-0 py-0"
    }`}
  >
    <div className="flex flex-col px-6 gap-3">

      <Link
        href="#home"
        onClick={() => setOpen(false)}
        className="py-2 rounded-lg hover:bg-green-50 px-3 transition"
      >
        Home
      </Link>

      <Link
        href="#services"
        onClick={() => setOpen(false)}
        className="py-2 rounded-lg hover:bg-green-50 px-3 transition"
      >
        Order
      </Link>

      <Link
        href="#eco"
        onClick={() => setOpen(false)}
        className="py-2 rounded-lg hover:bg-green-50 px-3 transition"
      >
        Eco Program
      </Link>

      <Link
        href="#review"
        onClick={() => setOpen(false)}
        className="py-2 rounded-lg hover:bg-green-50 px-3 transition"
      >
        Reviews
      </Link>

    </div>
  </div>
</header>

{/* HERO */}
<section
  id="home"
className="scroll-mt-28 relative pt-36 pb-32 min-h-[100vh] flex items-center bg-cover bg-center"  style={{ backgroundImage: "url('/images/apotek.jpg')" }}
>
  {/* overlay gelap + blur */}
  <div className="absolute inset-0 bg-green-900/60 backdrop-blur-sm"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

    {/* LEFT IMAGE + GLOW */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative flex justify-center"
    >

      {/* glow background */}
      <div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl"></div>

      {/* image */}
      <div className="relative z-10">
        <img
          src="/images/service.jpg"
          alt="Apotek"
          className="w-[450px] rounded-3xl shadow-2xl object-cover border border-white/20"
        />
      </div>

    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="md:pl-6 text-white"
    >
      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Apotek Terpercaya
      </span>

      <h1 className="text-5xl font-bold mt-4 leading-tight">
        Partner Kesehatan <br /> Keluarga Anda
      </h1>

      <p className="text-white/80 mt-4 max-w-lg leading-relaxed">
        Menyediakan obat, vitamin, produk perawatan pribadi,
        serta layanan kesehatan cepat untuk kebutuhan sehari-hari Anda.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href="https://mart.grab.com/id/id/merchant/apotek-ikhsan-care-powered-by-gdti-jati-padang/6-C63TJVE1AZNYMA"
          className="bg-white text-green-700 hover:bg-gray-100 transition px-6 py-3 rounded-xl shadow-md font-semibold"
        >
          Belanja Sekarang
        </a>

        <a
          href="https://wa.me/6285282709830"
          className="border border-white text-white hover:bg-white/10 transition px-6 py-3 rounded-xl"
        >
          WhatsApp Kami
        </a>
      </div>
    </motion.div>

  </div>
</section>
{/* ORDER CHANNEL */}
<section
  id="services"
  className="scroll-mt-19 py-20 bg-white text-center px-6"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
    Cara Mudah Pemesanan
  </h2>

  <p className="text-gray-600 max-w-2xl mx-auto mb-12">
    Pesan obat dan kebutuhan kesehatan dengan mudah melalui
    platform online atau kunjungi langsung Apotek Ikhsan Care.
  </p>

  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

    {/* GrabHealth */}
    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">

      <h3 className="font-bold text-xl text-green-700 mb-3">
        GrabHealth
      </h3>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Pesan obat dengan cepat dan praktis melalui GrabHealth.
      </p>

      <a
        href="https://mart.grab.com/id/id/merchant/apotek-ikhsan-care-powered-by-gdti-jati-padang/6-C63TJVE1AZNYMA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Pesan Sekarang
        </button>
      </a>
    </div>

    {/* Good Doctor */}
    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">

      <h3 className="font-bold text-xl text-green-700 mb-3">
        Good Doctor
      </h3>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Beli obat dan konsultasi kesehatan melalui aplikasi Good Doctor.
      </p>

      <a
        href="https://www.gooddoctor.co.id/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Buka Aplikasi
        </button>
      </a>
    </div>

    {/* WhatsApp */}
    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">

      <h3 className="font-bold text-xl text-green-700 mb-3">
        WhatsApp
      </h3>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Layanan pemesanan cepat melalui chat WhatsApp.
      </p>

      <a
        href="https://wa.me/6285282709830"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Chat Sekarang
        </button>
      </a>
    </div>

    {/* Offline Store */}
    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">

      <h3 className="font-bold text-xl text-green-700 mb-3">
        Kunjungi Toko
      </h3>

      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Datang langsung ke Apotek Ikhsan Care untuk layanan resep dan konsultasi.
      </p>

      <a
        href="https://maps.app.goo.gl/j6Kwg5j7mtXYbURS9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
          Kunjungi
        </button>
      </a>
    </div>

  </div>
</section>
    
{/* ECO SECTION */}
<section
  id="eco"
  className="scroll-mt-19 py-20 px-6 bg-gradient-to-br from-white via-green-50 to-green-100"
>
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <img
        src="/images/telobag.jpg"
        alt="Kemasan Ramah Lingkungan"
        className="w-64 rounded-[28px] shadow-xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="md:-ml-6">

      <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-medium">
        🌿 Eco Friendly
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-tight mt-5 mb-4">
        Apotek Peduli <br />
        Lingkungan
      </h2>

      <p className="text-green-700/80 leading-relaxed mb-6 max-w-md">
        Ikhsan Care menggunakan kantong singkong sebagai alternatif
        kemasan ramah lingkungan untuk membantu mengurangi sampah
        plastik.
      </p>

      {/* MINI CARD */}
      <div className="flex flex-wrap gap-3">

        <div className="bg-white border border-green-100 px-4 py-3 rounded-2xl text-sm font-medium text-green-700 shadow-sm hover:shadow-md transition">
          🌱 Ramah Lingkungan
        </div>

        <div className="bg-white border border-green-100 px-4 py-3 rounded-2xl text-sm font-medium text-green-700 shadow-sm hover:shadow-md transition">
          ♻ Kurangi Plastik
        </div>

        <div className="bg-white border border-green-100 px-4 py-3 rounded-2xl text-sm font-medium text-green-700 shadow-sm hover:shadow-md transition">
          💚 Better Future
        </div>

      </div>
    </div>

  </div>
</section>

  {/* TESTIMONIAL */}
<section
  id="review"
  className="scroll-mt-28 py-20 bg-white text-center px-4 sm:px-6"
>
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12"
  >
    Customer Reviews
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">

    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-green-50 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition text-left sm:text-center"
      >
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          "{t.text}"
        </p>

        <h4 className="mt-4 font-bold text-green-600 text-sm sm:text-base">
          {t.name}
        </h4>

        <div className="text-yellow-400 mt-2 tracking-wider text-sm sm:text-base">
          ★★★★★
        </div>
      </motion.div>
    ))}

  </div>
</section>

     
{/* FOOTER */}
<footer className="scroll-mt-19 relative overflow-hidden text-gray-500 pt-12 pb-6 bg-gradient-to-br from-green-50 via-white to-green-100">

  {/* 🌸 Decorative background shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>
    <div className="absolute top-20 right-0 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-40"></div>
    <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-green-300 rounded-full blur-3xl opacity-20"></div>
  </div>

  {/* 🌸 subtle floral pattern (icon feel) */}
  {/* <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="floral" width="120" height="120" patternUnits="userSpaceOnUse">
          <text x="10" y="30" fontSize="24">🌸</text>
          <text x="70" y="80" fontSize="20">🌷</text>
          <text x="40" y="110" fontSize="18">✨</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#floral)" />
    </svg>
  </div> */}

  {/* CONTENT */}
  <div className="relative container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

   {/* Info Kontak */}
<div className="space-y-2 text-sm leading-relaxed">
  <h3 className="text-xl font-bold text-green-600 mb-2">
    Apotek Ikhsan Care
  </h3>

  <p className="text-gray-600">
    Toko Offline
  </p>

  <div className="space-y-1 text-gray-600">
    <p>
      <span className="font-medium text-gray-800">Alamat:</span>{" "}
      PR8Q+J5H, Jl. Salihara, RT.1/RW.1, Jati Padang, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540
    </p>

    <p>
      <span className="font-medium text-gray-800">Kontak:</span>{" "}
      +62 852-8270-9830
    </p>

    <p>
      <span className="font-medium text-gray-800">Email:</span>{" "}
      apotekikhsancare@gmail.com
    </p>

    <p>
      <span className="font-medium text-gray-800">Instagram:</span>{" "}
      @apotekikhsancare
    </p>
  </div>
</div>

    {/* Map */}
    <div className="lg:col-span-2">
      <h3 className="text-lg font-semibold mb-2">
        📍 Find Us on Map
      </h3>

      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-xl border text-green-600">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.862291271947!2d106.8354221735553!3d-6.283443061501504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30046a1bd79%3A0xeb0a4dbdbbd3c244!2sApotek%20Ikhsan%20Care!5e1!3m2!1sid!2sid!4v1778909263391!5m2!1sid!2sid"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          title="TwinsArt Florist Location"
        ></iframe>
      </div>
    </div>

  </div>

  {/* Bottom text */}
  <p className="relative mt-8 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Apotek Ikhsan Care
  </p>
</footer>
    </div>
  );
}