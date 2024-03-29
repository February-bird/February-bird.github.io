const stuInfo = [
  {
    id: 1,
    stuNo: "216210114",
    password: "19901X",
    name: "黄胜",
  },
  {
    id: 2,
    stuNo: "216210133",
    password: "13004X",
    name: "夏雨辉",
  },
  {
    id: 3,
    stuNo: "216210140",
    password: "281228",
    name: "张玉巧",
  },
  {
    id: 4,
    stuNo: "216210143",
    password: "019022",
    name: "周舒雅",
  },
  {
    id: 5,
    stuNo: "216210238",
    password: "089370",
    name: "张景文",
  },
  {
    id: 6,
    stuNo: "216210235",
    password: "192410",
    name: "袁晨晨",
  },
  {
    id: 7,
    stuNo: "216210242",
    password: "08122X",
    name: "周明慧",
  },
  {
    id: 8,
    stuNo: "216210302",
    password: "183919",
    name: "陈文",
  },
  {
    id: 9,
    stuNo: "216210307",
    password: "18763X",
    name: "付鑫缘",
  },
  {
    id: 10,
    stuNo: "216210309",
    password: "014214",
    name: "管逸云",
  },
  {
    id: 11,
    stuNo: "216210310",
    password: "267412",
    name: "洪昌齐",
  },
  {
    id: 12,
    stuNo: "216210311",
    password: "042433",
    name: "胡熠康",
  },
  {
    id: 13,
    stuNo: "216210312",
    password: "037313",
    name: "黄一明",
  },
  {
    id: 14,
    stuNo: "216210313",
    password: "209333",
    name: "江想隆",
  },
  {
    id: 15,
    stuNo: "216210325",
    password: "017116",
    name: "吕宏乐",
  },
  {
    id: 16,
    stuNo: "216210326",
    password: "220038",
    name: "马灏辰",
  },
  {
    id: 17,
    stuNo: "216210345",
    password: "250734",
    name: "代家兴",
  },
  {
    id: 18,
    stuNo: "216210331",
    password: "087548",
    name: "王梦琦",
  },
  {
    id: 19,
    stuNo: "216210425",
    password: "198716",
    name: "明洋",
  },
  {
    id: 20,
    stuNo: "216210428",
    password: "138844",
    name: "宋立花",
  },
  {
    id: 21,
    stuNo: "216210434",
    password: "150012",
    name: "徐翰林",
  },
  {
    id: 22,
    stuNo: "216210437",
    password: "230922",
    name: "余樾",
  },
  {
    id: 23,
    stuNo: "216210439",
    password: "027657",
    name: "张仕力",
  },
  {
    id: 24,
    stuNo: "216210404",
    password: "167030",
    name: "陈志强",
  },
  {
    id: 25,
    stuNo: "216210438",
    password: "259076",
    name: "张琦",
  },
  {
    id: 26,
    stuNo: "216210501",
    password: "157810",
    name: "蔡宇昊",
  },
  {
    id: 27,
    stuNo: "216210502",
    password: "08731X",
    name: "柴进",
  },
  {
    id: 28,
    stuNo: "216210512",
    password: "290036",
    name: "冯思诚",
  },
  {
    id: 29,
    stuNo: "216210516",
    password: "183721",
    name: "李庆庆",
  },
  {
    id: 30,
    stuNo: "216210520",
    password: "12684X",
    name: "梁子洋",
  },
  {
    id: 31,
    stuNo: "216210522",
    password: "146756",
    name: "刘程林",
  },
  {
    id: 32,
    stuNo: "216210542",
    password: "078450",
    name: "张磊",
  },
  {
    id: 33,
    stuNo: "216210543",
    password: "015554",
    name: "周琦",
  },
];

