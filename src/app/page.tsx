"use client";

import { MonolithElement } from "@/components/MonolithElement";
import { MockWindowAnimation } from "@/components/MockWindowAnimation";
import { Navbar } from "@/components/Navbar";
import { Zap, Maximize, SlidersHorizontal, CheckCircle2, Repeat, Settings2, ShieldCheck, Cpu } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP, createReveal, gsap } from "@/lib/motion";
import UnicornScene from "unicornstudio-react/next";
import { FormatMorphAnimation } from "@/components/animations/FormatMorphAnimation";
import { ResizePreviewAnimation } from "@/components/animations/ResizePreviewAnimation";
import { AdminUIDropdownAnimation } from "@/components/animations/AdminUIDropdownAnimation";
import { ModernStandardChartAnimation } from "@/components/animations/ModernStandardChartAnimation";
import { AnimatedFeatureIcon } from "@/components/animations/AnimatedFeatureIcon";
import { CopyButton } from "@/components/CopyButton";
import styles from "./page.module.css";

gsap.registerPlugin(useGSAP)


const ALL_FEATURES = [
  { group: "Conversion & Compression", title: "Automatic conversion", desc: "Converts uploads to WebP, AVIF, PNG, or JPEG on create/update." },
  { group: "Conversion & Compression", title: "Per-image format selection", desc: "Editors choose the desired format from a sidebar dropdown." },
  { group: "Conversion & Compression", title: "Global default format", desc: "Falls back to defaultFormat when no per-image selection is made." },
  { group: "Conversion & Compression", title: "Configurable quality", desc: "Global quality setting (0-100) with per-format overrides." },
  { group: "Conversion & Compression", title: "Per-format Sharp options", desc: "Fine-grained control over WebP, AVIF, PNG, and JPEG encoding." },
  { group: "Resize Pipeline", title: "Image resizing", desc: "Constrain dimensions via global config or per-image sidebar inputs." },
  { group: "Resize Pipeline", title: "Aspect ratio preservation", desc: "Resize uses fit: 'inside' to maintain proportions." },
  { group: "Resize Pipeline", title: "No upscaling", desc: "withoutEnlargement: true prevents small images from being enlarged." },
  { group: "Resize Pipeline", title: "Format-aware re-encoding", desc: "Resize-only operations skip format change to avoid quality loss." },
  { group: "Admin UI Experience", title: "Re-conversion without re-upload", desc: "Change format on existing images directly from the admin panel." },
  { group: "Admin UI Experience", title: "File size savings display", desc: "Shows percentage and byte savings after a successful conversion." },
  { group: "Admin UI Experience", title: "Oversize image detection", desc: "Warns editors when images exceed a custom pixel threshold." },
  { group: "Admin UI Experience", title: "Auto-fill resize suggestion", desc: "One-click button sets max width to the threshold value." },
  { group: "Admin UI Experience", title: "Collapsible resize panel", desc: "Clean sidebar UI with auto-expand and '(active)' badge." },
  { group: "Safety & Guards", title: "Quality degradation warnings", desc: "UI and server-side warnings for lossy-to-lossy re-conversion." },
  { group: "Safety & Guards", title: "SVG and GIF skip", desc: "Vector and animated images are intelligently passed through unchanged." },
  { group: "Safety & Guards", title: "Max file size guard", desc: "Files exceeding maxFileSize are skipped with a clear warning." },
  { group: "Safety & Guards", title: "Kill switch", desc: "disabled: true stops conversion while keeping database schema consistent." },
  { group: "Safety & Guards", title: "Double-conversion warning", desc: "Detects conflicting collection-level formatOptions in Payload." },
  { group: "Safety & Guards", title: "Graceful failure", desc: "Sharp errors are caught safely; original uploads are preserved." },
  { group: "Architecture", title: "Schema consistency", desc: "Fields are always injected, even when disabled, to prevent sync issues." },
  { group: "Architecture", title: "Hook prepend order", desc: "Conversion seamlessly runs before other Payload beforeOperation hooks." },
  { group: "Architecture", title: "No Sharp dependency", desc: "Lightweight—reuses Payload's native managed Sharp instance." },
  { group: "Architecture", title: "Original file size tracking", desc: "Hidden field securely powers the granular savings UI." },
  { group: "Architecture", title: "Three package exports", desc: "Main, /types, and /client entry points for ultra-clean imports." },
];

