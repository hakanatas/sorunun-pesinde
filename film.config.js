/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "sorunun-pesinde",
    "title": "Sorunun Peşinde",
    "titleEn": "Chasing the Question",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.2",
    "outcome": "Tablolama programlarının kullanımına yönelik problemleri belirleyebilme",
    "outcomeEn": "Identifying problems suited to spreadsheet programs",
    "duration": 130.6,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 17.4,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 17.4,
      "t1": 41.3,
      "name": "Tabloya uygun mu?",
      "en": "Does it suit a table?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 41.3,
      "t1": 70.3,
      "name": "İyi bir soru",
      "en": "A good question",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 70.3,
      "t1": 92.9,
      "name": "Sorularımızı yazalım",
      "en": "Writing our questions",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 92.9,
      "t1": 115,
      "name": "Veriye dayalı mı?",
      "en": "Data-driven?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 115,
      "t1": 130.6,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
