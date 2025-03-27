export interface TimelineEvent {
  id: string
  year: number
  month?: number
  day?: number
  personId?: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  type: "birth" | "death" | "marriage" | "event" | "succession"
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "birth-muhammad",
    year: 570,
    personId: "muhammad",
    title: {
      en: "Birth of Prophet Muhammad (PBUH)",
      ar: "ولادة النبي محمد (صلى الله عليه وسلم)",
    },
    description: {
      en: "Prophet Muhammad (PBUH) was born in Mecca in the Year of the Elephant.",
      ar: "ولد النبي محمد (صلى الله عليه وسلم) في مكة في عام الفيل.",
    },
    type: "birth",
  },
  {
    id: "birth-ali",
    year: 601,
    month: 3,
    day: 13,
    personId: "ali",
    title: {
      en: "Birth of Hazrat Ali (R.A)",
      ar: "ولادة الإمام علي (رضي الله عنه)",
    },
    description: {
      en: "Hazrat Ali (R.A) was born inside the Kaaba in Mecca, the only person to have this distinction.",
      ar: "ولد الإمام علي (رضي الله عنه) داخل الكعبة في مكة، وهو الشخص الوحيد الذي حظي بهذا التمييز.",
    },
    type: "birth",
  },
  {
    id: "first-revelation",
    year: 610,
    personId: "muhammad",
    title: {
      en: "First Revelation to Prophet Muhammad (PBUH)",
      ar: "الوحي الأول للنبي محمد (صلى الله عليه وسلم)",
    },
    description: {
      en: "Prophet Muhammad (PBUH) received the first revelation of the Quran in the Cave of Hira.",
      ar: "تلقى النبي محمد (صلى الله عليه وسلم) الوحي الأول من القرآن في غار حراء.",
    },
    type: "event",
  },
  {
    id: "ali-accepts-islam",
    year: 610,
    personId: "ali",
    title: {
      en: "Hazrat Ali (R.A) Accepts Islam",
      ar: "الإمام علي (رضي الله عنه) يعتنق الإسلام",
    },
    description: {
      en: "Hazrat Ali (R.A) was the first male to accept Islam, at a young age of around 10 years.",
      ar: "كان الإمام علي (رضي الله عنه) أول الرجال إسلاماً، وكان عمره حوالي 10 سنوات.",
    },
    type: "event",
  },
  {
    id: "death-abu-talib",
    year: 619,
    personId: "abu-talib",
    title: {
      en: "Death of Abu Talib",
      ar: "وفاة أبو طالب",
    },
    description: {
      en: "Abu Talib, the father of Hazrat Ali (R.A) and uncle of Prophet Muhammad (PBUH), passed away.",
      ar: "توفي أبو طالب، والد الإمام علي (رضي الله عنه) وعم النبي محمد (صلى الله عليه وسلم).",
    },
    type: "death",
  },
  {
    id: "death-khadija",
    year: 619,
    personId: "khadija",
    title: {
      en: "Death of Khadija (R.A)",
      ar: "وفاة خديجة (رضي الله عنها)",
    },
    description: {
      en: "Khadija (R.A), the first wife of Prophet Muhammad (PBUH), passed away.",
      ar: "توفيت خديجة (رضي الله عنها)، الزوجة الأولى للنبي محمد (صلى الله عليه وسلم).",
    },
    type: "death",
  },
  {
    id: "hijra",
    year: 622,
    personId: "muhammad",
    title: {
      en: "The Hijra to Medina",
      ar: "الهجرة إلى المدينة",
    },
    description: {
      en: "Prophet Muhammad (PBUH) and his followers migrated from Mecca to Medina, marking the beginning of the Islamic calendar.",
      ar: "هاجر النبي محمد (صلى الله عليه وسلم) وأتباعه من مكة إلى المدينة، مما يمثل بداية التقويم الإسلامي.",
    },
    type: "event",
  },
  {
    id: "birth-hasan",
    year: 624,
    month: 3,
    personId: "hasan",
    title: {
      en: "Birth of Imam Hasan (R.A)",
      ar: "ولادة الإمام الحسن (رضي الله عنه)",
    },
    description: {
      en: "Imam Hasan (R.A), the eldest son of Hazrat Ali (R.A) and Fatima (R.A), was born.",
      ar: "ولد الإمام الحسن (رضي الله عنه)، الابن الأكبر للإمام علي (رضي الله عنه) وفاطمة (رضي الله عنها).",
    },
    type: "birth",
  },
  {
    id: "battle-badr",
    year: 624,
    personId: "ali",
    title: {
      en: "Battle of Badr",
      ar: "غزوة بدر",
    },
    description: {
      en: "Hazrat Ali (R.A) fought bravely in the Battle of Badr, the first major battle of Islam.",
      ar: "قاتل الإمام علي (رضي الله عنه) بشجاعة في غزوة بدر، أول معركة كبرى في الإسلام.",
    },
    type: "event",
  },
  {
    id: "birth-husain",
    year: 626,
    month: 1,
    personId: "husain",
    title: {
      en: "Birth of Imam Husain (R.A)",
      ar: "ولادة الإمام الحسين (رضي الله عنه)",
    },
    description: {
      en: "Imam Husain (R.A), the second son of Hazrat Ali (R.A) and Fatima (R.A), was born.",
      ar: "ولد الإمام الحسين (رضي الله عنه)، الابن الثاني للإمام علي (رضي الله عنه) وفاطمة (رضي الله عنها).",
    },
    type: "birth",
  },
  {
    id: "conquest-mecca",
    year: 630,
    personId: "muhammad",
    title: {
      en: "Conquest of Mecca",
      ar: "فتح مكة",
    },
    description: {
      en: "Prophet Muhammad (PBUH) and his followers peacefully conquered Mecca. Hazrat Ali (R.A) played a significant role in this event.",
      ar: "فتح النبي محمد (صلى الله عليه وسلم) وأتباعه مكة سلمياً. لعب الإمام علي (رضي الله عنه) دوراً مهماً في هذا الحدث.",
    },
    type: "event",
  },
  {
    id: "death-muhammad",
    year: 632,
    month: 6,
    day: 8,
    personId: "muhammad",
    title: {
      en: "Death of Prophet Muhammad (PBUH)",
      ar: "وفاة النبي محمد (صلى الله عليه وسلم)",
    },
    description: {
      en: "Prophet Muhammad (PBUH) passed away in Medina after completing his mission of establishing Islam.",
      ar: "توفي النبي محمد (صلى الله عليه وسلم) في المدينة بعد إكمال مهمته في تأسيس الإسلام.",
    },
    type: "death",
  },
  {
    id: "death-fatima",
    year: 632,
    personId: "fatima",
    title: {
      en: "Death of Fatima al-Zahra (R.A)",
      ar: "وفاة فاطمة الزهراء (رضي الله عنها)",
    },
    description: {
      en: "Fatima al-Zahra (R.A), the daughter of Prophet Muhammad (PBUH) and wife of Hazrat Ali (R.A), passed away a few months after her father.",
      ar: "توفيت فاطمة الزهراء (رضي الله عنها)، ابنة النبي محمد (صلى الله عليه وسلم) وزوجة الإمام علي (رضي الله عنه)، بعد بضعة أشهر من وفاة والدها.",
    },
    type: "death",
  },
  {
    id: "ali-caliph",
    year: 656,
    personId: "ali",
    title: {
      en: "Hazrat Ali (R.A) Becomes Caliph",
      ar: "الإمام علي (رضي الله عنه) يصبح خليفة",
    },
    description: {
      en: "Hazrat Ali (R.A) became the fourth Caliph of Islam after the martyrdom of Uthman (R.A).",
      ar: "أصبح الإمام علي (رضي الله عنه) الخليفة الرابع للإسلام بعد استشهاد عثمان (رضي الله عنه).",
    },
    type: "succession",
  },
  {
    id: "battle-jamal",
    year: 656,
    personId: "ali",
    title: {
      en: "Battle of Jamal",
      ar: "معركة الجمل",
    },
    description: {
      en: "The Battle of Jamal was fought between Hazrat Ali (R.A) and the forces led by Aisha, Talha, and Zubayr.",
      ar: "وقعت معركة الجمل بين الإمام علي (رضي الله عنه) والقوات التي قادتها عائشة وطلحة والزبير.",
    },
    type: "event",
  },
  {
    id: "battle-siffin",
    year: 657,
    personId: "ali",
    title: {
      en: "Battle of Siffin",
      ar: "معركة صفين",
    },
    description: {
      en: "The Battle of Siffin was fought between Hazrat Ali (R.A) and Muawiyah, the governor of Syria.",
      ar: "وقعت معركة صفين بين الإمام علي (رضي الله عنه) ومعاوية، والي سوريا.",
    },
    type: "event",
  },
  {
    id: "death-ali",
    year: 661,
    month: 1,
    day: 27,
    personId: "ali",
    title: {
      en: "Martyrdom of Hazrat Ali (R.A)",
      ar: "استشهاد الإمام علي (رضي الله عنه)",
    },
    description: {
      en: "Hazrat Ali (R.A) was martyred in Kufa after being struck with a poisoned sword by Ibn Muljam while praying in the mosque.",
      ar: "استشهد الإمام علي (رضي الله عنه) في الكوفة بعد أن ضربه ابن ملجم بسيف مسموم أثناء الصلاة في المسجد.",
    },
    type: "death",
  },
  {
    id: "hasan-caliph",
    year: 661,
    personId: "hasan",
    title: {
      en: "Imam Hasan (R.A) Becomes Caliph",
      ar: "الإمام الحسن (رضي الله عنه) يصبح خليفة",
    },
    description: {
      en: "Imam Hasan (R.A) became the fifth Caliph after the martyrdom of his father, Hazrat Ali (R.A).",
      ar: "أصبح الإمام الحسن (رضي الله عنه) الخليفة الخامس بعد استشهاد والده، الإمام علي (رضي الله عنه).",
    },
    type: "succession",
  },
  {
    id: "hasan-treaty",
    year: 661,
    personId: "hasan",
    title: {
      en: "Treaty with Muawiyah",
      ar: "معاهدة مع معاوية",
    },
    description: {
      en: "Imam Hasan (R.A) signed a peace treaty with Muawiyah to avoid bloodshed among Muslims, abdicating the caliphate.",
      ar: "وقع الإمام الحسن (رضي الله عنه) معاهدة سلام مع معاوية لتجنب إراقة الدماء بين المسلمين، متنازلاً عن الخلافة.",
    },
    type: "event",
  },
  {
    id: "death-hasan",
    year: 670,
    personId: "hasan",
    title: {
      en: "Death of Imam Hasan (R.A)",
      ar: "وفاة الإمام الحسن (رضي الله عنه)",
    },
    description: {
      en: "Imam Hasan (R.A) passed away in Medina, reportedly poisoned.",
      ar: "توفي الإمام الحسن (رضي الله عنه) في المدينة، ويقال إنه تم تسميمه.",
    },
    type: "death",
  },
  {
    id: "death-muawiyah",
    year: 680,
    title: {
      en: "Death of Muawiyah",
      ar: "وفاة معاوية",
    },
    description: {
      en: "Muawiyah passed away, and his son Yazid succeeded him as the ruler.",
      ar: "توفي معاوية، وخلفه ابنه يزيد كحاكم.",
    },
    type: "event",
  },
  {
    id: "karbala",
    year: 680,
    month: 10,
    day: 10,
    personId: "husain",
    title: {
      en: "Battle of Karbala",
      ar: "معركة كربلاء",
    },
    description: {
      en: "Imam Husain (R.A) and his companions were martyred at the Battle of Karbala by the forces of Yazid.",
      ar: "استشهد الإمام الحسين (رضي الله عنه) وأصحابه في معركة كربلاء على يد قوات يزيد.",
    },
    type: "event",
  },
  {
    id: "death-husain",
    year: 680,
    month: 10,
    day: 10,
    personId: "husain",
    title: {
      en: "Martyrdom of Imam Husain (R.A)",
      ar: "استشهاد الإمام الحسين (رضي الله عنه)",
    },
    description: {
      en: "Imam Husain (R.A) was martyred at Karbala, an event commemorated by Muslims during Muharram.",
      ar: "استشهد الإمام الحسين (رضي الله عنه) في كربلاء، وهو حدث يحييه المسلمون خلال شهر محرم.",
    },
    type: "death",
  },
  {
    id: "death-zainab",
    year: 682,
    personId: "zainab",
    title: {
      en: "Death of Zainab bint Ali (R.A)",
      ar: "وفاة زينب بنت علي (رضي الله عنها)",
    },
    description: {
      en: "Zainab bint Ali (R.A), the daughter of Hazrat Ali (R.A) and Fatima (R.A), passed away.",
      ar: "توفيت زينب بنت علي (رضي الله عنها)، ابنة الإمام علي (رضي الله عنه) وفاطمة (رضي الله عنها).",
    },
    type: "death",
  },
  {
    id: "death-ali-zain",
    year: 713,
    personId: "ali-zain",
    title: {
      en: "Death of Ali Zain al-Abidin",
      ar: "وفاة علي زين العابدين",
    },
    description: {
      en: "Ali Zain al-Abidin, the son of Imam Husain (R.A) and the fourth Imam according to Shia belief, passed away.",
      ar: "توفي علي زين العابدين، ابن الإمام الحسين (رضي الله عنه) والإمام الرابع حسب المعتقد الشيعي.",
    },
    type: "death",
  },
  {
    id: "death-muhammad-baqir",
    year: 733,
    personId: "muhammad-baqir",
    title: {
      en: "Death of Muhammad al-Baqir",
      ar: "وفاة محمد الباقر",
    },
    description: {
      en: "Muhammad al-Baqir, the son of Ali Zain al-Abidin and the fifth Imam according to Shia belief, passed away.",
      ar: "توفي محمد الباقر، ابن علي زين العابدين والإمام الخامس حسب المعتقد الشيعي.",
    },
    type: "death",
  },
]

// Helper function to get timeline events in the current language
export const getTimelineEvents = (language: "en" | "ar") => {
  return timelineEvents.map((event) => ({
    ...event,
    title: event.title[language],
    description: event.description[language],
  }))
}

