export function NavBar() {
  return (
    <nav className="max-w-10xl fixed top-4 left-1/2 z-50 w-[92%] -translate-x-1/2 md:top-6 md:w-[95%]">
      <div className="relative flex h-14 items-center justify-between rounded-full border border-border/50 bg-background/70 px-4 shadow-lg backdrop-blur-xl md:h-16 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="text-2xl leading-none font-semibold tracking-tighter">
            G<span className="text-teal-700 dark:text-teal-400">3</span>
          </span>
          <div className="h-6 w-px bg-foreground/20" />
          <div className="font-mono-label text-[7px] tracking-[0.2em] text-muted-foreground uppercase md:leading-[1.8]">
            <span className="text-[10px] whitespace-nowrap md:hidden">
              Global Green Grid
            </span>
            <span className="hidden md:block">
              Global
              <br />
              Green
              <br />
              Grid
            </span>
          </div>
        </div>
        <div className="min-w-0 flex-1" aria-hidden />
      </div>
    </nav>
  )
}
