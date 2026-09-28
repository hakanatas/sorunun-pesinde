/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Harçlığım ay sonuna yetmiyor!", en: "My pocket money runs out before the month ends!",
      note: "Karo'nun harçlığı her ay bitmeden tükeniyor. Parası nereye gidiyor? Bunu nasıl anlayabilir?" },
    { scene: 1, start: 8.4, end: 16.1, tr: "Doğru soruyu sorarsam cevabı verilerde bulurum", en: "If I ask the right question, the data will answer",
      note: "Bir problemi tablolama programıyla çözmek için önce doğru durumu ve doğru soruyu belirlemeliyiz." },
    { scene: 2, start: 18.9, end: 24.6, tr: "Hangi durumlar tabloya uygun?", en: "Which situations suit a spreadsheet?",
      note: "Tablolama programı, sayılarla ifade edilen ve zamanla biriken veriler için uygundur. Durumları gruplayalım." },
    { scene: 2, start: 25.4, end: 32.6, tr: "Harcama, kitap, egzersiz: sayılarla izlenir", en: "Spending, books, exercise: tracked with numbers",
      note: "Günlük harcamalar, sınıfın okuduğu kitaplar ve haftalık egzersiz süresi sayılarla izlenir. Tabloya çok uygun." },
    { scene: 2, start: 33.4, end: 39.9, tr: "Tek bir bilgi ya da yaratıcı iş için gerekmez", en: "Not needed for a single fact or creative work",
      note: "En sevdiğimiz renk tek bir bilgidir; şiir yazmak ise yaratıcı bir iştir. Bunlar için tablo gerekmez." },
    { scene: 3, start: 42.8, end: 48.4, tr: "Ölçülebilir: cevabı bir sayı olsun", en: "Measurable: the answer is a number",
      note: "İyi bir araştırma sorusunun cevabı sayılarla verilebilir: kaç tane, ne kadar, kaç dakika." },
    { scene: 3, start: 49.3, end: 54.9, tr: "Karşılaştırılabilir: en çok, en az", en: "Comparable: most, least",
      note: "İyi bir soru karşılaştırma yapmamızı sağlar: en çok, en az, hangisi daha fazla." },
    { scene: 3, start: 55.8, end: 61.4, tr: "Açık: ne ve ne zaman belli", en: "Clear: what and when are stated",
      note: "İyi bir soru açıktır. Neyi sorduğu ve hangi zamanı kapsadığı bellidir: bu hafta, bu ay gibi." },
    { scene: 3, start: 62.3, end: 69, tr: "Cevabı verilerde saklı olan soru", en: "A question whose answer hides in the data",
      note: "Böyle sorular toplam, karşılaştırma ve grafik gibi çıktılarla cevaplanabilir." },
    { scene: 4, start: 71.7, end: 77.4, tr: "Harcama: en çok neye para harcadım?", en: "Spending: what did I spend most on?",
      note: "Karo'nun sorusu: Bu ay en çok neye para harcadım? Bu soru harcama verileriyle cevaplanabilir." },
    { scene: 4, start: 78.2, end: 83.9, tr: "Kitap: hangi ay en çok okuduk?", en: "Books: which month did we read most?",
      note: "Sınıfın kitap takibi için: Hangi ay en çok kitap okuduk?" },
    { scene: 4, start: 84.7, end: 91.5, tr: "Egzersiz: hafta içi mi, hafta sonu mu?", en: "Exercise: weekdays or weekends?",
      note: "Egzersiz çizelgesi için: Hafta içi mi hafta sonu mu daha çok spor yaptım?" },
    { scene: 5, start: 94.3, end: 100, tr: "\"Harçlığım neden bitiyor?\"", en: "\"Why does my money run out?\"",
      note: "\"Harçlığım neden bitiyor?\" sorusu çok genel. Hangi veriye bakacağımız belli değil. Zayıf bir soru." },
    { scene: 5, start: 100.8, end: 107.1, tr: "\"Bu hafta atıştırmalığa kaç lira harcadım?\"", en: "\"How much did I spend on snacks this week?\"",
      note: "Bu soru ölçülebilir, zamanı belli ve cevabı bir sayıdır. Uygun bir araştırma sorusu." },
    { scene: 5, start: 108, end: 113.7, tr: "\"Kitap okumak güzel mi?\"", en: "\"Is reading nice?\"",
      note: "\"Kitap okumak güzel mi?\" bir görüş sorusudur; tabloyla cevaplanmaz. Zayıf." },
    { scene: 6, start: 116.4, end: 122.7, tr: "Aklında kalsın: iyi soru, iyi cevap getirir", en: "Remember: a good question brings a good answer",
      note: "Aklında kalsın: tablolama programıyla çözülecek bir durumu seç ve veriyle cevaplanabilecek sorular yaz." },
    { scene: 6, start: 123.5, end: 129.3, tr: "Şimdi sıra veri toplamada!", en: "Next up: collecting data!",
      note: "Sorumuz hazır. Şimdi sıra verileri toplamaya geldi!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
