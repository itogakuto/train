'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "07abb2ed34b38ae6dbf284847dcf2c67",
"version.json": "51515c9ed4d94f6ddb10608d83ee52c9",
"index.html": "ce4f7c3abb9c62236f8582cca7f3d248",
"/": "ce4f7c3abb9c62236f8582cca7f3d248",
"main.dart.js": "fc8aa44b932273a2734a28fecd3b33e5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1681fed628b68e5d5e8e8029eef56448",
".git/config": "884c1bc526793450258ab2a511e36631",
".git/objects/0d/5a42512cfaa616c47fbb2df7217df922a98cd2": "52fd4c132f1fd63a385494d946ec8d77",
".git/objects/0c/d229388d066ba9710039b220b9b7e2177ea41b": "9a01d0489e5aaf6676208c1a1abc4394",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/50/502263308db3ce35b9f74fb788e23de90df1d8": "1fe648bde63eade9cc29c9b58ae0f0e9",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/e0ee3dee1ca42a159c8d6673a5e88fd5d12ec5": "d31b730e6a9669978ae3f71cc16cb06d",
".git/objects/57/83596da5bc06de884a222567a7d39da3ab8e04": "9f6a0440196d0510fd27a42f23cf6897",
".git/objects/3b/49f93ca07b37ba65a4a6fd172fecb7858d69d9": "015592faa85dd790979dd0fdeae9153f",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/4b4fabc8c1db9fc263464bd243c46045e2b70f": "b63776dd934f4886e55bf79a868f5ed8",
".git/objects/0b/db6dcd33f463d7c63dbbff68f096f6c58e7232": "1890a164f3c065a617c59b7d53848b7e",
".git/objects/93/4c65cb4eb61915b0de0620ed0c7d82d4f0f716": "b4e5117df6c742e775a7685f28d6723a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/0e/4d4aa9e81fc00a2c249b2d609bd6386a9013eb": "50f2308aa08d4a7d11279ace8a254876",
".git/objects/60/5a92087a1d48b4b2a52691ccb9a0cf71a635db": "c718688a5aa42ab933283ecc6a339728",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/05/6dec5131f3101bea616c71008dcefa7017b788": "1a857720cd1520aacd1956d0a4891b4c",
".git/objects/05/c75da5deb8244c9aa5cbe1733918042ed2430e": "121de7bea4d30c196e505cef525e26d3",
".git/objects/a3/d039a123cbcb28778b4d67a402874cbb46c1a3": "b8f1525b490504d8f332fd1a99ad4374",
".git/objects/d9/45dda76256d9aa07bd6ed62b048b3ea861aff2": "d26c45b801ea1b5a79d1a06dc572e529",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ac/c8f84c3ce0379e2c703affdc7775a6f82579bc": "8cf031af2a0e9a0c790a68599da18aa0",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/4130ad8cbd016848358b08c901c95a916c2c42": "88e6c65997de211c04daf295e66d08f3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/b9d88afeaa062c4d3e592705f91298d4ba55f2": "edbd19223334da96799506be328a7498",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/e6d83daa3f2baeebe2da52386294d528993378": "d4cf070ec016723f6e3475e3bf29a2dd",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d7ae59f9399f28ef81ebf9aa14741c8299d55a": "e3c54c1ec71422d847aa32c10e455c03",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/bf616432ed9205345989259b484c80b259cb74": "7c79839c094d7c41a8771dae11494d4e",
".git/objects/f2/c954b04d64fc0898045adef1a8b0558fc8014d": "94ce78ceb844fffe21ad9e59fe53e2d2",
".git/objects/f5/cd2d4274a53e24d15e01ed9354e954a3d03814": "58cc1e999c23676a47cd8d7b95ade45c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/e4/565bf85c472f7f5dd73de956c952945ab2148a": "4044b64195d9b4ffe18149972a3a82c5",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/519e5d5945c5389fcc8afbc39ce6159978cda8": "5cb8aff66b4345d42318a1098fc4a05a",
".git/objects/c6/f4448c7c38290a1d9f7713f7a439a2f1ca3544": "bb84639b10d45237d09b160f9634b773",
".git/objects/4e/240fe290381c47a21988c16de416fa51e33e81": "144eb4e4208bb53b9da955c5f05aae66",
".git/objects/11/914c766f3bd5ba76e68274c44decb6746fcf6e": "0543d10dc28c7d6956478d9e7178f46a",
".git/objects/7d/8e07af0437e10b8b2d8e082eaa3527c034f350": "0233553a144b6dddef7660583ac8c52e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/28/d39cbff8b600fe8903f3b8a558dadd58b3d1dd": "21270389b41b1de489ea109b5b572569",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/e5c60594acaa75984d894820f09479bd679ea8": "66b73608a14741c41a86a4142552613e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/3b7e8202d49f46262235da14d303297fb6ef97": "442dbffc2b1b07b5ed338f40d0e75116",
".git/objects/4c/7bd0baa785b071de30c9aeb3f51e57a6a7284c": "74601fa2ca17392403164af5c37acff9",
".git/objects/72/3f26f281ba8cdf0e1bf4209c6b968b267cd101": "e8c5783b07e21014ab9ae37246eb9dd2",
".git/objects/44/0bf1b5e94cd202504eeafa90fccfb9ca93bb97": "db40c4b2e5062489033afd642297f7b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0d5e114d340a025ee6063853c62025a5142d53": "1afae21122b1be9b59f544818abd6eb6",
".git/objects/9f/802ee4801a923f03d3f73afe5ffb4f93fec023": "9ba0d1bdddb6c5433e7d0914b16886a2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/cca045091659322a250d697e950c423173a813": "9a48479e7eeb4ad487e903e2bb08d3c8",
".git/objects/36/9af842bf1014712075be63f6aae22dbc4b627e": "49ad8c954d77f47754ab80d4649011bc",
".git/objects/5d/af815e014b9f291b31daecb34cd796f41924c6": "0035a0ee28027e24b208ade8d35b948e",
".git/objects/62/c4ca452bfc0520beebb3b74ea14013ad564753": "60f680b9f42c05167540bd22d4822863",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/53/5853b83c99ef17c9bf5fff0bdf8ff05963bbfc": "ee992be58110687915b52da97cfdb2a0",
".git/objects/30/00020aaeff97c5ab546953676b2d4a192eeeb8": "c1d5ffb7441fa8081070eebf838647e7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/08fb72f37de2efbc8fac179298af742446558d": "c4cbf918e95393b7af6cf38ac71ae478",
".git/objects/6d/2abd4db6bb167ff853cc8f7a0831ff5e5438fa": "a78f7dcf88b2adc4fb08df294755cbfa",
".git/objects/01/3a2210b30cd6608182e6e56d9fbc8aa993bb8b": "c8281da6a69d6e7c0313f2e65f1e427a",
".git/objects/06/7ca0a068a4ca089ad1b8949a65b578d33f57d8": "05f834b196b59ac04e3cdf33e21d019e",
".git/objects/63/ffd5cffb80b04dc7382bcfa1e6ed58032aefe6": "4b4dde83536c36335e236fd2b53aa459",
".git/objects/0f/94d92bb23d64adf34dc5da7023c03c9331c227": "624921a15f740a39818f326d8cb0bbe8",
".git/objects/0f/43069e64e391a5be7fe222e44f97545cab1d0e": "8b2efaa35a1db04c7a687ddfefef9943",
".git/objects/0a/bc79c350057bd1891db1ba2069a9f34e3d0b7d": "135236f07d0c81ae16c40ee99b82d9ee",
".git/objects/64/dc880993d17f96018c4e883d69cf623eae4d70": "33e3e8c187fb65136cd129252bfee210",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/e023ac39a5b53a506ea5521c529303f38425a8": "844992d3d3c174a5d7fc61e1d509bd36",
".git/objects/d5/66b7e0a818051bf996f39f471e2cf8fbae9a5c": "04face1347af675160054255eb82b409",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/a81e741f544981950faacaf04387dcc82c62de": "8c7aab66d702a188098da65cf0533ff3",
".git/objects/cd/de9924f8f9751876eb37a2189e635311c1a690": "310dd4106da021d05d1d26307beb39a1",
".git/objects/e6/4e6d08e521f97f11440bda8ddac5d7ac08ce1b": "15848dd277f87f166b61552cc5ff8bdb",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f9/a3fa4fe045c2e3e8440a1fa469c819d82533ee": "429abc0d6c31dc4274061f31f3d73b7a",
".git/objects/e8/8be6a82325dde0a11e5aee9a490788fed26b5a": "bdfdc395bbf1e212bd5a138873319f96",
".git/objects/ff/f3c20d6ba99f81dbd91035fae772b1e0656626": "db2f26a8279d139b9382e3e5a42df1b5",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/b405927c8e8bac08467c1c4bf6a871e7b426a5": "1e7445264afb34ed3b7ae0be7e630899",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/fef4eeb094ed4bcf576717d975709c891ddece": "dce0138635037020ba5563362c79adca",
".git/objects/2d/a2ec11f8d82981959b6fd0ec34cddefab9d465": "86ee607ddd91e08df01890eda082605a",
".git/objects/12/dbdef64d03964930ba4d9dc501abd412ced6d9": "ee93cc6cdf1d55db7015af8f409e6369",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/c2fbebd8ec67cc33819b1ad79cca062995ae1a": "c49c0a25d35b0b8ccfb9a6a6a0731fe8",
".git/objects/71/20c0420d02a6c1b829c826633c23e7618217a0": "d1fd90b18d6dc7d5e3724f8b19044a75",
".git/objects/1c/ee086f43e1f461c0c3c52587dc3fedd4de3a9c": "50bcf9d7507bdf0acecaf771c4660189",
".git/objects/49/cb8a591f920b7159b5cdac0329fba7b7f81b09": "97a864954abae6dddddc6a870050cf92",
".git/objects/2e/f33ca5a8f2d19219cff4335e25956c86b4e9e4": "6da9b46597ab5d872020c1f03084f92d",
".git/objects/2b/602ca8ed7be009c59d79c99e49a2f07d90898c": "382b898aab69eedb66669bf142e6e1be",
".git/objects/78/bf9ff0b51d526f988c8d89bdf4c6a3f88c310b": "1090e697f3d3d1a23396ec30c41b3ffe",
".git/objects/13/e4414f44a9009d64638d5414daa6684aeabc25": "67a14d72698db64f0c09b5c51e9eeb4b",
".git/objects/14/d2de35f84ae4d4954820688b93fc2b4570917f": "723d4b5c74510cca8767deedeb2d73e7",
".git/objects/14/550c4f1f79b067188549d386c3f7993a4ca15a": "80450ad8154e781ffc96b1297302dde0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb0626801939065275d3c564c95a549f",
".git/logs/refs/heads/main": "f0b8f95ed793b2527f8f37e821af95e0",
".git/logs/refs/remotes/origin/HEAD": "12e2125eba51a96860187bc39af49114",
".git/logs/refs/remotes/origin/main": "88df3b1bdc927a7933c6eb37d05720b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "82d64c6b015091c41b27a37d5363a0c8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "82d64c6b015091c41b27a37d5363a0c8",
".git/index": "ffc6884f38aceaf729f2d3561ed9d3b0",
".git/COMMIT_EDITMSG": "b75c4ca7da1b4e5bfed4e3be4e30281d",
".git/FETCH_HEAD": "f64d0e862d668667670091493de896e3",
"assets/images/6560314d4c6f680c9dc60313e21f1dbf5d1dce7981e748d4ac1f505ad8986ff2.png": "3682eefe766f729b004895b6cc80e089",
"assets/images/920e9b6af761e04ff9c11354743c6fa736ca6b3a1f6a125c70be4bf7074e14d3.png": "d44178ca054caa3ec9cf28a72e1b1eb2",
"assets/images/eefbbd5b963370bb93a6f5d1031166f5b36af8d4789532588bf8ccaac88ee14d.png": "4d32406f2904cc02b3526517baf4ba45",
"assets/images/e3c7cc2fd80ed665e20d33e3726399876321c9ff0efeeb33444d58c26bdec156.png": "44f8097bcc3b30199dec23a61ee3b31e",
"assets/images/57572dbd6e9472311c7e199eb1a9b24bca4c8d423feb04a5dcbd5bc5f8895a80.png": "045844c6bd5ebe37abf684a9887d28aa",
"assets/images/543cb21681e4681388d574cc2a2cafcacdf85e37e31793b2a8be52d1cc7014d6.png": "bc4ebe74756ecf62ec8999e83760ecfa",
"assets/images/3273c63f44c93e1826606dd85d51154b08b7cfe4d97d6a4842c476d124f1d816.png": "7871f3f4d885e8d0848b5c9dba0ad9d3",
"assets/images/db70969bf1cd571e6447947747330092d1790ad6a3188bd8b73ba2337d9687d0.png": "2941f8d9cc1772359b81d6c35c19001d",
"assets/images/b8cc7ee714615cb74d83ea633c5aea4331afe4b658df9621418f7da0f0dd340b.png": "3a8ba88bf1ab3f300de5c2d73f599dd0",
"assets/images/99007799df2fc70479c21c750719f0005f11bce24c628f24128da27b030277dc.png": "fb8c19bc3bf288ca08480c9d48c50a87",
"assets/images/019c3d867a0392dc47e344f0e43f8798331eea904b2dc4769f79adab952c6410.png": "3188ffca404f8be45d82e2e4791b3ccf",
"assets/images/8dd2281c4ca6740cbaea55f120efad7c3fd265b11b1cd44fc6ba9a9f3b45858f.png": "1a13afb140d26bc50f64ec21e9331c5e",
"assets/images/54e05f18ab04532c4fb162c1f33f72feacd6eef32720d166b709ea82ed60972e.png": "921184b8ae272170ab2b49a99497e4f3",
"assets/images/9c3c213a0cda2e0632d4ce63fbabebf09153df260bfce9df5f6da3f4581e67a8.png": "99b14ec7e064028b3a41fcf1fca43206",
"assets/images/075d16d28c397c0d8ae82adebdfe5ac97a135ef3b9f58e64be2d37d8d326d844.png": "2f13b2c2a8347d7627994c896c89c651",
"assets/images/222f5334903cf49b6c296c7fa9371572ade9619ae3707648e5c6bf9f3249f34f.png": "c763636fddd95ba0f2b7a8c8b15b1145",
"assets/images/fc1c2fdbbe819e207799e739f488f1427347496bcc647e32a1491d0c083b9d8a.png": "0de4ed13fd63d01070631a0e5258885f",
"assets/images/d31f8fde8d85af7a77e1ff4dc6d07fd867ad805cc585f40e8333aea6985d1a8c.png": "a0a4ae25e122235d1cc50d2f9ef742f7",
"assets/images/e79cb00ceacae571aa934d357072d008f56e082aa9bd482d5b42a7efef96aac3.png": "5a552a4ae188cacf142ac0a76dba43fa",
"assets/images/58e84de7039685b55e46d57e64b18caf303d955be8d2dcc8bd0553be1b5f2e9f.png": "72e20094b87847768c10a7ca2f687947",
"assets/images/195abff6d5bbe8cbb84d36026532d3be9a653a22fdf6c5f60ff56fd4da29f42a.png": "f42ce6c5e17a4c50e630c388ed9f091e",
"assets/images/8c83e523ff5df2f2998946897d08c4438826e597bcba8a1c256438b9bd721ddc.png": "8673ddf7806987873d0bb76dbdfc78e3",
"assets/images/a5ebe2d60d54a9a1b92d0773e168e2bf00ec071191e64e07c81940c7bbd1c9c2.png": "9a82eb80eece4c864018ef103ba6e4c0",
"assets/images/9db5fe6f6de3d75c91d980727c542dfe3cfc847695e465eec69b68961d029034.png": "22fe0273eb5517950d8b00dae430f441",
"assets/images/ac41a74da15a1f17bbbc393df22e0dbb35ea42536b10cd5dc09b3afc62aafa98.png": "40ccca1f962ca5b25922431baa3bb683",
"assets/images/4861afb0ff3887e4a8d11b032978a7fcf3ce87daa28ee02f94f59c87a6161bde.png": "bccda489d0bc2919f4988180f13a716d",
"assets/images/de1666e7801d481f8a403d7c9f435e2ebf63f4432dec6141e532ab9efc2879b8.png": "22c1682f1a2b61b3b1a02184d45a7a95",
"assets/images/e571398a046d8bf2ddcd8e006fb2d44557c1e26580b83c3421b18bd65fc79ebe.png": "82677eee1a305944880d68fbf7ad018b",
"assets/images/c510c4bc33395be2e5fbfc3ffb4f90181f82b074190fe248de5185c77b68ced2.png": "648a2b192e8d05a72ef2aee0a17af5e0",
"assets/images/a1a801dc814975ad8f57f507a84375fdad0b047f66643976595bdb72598bf99c.png": "1a33d1b101e5c55403cb60ca4cb75cb4",
"assets/images/3cd61ac7d18541732fa43faf72516ac098b92ecdd412faa644f80301c4a4c711.png": "8034cf03379052525610291283c12fce",
"assets/images/35129904d6c0d51f862fae3d27baf9dd67193f29ea05d8f62f74f9f7a67de40a.png": "eef58ead3ae28fc0a378f44c9e55a46d",
"assets/images/d79e9c02f59552308660282cf65c9b5e41c773f8bf03fa162ee068e817415ddd.png": "c412a57bc9596db656cfa40197c67a47",
"assets/images/50f3508e50f517eec105913ee1c36cd147d73f41db16cb231a5440e56ddd063f.png": "358649093870a0082353dd08bb1cedb8",
"assets/images/.git/config": "e0ae60e8b08fa0b10b73511221ca11a7",
"assets/images/.git/objects/0d/5a42512cfaa616c47fbb2df7217df922a98cd2": "52fd4c132f1fd63a385494d946ec8d77",
"assets/images/.git/objects/68/e0ee3dee1ca42a159c8d6673a5e88fd5d12ec5": "d31b730e6a9669978ae3f71cc16cb06d",
"assets/images/.git/objects/57/83596da5bc06de884a222567a7d39da3ab8e04": "9f6a0440196d0510fd27a42f23cf6897",
"assets/images/.git/objects/0b/db6dcd33f463d7c63dbbff68f096f6c58e7232": "1890a164f3c065a617c59b7d53848b7e",
"assets/images/.git/objects/0e/4d4aa9e81fc00a2c249b2d609bd6386a9013eb": "50f2308aa08d4a7d11279ace8a254876",
"assets/images/.git/objects/60/5a92087a1d48b4b2a52691ccb9a0cf71a635db": "c718688a5aa42ab933283ecc6a339728",
"assets/images/.git/objects/a3/d039a123cbcb28778b4d67a402874cbb46c1a3": "b8f1525b490504d8f332fd1a99ad4374",
"assets/images/.git/objects/d9/45dda76256d9aa07bd6ed62b048b3ea861aff2": "d26c45b801ea1b5a79d1a06dc572e529",
"assets/images/.git/objects/ad/4130ad8cbd016848358b08c901c95a916c2c42": "88e6c65997de211c04daf295e66d08f3",
"assets/images/.git/objects/da/b9d88afeaa062c4d3e592705f91298d4ba55f2": "edbd19223334da96799506be328a7498",
"assets/images/.git/objects/eb/d7ae59f9399f28ef81ebf9aa14741c8299d55a": "e3c54c1ec71422d847aa32c10e455c03",
"assets/images/.git/objects/e4/565bf85c472f7f5dd73de956c952945ab2148a": "4044b64195d9b4ffe18149972a3a82c5",
"assets/images/.git/objects/c6/f4448c7c38290a1d9f7713f7a439a2f1ca3544": "bb84639b10d45237d09b160f9634b773",
"assets/images/.git/objects/4e/240fe290381c47a21988c16de416fa51e33e81": "144eb4e4208bb53b9da955c5f05aae66",
"assets/images/.git/objects/11/914c766f3bd5ba76e68274c44decb6746fcf6e": "0543d10dc28c7d6956478d9e7178f46a",
"assets/images/.git/objects/7d/8e07af0437e10b8b2d8e082eaa3527c034f350": "0233553a144b6dddef7660583ac8c52e",
"assets/images/.git/objects/10/3b7e8202d49f46262235da14d303297fb6ef97": "442dbffc2b1b07b5ed338f40d0e75116",
"assets/images/.git/objects/4c/7bd0baa785b071de30c9aeb3f51e57a6a7284c": "74601fa2ca17392403164af5c37acff9",
"assets/images/.git/objects/72/3f26f281ba8cdf0e1bf4209c6b968b267cd101": "e8c5783b07e21014ab9ae37246eb9dd2",
"assets/images/.git/objects/44/0bf1b5e94cd202504eeafa90fccfb9ca93bb97": "db40c4b2e5062489033afd642297f7b0",
"assets/images/.git/objects/38/cca045091659322a250d697e950c423173a813": "9a48479e7eeb4ad487e903e2bb08d3c8",
"assets/images/.git/objects/36/9af842bf1014712075be63f6aae22dbc4b627e": "49ad8c954d77f47754ab80d4649011bc",
"assets/images/.git/objects/5d/af815e014b9f291b31daecb34cd796f41924c6": "0035a0ee28027e24b208ade8d35b948e",
"assets/images/.git/objects/62/c4ca452bfc0520beebb3b74ea14013ad564753": "60f680b9f42c05167540bd22d4822863",
"assets/images/.git/objects/3a/98681a769efe63dd1cd8fa8890876c7f17ee7c": "998a931665d56a1a5070fb655770845f",
"assets/images/.git/objects/53/5853b83c99ef17c9bf5fff0bdf8ff05963bbfc": "ee992be58110687915b52da97cfdb2a0",
"assets/images/.git/objects/30/00020aaeff97c5ab546953676b2d4a192eeeb8": "c1d5ffb7441fa8081070eebf838647e7",
"assets/images/.git/objects/6d/2abd4db6bb167ff853cc8f7a0831ff5e5438fa": "a78f7dcf88b2adc4fb08df294755cbfa",
"assets/images/.git/objects/0f/94d92bb23d64adf34dc5da7023c03c9331c227": "624921a15f740a39818f326d8cb0bbe8",
"assets/images/.git/objects/0f/43069e64e391a5be7fe222e44f97545cab1d0e": "8b2efaa35a1db04c7a687ddfefef9943",
"assets/images/.git/objects/0a/bc79c350057bd1891db1ba2069a9f34e3d0b7d": "135236f07d0c81ae16c40ee99b82d9ee",
"assets/images/.git/objects/64/dc880993d17f96018c4e883d69cf623eae4d70": "33e3e8c187fb65136cd129252bfee210",
"assets/images/.git/objects/dc/e023ac39a5b53a506ea5521c529303f38425a8": "844992d3d3c174a5d7fc61e1d509bd36",
"assets/images/.git/objects/f9/a3fa4fe045c2e3e8440a1fa469c819d82533ee": "429abc0d6c31dc4274061f31f3d73b7a",
"assets/images/.git/objects/2d/a2ec11f8d82981959b6fd0ec34cddefab9d465": "86ee607ddd91e08df01890eda082605a",
"assets/images/.git/objects/71/c2fbebd8ec67cc33819b1ad79cca062995ae1a": "c49c0a25d35b0b8ccfb9a6a6a0731fe8",
"assets/images/.git/objects/71/20c0420d02a6c1b829c826633c23e7618217a0": "d1fd90b18d6dc7d5e3724f8b19044a75",
"assets/images/.git/objects/1c/ee086f43e1f461c0c3c52587dc3fedd4de3a9c": "50bcf9d7507bdf0acecaf771c4660189",
"assets/images/.git/objects/49/cb8a591f920b7159b5cdac0329fba7b7f81b09": "97a864954abae6dddddc6a870050cf92",
"assets/images/.git/objects/2e/f33ca5a8f2d19219cff4335e25956c86b4e9e4": "6da9b46597ab5d872020c1f03084f92d",
"assets/images/.git/objects/2b/602ca8ed7be009c59d79c99e49a2f07d90898c": "382b898aab69eedb66669bf142e6e1be",
"assets/images/.git/objects/78/bf9ff0b51d526f988c8d89bdf4c6a3f88c310b": "1090e697f3d3d1a23396ec30c41b3ffe",
"assets/images/.git/HEAD": "d763907957b0b6dbf1db484f4a22f8e8",
"assets/images/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/images/.git/logs/HEAD": "16aa66b6eb9ef1e3b05725289a218850",
"assets/images/.git/logs/refs/heads/images": "41aabb1fb694e077d24edeeb619cd068",
"assets/images/.git/logs/refs/remotes/origin/images": "8bce6746ea77a15f9aadc77013d083b7",
"assets/images/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/images/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"assets/images/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"assets/images/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"assets/images/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"assets/images/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"assets/images/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"assets/images/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"assets/images/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"assets/images/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"assets/images/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"assets/images/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"assets/images/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"assets/images/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"assets/images/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/images/.git/refs/heads/images": "173fca8b0d0d572f0909806a04237e49",
"assets/images/.git/refs/remotes/origin/images": "173fca8b0d0d572f0909806a04237e49",
"assets/images/.git/index": "b4258e7965f234130237536388fe1f98",
"assets/images/.git/COMMIT_EDITMSG": "bf87ec0391761d03cd1d21e9c9a17f10",
"assets/images/ed64b4ea5a28f1dcb4a6315191d31ba1f164f8c6ad1e20e90db8e26361c6dbe9.png": "3808c567cb5cece62c32cb3024a017b0",
"assets/images/bbe279743a696e96de078086c8f79099622fe5d8e5a6c71d2202c2d30a2f6bee.png": "253bf1188ca6d005ded678778c96df4d",
"assets/images/a36a810949334160114cae134230e484d35f7305efc59cf50228c544a91a8c8d.png": "4cea57aa189217224754a071fc84d6b4",
"assets/images/8b487f97ebfe096fdcf6bb64834769614645f0a752e6e5410f6f271d6bfb3a86.png": "f4c0c7f845e58a149963b8c2e87b79a3",
"assets/images/492089cadde26b322edc80f852a187fce49aef48882b25638c4ff533a9986b97.png": "a508681bd860a0f8cda4818d7d391832",
"assets/images/4884595e11f44e48f0311141b2bf3fb9283f8ab6b01296338c6e6e72ec70ca65.png": "02281437facd6e74a457092475c5fed1",
"assets/NOTICES": "6bfd14c0110f89f35df407ff909db43b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
