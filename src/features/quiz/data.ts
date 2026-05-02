// 진로 심리테스트 데이터셋
// 3개 계열 × 3개 세부 학과 = 9개 매칭 결과

export type MajorKey =
  | "mech" | "cs" | "ee"            // 공학
  | "med"  | "pharm" | "nurse"      // 의학
  | "biz"  | "econ" | "data";       // 상경

export type CategoryKey = "engineering" | "medical" | "business";

export interface Option {
  text: string;
  weights: Partial<Record<MajorKey, number>>;
}

export interface Question {
  tag: string;
  text: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    tag: "일상 #01",
    text: "쉬는 시간, 친구가 \"이거 어떻게 작동하는 거야?\"라고 물었을 때 나는…",
    options: [
      { text: "분해해서 부품을 보여주며 설명한다", weights: { mech: 3, ee: 2 } },
      { text: "원리를 도식으로 그려 코드처럼 풀어준다", weights: { cs: 3, data: 1 } },
      { text: "신체/약물에 비유해서 설명한다", weights: { med: 2, pharm: 2, nurse: 1 } },
      { text: "비용·효용을 따져 \"살 가치 있어?\"로 답한다", weights: { biz: 2, econ: 2 } },
    ],
  },
  {
    tag: "일상 #02",
    text: "조별과제에서 가장 자연스럽게 맡는 역할은?",
    options: [
      { text: "팀을 끌고 일정·역할을 분배하는 리더", weights: { biz: 3, econ: 1 } },
      { text: "데이터·자료를 수집하고 분석하는 분석가", weights: { data: 3, econ: 2 } },
      { text: "결과물을 직접 만들고 조립하는 메이커", weights: { mech: 3, ee: 2 } },
      { text: "팀원의 컨디션을 챙기는 케어테이커", weights: { nurse: 3, med: 1 } },
    ],
  },
  {
    tag: "관심사 #03",
    text: "유튜브 알고리즘에 자주 뜨는 영상은?",
    options: [
      { text: "자동차·로봇·항공 분해 리뷰", weights: { mech: 3 } },
      { text: "코딩·AI·해킹 튜토리얼", weights: { cs: 3 } },
      { text: "신약·바이러스·뇌과학 다큐", weights: { med: 2, pharm: 2 } },
      { text: "주식·부동산·경제 뉴스 요약", weights: { econ: 3, biz: 1 } },
    ],
  },
  {
    tag: "수업 #04",
    text: "가장 시간이 빨리 가는 수업은?",
    options: [
      { text: "물리 — 힘과 운동", weights: { mech: 3, ee: 2 } },
      { text: "정보 — 알고리즘 짜기", weights: { cs: 3, data: 2 } },
      { text: "생명과학 — 세포와 유전", weights: { med: 3, pharm: 1, nurse: 2 } },
      { text: "사회 — 경제와 시장", weights: { econ: 3, biz: 2 } },
    ],
  },
  {
    tag: "수업 #05",
    text: "수학 시간에 내가 빛나는 단원은?",
    options: [
      { text: "기하·벡터 (공간 감각)", weights: { mech: 3, ee: 2 } },
      { text: "이산수학·알고리즘 사고", weights: { cs: 3 } },
      { text: "확률과 통계 (자료 해석)", weights: { data: 3, econ: 2, nurse: 1 } },
      { text: "미적분 (변화율 분석)", weights: { econ: 2, med: 1, pharm: 1 } },
    ],
  },
  {
    tag: "관심사 #06",
    text: "박물관/체험관에 가면 가장 오래 머무는 곳은?",
    options: [
      { text: "자동차·로켓 엔진관", weights: { mech: 3 } },
      { text: "AI·VR 인터랙션관", weights: { cs: 3, data: 1 } },
      { text: "인체·해부학 전시관", weights: { med: 3, nurse: 2 } },
      { text: "화폐·역사 경제관", weights: { econ: 3, biz: 2 } },
    ],
  },
  {
    tag: "성향 #07",
    text: "친구들이 나를 한 단어로 표현한다면?",
    options: [
      { text: "\"손재주꾼\" — 뭐든 만들어냄", weights: { mech: 3, ee: 1 } },
      { text: "\"논리왕\" — 차근차근 분석", weights: { cs: 2, data: 2, econ: 1 } },
      { text: "\"공감왕\" — 잘 들어줌", weights: { nurse: 3, med: 2 } },
      { text: "\"기획왕\" — 판을 잘 짬", weights: { biz: 3 } },
    ],
  },
  {
    tag: "용돈 #08",
    text: "용돈 5만 원이 생긴다면?",
    options: [
      { text: "전자부품·드론 키트 구매", weights: { ee: 3, mech: 2 } },
      { text: "유료 강의/개발 도구 결제", weights: { cs: 3 } },
      { text: "건강식품·운동 장비", weights: { nurse: 2, med: 2 } },
      { text: "주식 소수점 투자에 도전", weights: { econ: 3, biz: 2, data: 1 } },
    ],
  },
  {
    tag: "문제해결 #09",
    text: "스마트폰이 갑자기 꺼졌다. 첫 반응은?",
    options: [
      { text: "분해해서 배터리·기판 확인", weights: { ee: 3, mech: 2 } },
      { text: "OS 로그·소프트웨어 점검", weights: { cs: 3 } },
      { text: "정품 AS센터에 신뢰 맡김", weights: { nurse: 1, med: 1 } },
      { text: "수리 비용 vs 새 폰 비교", weights: { econ: 2, biz: 2 } },
    ],
  },
  {
    tag: "관심사 #10",
    text: "뉴스 헤드라인 중 가장 먼저 클릭하는 건?",
    options: [
      { text: "현대차 신형 로봇 공개", weights: { mech: 3 } },
      { text: "OpenAI 신모델 발표", weights: { cs: 3, data: 1 } },
      { text: "신약 임상 3상 통과", weights: { pharm: 3, med: 2 } },
      { text: "코스피 사상 최고치", weights: { econ: 3, biz: 1 } },
    ],
  },
  {
    tag: "성향 #11",
    text: "낯선 도시 여행 — 나의 스타일은?",
    options: [
      { text: "지도 앱으로 최적 동선 코딩하듯 짜기", weights: { cs: 2, data: 2 } },
      { text: "환율·물가 비교해 가성비 루트", weights: { econ: 3, biz: 2 } },
      { text: "구급 키트·비상약부터 챙김", weights: { nurse: 3, med: 1 } },
      { text: "교통수단·구조물 사진 찍기", weights: { mech: 2, ee: 2 } },
    ],
  },
  {
    tag: "공감 #12",
    text: "친구가 다쳐서 피가 난다. 나는?",
    options: [
      { text: "침착하게 지혈하고 병원에 데려감", weights: { nurse: 3, med: 3 } },
      { text: "어떤 약을 먹어야 할지 검색", weights: { pharm: 3, med: 1 } },
      { text: "응급처치 영상을 빠르게 찾아 보여줌", weights: { cs: 1, nurse: 2 } },
      { text: "보험·치료비 처리부터 안내", weights: { biz: 2, econ: 1 } },
    ],
  },
  {
    tag: "취미 #13",
    text: "주말에 가장 하고 싶은 활동은?",
    options: [
      { text: "RC카·드론 조립하기", weights: { mech: 3, ee: 2 } },
      { text: "사이드 프로젝트 코딩", weights: { cs: 3 } },
      { text: "약국·병원 견학·봉사활동", weights: { pharm: 2, med: 2, nurse: 2 } },
      { text: "모의 투자 대회 참가", weights: { econ: 3, biz: 1, data: 1 } },
    ],
  },
  {
    tag: "꿈 #14",
    text: "10년 뒤 내 명함에 가장 어울릴 직함은?",
    options: [
      { text: "로봇 엔지니어 / 자율주행 연구원", weights: { mech: 3, ee: 1 } },
      { text: "AI 엔지니어 / 데이터 과학자", weights: { cs: 3, data: 2 } },
      { text: "의사 / 약사 / 임상 연구원", weights: { med: 3, pharm: 2, nurse: 1 } },
      { text: "경영 컨설턴트 / 펀드매니저", weights: { biz: 3, econ: 2 } },
    ],
  },
  {
    tag: "성향 #15",
    text: "내가 만족감을 느끼는 순간은?",
    options: [
      { text: "복잡한 기계가 매끄럽게 작동할 때", weights: { mech: 3, ee: 2 } },
      { text: "지저분한 데이터가 깔끔히 정리될 때", weights: { data: 3, cs: 2 } },
      { text: "누군가의 통증이 내 도움으로 사라질 때", weights: { nurse: 3, med: 2, pharm: 1 } },
      { text: "예측한 시장 흐름이 적중할 때", weights: { econ: 3, biz: 2 } },
    ],
  },
  {
    tag: "탐구 #16",
    text: "실험실에 들어간다면 끌리는 풍경은?",
    options: [
      { text: "거대한 CNC 기계와 부품들", weights: { mech: 3 } },
      { text: "회로 기판과 오실로스코프", weights: { ee: 3 } },
      { text: "비커, 시약, 세포 배양기", weights: { pharm: 2, med: 2 } },
      { text: "수많은 모니터와 실시간 차트", weights: { data: 3, econ: 1, cs: 1 } },
    ],
  },
  {
    tag: "성향 #17",
    text: "장기 프로젝트에서 내가 무너지는 순간은?",
    options: [
      { text: "설계도가 흐트러질 때", weights: { mech: 2, ee: 2 } },
      { text: "버그가 잡히지 않을 때", weights: { cs: 3 } },
      { text: "환자/사용자가 회복되지 않을 때", weights: { med: 2, nurse: 2 } },
      { text: "수치가 예상을 벗어날 때", weights: { econ: 2, data: 2, biz: 1 } },
    ],
  },
  {
    tag: "관심사 #18",
    text: "가장 끌리는 다큐멘터리 주제는?",
    options: [
      { text: "스페이스X와 화성 이주", weights: { mech: 3, ee: 1 } },
      { text: "딥러닝, 사라진 직업들", weights: { cs: 2, data: 2 } },
      { text: "암 정복의 역사", weights: { med: 3, pharm: 2 } },
      { text: "월스트리트 금융 위기", weights: { econ: 3, biz: 2 } },
    ],
  },
  {
    tag: "독서 #19",
    text: "서점에서 가장 오래 머무는 코너는?",
    options: [
      { text: "공학·물리 교양서", weights: { mech: 2, ee: 2 } },
      { text: "프로그래밍·AI", weights: { cs: 3, data: 1 } },
      { text: "의학·생명과학·뇌", weights: { med: 3, pharm: 1, nurse: 1 } },
      { text: "경제·경영·자기계발", weights: { biz: 3, econ: 2 } },
    ],
  },
  {
    tag: "기여 #20",
    text: "내가 세상에 남기고 싶은 영향은?",
    options: [
      { text: "더 빠르고 안전한 이동수단", weights: { mech: 3 } },
      { text: "더 똑똑한 소프트웨어와 서비스", weights: { cs: 3, data: 1 } },
      { text: "더 건강한 인류와 새로운 치료법", weights: { med: 2, pharm: 2, nurse: 2 } },
      { text: "더 효율적인 시장과 부의 분배", weights: { econ: 2, biz: 3 } },
    ],
  },
  {
    tag: "환경 #21",
    text: "내가 일하고 싶은 공간은?",
    options: [
      { text: "공장·연구소의 거대한 작업장", weights: { mech: 3, ee: 1 } },
      { text: "조용한 사무실, 듀얼 모니터 앞", weights: { cs: 2, data: 3, econ: 1 } },
      { text: "병원·약국·임상 현장", weights: { med: 2, pharm: 2, nurse: 3 } },
      { text: "유리 빌딩 회의실, 글로벌 회의", weights: { biz: 3, econ: 1 } },
    ],
  },
  {
    tag: "도전 #22",
    text: "친구들과 사업 아이디어를 낸다면 내 포지션은?",
    options: [
      { text: "하드웨어 시제품 제작", weights: { mech: 3, ee: 2 } },
      { text: "앱·웹 서비스 개발", weights: { cs: 3 } },
      { text: "헬스케어·의료 도메인 자문", weights: { med: 2, nurse: 2, pharm: 1 } },
      { text: "재무·투자유치 총괄", weights: { biz: 3, econ: 2 } },
    ],
  },
  {
    tag: "감각 #23",
    text: "내가 가장 자신 있는 감각은?",
    options: [
      { text: "공간감각·손기술", weights: { mech: 3, ee: 1 } },
      { text: "패턴 인식·논리력", weights: { cs: 3, data: 2 } },
      { text: "관찰력·세심함", weights: { med: 2, pharm: 3, nurse: 2 } },
      { text: "직관·설득력", weights: { biz: 3, econ: 1 } },
    ],
  },
  {
    tag: "마지막 #24",
    text: "내 인생을 한 문장으로 표현한다면?",
    options: [
      { text: "\"세상을 움직이는 것을 만든다\"", weights: { mech: 3, ee: 2 } },
      { text: "\"보이지 않는 것을 코드로 짠다\"", weights: { cs: 3, data: 2 } },
      { text: "\"생명을 지키고 살린다\"", weights: { med: 3, pharm: 2, nurse: 3 } },
      { text: "\"가치를 만들고 흐르게 한다\"", weights: { biz: 3, econ: 3 } },
    ],
  },
];

