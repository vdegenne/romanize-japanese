function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bulkReplace = function(str, regex, map) {
    if (arguments.length === 2) {
        map = regex;
        regex = new RegExp(Object.keys(map).join("|"), "ig");
    }

    return str.replace(regex, function(all) {
        if (all in map) {
            return map[all];
        }

        return all;
    });
};

var hepburn = createCommonjsModule(function (module, exports) {



var hiraganaMonographs = {
  "あ": "A", "い": "I", "う": "U", "え": "E", "お": "O",
  "か": "KA", "き": "KI", "く": "KU", "け": "KE", "こ": "KO",
  "さ": "SA", "し": "SHI", "す": "SU", "せ": "SE", "そ": "SO",
  "た": "TA", "ち": "CHI", "つ": "TSU", "て": "TE", "と": "TO",
  "な": "NA", "に": "NI", "ぬ": "NU", "ね": "NE", "の": "NO",
  "は": "HA", "ひ": "HI", "ふ": "FU", "へ": "HE", "ほ": "HO",
  "ま": "MA", "み": "MI", "む": "MU", "め": "ME", "も": "MO",
  "や": "YA", "ゆ": "YU", "よ": "YO",
  "ら": "RA", "り": "RI", "る": "RU", "れ": "RE", "ろ": "RO",
  "わ": "WA", "ゐ": "WI", "ゑ": "WE", "を": "WO", "ん": "N'",
  "が": "GA", "ぎ": "GI", "ぐ": "GU", "げ": "GE", "ご": "GO",
  "ざ": "ZA", "じ": "JI", "ず": "ZU", "ぜ": "ZE", "ぞ": "ZO",
  "だ": "DA", "ぢ": "DJI", "づ": "DZU", "で": "DE", "ど": "DO",
  "ば": "BA", "び": "BI", "ぶ": "BU", "べ": "BE", "ぼ": "BO",
  "ぱ": "PA", "ぴ": "PI", "ぷ": "PU", "ぺ": "PE", "ぽ": "PO"
};

var hiraganaDigraphs = {
  "きゃ": "KYA", "きゅ": "KYU", "きょ": "KYO",
  "しゃ": "SHA", "しゅ": "SHU", "しょ": "SHO",
  "ちゃ": "CHA", "ちゅ": "CHU", "ちょ": "CHO",
  "にゃ": "NYA", "にゅ": "NYU", "にょ": "NYO",
  "ひゃ": "HYA", "ひゅ": "HYU", "ひょ": "HYO",
  "みゃ": "MYA", "みゅ": "MYU", "みょ": "MYO",
  "りゃ": "RYA", "りゅ": "RYU", "りょ": "RYO",
  "ぎゃ": "GYA", "ぎゅ": "GYU", "ぎょ": "GYO",
  "じゃ": "JA", "じゅ": "JU", "じょ": "JO",
  "びゃ": "BYA", "びゅ": "BYU", "びょ": "BYO",
  "ぴゃ": "PYA", "ぴゅ": "PYU", "ぴょ": "PYO"
};

var katakanaMonographs = {
  "ア": "A", "イ": "I", "ウ": "U", "エ": "E", "オ": "O",
  "カ": "KA", "キ": "KI", "ク": "KU", "ケ": "KE", "コ": "KO",
  "サ": "SA", "シ": "SHI", "ス": "SU", "セ": "SE", "ソ": "SO",
  "タ": "TA", "チ": "CHI", "ツ": "TSU", "テ": "TE", "ト": "TO",
  "ナ": "NA", "ニ": "NI", "ヌ": "NU", "ネ": "NE", "ノ": "NO",
  "ハ": "HA", "ヒ": "HI", "フ": "FU", "ヘ": "HE", "ホ": "HO",
  "マ": "MA", "ミ": "MI", "ム": "MU", "メ": "ME", "モ": "MO",
  "ヤ": "YA", "ユ": "YU", "ヨ": "YO",
  "ラ": "RA", "リ": "RI", "ル": "RU", "レ": "RE", "ロ": "RO",
  "ワ": "WA", "ヰ": "WI", "ヱ": "WE",  "ヲ": "WO", "ン": "N",
  "ガ": "GA", "ギ": "GI", "グ": "GU", "ゲ": "GE", "ゴ": "GO",
  "ザ": "ZA", "ジ": "JI", "ズ": "ZU", "ゼ": "ZE", "ゾ": "ZO",
  "ダ": "DA", "ヂ": "DJI", "ヅ": "DZU", "デ": "DE", "ド": "DO",
  "バ": "BA", "ビ": "BI", "ブ": "BU", "ベ": "BE", "ボ": "BO",
  "パ": "PA", "ピ": "PI", "プ": "PU", "ペ": "PE", "ポ": "PO"
};

var katakanaDigraphs = {
  "アー": "Ā", "イー": "Ī", "ウー": "Ū", "エー": "Ē", "オー": "Ō",
  "カー": "KĀ", "キー": "KĪ", "クー": "KŪ", "ケー": "KĒ", "コー": "KŌ",
  "サー": "SĀ", "シー": "SHĪ", "スー": "SŪ", "セー": "SĒ", "ソー": "SŌ",
  "ター": "TĀ", "チー": "CHĪ", "ツー": "TSŪ", "テー": "TĒ", "トー": "TŌ",
  "ナー": "NĀ", "ニー": "NĪ", "ヌー": "NŪ", "ネー": "NĒ", "ノー": "NŌ",
  "ハー": "HĀ", "ヒー": "HĪ", "フー": "FŪ", "ヘー": "HĒ", "ホー": "HŌ",
  "マー": "MĀ", "ミー": "MĪ", "ムー": "MŪ", "メー": "MĒ", "モー": "MŌ",
  "ヤー": "YĀ", "ユー": "YŪ", "ヨー": "YŌ",
  "ラー": "RĀ", "リー": "RĪ", "ルー": "RŪ", "レー": "RĒ", "ロー": "RŌ",
  "ワー": "WĀ", "ヰー": "WĪ", "ヱー": "WĒ",  "ヲー": "WŌ", "ンー": "N",
  "ガー": "GĀ", "ギー": "GĪ", "グー": "GŪ", "ゲー": "GĒ", "ゴー": "GŌ",
  "ザー": "ZĀ", "ジー": "JĪ", "ズー": "ZŪ", "ゼー": "ZĒ", "ゾー": "ZŌ",
  "ダー": "DĀ", "ヂー": "DJĪ", "ヅー": "DZŪ", "デー": "DĒ", "ドー": "DŌ",
  "バー": "BĀ", "ビー": "BĪ", "ブー": "BŪ", "ベー": "BĒ", "ボー": "BŌ",
  "パー": "PĀ", "ピー": "PĪ", "プー": "PŪ", "ペー": "PĒ", "ポー": "PŌ",
  "キャ": "KYA", "キュ": "KYU", "キョ": "KYO",
  "シャ": "SHA", "シュ": "SHU", "ショ": "SHO",
  "チャ": "CHA", "チュ": "CHU", "チョ": "CHO",
  "ニャ": "NYA", "ニュ": "NYU", "ニョ": "NYO",
  "ヒャ": "HYA", "ヒュ": "HYU", "ヒョ": "HYO",
  "ミャ": "MYA", "ミュ": "MYU", "ミョ": "MYO",
  "リャ": "RYA", "リュ": "RYU", "リョ": "RYO",
  "ギャ": "GYA", "ギュ": "GYU", "ギョ": "GYO",
  "ジャ": "JA", "ジュ": "JU", "ジョ": "JO",
  "ビャ": "BYA", "ビュ": "BYU", "ビョ": "BYO",
  "ピャ": "PYA", "ピュ": "PYU", "ピョ": "PYO",
  "クヮ": "KWA", "クィ": "KWI", "クェ": "KWE", "クォ": "KWO",
  "グヮ": "GWA", "スィ": "SI",  "シェ": "SHE", "ズィ": "ZI", "ジェ": "JE",
  "ティ": "TI",  "トゥ": "TU",  "テュ": "TYU", "チェ": "CHE",
  "ツァ": "TSA", "ツィ": "TSI", "ツェ": "TSE", "ツォ": "TSO",
  "ディ": "DI" , "ドゥ": "DU",  "デュ": "DYU", "ホゥ": "HU",
  "ファ": "FA",  "フィ": "FI",  "フェ": "FE",  "フォ": "FO", "フュ": "FYU",
  "イィ": "YI",  "イェ": "YE",
  "ウィ": "WI",  "ウゥ": "WU", 	"ウェ": "WE",  "ウォ": "WO",
  "ヴァ": "VA",  "ヴィ": "VI",    "ヴ": "VU",  "ヴェ": "VE", "ヴォ": "VO", "ヴュ": "VYU"
};

var katakanaTrigraphs = {
  "キャー": "KYĀ", "キュー": "KYŪ", "キョー": "KYŌ",
  "シャー": "SHĀ", "シュー": "SHŪ", "ショー": "SHŌ",
  "チャー": "CHĀ", "チュー": "CHŪ", "チョー": "CHŌ",
  "ニャー": "NYĀ", "ニュー": "NYŪ", "ニョー": "NYŌ",
  "ヒャー": "HYĀ", "ヒュー": "HYŪ", "ヒョー": "HYŌ",
  "ミャー": "MYĀ", "ミュー": "MYŪ", "ミョー": "MYŌ",
  "リャー": "RYĀ", "リュー": "RYŪ", "リョー": "RYŌ",
  "ギャー": "GYĀ", "ギュー": "GYŪ", "ギョー": "GYŌ",
  "ジャー": "JĀ", "ジュー": "JŪ", "ジョー": "JŌ",
  "ビャー": "BYĀ", "ビュー": "BYŪ", "ビョー": "BYŌ",
  "ピャー": "PYĀ", "ピュー": "PYŪ", "ピョー": "PYŌ"
};

// Used to convert old Nihon-Shiki style romaji into the modern Hepburn form.
// Source: http://nayuki.eigenstate.org/page/variations-on-japanese-romanization
var nihonShiki = {
    "SI": "SHI",
    "ZI": "JI",
    "TI": "CHI",
    "DI": "JI",
    "TU": "TSU",
    "DU": "ZU",
    "SHU": "SHU", // Prevent HU from accidentally converting
    "CHU": "CHU",
    "HU": "FU",
    "CYA": "CHA",
    "CYO": "CHO",
    "CYU": "CHU",
    "SYA": "SHA",
    "SYU": "SHU",
    "SYO": "SHO",
    "ZYA": "JA",
    "ZYU": "JU",
    "ZYO": "JO",
    "TYA": "CHA",
    "TYU": "CHU",
    "TYO": "CHO",
    "DYA": "JA",
    "DYU": "JU",
    "DYO": "JO"
};

// For use with toHiragana
var hiraganaMap = {};

Object.keys(hiraganaMonographs).forEach(function(key) {
  var value = hiraganaMonographs[key];
  if (!(value in hiraganaMap)) {
    hiraganaMap[value] = key;
  }
});

Object.keys(hiraganaDigraphs).forEach(function(key) {
  var value = hiraganaDigraphs[key];
  if (!(value in hiraganaMap)) {
    hiraganaMap[value] = key;
  }
});

var hiraganaRegex = new RegExp(Object.keys(hiraganaMap).sort(function(a, b) {
  return b.length - a.length;
}).join("|"), "g");

// For use with toKatakana
var katakanaMap = {};

Object.keys(katakanaMonographs).forEach(function(key) {
  var value = katakanaMonographs[key];
  if (!(value in katakanaMap)) {
    katakanaMap[value] = key;
  }
});

Object.keys(katakanaDigraphs).forEach(function(key) {
  var value = katakanaDigraphs[key];
  if (!(value in katakanaMap)) {
    katakanaMap[value] = key;
  }
});

Object.keys(katakanaTrigraphs).forEach(function(key) {
  var value = katakanaTrigraphs[key];
  if (!(value in katakanaMap)) {
    katakanaMap[value] = key;
  }
});

var katakanaRegex = new RegExp(Object.keys(katakanaMap).sort(function(a, b) {
  return b.length - a.length;
}).join("|"), "g");

// API

exports.fromKana = function(str) {
  // Initial transliteration
  str = bulkReplace(str, hiraganaDigraphs);
  str = bulkReplace(str, katakanaDigraphs);
  str = bulkReplace(str, hiraganaMonographs);
  str = bulkReplace(str, katakanaMonographs);

  // Correct use of sokuon
  str = str.replace(/っC/g, "TC").replace(/っ(.)/g, "$1$1");
  str = str.replace(/ッC/g, "TC").replace(/ッ(.)/g, "$1$1");

  // Correct usage of N' (M' is a common mistake)
  str = str.replace(/[NM]'([^YAEIOU]|$)/g, "N$1");

  // Correct use of choonpu
  str = str.replace(/Aー/g, "Ā");
  str = str.replace(/Iー/g, "Ī");
  str = str.replace(/Uー/g, "Ū");
  str = str.replace(/Eー/g, "Ē");
  str = str.replace(/Oー/g, "Ō");

  return str;
};

exports.toHiragana = function(str) {
  // All conversion is done in upper-case
  str = str.toUpperCase();

  // Correct use of sokuon
  str = str.replace(/TC/g, "っC");
  str = str.replace(/([^AEIOUN])\1/g, "っ$1");

  // Transliteration
  str = bulkReplace(str, hiraganaRegex, hiraganaMap);

  // Fix any remaining N/M usage (that isn't a N' usage)
  str = str.replace(/N|M/g, "ん");

  return str;
};

exports.toKatakana = function(str) {
  // All conversion is done in upper-case
  str = str.toUpperCase();

  // Correct use of sokuon
  str = str.replace(/TC/g, "ッC");
  str = str.replace(/([^AEIOUN])\1/g, "ッ$1");

  // Transliteration
  str = bulkReplace(str, katakanaRegex, katakanaMap);

  // Fix any remaining N/M usage (that isn't a N' usage)
  str = str.replace(/N|M/g, "ン");

  return str;
};

exports.cleanRomaji = function(str) {
  // Follows many of the suggestions from:
  // http://nayuki.eigenstate.org/page/variations-on-japanese-romanization

  // All conversion is done in upper-case
  str = str.toUpperCase();

  // Should be using N instead of M
  str = str.replace(/(\w)M([^AEIOUY]|$)/g, "$1N$2");

  // Convert the NN form into the more common N'
  str = str.replace(/NN/g, "N'");

  // Convert usage of OU into the more common OO
  // Handle cases like Toukyou
  str = str.replace(/OU/g, "OO");

  // Fix antiquated usage of OH to mean OO
  // (handle ambiguous cases like 'Kohusai' vs. 'Tohkyoh')
  str = str.replace(/OH([^AIEO]|$)/g, "OO$1");

  // Replace old Nihon-shiki usage with modern Hepburn form
  str = bulkReplace(str, nihonShiki);

  return str;
};

exports.containsHiragana = function(str) {
  return new RegExp(Object.keys(hiraganaMonographs).join('|')).test(str);
};

exports.containsKatakana = function(str) {
  return new RegExp(Object.keys(katakanaMonographs).join('|')).test(str);
};

exports.containsKana = function(str){
  return (exports.containsHiragana(str) || exports.containsKatakana(str));
};

exports.containsKanji = function(str){
  return new RegExp(/[\u4e00-\u9fcf\uf900-\ufaff\u3400-\u4dbf]/).test(str);
};
});
var hepburn_1 = hepburn.fromKana;
var hepburn_2 = hepburn.toHiragana;
var hepburn_3 = hepburn.toKatakana;
var hepburn_4 = hepburn.cleanRomaji;
var hepburn_5 = hepburn.containsHiragana;
var hepburn_6 = hepburn.containsKatakana;
var hepburn_7 = hepburn.containsKana;
var hepburn_8 = hepburn.containsKanji;

export default hepburn;
export { hepburn_4 as cleanRomaji, hepburn_5 as containsHiragana, hepburn_7 as containsKana, hepburn_8 as containsKanji, hepburn_6 as containsKatakana, hepburn_1 as fromKana, hepburn_2 as toHiragana, hepburn_3 as toKatakana };
