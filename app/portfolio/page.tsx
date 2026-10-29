'use client'

import { useRef, useState } from 'react'
import { categories, songs, type CategoryId, type Song } from '@/lib/songs'
import { ArrowUpRight, Menu, Pause, Play, SkipBack, SkipForward, X } from 'lucide-react'

// Drop the photo at public/durga.jpg — the hero shows a glowing monogram until it exists.
const portrait = '/durga.jpg'
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
const categoryName = (id: CategoryId) => categories.find((c) => c.id === id)!.name

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
  return <main className="min-h-screen bg-background pb-24">
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#0b0614]/90 to-transparent backdrop-blur-sm"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10"><a href="/" className="flex items-center gap-3"><img src="/icon.svg" alt="" className="size-10 rounded-md" /><span className="font-display text-sm font-bold uppercase tracking-[.25em]">Durga Bahadur</span></a><nav className={`${menu ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 bg-[#0b0614] px-5 py-5 md:static md:flex md:flex-row md:gap-9 md:bg-transparent md:p-0`}>{[['Music', '#music'], ['Academy', '/#academy'], ['Gallery', '/#gallery'], ['Contact', '/#contact']].map(([item, href]) => <a key={item} href={href} onClick={() => setMenu(false)} className="text-[11px] font-semibold uppercase tracking-[.25em] text-white/80 hover:text-primary">{item}</a>)}</nav><div className="flex items-center gap-3"><a href="/#contact" className="hidden rounded-sm bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#12081f] sm:block">Book Durga</a><button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></div></div></header>

    <section id="home" className="relative overflow-hidden bg-[#12081f] px-5 pb-48 pt-32 lg:px-10 lg:pb-56">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(124,58,237,.45),transparent_55%),radial-gradient(ellipse_at_15%_80%,rgba(219,39,119,.18),transparent_50%)]" />
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-[70%] w-[42%] rounded-[45%] bg-white/[.04] blur-sm" />
      <p className="absolute left-4 top-1/2 hidden -translate-y-1/2 rotate-180 font-mono text-[10px] font-semibold uppercase tracking-[.35em] text-white/60 [writing-mode:vertical-rl] lg:block">+ + Music director · Composer · <span className="text-white">Teacher</span></p>
      <p className="absolute right-4 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] font-semibold uppercase tracking-[.35em] text-white/60 [writing-mode:vertical-rl] lg:block">+ + Hyderabad, <span className="text-white">India</span></p>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="rounded-sm bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-[.2em] text-[#12081f]">Listen now</span>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold uppercase leading-[.88] tracking-tight">Durga<br />Bahadur</h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75">Music director and composer — film themes, devotional anthems, dance numbers and melodies, plus the founder of Artshala Music Academy.</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">{categories.map((c) => <button key={c.id} onClick={() => openCategory(c.id)} className="text-sm font-semibold text-white/85 hover:text-primary">♪ {c.name}</button>)}</div>
          <div className="mt-9 flex flex-wrap items-center gap-6"><button onClick={() => play(songs[0])} className="flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-bold uppercase tracking-[.2em] text-[#12081f]">{current === songs[0] && playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current" />} Play showreel</button><a href="#music" className="text-xs font-bold uppercase tracking-[.2em] text-white/85 hover:text-primary">All {songs.length} tracks <ArrowUpRight className="inline size-4" /></a></div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 grid place-items-center"><img src="/icon.svg" alt="" className="w-2/3 rounded-[2rem] opacity-90 shadow-[0_0_120px_rgba(124,58,237,.6)]" /></div>
          {/* background-image, so a missing photo shows the monogram instead of a broken image */}
          <div role="img" aria-label="Durga Bahadur, music director" style={{ backgroundImage: `url(${portrait})` }} className="absolute inset-0 bg-cover bg-top [mask-image:linear-gradient(to_bottom,black_65%,transparent)]" />        </div>
      </div>
    </section>

    <section aria-label="Music categories" className="relative z-10 mx-auto -mt-36 max-w-6xl px-5 lg:-mt-44 lg:px-10"><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{categories.map((c) => <button key={c.id} onClick={() => openCategory(c.id)} className={`group flex h-56 flex-col justify-between bg-gradient-to-b ${c.tint} p-4 text-left shadow-2xl transition hover:-translate-y-2 md:h-72`}><span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/80">{songs.filter((s) => s.category === c.id).length} tracks</span><span><span className="block font-display text-2xl font-extrabold leading-none md:text-xl xl:text-[1.4rem]">{c.name}</span><span className="mt-2 block text-xs text-white/70">{c.blurb}</span></span></button>)}</div></section>

    <section id="music" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 lg:px-10"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.3em] text-primary">Discography / 01</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">Music</h2></div><div className="flex flex-wrap gap-2">{[{ id: 'all' as const, name: 'All' }, ...categories].map((c) => <button key={c.id} onClick={() => setFilter(c.id)} className={`rounded-full border px-3 py-2 text-xs ${filter === c.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>{c.name}</button>)}</div></div>
      <ol className="divide-y divide-border border-y border-border">{filtered.map((s, i) => { const active = current === s; return <li key={s.src}><button onClick={() => play(s)} className={`grid w-full grid-cols-[2rem_2.5rem_1fr_auto] items-center gap-3 px-2 py-4 text-left hover:bg-card md:grid-cols-[2rem_2.5rem_1fr_10rem_4rem] ${active ? 'text-primary' : ''}`}><span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span><span className={`grid size-9 place-items-center rounded-full ${active ? 'bg-primary text-primary-foreground' : 'border border-border'}`}>{active && playing ? <Pause className="size-4 fill-current" /> : <Play className="ml-0.5 size-4 fill-current" />}</span><span className="font-display font-bold">{s.title}</span><span className="hidden text-xs uppercase tracking-[.15em] text-muted-foreground md:block">{categoryName(s.category)}</span><span className="text-right font-mono text-xs text-muted-foreground">{fmt(s.seconds)}</span></button></li> })}</ol>
    </section>
    <audio ref={audioRef} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)} onEnded={() => skip(1)} />
    {current && <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-5 py-3 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-4"><button aria-label="Previous track" onClick={() => skip(-1)} className="hidden text-muted-foreground hover:text-primary sm:block"><SkipBack className="size-4 fill-current" /></button><button aria-label={playing ? 'Pause' : 'Play'} onClick={() => play(current)} className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">{playing ? <Pause className="size-4 fill-current" /> : <Play className="ml-0.5 size-4 fill-current" />}</button><button aria-label="Next track" onClick={() => skip(1)} className="text-muted-foreground hover:text-primary"><SkipForward className="size-4 fill-current" /></button><div className="min-w-0 sm:w-48"><p className="truncate font-display text-sm font-bold">{current.title}</p><p className="font-mono text-[10px] uppercase text-muted-foreground">{categoryName(current.category)}</p></div><input type="range" aria-label="Seek" min={0} max={current.seconds} step={1} value={time} onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value) }} className="hidden flex-1 accent-[var(--primary)] sm:block" /><span className="ml-auto font-mono text-[10px] text-muted-foreground sm:ml-0">{fmt(time)} / {fmt(current.seconds)}</span></div></div>}
  </main>
}