export interface MajorResult {
  key: MajorKey;
  category: CategoryKey;
  categoryLabel: string;
  emoji: string;
  name: string;          // 매칭 학과 메인
  type: string;          // 성향 타입 카피
  tagline: string;       // 한 줄 카피
  description: string;   // 성향 분석
  traits: string[];      // 키워드
  similarMajors: string[]; // 비슷한 학과 TOP3
  careers: string[];
  universities: { name: string; note: string }[];
  subjects: { core: string[]; recommend: string[] };
  roadmap: { stage: string; title: string; detail: string }[];
  gradient: string;      // tailwind gradient classes
}

const G = {
  mech:  "from-orange-400 via-pink-500 to-violet-500",
  ee:    "from-cyan-400 via-blue-500 to-indigo-600",
  cs:    "from-violet-500 via-fuchsia-500 to-pink-500",
  med:   "from-rose-400 via-red-500 to-pink-600",
  pharm: "from-emerald-400 via-teal-500 to-cyan-500",
  nurse: "from-pink-400 via-rose-400 to-orange-400",
  biz:   "from-amber-400 via-orange-500 to-rose-500",
  econ:  "from-indigo-400 via-blue-500 to-cyan-500",
  data:  "from-fuchsia-500 via-purple-500 to-indigo-600",
};