const groupedFeatures = ALL_FEATURES.reduce((acc, feature) => {
  if (!acc[feature.group]) acc[feature.group] = [];
  acc[feature.group].push(feature);
  return acc;
}, {} as Record<string, typeof ALL_FEATURES>);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const mockWindowWrapperRef = useRef<HTMLDivElement>(null);
  const [mockWindowReady, setMockWindowReady] = useState(false);

  useGSAP(() => {
    gsap?.set(`.${styles.mockWindowWrapper}`, {
      scale: 0.5,
      rotationX: 30,
      y: 100,
      transformPerspective: 1400,
      opacity: 0,
    });
    if (containerRef.current) {
      const sections = gsap.utils.toArray<HTMLElement>('section', containerRef.current);
      sections.forEach(section => createReveal(section));
    }

    const bg_el = document?.getElementsByClassName(".unicorn_studio_bg")

    if (bg_el) {


      gsap.fromTo(".unicorn_studio_bg", {
        top: "0 !important",
        transform: "unset"
      }, {
        top: "200px !important",
        ease: "none",
        scrollTrigger: {
          scroller: ".unicorn_studio_bg",
          start: "top 50",
          end: "bottom 20%",
          scrub: true,
        }

      })
    }


    if (mockWindowWrapperRef.current) {


      gsap.fromTo(mockWindowWrapperRef.current, {
        scale: 0.5,
        rotationX: 30,
        y: 100,
        transformPerspective: 1400,
        opacity: 0,
      }, {
        scale: 1,
        rotationX: 0,
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: mockWindowWrapperRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: 1,
        },
        onComplete: () => setMockWindowReady(true)
      });
    }
  }, { scope: containerRef });

  return (
    <main className="main-wrapper" ref={containerRef}>
      <UnicornScene
        projectId="giIZSIz7OoOSo0ngyCqm"
        scale={1}
        dpi={1.5}
        sdkUrl="/unicornStudio.umd.js"
        className={styles.heroImageAsset + " unicorn_studio_bg"}
        data-reveal


      />
      <Navbar />

      <div className="container" style={{ position: 'relative', zIndex: 10, padding: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroAmbientGlow} />
          <h1 data-reveal className={styles.heroTitle}>
            Your images,<br />
            <span className={styles.textGradient}>optimized.</span>
          </h1>

          <p data-reveal className={styles.heroSubtitle}>
            Automatic WebP, AVIF, PNG & JPEG conversion for Payload CMS v3.
            Resize on upload. Zero config required.
          </p>

          <div data-reveal style={{ maxWidth: '600px', margin: '2rem auto 3rem', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <strong>What is payload-img-convert?</strong> payload-img-convert is a developer-first image optimization plugin for Payload CMS v3. It automatically intercepts image uploads to convert them into next-generation formats like WebP or AVIF, resizes massive images without scaling up small files, and drastically reduces bandwidth costs—incorporating seamlessly into the native Payload admin UI.
          </div>

          <div data-reveal className={styles.installPill}>
            <div className={`${styles.installCmd} mono`}>
              <span style={{ color: '#b770ff', marginRight: '8px' }}>$</span> npm i payload-img-convert
            </div>
            <CopyButton text="npm i payload-img-convert" className={styles.copyBtn} size={16} />
          </div>
        </section>

        {/* Floating Mock Window UI */}
        <section className={styles.mockWindowSection} style={{ perspective: "1400px" }}>
          <div className={styles.mockWindowWrapper} ref={mockWindowWrapperRef} style={{ transformOrigin: "top center", willChange: "transform, opacity" }}>
            <MockWindowAnimation ready={mockWindowReady} />
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="features" className={`${styles.bentoSection} section`}>
          <h2 data-reveal className={styles.sectionTitle}>
            Powerful features.<br /><span style={{ color: 'var(--text-dim)' }}>Zero setup.</span>
          </h2>

          <div className={styles.bentoGrid}>
            <MonolithElement asCard data-reveal className={styles.bentoBox}>
              <div className={styles.bentoIconWrapper}>
                <FormatMorphAnimation />
              </div>
              <h3>Any format, automatically.</h3>
              <p>Converts inputs on the fly. Say goodbye to manual formatting constraints.</p>
            </MonolithElement>

            <MonolithElement asCard data-reveal className={styles.bentoBox}>
              <div className={styles.bentoIconWrapper}>
                <ResizePreviewAnimation />
              </div>
              <h3>Resize instantly.</h3>
              <p>Maintains aspect ratios perfectly while shrinking massive 4k uploads down to specs.</p>
            </MonolithElement>

            <MonolithElement asCard data-reveal className={`${styles.bentoBox} ${styles.span2} ${styles.row2} ${styles.largeContent}`} style={{ position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 10, maxWidth: '100%', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <div className={styles.bentoIconWrapper} style={{ background: 'rgba(255, 0, 51, 0.1)', borderColor: 'rgba(255, 0, 51, 0.2)' }}>
                  <Zap size={20} color="var(--accent-primary)" />
                </div>
                <h3 style={{ fontSize: '28px', marginBottom: '16px', fontWeight: 800 }}>The modern standard.</h3>
                <p style={{ fontSize: '16px' }}>
                  Serve next-gen formats like WebP or AVIF out of the box, slashing bandwidth costs by up to 80% with unrivaled precision.
                </p>
              </div>

              <div >
                <ModernStandardChartAnimation />
              </div>
            </MonolithElement>

            <MonolithElement asCard data-reveal className={styles.bentoBox}>
              <div className={styles.bentoIconWrapper}>
                <AdminUIDropdownAnimation />
              </div>
              <h3>Seamless Admin UI.</h3>
              <p>Editors can select formats directly from the media sidebar, complete with real-time compression savings analytics directly in Payload.</p>
            </MonolithElement>
          </div>
        </section>

        {/* All Features Section - Raycast Style */}
        <section id="all-features" className="section" style={{ marginTop: '120px', marginBottom: '160px' }}>
          <div style={{ textAlign: 'left', marginBottom: '100px' }}>
            <h2 data-reveal className={styles.sectionTitle} style={{ fontSize: '48px', marginBottom: '16px' }}>
              Everything you need. <br /><span style={{ color: 'var(--text-dim)' }}>Nothing you don&apos;t.</span>
            </h2>
            <p data-reveal style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '600px' }}>
              A complete suite of tools to handle your image pipeline exactly how you want it. Zero compromises.
            </p>
          </div>

          <div className={styles.allFeaturesContainer}>
            {Object.entries(groupedFeatures).map(([groupName, features]) => {
              let Icon = Settings2;
              if (groupName.includes("Conversion")) Icon = Repeat;
              if (groupName.includes("Resize")) Icon = Maximize;
              if (groupName.includes("Admin")) Icon = SlidersHorizontal;
              if (groupName.includes("Safety")) Icon = ShieldCheck;
              if (groupName.includes("Architecture")) Icon = Cpu;

              return (
                <div key={groupName} className={styles.categorySection}>
                  <div className={styles.categoryStickyHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                      <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Icon size={32} color="var(--accent-secondary)" />
                      </div>
                    </div>
                    <h3 className={styles.categoryTitle}>{groupName}</h3>
                  </div>

                  <div className={styles.categoryScrollContent}>
                    {features.map(f => (
                      <MonolithElement asCard key={f.title} data-reveal className={styles.featureRowCard}>
                        <div className={styles.featureRowIcon}>
                          <AnimatedFeatureIcon featureTitle={f.title} />
                        </div>
                        <div className={styles.featureRowContent}>
                          <h4 className={styles.featureRowTitle}>{f.title}</h4>
                          <p className={styles.featureRowDesc}>{f.desc}</p>
                        </div>
                      </MonolithElement>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Code & Developers Section */}
        <section id="developers" className={`${styles.codeSection} section`} style={{ marginBottom: '240px' }}>
          <div className={styles.codeText} style={{ textAlign: 'left' }}>
            <h2 data-reveal className={styles.codeTitle}>Three lines.<br />Infinite performance.</h2>
            <p data-reveal>Drop the plugin into your Payload config. It hooks into the upload cycle natively, utilizing Sharp for blazingly fast compression. Zero boilerplate.</p>
            <ul data-reveal className={styles.codeList}>
              <li>
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                TypeScript ready
              </li>
              <li>
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                Extends native Payload v3
              </li>
              <li>
                <CheckCircle2 size={18} color="var(--accent-primary)" />
                Auto-detects image fields
              </li>
            </ul>
          </div>
          <div data-reveal className={styles.codeEditorWrapper}>
            <div className={styles.codeEditor}>
              <div className={styles.ceHeader}>
                <div className={styles.ceTab} style={{ borderBottomColor: 'var(--accent-primary)' }}>payload.config.ts</div>
                <CopyButton text={`import { buildConfig } from 'payload/config'
import { imageConverterPlugin } from 'payload-img-convert'

export default buildConfig({
  plugins: [
    imageConverterPlugin({
      collections: ['media'],
      formats: ['webp', 'avif'],
      maxWidth: 1920,
      quality: 80,
      oversizeThreshold: 2000
    })
  ],
  // Database and collections...
})`} size={14} style={{ color: "var(--text-muted)", textAlign: "left" }} />
              </div>
              <div className={styles.ceBody}>
                <pre><code>
                  <span className={styles.syKw}>import</span> {'{'} buildConfig {'}'} <span className={styles.syKw}>from</span> <span className={styles.syStr}>&apos;payload/config&apos;</span>{"\n"}
                  <span className={styles.syKw}>import</span> {'{'} imageConverterPlugin {'}'} <span className={styles.syKw}>from</span> <span className={styles.syStr}>&apos;payload-img-convert&apos;</span>{"\n"}
                  {"\n"}
                  <span className={styles.syKw}>export default</span> <span className={styles.syFn}>buildConfig</span>({'{'}{"\n"}
                  {'  '}<span className={styles.syProp}>plugins</span>: [{"\n"}
                  {'    '}<span className={styles.syFn}>imageConverterPlugin</span>({'{'}{"\n"}
                  {'      '}<span className={styles.syProp}>collections</span>: [<span className={styles.syStr}>&apos;media&apos;</span>],{"\n"}
                  {'      '}<span className={styles.syProp}>formats</span>: [<span className={styles.syStr}>&apos;webp&apos;</span>, <span className={styles.syStr}>&apos;avif&apos;</span>],{"\n"}
                  {'      '}<span className={styles.syProp}>maxWidth</span>: <span className={styles.syNum}>1920</span>,{"\n"}
                  {'      '}<span className={styles.syProp}>quality</span>: <span className={styles.syNum}>80</span>,{"\n"}
                  {'      '}<span className={styles.syProp}>oversizeThreshold</span>: <span className={styles.syNum}>2000</span>{"\n"}
                  {'    '}{'})'}{"\n"}
                  {'  '}],{"\n"}
                  {'  '}{/* Database and collections... */}{"\n"}
                  {'}'})</code></pre>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Extreme Depth Bottom Lasers */}
      <div className={styles.bottomLaserBg}>
        <div className={styles.raycastLaserEnvironment}>
          <div className={`${styles.laserBeam} ${styles.laser1}`} />
          <div className={`${styles.laserBeam} ${styles.laser2}`} />
          <div className={`${styles.laserBeam} ${styles.laser3}`} />
          <div className={`${styles.laserBeam} ${styles.laser4}`} />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer} style={{ position: 'relative', zIndex: 10 }}>
        <div className={styles.footerGrid}>
          <div className={styles.fgBrand}>
            <span className="mono" style={{ color: 'var(--accent-secondary)', fontWeight: 500 }}>payload-img-convert</span>
            <p>The developer-first image optimization pipeline for Payload CMS.</p>
          </div>
          <div className={styles.fgColumn}>
            <h4>Product</h4>
            <a href="#features">Features</a>
          </div>
          <div className={styles.fgColumn}>
            <h4>Ecosystem</h4>
            <a href="https://github.com/stianlars1/payload-img-convert">GitHub Repository</a>
            <a href="https://npmjs.com/package/payload-img-convert">NPM Package</a>
            <a href="https://payloadcms.com/">Payload CMS</a>
          </div>
          <div className={styles.fgColumn}>
            <h4>Maintainer</h4>
            <a href="https://github.com/stianlars1">Stian Larsen</a>
            <a href="https://www.npmjs.com/~stianlarsen?activeTab=packages">Open Source work</a>
            <a href="https://stianlarsen.com">Portfolio</a>
            <span className={styles.mutedP} style={{ display: 'block', marginTop: '12px' }}>MIT License</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
