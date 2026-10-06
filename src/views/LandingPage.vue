<script setup lang="ts">
import {
  NEW_SCENARIO_ROUTE,
  SYMBOL_BROWSER_ROUTE,
  TEXT_TO_ORBAT_ROUTE,
} from "@/router/names";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  CrosshairIcon,
  LayersIcon,
  NetworkIcon,
  RouteIcon,
  MoonStarIcon,
  SunIcon,
} from "@lucide/vue";
import { UseDark } from "@vueuse/components";
import LandingPageScenarios from "./LandingPageScenarios.vue";

const capabilities = [
  {
    icon: NetworkIcon,
    title: "Build the order of battle",
    text: "Organize units, equipment, and command relationships. Move between charts and spreadsheet-style editing.",
  },
  {
    icon: LayersIcon,
    title: "Put the situation on the map",
    text: "Place military symbols, draw operational graphics, and measure terrain. Bring your own geospatial data.",
  },
  {
    icon: RouteIcon,
    title: "See how events unfold",
    text: "Reconstruct historic battles and explore scenarios with timed events, unit movements, and playback.",
  },
];
</script>

<template>
  <div class="sigtrack-home">
    <header class="site-header page-width">
      <a class="brand" href="#" aria-label="Sigtrack home">
        <span class="brand-mark"><CrosshairIcon aria-hidden="true" /></span>
        <span>SIGTRACK<span class="brand-caption">ORBAT MAPPER</span></span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="#scenarios">Scenarios</a>
        <a href="#tools">Tools</a>
        <a
          href="https://docs.orbat-mapper.app/guide/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          >Field guide <ArrowUpRightIcon aria-hidden="true"
        /></a>
      </nav>
      <UseDark v-slot="{ isDark, toggleDark }">
        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark()"
        >
          <SunIcon v-if="isDark" aria-hidden="true" /><MoonStarIcon
            v-else
            aria-hidden="true"
          />
        </button>
      </UseDark>
    </header>

    <main>
      <section class="hero page-width" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> THE SIGTRACK EDITION</p>
          <h1 id="hero-title">
            Every unit.<br />Every move.<br /><span>The whole picture.</span>
          </h1>
          <p class="hero-description">
            Build your order of battle. Map the terrain. Follow the action through time.
            Your scenario starts here.
          </p>
          <div class="hero-actions">
            <router-link class="primary-action" :to="{ name: NEW_SCENARIO_ROUTE }"
              >Create a scenario <ArrowRightIcon aria-hidden="true"
            /></router-link>
            <a class="secondary-action" href="#scenarios"
              >Open a scenario <ArrowUpRightIcon aria-hidden="true"
            /></a>
          </div>
          <p class="local-note">
            <span></span> Runs in your browser. Scenarios stay on your device.
          </p>
        </div>

        <figure
          class="tactical-map"
          aria-label="Illustrative tactical map with unit positions and movement routes"
        >
          <div class="map-heading">
            <span><CrosshairIcon aria-hidden="true" /> SITUATION OVERVIEW</span
            ><span>ILLUSTRATION</span>
          </div>
          <svg class="terrain" viewBox="0 0 600 490" fill="none" aria-hidden="true">
            <defs>
              <pattern
                id="sigtrack-grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 50 0 L 0 0 0 50" stroke="#bfd0d1" stroke-width="0.7" />
              </pattern>
            </defs>
            <rect width="600" height="490" fill="#e7edeb" />
            <g stroke="#c5d1c7" stroke-width="1.2">
              <path
                v-for="n in 8"
                :key="n"
                :d="`M ${-130 + n * 24} 0 C ${240 + n * 10} 100, ${-160 + n * 30} 240, ${120 + n * 28} 330 S ${380 + n * 28} 420, ${250 + n * 35} 540`"
              />
              <path
                v-for="n in 6"
                :key="`east-${n}`"
                :d="`M ${330 + n * 25} -30 C ${200 + n * 40} 160, ${580 + n * 18} 90, ${390 + n * 26} 310 S 620 400, 640 490`"
              />
            </g>
            <path
              d="M365 -20 C420 90 300 140 346 240 S265 370 320 510"
              stroke="#aecbd2"
              stroke-width="22"
            />
            <path
              d="M365 -20 C420 90 300 140 346 240 S265 370 320 510"
              stroke="#d0e2e5"
              stroke-width="16"
            />
            <rect width="600" height="490" fill="url(#sigtrack-grid)" />
            <path
              d="M-20 370 175 250 288 279 441 166 630 113"
              stroke="#f9faf7"
              stroke-width="9"
            />
            <path
              d="M-20 370 175 250 288 279 441 166 630 113"
              stroke="#c2c7bd"
              stroke-width="1.5"
            />
            <path
              d="M160 355 231 293 270 211 404 149"
              stroke="#416e91"
              stroke-width="2"
              stroke-dasharray="7 6"
            />
            <path d="m392 147 14 1-7 12" stroke="#416e91" stroke-width="2" />
            <path
              d="M175 125 257 145 270 211"
              stroke="#416e91"
              stroke-width="2"
              stroke-dasharray="7 6"
            />
            <circle cx="270" cy="211" r="61" stroke="#416e91" stroke-opacity=".22" />
            <circle cx="270" cy="211" r="80" stroke="#416e91" stroke-opacity=".12" />
            <g fill="#d5e8f1" stroke="#315c7a" stroke-width="2">
              <rect x="149" y="112" width="44" height="29" />
              <path d="m149 112 44 29m0-29-44 29" />
              <rect x="247" y="197" width="44" height="29" />
              <path d="m247 197 44 29m0-29-44 29" />
              <rect x="137" y="340" width="44" height="29" />
              <ellipse cx="159" cy="354.5" rx="15" ry="8" />
            </g>
            <g fill="#315c7a" font-family="monospace" font-size="10">
              <text x="150" y="102">II</text>
              <text x="149" y="158">1 BN / INF</text>
              <text x="248" y="187">II</text>
              <text x="247" y="244">2 BN / INF</text>
              <text x="137" y="386">3 SQN / ARM</text>
            </g>
            <path
              d="m440 126 22 17-22 17-22-17Z"
              fill="#f0d8d1"
              stroke="#a56a5d"
              stroke-width="2"
            />
            <g fill="#788e91" font-family="monospace" font-size="9" letter-spacing="2">
              <text x="35" y="32">32V</text>
              <text x="420" y="321">EAST RIDGE</text>
              <text x="38" y="445">SECTOR ALPHA</text>
            </g>
            <g transform="translate(550 35)" stroke="#41606b">
              <path d="M0 35V0m-6 12 6-12 6 12" />
              <text x="-4" y="-9" fill="#41606b" stroke="none" font-size="10">N</text>
            </g>
          </svg>
          <figcaption class="map-footer">
            <span><i></i> UNIT POSITIONS &amp; MOVEMENT</span
            ><span>ORBAT / MAP / TIMELINE</span>
          </figcaption>
        </figure>
      </section>

      <section class="capabilities page-width" aria-label="Planning capabilities">
        <article v-for="item in capabilities" :key="item.title">
          <component :is="item.icon" aria-hidden="true" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </section>

      <section id="scenarios" class="scenario-section" aria-labelledby="workspace-title">
        <div class="section-heading page-width">
          <div>
            <p class="eyebrow">YOUR WORKSPACE</p>
            <h2 id="workspace-title">Choose your starting point.</h2>
          </div>
          <p>
            Continue a scenario, import your work,<br />or explore a historical example.
          </p>
        </div>
        <LandingPageScenarios />
      </section>

      <section id="tools" class="tools-section page-width" aria-labelledby="tools-title">
        <div>
          <p class="eyebrow">THE TOOLKIT</p>
          <h2 id="tools-title">Prepare for the bigger picture.</h2>
        </div>
        <div class="tool-links">
          <router-link :to="{ name: SYMBOL_BROWSER_ROUTE }"
            ><CrosshairIcon aria-hidden="true" /><span
              ><strong>Symbol browser</strong
              ><small>Find and export military symbols</small></span
            ><ArrowUpRightIcon aria-hidden="true"
          /></router-link>
          <router-link :to="{ name: TEXT_TO_ORBAT_ROUTE }"
            ><NetworkIcon aria-hidden="true" /><span
              ><strong>Text to ORBAT</strong
              ><small>Turn a unit list into a hierarchy</small></span
            ><ArrowUpRightIcon aria-hidden="true"
          /></router-link>
          <a
            href="https://tactrace.orbat-mapper.app/"
            target="_blank"
            rel="noopener noreferrer"
            ><RouteIcon aria-hidden="true" /><span
              ><strong>TacTrace</strong><small>Explore the companion tool</small></span
            ><ArrowUpRightIcon aria-hidden="true"
          /></a>
        </div>
      </section>
    </main>

    <footer class="site-footer page-width">
      <div>
        <strong>SIGTRACK</strong
        ><span>Built on ORBAT Mapper. Made for the whole picture.</span>
      </div>
      <nav aria-label="Footer">
        <a href="https://docs.orbat-mapper.app/guide/about-orbat-mapper">About</a
        ><a href="https://docs.orbat-mapper.app/support">Support</a
        ><a href="https://github.com/orbat-mapper/orbat-mapper"
          >GitHub <ArrowUpRightIcon aria-hidden="true"
        /></a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.sigtrack-home {
  --ink: #223e50;
  --muted: #607581;
  --accent: #315f7d;
  --paper: #f7f9fa;
  --line: #d9e2e6;
  color: var(--ink);
  background: var(--paper);
  min-height: 100%;
  font-family: "Inter Variable", "Segoe UI", sans-serif;
}
:global(.dark) .sigtrack-home {
  --ink: #e0eaf0;
  --muted: #a1b5c1;
  --accent: #a3c8e1;
  --paper: #172731;
  --line: #354751;
}
.page-width {
  width: min(1280px, calc(100% - 96px));
  margin-inline: auto;
}
a,
button {
  -webkit-tap-highlight-color: transparent;
}
a {
  text-decoration: none;
}
a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 5px;
}
.site-header {
  display: flex;
  align-items: center;
  gap: 30px;
  min-height: 100px;
  border-bottom: 1px solid var(--line);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 21px;
  font-weight: 750;
  letter-spacing: 0.12em;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: var(--ink);
  color: var(--paper);
  border-radius: 10px;
}
.brand-mark svg {
  width: 28px;
  height: 28px;
}
.brand-caption {
  display: block;
  font:
    9px/1.8 Consolas,
    monospace;
  letter-spacing: 0.24em;
  color: var(--muted);
}
.main-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;
  font-size: 13px;
  font-weight: 550;
}
.main-nav a,
.site-footer a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.main-nav svg,
.site-footer svg {
  width: 14px;
  height: 14px;
}
.main-nav a:hover,
.site-footer a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.theme-toggle {
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.theme-toggle svg {
  width: 17px;
  height: 17px;
}
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 54px;
  padding-block: 76px 66px;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  font:
    10px/1.5 Consolas,
    monospace;
  letter-spacing: 0.17em;
  font-weight: 600;
  color: var(--muted);
}
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #5a887e;
}
h1 {
  margin: 23px 0;
  font-family: "Bahnschrift", "Arial Narrow", "Segoe UI", sans-serif;
  font-size: clamp(42px, 4.5vw, 66px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.045em;
}
h1 span {
  color: var(--accent);
}
.hero-description {
  max-width: 410px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 23px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: 600;
}
.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.primary-action {
  background: var(--ink);
  color: var(--paper);
  padding: 15px 19px;
  border-radius: 5px;
  transition: transform 0.2s;
}
.primary-action:hover {
  transform: translateY(-2px);
}
.secondary-action:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
.hero-actions svg {
  width: 16px;
  height: 16px;
}
.local-note {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 22px;
  font-size: 10px;
  color: var(--muted);
}
.local-note span {
  width: 5px;
  height: 5px;
  border: 1px solid currentColor;
  border-radius: 50%;
}
.tactical-map {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #e7edeb;
  box-shadow: 0 18px 50px #1737480c;
  transform: rotate(-1deg);
}
.map-heading,
.map-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 15px 17px;
  font:
    8px/1.5 Consolas,
    monospace;
  letter-spacing: 0.08em;
  color: #46616d;
  background: #f0f4f2;
}
.map-heading span,
.map-footer span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.map-heading svg {
  width: 13px;
  height: 13px;
}
.terrain {
  display: block;
  width: 100%;
  height: auto;
}
.map-footer {
  border-top: 1px solid #d0ddda;
  font-size: 7px;
}
.map-footer i {
  width: 5px;
  height: 5px;
  background: #416e91;
  border-radius: 50%;
}
.capabilities {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  padding-block: 32px 48px;
  gap: 38px;
}
.capabilities article > svg {
  width: 21px;
  height: 21px;
  color: var(--accent);
  margin-bottom: 17px;
}
.capabilities h2 {
  font-size: 14px;
  font-weight: 650;
  margin-bottom: 8px;
}
.capabilities p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.85;
  max-width: 340px;
}
.scenario-section {
  padding-block: 48px 20px;
  background: var(--color-background);
  border-block: 1px solid var(--line);
  scroll-margin-top: 20px;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: end;
}
.section-heading h2,
.tools-section h2 {
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: -0.035em;
  margin-top: 10px;
  font-weight: 600;
}
.section-heading > p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}
.scenario-section :deep([data-testid="landing-scenarios"] > div:first-child) {
  display: none;
}
.tools-section {
  padding-block: 48px 58px;
  scroll-margin-top: 20px;
}
.tool-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 27px;
}
.tool-links a {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 22px 18px;
  border: 1px solid var(--line);
  border-radius: 6px;
  transition:
    border-color 0.2s,
    background 0.2s;
}
.tool-links a:hover {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 5%, transparent);
}
.tool-links svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--accent);
}
.tool-links svg:last-child {
  width: 15px;
  margin-left: auto;
}
.tool-links strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
}
.tool-links small {
  display: block;
  font-size: 10px;
  color: var(--muted);
  margin-top: 5px;
}
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--line);
  padding-block: 28px;
}
.site-footer > div {
  display: flex;
  align-items: center;
  gap: 20px;
}
.site-footer strong {
  font-size: 12px;
  letter-spacing: 0.13em;
}
.site-footer span,
.site-footer nav {
  font-size: 10px;
  color: var(--muted);
}
.site-footer nav {
  display: flex;
  gap: 22px;
}
@media (min-width: 1500px) {
  .hero {
    gap: 90px;
  }
}
@media (max-width: 960px) {
  .page-width {
    width: calc(100% - 48px);
  }
  .hero {
    gap: 28px;
    padding-block: 50px;
  }
  h1 {
    font-size: 46px;
  }
  .hero-actions {
    gap: 17px;
  }
  .tool-links {
    grid-template-columns: 1fr;
  }
  .site-footer > div {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
}
@media (max-width: 680px) {
  .page-width {
    width: calc(100% - 36px);
  }
  .site-header {
    min-height: 85px;
    gap: 14px;
    flex-wrap: wrap;
    padding-block: 17px;
  }
  .brand {
    font-size: 18px;
  }
  .main-nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 15px;
    padding-top: 9px;
  }
  .theme-toggle {
    margin-left: auto;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 35px;
    padding-block: 38px;
  }
  h1 {
    font-size: clamp(40px, 9vw, 57px);
  }
  .hero-description {
    font-size: 14px;
  }
  .tactical-map {
    transform: none;
  }
  .terrain {
    max-height: 360px;
  }
  .capabilities {
    grid-template-columns: 1fr;
    gap: 26px;
    padding-block: 30px;
  }
  .capabilities article {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 14px;
  }
  .capabilities article > svg {
    grid-row: span 2;
    margin: 0;
  }
  .capabilities p {
    max-width: none;
  }
  .section-heading {
    display: block;
  }
  .section-heading > p {
    margin-top: 14px;
  }
  .section-heading h2,
  .tools-section h2 {
    font-size: 25px;
  }
  .site-footer {
    align-items: start;
    flex-direction: column;
  }
}
@media (prefers-reduced-motion: reduce) {
  .primary-action,
  .tool-links a {
    transition: none;
  }
  .primary-action:hover {
    transform: none;
  }
}
</style>
