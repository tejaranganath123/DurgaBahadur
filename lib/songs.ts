// Audio lives in public/music/<category>/. Add a file there, then a line here.
export const categories = [
  { id: 'theme', name: 'Theme', blurb: 'Anthems & tributes', tint: 'from-[#6d28d9] to-[#1e1b4b]' },
  { id: 'dance', name: 'Dance', blurb: 'Floor fillers', tint: 'from-[#db2777] to-[#3b0764]' },
  { id: 'love', name: 'Love Songs', blurb: 'Melodies of the heart', tint: 'from-[#e11d48] to-[#4c0519]' },
  { id: 'sad', name: 'Sad Songs', blurb: 'Quiet & soulful', tint: 'from-[#2563eb] to-[#172554]' },
  { id: 'experimental', name: 'Experimental', blurb: 'Trance, fusion & beyond', tint: 'from-[#0d9488] to-[#042f2e]' },
] as const

export type CategoryId = (typeof categories)[number]['id']

const song = (category: CategoryId, file: string, title: string, seconds: number) => ({ category, title, seconds, src: `/music/${category}/${file}.mp3` })

export const songs = [
  song('theme', 'srh-theme', 'SRH Theme Song', 115),
  song('theme', 'rajni-sir', 'Rajni Sir Tribute', 200),
  song('theme', 'liger', 'Liger', 191),
  song('theme', 'jai-sree-ram', 'Jai Sree Ram', 241),
  song('theme', 'patriotic', 'Patriotic', 231),
  song('theme', 'humanity-first', 'Humanity First', 270),
  song('dance', 'jai-ganesha', 'Jai Ganesha', 246),
  song('dance', 'pilla-dana', 'Pilla Dana', 204),
  song('dance', 'tanga-math', 'Tanga Math', 196),
  song('love', 'ae-ajnabee', 'Ae Ajnabee', 338),
  song('love', 'dil-ki-manmaniyan', 'Dil Ki Manmaniyan', 236),
  song('love', 'reetigowla', 'Reetigowla', 240),
  song('sad', 'oh-pranayama', 'Oh Pranayama', 202),
  song('sad', 'womens-day', "Women's Day", 288),
  song('experimental', 'bairaagi', 'Bairaagi — A Prevailing Love Story', 108),
  song('experimental', 'shiv-trance', 'Shiv Trance', 244),
  song('experimental', 'sid-namah-shivayya', 'Sid Namah Shivayya', 269),
]

export type Song = (typeof songs)[number]