const score = [
  {
    stuNo: "216210114",
    overallRank: 28,
    totalScore: 567,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 73,
        comment: "",
        singleRank: 28
      },
      {
        course: "应用文写作",
        score: 69,
        comment: "",
        singleRank: 30
      },
      {
        course: "就业指导",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "体育",
        score: 60,
        comment: "",
        singleRank: 32
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 63,
        comment: "",
        singleRank: 24
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 62,
        comment: "",
        singleRank: 25
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210133",
    overallRank: 32,
    totalScore: 516,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 84,
        comment: "",
        singleRank: 16
      },
      {
        course: "应用文写作",
        score: 68,
        comment: "",
        singleRank: 31
      },
      {
        course: "就业指导",
        score: 81,
        comment: "",
        singleRank: 22
      },
      {
        course: "体育",
        score: 67,
        comment: "",
        singleRank: 31
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 96,
        comment: "",
        singleRank: 4
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 20,
        comment: "缺考",
        singleRank: 32
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210140",
    overallRank: 28,
    totalScore: 567,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 66,
        comment: "",
        singleRank: 33
      },
      {
        course: "应用文写作",
        score: 78,
        comment: "",
        singleRank: 24
      },
      {
        course: "就业指导",
        score: 87,
        comment: "",
        singleRank: 7
      },
      {
        course: "体育",
        score: 71,
        comment: "",
        singleRank: 24
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 78,
        comment: "",
        singleRank: 29
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 60,
        comment: "",
        singleRank: 27
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 62,
        comment: "",
        singleRank: 25
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210143",
    overallRank: 21,
    totalScore: 608,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 85,
        comment: "",
        singleRank: 13
      },
      {
        course: "应用文写作",
        score: 76,
        comment: "",
        singleRank: 26
      },
      {
        course: "就业指导",
        score: 90,
        comment: "",
        singleRank: 3
      },
      {
        course: "体育",
        score: 71,
        comment: "",
        singleRank: 24
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 93,
        comment: "",
        singleRank: 15
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 63,
        comment: "",
        singleRank: 24
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210238",
    overallRank: 31,
    totalScore: 521,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 69,
        comment: "",
        singleRank: 31
      },
      {
        course: "应用文写作",
        score: 67,
        comment: "",
        singleRank: 32
      },
      {
        course: "就业指导",
        score: 66,
        comment: "",
        singleRank: 33
      },
      {
        course: "体育",
        score: 99,
        comment: "",
        singleRank: 7
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 40,
        comment: "",
        singleRank: 32
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 60,
        comment: "",
        singleRank: 27
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210235",
    overallRank: 33,
    totalScore: 431,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 85,
        comment: "",
        singleRank: 13
      },
      {
        course: "应用文写作",
        score: 62,
        comment: "",
        singleRank: 33
      },
      {
        course: "就业指导",
        score: 77,
        comment: "",
        singleRank: 32
      },
      {
        course: "体育",
        score: 49,
        comment: "补考",
        singleRank: 33
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 38,
        comment: "补考",
        singleRank: 33
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 20,
        comment: "缺考",
        singleRank: 32
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210242",
    overallRank: 14,
    totalScore: 630,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 99,
        comment: "",
        singleRank: 2
      },
      {
        course: "应用文写作",
        score: 88,
        comment: "",
        singleRank: 3
      },
      {
        course: "就业指导",
        score: 90,
        comment: "",
        singleRank: 3
      },
      {
        course: "体育",
        score: 68,
        comment: "补考",
        singleRank: 30
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 63,
        comment: "",
        singleRank: 24
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 62,
        comment: "",
        singleRank: 26
      },
    ],
  },
  {
    stuNo: "216210302",
    overallRank: 26,
    totalScore: 586,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 85,
        comment: "",
        singleRank: 13
      },
      {
        course: "应用文写作",
        score: 70,
        comment: "",
        singleRank: 29
      },
      {
        course: "就业指导",
        score: 84,
        comment: "",
        singleRank: 14
      },
      {
        course: "体育",
        score: 74,
        comment: "",
        singleRank: 11
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 93,
        comment: "",
        singleRank: 15
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 60,
        comment: "",
        singleRank: 27
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210307",
    overallRank: 18,
    totalScore: 618,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 77,
        comment: "",
        singleRank: 23
      },
      {
        course: "应用文写作",
        score: 80,
        comment: "",
        singleRank: 20
      },
      {
        course: "就业指导",
        score: 81,
        comment: "",
        singleRank: 22
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 82,
        comment: "",
        singleRank: 22
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 70,
        comment: "",
        singleRank: 12
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 63,
        comment: "",
        singleRank: 24
      },
    ],
  },
  {
    stuNo: "216210309",
    overallRank: 3,
    totalScore: 671,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 94,
        comment: "",
        singleRank: 8
      },
      {
        course: "应用文写作",
        score: 87,
        comment: "",
        singleRank: 4
      },
      {
        course: "就业指导",
        score: 93,
        comment: "",
        singleRank: 2
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 85,
        comment: "",
        singleRank: 21
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 72,
        comment: "",
        singleRank: 10
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 70,
        comment: "",
        singleRank: 15
      },
      {
        course: "Java编程技术基础",
        score: 70,
        comment: "",
        singleRank: 8
      },
    ],
  },
  {
    stuNo: "216210310",
    overallRank: 9,
    totalScore: 655,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 78,
        comment: "",
        singleRank: 22
      },
      {
        course: "应用文写作",
        score: 85,
        comment: "",
        singleRank: 8
      },
      {
        course: "就业指导",
        score: 78,
        comment: "",
        singleRank: 27
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 78,
        comment: "",
        singleRank: 28
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 86,
        comment: "",
        singleRank: 2
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 92,
        comment: "",
        singleRank: 1
      },
      {
        course: "Java编程技术基础",
        score: 85,
        comment: "",
        singleRank: 1
      },
    ],
  },
  {
    stuNo: "216210311",
    overallRank: 27,
    totalScore: 584,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 75,
        comment: "",
        singleRank: 25
      },
      {
        course: "应用文写作",
        score: 82,
        comment: "",
        singleRank: 13
      },
      {
        course: "就业指导",
        score: 78,
        comment: "",
        singleRank: 27
      },
      {
        course: "体育",
        score: 74,
        comment: "",
        singleRank: 11
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210312",
    overallRank: 24,
    totalScore: 601,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 88,
        comment: "",
        singleRank: 12
      },
      {
        course: "应用文写作",
        score: 90,
        comment: "",
        singleRank: 2
      },
      {
        course: "就业指导",
        score: 78,
        comment: "",
        singleRank: 27
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 64,
        comment: "",
        singleRank: 23
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 62,
        comment: "",
        singleRank: 25
      },
      {
        course: "Java编程技术基础",
        score: 66,
        comment: "",
        singleRank: 12
      },
    ],
  },
  {
    stuNo: "216210313",
    overallRank: 18,
    totalScore: 618,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 84,
        comment: "",
        singleRank: 16
      },
      {
        course: "应用文写作",
        score: 81,
        comment: "",
        singleRank: 15
      },
      {
        course: "就业指导",
        score: 82,
        comment: "",
        singleRank: 19
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 63,
        comment: "",
        singleRank: 24
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 63,
        comment: "",
        singleRank: 24
      },
    ],
  },
  {
    stuNo: "216210325",
    overallRank: 17,
    totalScore: 619,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 80,
        comment: "",
        singleRank: 20
      },
      {
        course: "应用文写作",
        score: 83,
        comment: "",
        singleRank: 10
      },
      {
        course: "就业指导",
        score: 82,
        comment: "",
        singleRank: 19
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 76,
        comment: "",
        singleRank: 6
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210326",
    overallRank: 12,
    totalScore: 644,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 75,
        comment: "",
        singleRank: 25
      },
      {
        course: "应用文写作",
        score: 83,
        comment: "",
        singleRank: 10
      },
      {
        course: "就业指导",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 96,
        comment: "",
        singleRank: 4
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 76,
        comment: "",
        singleRank: 6
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 76,
        comment: "",
        singleRank: 11
      },
      {
        course: "Java编程技术基础",
        score: 85,
        comment: "",
        singleRank: 1
      },
    ],
  },
  {
    stuNo: "216210345",
    overallRank: 7,
    totalScore: 661,
    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 74,
        comment: "",
        singleRank: 27
      },
      {
        course: "应用文写作",
        score: 85,
        comment: "",
        singleRank: 8
      },
      {
        course: "就业指导",
        score: 82,
        comment: "",
        singleRank: 19
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 85,
        comment: "",
        singleRank: 3
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 82,
        comment: "",
        singleRank: 6
      },
      {
        course: "Java编程技术基础",
        score: 85,
        comment: "",
        singleRank: 1
      },
    ],
  },
  {
    stuNo: "216210331",
    overallRank: 16,
    totalScore: 622,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 90,
        comment: "",
        singleRank: 11
      },
      {
        course: "应用文写作",
        score: 80,
        comment: "",
        singleRank: 20
      },
      {
        course: "就业指导",
        score: 90,
        comment: "",
        singleRank: 3
      },
      {
        course: "体育",
        score: 72,
        comment: "",
        singleRank: 20
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 90,
        comment: "",
        singleRank: 20
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 70,
        comment: "",
        singleRank: 15
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210425",
    overallRank: 20,
    totalScore: 615,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 71,
        comment: "",
        singleRank: 30
      },
      {
        course: "应用文写作",
        score: 81,
        comment: "",
        singleRank: 15
      },
      {
        course: "就业指导",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "体育",
        score: 75,
        comment: "",
        singleRank: 10
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 92,
        comment: "",
        singleRank: 17
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 85,
        comment: "",
        singleRank: 4
      },
      {
        course: "Java编程技术基础",
        score: 66,
        comment: "",
        singleRank: 12
      },
    ],
  },
  {
    stuNo: "216210428",
    overallRank: 4,
    totalScore: 670,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "应用文写作",
        score: 81,
        comment: "",
        singleRank: 15
      },
      {
        course: "就业指导",
        score: 78,
        comment: "",
        singleRank: 27
      },
      {
        course: "体育",
        score: 71,
        comment: "",
        singleRank: 24
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 80,
        comment: "",
        singleRank: 5
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 80,
        comment: "",
        singleRank: 8
      },
      {
        course: "Java编程技术基础",
        score: 80,
        comment: "",
        singleRank: 4
      },
    ],
  },
  {
    stuNo: "216210434",
    overallRank: 9,
    totalScore: 655,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 80,
        comment: "",
        singleRank: 20
      },
      {
        course: "应用文写作",
        score: 79,
        comment: "",
        singleRank: 22
      },
      {
        course: "就业指导",
        score: 87,
        comment: "",
        singleRank: 7
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 98,
        comment: "",
        singleRank: 3
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 70,
        comment: "",
        singleRank: 12
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 76,
        comment: "",
        singleRank: 11
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210437",
    overallRank: 24,
    totalScore: 601,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 92,
        comment: "",
        singleRank: 9
      },
      {
        course: "应用文写作",
        score: 83,
        comment: "",
        singleRank: 10
      },
      {
        course: "就业指导",
        score: 85,
        comment: "",
        singleRank: 12
      },
      {
        course: "体育",
        score: 69,
        comment: "",
        singleRank: 29
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 92,
        comment: "",
        singleRank: 17
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 60,
        comment: "",
        singleRank: 27
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210439",
    overallRank: 11,
    totalScore: 653,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 96,
        comment: "",
        singleRank: 5
      },
      {
        course: "应用文写作",
        score: 86,
        comment: "",
        singleRank: 7
      },
      {
        course: "就业指导",
        score: 84,
        comment: "",
        singleRank: 14
      },
      {
        course: "体育",
        score: 72,
        comment: "",
        singleRank: 20
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 94,
        comment: "",
        singleRank: 14
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 75,
        comment: "",
        singleRank: 8
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 80,
        comment: "",
        singleRank: 8
      },
      {
        course: "Java编程技术基础",
        score: 66,
        comment: "",
        singleRank: 12
      },
    ],
  },
  {
    stuNo: "216210404",
    overallRank: 8,
    totalScore: 658,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 98,
        comment: "",
        singleRank: 3
      },
      {
        course: "应用文写作",
        score: 87,
        comment: "",
        singleRank: 4
      },
      {
        course: "就业指导",
        score: 90,
        comment: "",
        singleRank: 3
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 70,
        comment: "",
        singleRank: 12
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 75,
        comment: "",
        singleRank: 14
      },
      {
        course: "Java编程技术基础",
        score: 70,
        comment: "",
        singleRank: 8
      },
    ],
  },
  {
    stuNo: "216210438",
    overallRank: 23,
    totalScore: 602,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 73,
        comment: "",
        singleRank: 28
      },
      {
        course: "应用文写作",
        score: 82,
        comment: "",
        singleRank: 13
      },
      {
        course: "就业指导",
        score: 83,
        comment: "",
        singleRank: 17
      },
      {
        course: "体育",
        score: 73,
        comment: "",
        singleRank: 13
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 71,
        comment: "",
        singleRank: 30
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 70,
        comment: "",
        singleRank: 12
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 85,
        comment: "",
        singleRank: 4
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210501",
    overallRank: 6,
    totalScore: 666,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 77,
        comment: "",
        singleRank: 23
      },
      {
        course: "应用文写作",
        score: 87,
        comment: "",
        singleRank: 4
      },
      {
        course: "就业指导",
        score: 83,
        comment: "",
        singleRank: 17
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 81,
        comment: "",
        singleRank: 23
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 75,
        comment: "",
        singleRank: 8
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 88,
        comment: "",
        singleRank: 3
      },
      {
        course: "Java编程技术基础",
        score: 75,
        comment: "",
        singleRank: 6
      },
    ],
  },
  {
    stuNo: "216210502",
    overallRank: 30,
    totalScore: 544,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 69,
        comment: "",
        singleRank: 31
      },
      {
        course: "应用文写作",
        score: 76,
        comment: "",
        singleRank: 26
      },
      {
        course: "就业指导",
        score: 78,
        comment: "",
        singleRank: 27
      },
      {
        course: "体育",
        score: 72,
        comment: "",
        singleRank: 20
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 69,
        comment: "",
        singleRank: 31
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 60,
        comment: "",
        singleRank: 27
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 60,
        comment: "",
        singleRank: 28
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210512",
    overallRank: 1,
    totalScore: 719,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 96,
        comment: "",
        singleRank: 5
      },
      {
        course: "应用文写作",
        score: 92,
        comment: "",
        singleRank: 1
      },
      {
        course: "就业指导",
        score: 95,
        comment: "",
        singleRank: 1
      },
      {
        course: "体育",
        score: 99,
        comment: "",
        singleRank: 7
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 90,
        comment: "",
        singleRank: 1
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 82,
        comment: "",
        singleRank: 6
      },
      {
        course: "Java编程技术基础",
        score: 70,
        comment: "",
        singleRank: 8
      },
    ],
  },
  {
    stuNo: "216210516",
    overallRank: 2,
    totalScore: 682,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 98,
        comment: "",
        singleRank: 3
      },
      {
        course: "应用文写作",
        score: 81,
        comment: "",
        singleRank: 15
      },
      {
        course: "就业指导",
        score: 87,
        comment: "",
        singleRank: 7
      },
      {
        course: "体育",
        score: 71,
        comment: "",
        singleRank: 24
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 96,
        comment: "",
        singleRank: 4
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 85,
        comment: "",
        singleRank: 3
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 92,
        comment: "",
        singleRank: 1
      },
      {
        course: "Java编程技术基础",
        score: 72,
        comment: "",
        singleRank: 7
      },
    ],
  },
  {
    stuNo: "216210520",
    overallRank: 15,
    totalScore: 623,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 83,
        comment: "",
        singleRank: 18
      },
      {
        course: "应用文写作",
        score: 81,
        comment: "",
        singleRank: 15
      },
      {
        course: "就业指导",
        score: 87,
        comment: "",
        singleRank: 7
      },
      {
        course: "体育",
        score: 71,
        comment: "",
        singleRank: 24
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 76,
        comment: "",
        singleRank: 11
      },
      {
        course: "Java编程技术基础",
        score: 60,
        comment: "",
        singleRank: 27
      },
    ],
  },
  {
    stuNo: "216210522",
    overallRank: 13,
    totalScore: 639,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 96,
        comment: "",
        singleRank: 5
      },
      {
        course: "应用文写作",
        score: 77,
        comment: "",
        singleRank: 25
      },
      {
        course: "就业指导",
        score: 84,
        comment: "",
        singleRank: 14
      },
      {
        course: "体育",
        score: 84,
        comment: "",
        singleRank: 9
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 95,
        comment: "",
        singleRank: 7
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 68,
        comment: "",
        singleRank: 16
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 70,
        comment: "",
        singleRank: 15
      },
      {
        course: "Java编程技术基础",
        score: 65,
        comment: "",
        singleRank: 15
      },
    ],
  },
  {
    stuNo: "216210542",
    overallRank: 5,
    totalScore: 669,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 92,
        comment: "",
        singleRank: 9
      },
      {
        course: "应用文写作",
        score: 79,
        comment: "",
        singleRank: 22
      },
      {
        course: "就业指导",
        score: 86,
        comment: "",
        singleRank: 11
      },
      {
        course: "体育",
        score: 100,
        comment: "",
        singleRank: 1
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 92,
        comment: "",
        singleRank: 17
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 72,
        comment: "",
        singleRank: 10
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 78,
        comment: "",
        singleRank: 10
      },
      {
        course: "Java编程技术基础",
        score: 70,
        comment: "",
        singleRank: 8
      },
    ],
  },
  {
    stuNo: "216210543",
    overallRank: 22,
    totalScore: 606,

    subjects: [
      {
        course: "毛泽东思想和中国特色社会主义理论体系概论",
        score: 83,
        comment: "",
        singleRank: 18
      },
      {
        course: "应用文写作",
        score: 76,
        comment: "",
        singleRank: 26
      },
      {
        course: "就业指导",
        score: 85,
        comment: "",
        singleRank: 12
      },
      {
        course: "体育",
        score: 72,
        comment: "",
        singleRank: 20
      },
      {
        course: "情绪管理（尔雅通识课）",
        score: 80,
        comment: "",
        singleRank: 24
      },
      {
        course: "劳动教育",
        score: "良好",
        comment: "",
        singleRank: 1,
      },
      {
        course: "HTML5+CSS3",
        score: 65,
        comment: "",
        singleRank: 17
      },
      {
        course: "HTML5+CSS3项目实战",
        score: 65,
        comment: "",
        singleRank: 18
      },
      {
        course: "Java编程技术基础",
        score: 80,
        comment: "",
        singleRank: 4
      },
    ],
  },
];

export { stuInfo, score };
