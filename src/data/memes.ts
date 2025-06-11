export interface Meme {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  category: string;
  popularity: number;
}

export const memes: Meme[] = [
  // 2010
  {
    id: "rage-comics-2010",
    title: "Rage Comics",
    description:
      "Простые комиксы с эмоциональными лицами, ставшие основой мемной культуры",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    year: 2010,
    category: "Comics",
    popularity: 95,
  },
  {
    id: "forever-alone-2010",
    title: "Forever Alone",
    description: "Мем о вечном одиночестве, ставший символом интровертов",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616c9bc49e6?w=400&h=300&fit=crop",
    year: 2010,
    category: "Emotion",
    popularity: 88,
  },

  // 2011
  {
    id: "nyan-cat-2011",
    title: "Nyan Cat",
    description: "Летающий кот с радугой, ставший интернет-сенсацией",
    imageUrl:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    year: 2011,
    category: "Animation",
    popularity: 92,
  },
  {
    id: "troll-face-2011",
    title: "Troll Face",
    description: "Ухмылающееся лицо троллинга в интернете",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    year: 2011,
    category: "Troll",
    popularity: 89,
  },

  // 2012
  {
    id: "gangnam-style-2012",
    title: "Gangnam Style",
    description: "Вирусный танец PSY, покоривший весь мир",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    year: 2012,
    category: "Music",
    popularity: 98,
  },
  {
    id: "overly-attached-girlfriend-2012",
    title: "Overly Attached Girlfriend",
    description:
      "Девушка с навязчивым взглядом стала мемом о токсичных отношениях",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616c9bc49e6?w=400&h=300&fit=crop",
    year: 2012,
    category: "Reaction",
    popularity: 85,
  },

  // 2013
  {
    id: "doge-2013",
    title: "Doge",
    description: "Собака породы сиба-ину с внутренним монологом 'much wow'",
    imageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    year: 2013,
    category: "Animal",
    popularity: 96,
  },
  {
    id: "harlem-shake-2013",
    title: "Harlem Shake",
    description: "Танцевальный вызов, охвативший YouTube",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    year: 2013,
    category: "Dance",
    popularity: 90,
  },

  // 2014
  {
    id: "ice-bucket-challenge-2014",
    title: "Ice Bucket Challenge",
    description: "Благотворительный вызов с ведром ледяной воды",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    year: 2014,
    category: "Challenge",
    popularity: 87,
  },
  {
    id: "but-thats-none-of-my-business-2014",
    title: "But That's None of My Business",
    description: "Kermit пьет чай и высказывает неудобные истины",
    imageUrl:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    year: 2014,
    category: "Reaction",
    popularity: 83,
  },

  // 2015
  {
    id: "dress-color-debate-2015",
    title: "The Dress",
    description: "Платье, которое разделило интернет на два лагеря по цвету",
    imageUrl:
      "https://images.unsplash.com/photo-1566479179817-05f2f0b39f8b?w=400&h=300&fit=crop",
    year: 2015,
    category: "Viral",
    popularity: 94,
  },
  {
    id: "left-shark-2015",
    title: "Left Shark",
    description: "Неуклюжая акула с выступления Кэти Перри на Super Bowl",
    imageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    year: 2015,
    category: "Sports",
    popularity: 79,
  },

  // 2016
  {
    id: "harambe-2016",
    title: "Harambe",
    description: "Горилла, ставшая символом несправедливости",
    imageUrl:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    year: 2016,
    category: "Memorial",
    popularity: 86,
  },
  {
    id: "dat-boi-2016",
    title: "Dat Boi",
    description: "Лягушка на одноколесном велосипеде 'O shit waddup!'",
    imageUrl:
      "https://images.unsplash.com/photo-1531150297876-47bd625b7b7f?w=400&h=300&fit=crop",
    year: 2016,
    category: "Absurd",
    popularity: 81,
  },

  // 2017
  {
    id: "distracted-boyfriend-2017",
    title: "Distracted Boyfriend",
    description:
      "Парень оборачивается на другую девушку - шаблон для любых сравнений",
    imageUrl:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=400&h=300&fit=crop",
    year: 2017,
    category: "Stock Photo",
    popularity: 97,
  },
  {
    id: "salt-bae-2017",
    title: "Salt Bae",
    description: "Турецкий повар с фирменным жестом посыпания соли",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    year: 2017,
    category: "Celebrity",
    popularity: 84,
  },

  // 2018
  {
    id: "ugandan-knuckles-2018",
    title: "Ugandan Knuckles",
    description: "VRChat персонаж, который 'знает дорогу'",
    imageUrl:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    year: 2018,
    category: "Gaming",
    popularity: 78,
  },
  {
    id: "this-is-america-2018",
    title: "This Is America",
    description: "Социальный клип Чайлдиша Гамбино стал мемом",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    year: 2018,
    category: "Music",
    popularity: 88,
  },

  // 2019
  {
    id: "area-51-raid-2019",
    title: "Area 51 Raid",
    description:
      "Массовое мероприятие 'Штурм Зоны 51' стало интернет-феноменом",
    imageUrl:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    year: 2019,
    category: "Event",
    popularity: 85,
  },
  {
    id: "woman-yelling-at-cat-2019",
    title: "Woman Yelling at Cat",
    description: "Женщина кричит на невозмутимого кота за столом",
    imageUrl:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    year: 2019,
    category: "Reaction",
    popularity: 91,
  },

  // 2020
  {
    id: "among-us-2020",
    title: "Among Us",
    description: "Игра о предателях стала мемом о подозрительном поведении",
    imageUrl:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    year: 2020,
    category: "Gaming",
    popularity: 93,
  },
  {
    id: "tiger-king-2020",
    title: "Tiger King",
    description: "Документальный сериал Netflix породил множество мемов",
    imageUrl:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=300&fit=crop",
    year: 2020,
    category: "TV",
    popularity: 82,
  },

  // 2021
  {
    id: "bernie-mittens-2021",
    title: "Bernie Sanders Mittens",
    description: "Берни Сандерс в варежках на инаугурации стал мемом",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    year: 2021,
    category: "Politics",
    popularity: 89,
  },
  {
    id: "doge-to-the-moon-2021",
    title: "Doge to the Moon",
    description: "Криптовалютный мем о росте Dogecoin",
    imageUrl:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
    year: 2021,
    category: "Crypto",
    popularity: 87,
  },

  // 2022
  {
    id: "nft-monkey-2022",
    title: "Bored Ape NFT",
    description: "NFT обезьяны стали символом крипто-культуры",
    imageUrl:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
    year: 2022,
    category: "NFT",
    popularity: 76,
  },
  {
    id: "will-smith-slap-2022",
    title: "Will Smith Slap",
    description: "Пощечина на Оскаре стала мемом года",
    imageUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
    year: 2022,
    category: "Celebrity",
    popularity: 90,
  },

  // 2023
  {
    id: "chatgpt-memes-2023",
    title: "ChatGPT Memes",
    description: "Мемы о искусственном интеллекте и автоматизации",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    year: 2023,
    category: "AI",
    popularity: 88,
  },
  {
    id: "barbie-oppenheimer-2023",
    title: "Barbenheimer",
    description: "Феномен одновременного просмотра Барби и Оппенгеймера",
    imageUrl:
      "https://images.unsplash.com/photo-1489599163596-5b0b8c8fc3c6?w=400&h=300&fit=crop",
    year: 2023,
    category: "Movies",
    popularity: 85,
  },

  // 2024
  {
    id: "skibidi-toilet-2024",
    title: "Skibidi Toilet",
    description: "Вирусная серия YouTube о туалетах и камерах",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    year: 2024,
    category: "YouTube",
    popularity: 92,
  },
  {
    id: "brain-rot-2024",
    title: "Brain Rot",
    description: "Мемы о деградации интернет-контента",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    year: 2024,
    category: "Meta",
    popularity: 83,
  },
];
