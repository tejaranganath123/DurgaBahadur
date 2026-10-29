'use client'

import { useRef, useState } from 'react'
import { categories, songs, type CategoryId, type Song } from '@/lib/songs'
import { ArrowUpRight, Menu, Pause, Play, SkipBack, SkipForward, X } from 'lucide-react'

// Background-removed cutout; graded to warm monochrome in CSS below
const portrait = '/durga.png'
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
const categoryName = (id: CategoryId) => categories.find((c) => c.id === id)!.name
const nav = [['Home', '/'], ['Music', '#music'], ['Academy', '/#academy'], ['Gallery', '/#gallery'], ['Contact', '/#contact']]

export default function Page() {
  const [menu, setMenu] = useState(false); const [filter, setFilter] = useState<CategoryId | 'all'>('all')
  const [current, setCurrent] = useState<Song | null>(null); const [playing, setPlaying] = useState(false); const [time, setTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const filtered = filter === 'all' ? songs : songs.filter((s) => s.category === filter)
  const play = (song: Song) => {
    const audio = audioRef.current; if (!audio) return
    if (current === song) { if (audio.paused) void audio.play(); else audio.pause(); return }
    audio.src = song.src; setCurrent(song); setTime(0); void audio.play().catch(() => undefined)
  }
  const skip = (step: number) => { const i = current ? songs.indexOf(current) : -1; play(songs[(i + step + songs.length) % songs.length]) }
  const openCategory = (id: CategoryId) => { setFilter(id); document.getElementById('music')?.scrollIntoView() }
  const featured = songs[0]
  return <main className="min-h-screen bg-background pb-24">
    <header className="fixed inset-x-0 top-0 z-40 bg-black"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-10"><nav className={`${menu ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 bg-black px-5 py-5 md:static md:flex md:flex-row md:gap-8 md:p-0`}>{nav.map(([item, href]) => <a key={item} href={href} onClick={() => setMenu(false)} className={`font-display text-sm font-medium uppercase tracking-wider ${item === 'Music' ? 'text-primary' : 'text-white hover:text-primary'}`}>{item}</a>)}</nav><button className="text-white md:hidden" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button><a href="/#contact" className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary">Book Durga</a></div></header>

    <section id="home" className="relative flex min-h-[760px] flex-col overflow-hidden bg-[radial-gradient(ellipse_at_68%_38%,#55514c_0%,#2a2826_32%,#121212_62%,#080808_100%)] pb-36 pt-14 lg:min-h-[88vh] lg:pb-44">
      <img src={portrait} alt="Durga Bahadur, music director, listening on headphones" className="pointer-events-none absolute bottom-0 right-[-12%] h-[62%] max-w-none [filter:grayscale(1)_sepia(.35)_contrast(1.1)_brightness(.95)] [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_75%,transparent),linear-gradient(to_right,transparent,black_20%,black_85%,transparent)] sm:right-0 lg:right-[16%] lg:h-[92%]" />
      <div className="relative mx-auto w-full max-w-6xl flex-1 px-5 pt-16 lg:px-10 lg:pt-[10vh]">
        <h1 className="font-display text-[clamp(3.25rem,8vw,6.5rem)] font-light uppercase leading-none tracking-wide text-primary">Durga Bahadur</h1>
        <p className="mt-3 font-serif text-lg italic text-white md:text-xl">Music director. Composer. Teacher.</p>
        <p className="mt-6 max-w-md leading-7 text-white/75">Music director and composer — film themes, devotional anthems, dance numbers and melodies, plus the founder of Artshala Music Academy.</p>
        <div className="mt-6 flex max-w-xl flex-wrap gap-x-6 gap-y-2">{categories.map((c) => <button key={c.id} onClick={() => openCategory(c.id)} className="font-display text-sm font-medium uppercase tracking-wider text-white/85 hover:text-primary">♪ {c.name}</button>)}</div>
        <div className="mt-8 flex flex-wrap items-center gap-6"><button onClick={() => play(featured)} className="flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display text-sm font-medium uppercase tracking-[.15em] text-primary-foreground hover:bg-white">{current === featured && playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />} Play showreel</button><a href="#music" className="font-display text-sm font-medium uppercase tracking-[.15em] text-white/85 hover:text-primary">All {songs.length} tracks <ArrowUpRight className="inline size-4" /></a></div>
      </div>
    </section>

    <section aria-label="Music categories" className="relative z-10 mx-auto -mt-28 max-w-6xl px-5 lg:-mt-36 lg:px-10"><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{categories.map((c) => <button key={c.id} onClick={() => openCategory(c.id)} className="group flex h-48 flex-col justify-between border border-border bg-[#141312]/90 p-5 text-left shadow-2xl backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary md:h-60"><span className="font-display text-xs font-medium uppercase tracking-[.2em] text-primary">{songs.filter((s) => s.category === c.id).length} tracks</span><span><span className="block font-display text-2xl font-light uppercase leading-none tracking-wide text-white group-hover:text-primary">{c.name}</span><span className="mt-2 block font-serif text-sm italic text-muted-foreground">{c.blurb}</span></span></button>)}</div></section>

    <section id="music" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-10"><div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h2 className="font-display text-5xl font-light uppercase tracking-wide text-primary md:text-6xl">Music</h2><p className="mt-2 font-serif italic text-muted-foreground">Every track, one click away.</p><span className="mt-5 block h-px w-10 bg-primary" /></div><div className="flex flex-wrap gap-x-6 gap-y-2">{[{ id: 'all' as const, name: 'All' }, ...categories].map((c) => <button key={c.id} onClick={() => setFilter(c.id)} className={`border-b pb-1 font-display text-sm font-medium uppercase tracking-wider ${filter === c.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-white'}`}>{c.name}</button>)}</div></div>
      <ol className="divide-y divide-border border-y border-border">{filtered.map((s, i) => { const active = current === s; return <li key={s.src}><button onClick={() => play(s)} className={`grid w-full grid-cols-[2rem_2.25rem_1fr_auto] items-center gap-3 px-2 py-4 text-left hover:bg-card md:grid-cols-[2.5rem_2.25rem_1fr_10rem_4rem] ${active ? 'text-primary' : 'text-white'}`}><span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</span><span className={`grid size-8 place-items-center rounded-full ${active ? 'bg-primary text-primary-foreground' : 'border border-border text-primary'}`}>{active && playing ? <Pause className="size-3.5 fill-current" /> : <Play className="ml-0.5 size-3.5 fill-current" />}</span><span className="font-display text-lg uppercase tracking-wide">{s.title}</span><span className="hidden font-serif text-sm italic text-muted-foreground md:block">{categoryName(s.category)}</span><span className="text-right font-display text-sm text-muted-foreground">{fmt(s.seconds)}</span></button></li> })}</ol>
    </section>
    <audio ref={audioRef} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)} onEnded={() => skip(1)} />
    {current && <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/40 bg-black px-5 py-3"><div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-4"><button aria-label="Previous track" onClick={() => skip(-1)} className="hidden text-muted-foreground hover:text-primary sm:block"><SkipBack className="size-4 fill-current" /></button><button aria-label={playing ? 'Pause' : 'Play'} onClick={() => play(current)} className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">{playing ? <Pause className="size-4 fill-current" /> : <Play className="ml-0.5 size-4 fill-current" />}</button><button aria-label="Next track" onClick={() => skip(1)} className="text-muted-foreground hover:text-primary"><SkipForward className="size-4 fill-current" /></button><div className="min-w-0 sm:w-52"><p className="truncate font-display uppercase tracking-wide text-white">{current.title}</p><p className="font-serif text-xs italic text-muted-foreground">{categoryName(current.category)}</p></div><input type="range" aria-label="Seek" min={0} max={current.seconds} step={1} value={time} onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value) }} className="hidden flex-1 accent-[var(--primary)] sm:block" /><span className="ml-auto font-display text-sm text-muted-foreground sm:ml-0">{fmt(time)} / {fmt(current.seconds)}</span></div></div>}
  </main>
}