export const RESULTS: Record<MajorKey, MajorResult> = {
  mech: {
    key: "mech", category: "engineering", categoryLabel: "공학 계열",
    emoji: "⚙️",
    name: "기계공학과",
    type: "메이커형 엔지니어",
    tagline: "세상을 움직이는 것을 직접 만드는 사람",
    description:
      "당신은 손으로 만지고 조립하며 원리를 체득하는 타입이에요. 복잡한 기계가 매끄럽게 작동할 때 가장 큰 만족을 느끼며, 공간감각과 물리적 직관이 뛰어납니다.",
    traits: ["공간감각", "손기술", "물리적 직관", "끈기", "구조적 사고"],
    similarMajors: ["기계공학과", "자동차공학과", "항공우주공학과"],
    careers: ["자동차 엔지니어", "로봇 공학자", "항공우주 기술자", "기계 설계자", "벤처 창업자"],
    universities: [
      { name: "서울대 기계공학부", note: "기하·미적분Ⅱ + 과학 진로선택 3과목 권장" },
      { name: "중앙대 기계공학부", note: "미적분Ⅱ·기하·물리학·화학 모두 핵심" },
      { name: "인하대 기계공학과", note: "물리학 핵심, 화학은 권장 과목" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "미적분Ⅱ", "기하", "물리학", "역학과 에너지"],
      recommend: ["화학", "전자기와 양자", "수학과제 탐구"],
    },
    roadmap: [
      { stage: "초등", title: "기초 물리 호기심", detail: "물체의 무게·수평 잡기·속력 단원에서 실험에 적극 참여하기" },
      { stage: "중등", title: "운동과 에너지", detail: "힘·속력·일과 에너지 개념을 그림으로 정리, 과학동아리 활동" },
      { stage: "고등", title: "물리 + 미적분 트랙", detail: "물리학·역학과 에너지를 이수하고 자율주행/로봇 R&E 도전" },
    ],
    gradient: G.mech,
  },
  ee: {
    key: "ee", category: "engineering", categoryLabel: "공학 계열",
    emoji: "⚡",
    name: "전기전자공학과",
    type: "회로 설계형 탐험가",
    tagline: "보이지 않는 전자의 흐름을 설계하는 사람",
    description:
      "회로 기판을 보면 두근거리고, 어떤 기계든 분해해 보고 싶은 호기심이 강한 타입이에요. 미세한 전기 신호로 거대한 시스템을 움직이는 매력에 끌립니다.",
    traits: ["분석력", "정밀함", "수학적 사고", "호기심", "체계성"],
    similarMajors: ["전기전자공학과", "반도체공학과", "정보통신공학과"],
    careers: ["반도체 설계 엔지니어", "회로 설계자", "통신 장비 개발자", "디스플레이 연구원"],
    universities: [
      { name: "KAIST 전기및전자공학부", note: "물리학·미적분Ⅱ·기하 + 인공지능 수학 권장" },
      { name: "성균관대 반도체시스템공학과", note: "물리학·전자기와 양자 핵심" },
      { name: "한양대 전자공학부", note: "미적분Ⅱ·기하·물리학 핵심, 화학 권장" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "미적분Ⅱ", "기하", "물리학", "전자기와 양자"],
      recommend: ["화학", "화학 반응의 세계", "인공지능 수학"],
    },
    roadmap: [
      { stage: "초등", title: "전기 회로 체험", detail: "전구·자석 실험, 간단한 회로 키트로 직접 불 켜보기" },
      { stage: "중등", title: "옴의 법칙 마스터", detail: "전압·전류·저항의 관계 심화, 자기장 발생 원리 이해" },
      { stage: "고등", title: "전자기 + 인공지능 수학", detail: "전자기와 양자 선택, 아두이노/라즈베리파이 프로젝트" },
    ],
    gradient: G.ee,
  },
  cs: {
    key: "cs", category: "engineering", categoryLabel: "공학 계열",
    emoji: "💻",
    name: "컴퓨터공학과",
    type: "코드 아키텍트형",
    tagline: "보이지 않는 세계를 코드로 짓는 사람",
    description:
      "복잡한 문제를 단계별 알고리즘으로 분해하는 것을 즐기고, 버그를 잡았을 때의 쾌감이 중독적인 타입이에요. 논리적 사고와 끈기가 가장 큰 무기입니다.",
    traits: ["논리적 사고", "패턴 인식", "끈기", "추상화 능력", "창의성"],
    similarMajors: ["컴퓨터공학과", "인공지능학과", "소프트웨어학부"],
    careers: ["AI 엔지니어", "백엔드 개발자", "정보보안 전문가", "게임 개발자", "스타트업 CTO"],
    universities: [
      { name: "서울대 컴퓨터공학부", note: "기하·미적분Ⅱ + 과학 진로선택 3과목 권장" },
      { name: "KAIST 전산학부", note: "정보·인공지능 수학 강력 권장" },
      { name: "고려대 컴퓨터학과", note: "확률과 통계·정보 핵심" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "미적분Ⅱ", "확률과 통계", "정보", "인공지능 수학"],
      recommend: ["이산 수학", "데이터 과학", "전자기와 양자"],
    },
    roadmap: [
      { stage: "초등", title: "스크래치/엔트리", detail: "블록 코딩으로 순서도와 알고리즘 개념 익히기" },
      { stage: "중등", title: "함수와 변수의 세계", detail: "수학 함수 영역 + Python 입문, 정보 올림피아드 도전" },
      { stage: "고등", title: "정보 + AI 수학 트랙", detail: "확률과 통계·인공지능 수학 이수, 깃허브 포트폴리오 운영" },
    ],
    gradient: G.cs,
  },
  med: {
    key: "med", category: "medical", categoryLabel: "의학 계열",
    emoji: "🩺",
    name: "의예과",
    type: "생명 분석형 치유자",
    tagline: "생명을 과학적으로 이해하고 지키는 사람",
    description:
      "사람의 몸과 생명 현상에 대한 끝없는 호기심과 책임감을 가진 타입이에요. 분석적 사고력과 공감 능력이 균형 잡혀 있어 환자를 돕는 직업에 적합합니다.",
    traits: ["관찰력", "책임감", "분석력", "공감 능력", "성실성"],
    similarMajors: ["의예과", "치의예과", "한의예과"],
    careers: ["의사", "치과의사", "한의사", "의학 연구원", "의대 교수", "보건의료 행정가"],
    universities: [
      { name: "서울대 의예과", note: "생명과학 핵심, 세포와 물질대사·생물의 유전 권장" },
      { name: "연세대 의예과", note: "화학·생명과학 핵심, 미적분Ⅱ 권장" },
      { name: "중앙대 의학부", note: "과학 진로선택 3과목 이상 권장" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "미적분Ⅱ", "확률과 통계", "화학", "생명과학"],
      recommend: ["기하", "세포와 물질대사", "생물의 유전", "화학 반응의 세계"],
    },
    roadmap: [
      { stage: "초등", title: "우리 몸 탐험", detail: "뼈·근육·소화기관 단원 학습, 인체 도감 읽기" },
      { stage: "중등", title: "동물과 에너지", detail: "소화·순환·호흡·배설 심화, 생명과학 동아리 활동" },
      { stage: "고등", title: "생명과학 + 화학", detail: "세포와 물질대사·생물의 유전 선택, 의학 봉사 활동" },
    ],
    gradient: G.med,
  },
  pharm: {
    key: "pharm", category: "medical", categoryLabel: "의학 계열",
    emoji: "💊",
    name: "약학과",
    type: "정밀 분석형 연구자",
    tagline: "분자 단위로 인류의 건강을 설계하는 사람",
    description:
      "미세한 화학 변화와 분자 구조에 매료되는 타입이에요. 꼼꼼함과 정밀함이 뛰어나며, 약물의 작용 원리를 파헤치는 연구에 적합합니다.",
    traits: ["정밀함", "분석력", "암기력", "탐구심", "윤리 의식"],
    similarMajors: ["약학과", "제약학과", "한약학과"],
    careers: ["약사", "의약품 개발 연구원", "변리사", "식약처 공무원", "제약회사 R&D"],
    universities: [
      { name: "서울대 약학대학", note: "화학·생명과학 핵심, 화학 반응의 세계 권장" },
      { name: "이화여대 약학과", note: "화학·생명과학·미적분Ⅱ 권장" },
      { name: "중앙대 약학부", note: "과학 진로선택 3과목 이상 권장" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "미적분Ⅱ", "확률과 통계", "화학", "생명과학"],
      recommend: ["물질과 에너지", "화학 반응의 세계", "세포와 물질대사", "생물의 유전"],
    },
    roadmap: [
      { stage: "초등", title: "용해와 용액", detail: "산과 염기·여러 가지 기체 실험에 적극 참여하기" },
      { stage: "중등", title: "물질의 구성", detail: "원자·분자·이온, 화학 반응의 규칙성 심화 학습" },
      { stage: "고등", title: "화학 심화 트랙", detail: "화학Ⅰ·Ⅱ·물질과 에너지 이수, 약국 직업 체험" },
    ],
    gradient: G.pharm,
  },
  nurse: {
    key: "nurse", category: "medical", categoryLabel: "의학 계열",
    emoji: "🌷",
    name: "간호학과",
    type: "공감형 케어테이커",
    tagline: "곁에서 사람을 살리는 따뜻한 전문가",
    description:
      "타인의 고통에 민감하게 반응하고 곧바로 행동으로 옮기는 타입이에요. 책임감과 침착함, 공감 능력이 균형 있어 의료 현장에서 빛나는 사람입니다.",
    traits: ["공감 능력", "침착함", "체력", "책임감", "소통 능력"],
    similarMajors: ["간호학과", "보건학과", "임상병리학과"],
    careers: ["간호사", "보건교사", "의료 코디네이터", "임상병리사", "물리치료사", "보건직 공무원"],
    universities: [
      { name: "서울대 간호대학", note: "생명과학 핵심, 화학·미적분Ⅱ 권장" },
      { name: "연세대 간호학과", note: "확률과 통계·생명과학 핵심" },
      { name: "고려대 간호대학", note: "생활과 과학·세포와 물질대사 권장" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "확률과 통계", "생명과학"],
      recommend: ["화학", "미적분Ⅱ", "세포와 물질대사", "생활과 과학"],
    },
    roadmap: [
      { stage: "초등", title: "동물·식물의 생활", detail: "생명체의 특성을 관찰하고 기록하는 습관 만들기" },
      { stage: "중등", title: "자극과 반응", detail: "생식과 발생 단원으로 인체 조절 기제 학습" },
      { stage: "고등", title: "생명과학 + 봉사", detail: "확률과 통계 이수, 병원·요양원 봉사로 현장 감각" },
    ],
    gradient: G.nurse,
  },
  biz: {
    key: "biz", category: "business", categoryLabel: "상경 계열",
    emoji: "📈",
    name: "경영학과",
    type: "리더십 기획형",
    tagline: "사람과 자원을 움직여 가치를 만드는 사람",
    description:
      "팀을 이끌고 판을 짜는 데서 에너지를 얻는 타입이에요. 큰 그림을 보는 능력과 설득력, 의사결정의 직관이 뛰어나 비즈니스 현장에 적합합니다.",
    traits: ["리더십", "기획력", "설득력", "의사결정", "추진력"],
    similarMajors: ["경영학과", "회계학과", "자율전공학부(인문사회)"],
    careers: ["경영 컨설턴트", "회계사", "마케팅 전문가", "노무사", "스타트업 CEO"],
    universities: [
      { name: "서울대 경영학과", note: "확률과 통계 핵심, 경제·사회와 문화 권장" },
      { name: "연세대 경영학과", note: "대수·미적분Ⅰ·확률과 통계 강력 권장" },
      { name: "국민대 경영학과", note: "확률과 통계 핵심, 경제 수학 권장" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "확률과 통계"],
      recommend: ["경제 수학", "경제", "영어Ⅰ·Ⅱ", "사회와 문화"],
    },
    roadmap: [
      { stage: "초등", title: "비와 비율", detail: "그래프 해석 + 우리 경제의 성장과 발전 단원 친숙해지기" },
      { stage: "중등", title: "자료와 가능성", detail: "대푯값·산포도 + 경제 생활과 선택 단원 마스터" },
      { stage: "고등", title: "확률과 통계 + 경제", detail: "경영 동아리·모의 창업 대회 도전, 영어 역량 강화" },
    ],
    gradient: G.biz,
  },
  econ: {
    key: "econ", category: "business", categoryLabel: "상경 계열",
    emoji: "💹",
    name: "경제학과",
    type: "수리 분석형 이코노미스트",
    tagline: "숫자로 세상의 흐름을 읽는 사람",
    description:
      "사회 현상을 모델과 그래프로 설명하는 데 매력을 느끼는 타입이에요. 수리적 사고와 거시적 통찰을 결합해 시장과 정책을 분석하는 데 적합합니다.",
    traits: ["수리적 사고", "논리력", "거시적 안목", "분석력", "객관성"],
    similarMajors: ["경제학과", "국제통상학과", "금융학과"],
    careers: ["이코노미스트", "관세사", "금융 자산 운용가", "외교관", "국책 연구원"],
    universities: [
      { name: "서울대 경제학부", note: "미적분Ⅱ·확률과 통계·경제 권장" },
      { name: "부산대 경제학부", note: "확률과 통계·미적분Ⅰ·Ⅱ 중 1과목 이상 권장" },
      { name: "한양대 경제금융학부", note: "대수·미적분Ⅰ·확률과 통계 핵심" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "확률과 통계", "경제"],
      recommend: ["미적분Ⅱ", "경제 수학", "국제 관계의 이해", "세계사", "제2외국어"],
    },
    roadmap: [
      { stage: "초등", title: "수의 범위·어림", detail: "세계 여러 나라의 인문 환경 단원으로 글로벌 감각" },
      { stage: "중등", title: "함수와 부등식", detail: "국제 사회와 국제 환경 단원 + 경제 뉴스 매일 보기" },
      { stage: "고등", title: "미적분 + 경제", detail: "경제 수학·국제 관계의 이해 이수, 모의 투자 대회" },
    ],
    gradient: G.econ,
  },
  data: {
    key: "data", category: "business", categoryLabel: "상경 계열",
    emoji: "📊",
    name: "데이터사이언스/AI빅데이터융합경영학과",
    type: "데이터 인사이트형",
    tagline: "데이터에서 비즈니스 인사이트를 발굴하는 사람",
    description:
      "지저분한 데이터를 깔끔하게 정리하고 패턴을 발견할 때 짜릿함을 느끼는 타입이에요. 통계적 직관과 코딩 능력, 비즈니스 감각이 결합된 첨단 상경인입니다.",
    traits: ["통계적 사고", "코딩 능력", "패턴 인식", "호기심", "비즈니스 감각"],
    similarMajors: ["AI빅데이터융합경영학과", "데이터사이언스학과", "경영정보학부"],
    careers: ["빅데이터 분석가", "BI 전문가", "마케팅 데이터 분석가", "IT 서비스 기획자"],
    universities: [
      { name: "성균관대 글로벌융합학부", note: "정보·인공지능 수학·확률과 통계 핵심" },
      { name: "한양대 데이터사이언스학과", note: "미적분Ⅱ·데이터 과학 강력 권장" },
      { name: "중앙대 AI학과", note: "정보·인공지능 수학·확률과 통계 핵심" },
    ],
    subjects: {
      core: ["대수", "미적분Ⅰ", "확률과 통계", "정보"],
      recommend: ["인공지능 수학", "데이터 과학", "미적분Ⅱ", "기술·가정"],
    },
    roadmap: [
      { stage: "초등", title: "그래프 정리", detail: "띠그래프·원그래프로 자료 표현, 스크래치로 논리력 키우기" },
      { stage: "중등", title: "산점도와 상자그림", detail: "정보 교과의 데이터 처리 기초 + Python 입문" },
      { stage: "고등", title: "정보 + AI 수학", detail: "데이터 과학 선택, Kaggle/공모전으로 포트폴리오" },
    ],
    gradient: G.data,
  },
};

export function calculateResult(
  selections: number[],
): MajorResult {
  const scores: Record<MajorKey, number> = {
    mech: 0, ee: 0, cs: 0, med: 0, pharm: 0, nurse: 0, biz: 0, econ: 0, data: 0,
  };
  selections.forEach((optionIndex, qIndex) => {
    const q = QUESTIONS[qIndex];
    if (!q) return;
    const opt = q.options[optionIndex];
    if (!opt) return;
    Object.entries(opt.weights).forEach(([k, v]) => {
      scores[k as MajorKey] += v ?? 0;
    });
  });
  const top = (Object.entries(scores) as [MajorKey, number][])
    .sort((a, b) => b[1] - a[1])[0][0];
  return RESULTS[top];
}