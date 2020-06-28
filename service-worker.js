/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "533fa06d7ec82d586b4c090b08cd2b50"
  },
  {
    "url": "about.html",
    "revision": "f93657e5b88ef6ec232927f8bc6acd02"
  },
  {
    "url": "assets/css/0.styles.81669f21.css",
    "revision": "15acc49507123d862b0906e169c772b9"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/szmc-system-map-2020.baa0800d.png",
    "revision": "baa0800d66d21cad0c6185f5c196a35c"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.a68fd445.js",
    "revision": "85fd06fe7e5e82568b658f9c0246f313"
  },
  {
    "url": "assets/js/11.a27e48d3.js",
    "revision": "c08c1a8075bc95c3f8ff8b8dcce2a25f"
  },
  {
    "url": "assets/js/12.d4c64d0a.js",
    "revision": "1d860d90ef0caf783f5e8e76dadeda38"
  },
  {
    "url": "assets/js/13.fa9507cb.js",
    "revision": "41f8343387e23a076243e050aac3462a"
  },
  {
    "url": "assets/js/14.b32eaf75.js",
    "revision": "b3c9f56365da9ff4976cf73785aed229"
  },
  {
    "url": "assets/js/15.acc50fa4.js",
    "revision": "2bc661d3872d660974c7bb0e45cfd993"
  },
  {
    "url": "assets/js/16.9c82a164.js",
    "revision": "c2aa6b5637fae2eaab84dbeb21a7eaf6"
  },
  {
    "url": "assets/js/17.916098e5.js",
    "revision": "009cb87173657bb8e152396fa0ae34ea"
  },
  {
    "url": "assets/js/18.72475361.js",
    "revision": "5838a177990ffb9b0358f688699b16a8"
  },
  {
    "url": "assets/js/19.e95af177.js",
    "revision": "ef7d571ff6cdaa43c0a2bfc05992f779"
  },
  {
    "url": "assets/js/2.01cf4450.js",
    "revision": "dcf4892cfb35fdfc4d3fe4a5ff4a4d80"
  },
  {
    "url": "assets/js/20.62c70e3e.js",
    "revision": "a9b1ef0fc66883ffb7af9239a0e20f54"
  },
  {
    "url": "assets/js/21.02edff34.js",
    "revision": "55cfccec68dfb5b78997e8f1097cc9f6"
  },
  {
    "url": "assets/js/22.c8532f67.js",
    "revision": "01f3f81ea36caa8611031506832702b9"
  },
  {
    "url": "assets/js/23.ebb51d99.js",
    "revision": "6588b094629ae876758f4089dc99bdae"
  },
  {
    "url": "assets/js/24.d79167f2.js",
    "revision": "c8f7ab051ed815cbe614c6a6139a7fc3"
  },
  {
    "url": "assets/js/25.0603cd8d.js",
    "revision": "d42a21ab2e1891dbb427a6ba3b112add"
  },
  {
    "url": "assets/js/26.107b5f64.js",
    "revision": "eeba32c427f7713c959030766c23d2e2"
  },
  {
    "url": "assets/js/27.c7720cb6.js",
    "revision": "37d576736a85111213dd9069e2a229dd"
  },
  {
    "url": "assets/js/28.8fe0fbe3.js",
    "revision": "57fbd70b3c99f359f9a6b3a2004cb263"
  },
  {
    "url": "assets/js/29.2d31720f.js",
    "revision": "afd63cfc364f4fec444e755f2492cd5a"
  },
  {
    "url": "assets/js/3.7c8b6fc0.js",
    "revision": "34c7d1f5764eb674eb74353938b3164f"
  },
  {
    "url": "assets/js/30.781708b7.js",
    "revision": "e3a2796d2f315ab0eaaa64938bab6619"
  },
  {
    "url": "assets/js/31.24f33dd8.js",
    "revision": "9450faab6830f29ef497e0c9e3266326"
  },
  {
    "url": "assets/js/32.accf13c0.js",
    "revision": "bc6a8e2e21b6be428dc909b1e9961a3b"
  },
  {
    "url": "assets/js/33.0aa2e969.js",
    "revision": "8e6a50f2299f961f2d05084fcd4123e0"
  },
  {
    "url": "assets/js/34.d0465e54.js",
    "revision": "ed0b31f094db12f11c6d43243bcce784"
  },
  {
    "url": "assets/js/4.37bb0957.js",
    "revision": "709b51226944b66d6439ddfb3f6cd923"
  },
  {
    "url": "assets/js/5.a16c0cdb.js",
    "revision": "a645e5f0a002db5ecc4c2601723a92a2"
  },
  {
    "url": "assets/js/6.5d80fa10.js",
    "revision": "88a3b74c1d7acde4af585247645d2d99"
  },
  {
    "url": "assets/js/7.1122e0c2.js",
    "revision": "16e4a839747406450e80b71a6b225e96"
  },
  {
    "url": "assets/js/8.a77127cc.js",
    "revision": "408727cd21a4cd3c8b3df0fa84fe62e2"
  },
  {
    "url": "assets/js/9.8dde0b5c.js",
    "revision": "c0f6b5aa84aa1f50b28f320d1c5e29a5"
  },
  {
    "url": "assets/js/app.72caec48.js",
    "revision": "6d80f039f52e67d9faa0df3bb68270a0"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "28e3460bc681af2cb25b3fb1fc6a8ce0"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "b74b2624b6f46d6a6e20998e760bd9af"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "384ad241026a0cf005d0f1e47bfb068f"
  },
  {
    "url": "calendar/index.html",
    "revision": "71e3e9b9e4a78fedbabfec1ae73a277d"
  },
  {
    "url": "catering/index.html",
    "revision": "5a05b8c46e3ed5f8a274457dd78d9124"
  },
  {
    "url": "contact/index.html",
    "revision": "9d2f284f29382405612784bb0d4c91cd"
  },
  {
    "url": "facility/index.html",
    "revision": "398ff0ff7ea99043cac120ccdc5e2894"
  },
  {
    "url": "facility/panolens.html",
    "revision": "a4276a4dd795f422ed2c06224e9665de"
  },
  {
    "url": "index.html",
    "revision": "6ceed6e314a5c3943cd4586b004b0535"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "64cdd11e59f40828c8acbe223591891b"
  },
  {
    "url": "network/apply-for-vpn/index.html",
    "revision": "8ca67c469dcbffe0108fe472b83612bc"
  },
  {
    "url": "network/index.html",
    "revision": "9c6322940c8c690171ab9dc31dfdb0a0"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "dcfd6a8f1b3346725dad56f1a51eab86"
  },
  {
    "url": "service/index.html",
    "revision": "e7071d0cf9b80d27a06a847257351b94"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "784486b45d722633db13ed4d52e73b35"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "6226d0809c8717099be445730a7b0a8a"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "504fc9ecae98b982934ed75c067b93a8"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "7c154d05fa9fdb1977c25d00c3e269b6"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "c0e75fa8010f701d955b7a0d3748de39"
  },
  {
    "url": "site-help/index.html",
    "revision": "b89ce9a08a0b0b948bfd3ec9d5544e45"
  },
  {
    "url": "study-and-organization/book-list-by-prof-yuan/2018/index.html",
    "revision": "bec5601fab0a0a10338c74e1da7eee09"
  },
  {
    "url": "study-and-organization/index.html",
    "revision": "04de5c48091f7829884d8cb327e2852b"
  },
  {
    "url": "study-and-organization/registered-organization.html",
    "revision": "77fe8895b328644ee31bca0ae5d5d866"
  },
  {
    "url": "surroundings/index.html",
    "revision": "061998b1eb4630c804a4c6aaa2ab9bce"
  },
  {
    "url": "transport/holiday.html",
    "revision": "acefe68ac48252d2497650210b271e9e"
  },
  {
    "url": "transport/index.html",
    "revision": "df2dc2f9b9bfd7d550ae9fb0599faf35"
  },
  {
    "url": "transport/workday.html",
    "revision": "af070316de0d91f59e2883f3a359b105"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
