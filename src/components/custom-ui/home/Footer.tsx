// import { Moon, Sun, Monitor } from "lucide-react"
import logo from "@/assets/IG3-logo.png"
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
// import { useTheme } from "@/components/theme-provider"

export function Footer() {
//   const { theme, setTheme } = useTheme() || { theme: "light", setTheme: () => {} }

//   const themeToggle = (
//     <ToggleGroup
//       type="single"
//       value={theme}
//       onValueChange={(v) => {
//         if (v) setTheme(v as "light" | "dark" | "system")
//       }}
//       size="sm"
//       className="gap-0.5"
//     >
//       <ToggleGroupItem
//         value="light"
//         aria-label="Light"
//         className="rounded-md text-teal-100/30 hover:bg-transparent hover:text-teal-100/60 data-[state=on]:bg-transparent data-[state=on]:text-teal-400"
//       >
//         <Sun className="h-3.5 w-3.5" />
//       </ToggleGroupItem>
//       <ToggleGroupItem
//         value="system"
//         aria-label="System"
//         className="rounded-md text-teal-100/30 hover:bg-transparent hover:text-teal-100/60 data-[state=on]:bg-transparent data-[state=on]:text-teal-400"
//       >
//         <Monitor className="h-3.5 w-3.5" />
//       </ToggleGroupItem>
//       <ToggleGroupItem
//         value="dark"
//         aria-label="Dark"
//         className="rounded-md text-teal-100/30 hover:bg-transparent hover:text-teal-100/60 data-[state=on]:bg-transparent data-[state=on]:text-teal-400"
//       >
//         <Moon className="h-3.5 w-3.5" />
//       </ToggleGroupItem>
//     </ToggleGroup>
//   )

  return (
    <footer className="shrink-0 bg-teal-950 px-8 py-3 md:px-14">
      {/* Mobile: single row with branding left, toggle right */}
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center gap-3">
          <span className="text-3xl leading-none font-semibold tracking-tighter text-white">
            G<span className="text-teal-400">3</span>
          </span>
          <div className="h-4 w-px bg-teal-700/50" />
          <img
            src={logo}
            alt="G3"
            width={60}
            height={30}
            className="-ml-1"
          />
        </div>
        {/* {themeToggle} */}
      </div>

      {/* Mobile: second row with links + copyright */}
      <div className="mt-3 flex items-center justify-between md:hidden">
        <div className="flex items-center gap-1 text-[11px] text-teal-100/40">
          {["Privacy", "Terms", "Contact"].map((item, i) => (
            <span key={item} className="flex items-center gap-1">
              {i > 0 && <span className="opacity-30">·</span>}
              <span className="cursor-pointer transition-colors hover:text-teal-300">
                {item}
              </span>
            </span>
          ))}
        </div>
        <p className="text-[10px] tracking-wide text-teal-100/25">
          © {new Date().getFullYear()} Global Green Grid.
        </p>
      </div>

      {/* Desktop: single row */}
      <div className="hidden md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl leading-none font-semibold tracking-tighter text-white">
            G<span className="text-teal-400">3</span>
          </span>
          <div className="h-5 w-px bg-teal-700/50" />
          <img
            src={logo}
            alt="G3"
            width={80}
            height={30}
            className="-ml-1"
          />
        </div>

        <div className="flex items-center gap-1 text-[11px] text-teal-100/40">
          {["Privacy", "Terms", "Contact"].map((item, i) => (
            <span key={item} className="flex items-center gap-1">
              {i > 0 && <span className="opacity-30">·</span>}
              <span className="cursor-pointer transition-colors hover:text-teal-300">
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* {themeToggle} */}

        <p className="text-[11px] tracking-wide text-teal-100/25">
          © {new Date().getFullYear()} Global Green Grid. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
