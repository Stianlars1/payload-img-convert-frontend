"use client";

import { MonolithElement } from "@/components/MonolithElement";
import { MockWindowAnimation } from "@/components/MockWindowAnimation";
import { Navbar } from "@/components/Navbar";
import { Copy, Terminal, Activity, Zap, Layers, Maximize, Image as ImageIcon, SlidersHorizontal, CheckCircle2, Menu, Hexagon, UserCircle, MoreVertical, X, ChevronDown, Repeat, Settings2, ShieldCheck, Cpu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useGSAP, createReveal, gsap } from "@/lib/motion";
import Image from "next/image";
import UnicornScene from "unicornstudio-react/next";

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
  const [activeFeatureGroup, setActiveFeatureGroup] = useState<string>(Object.keys(groupedFeatures)[0]);

  useGSAP(() => {
    if (containerRef.current) {
      const sections = gsap.utils.toArray<HTMLElement>('section', containerRef.current);
      sections.forEach(section => createReveal(section));
    }
  }, { scope: containerRef });

  return (
    <main className="main-wrapper" ref={containerRef}>
      {/* <Image src="/images/hero.webp" width={2880} height={1799} alt="Hero Image" aria-hidden={true} className="hero-image-asset" /> */}
      <UnicornScene
        projectId="giIZSIz7OoOSo0ngyCqm"
        scale={1}
        dpi={1.5}
        sdkUrl="/unicornStudio.umd.js"
        className="hero-image-asset"
        data-reveal
      />
      <Navbar />

      <div className="container" style={{ position: 'relative', zIndex: 10, padding: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-ambient-glow" />
          <h1
            data-reveal
            className="hero-title"
          >
            Your images,<br />
            <span className="text-gradient">optimized.</span>
          </h1>

          <p
            data-reveal
            className="hero-subtitle"
          >
            Automatic WebP, AVIF, PNG & JPEG conversion for Payload CMS v3.
            Resize on upload. Zero config required.
          </p>

          <div
            data-reveal
            className="install-pill"
          >
            <div className="install-cmd mono">
              <span style={{ color: '#b770ff', marginRight: '8px' }}>$</span> npm i payload-img-convert
            </div>
            <button className="copy-btn" aria-label="Copy package name">
              <Copy size={16} />
            </button>
          </div>
        </section>

        {/* Floating Mock Window UI */}
        <section
          className="mock-window-section"
        >
          <div data-reveal>
            <MockWindowAnimation />
          </div>
        </section>


        {/* Bento Grid Section */}
        <section id="features" className="bento-section section">
          <h2 data-reveal className="section-title">
            Powerful features.<br /><span style={{ color: 'var(--text-dim)' }}>Zero setup.</span>
          </h2>

          <div className="bento-grid">
            {/* Auto Convert */}
            <MonolithElement asCard data-reveal className="bento-box">
              <div className="bento-icon-wrapper">
                <Activity size={20} color="var(--text-primary)" />
              </div>
              <h3>Any format, automatically.</h3>
              <p>Converts inputs on the fly. Say goodbye to manual formatting constraints.</p>
            </MonolithElement>

            {/* Resize */}
            <MonolithElement asCard data-reveal className="bento-box">
              <div className="bento-icon-wrapper">
                <Maximize size={20} color="var(--text-primary)" />
              </div>
              <h3>Resize instantly.</h3>
              <p>Maintains aspect ratios perfectly while shrinking massive 4k uploads down to specs.</p>
            </MonolithElement>

            {/* The modern standard (2x2 span) */}
            <MonolithElement asCard data-reveal className="bento-box span-2 row-2 large-content" style={{ position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 10, maxWidth: '100%', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <div className="bento-icon-wrapper" style={{ background: 'rgba(255, 0, 51, 0.1)', borderColor: 'rgba(255, 0, 51, 0.2)' }}>
                  <Zap size={20} color="var(--accent-primary)" />
                </div>
                <h3 style={{ fontSize: '28px', marginBottom: '16px', fontWeight: 800 }}>The modern standard.</h3>
                <p style={{ fontSize: '16px' }}>
                  Serve next-gen formats like WebP or AVIF out of the box, slashing bandwidth costs by up to 80% with unrivaled precision.
                </p>
              </div>

              {/* Embedded visual for format comparison V2 */}
              <div style={{ position: 'relative', right: '-5%', width: '105%' }}>
                <div className="bar-chart mono">
                  <div className="bar-row">
                    <div className="bar-label">PNG</div>
                    <div className="bar-track"><div className="bar-fill" style={{ background: 'rgba(255,255,255,0.1)', width: '100%' }} /></div>
                    <div className="bar-label" style={{ textAlign: 'left', color: 'var(--text-primary)' }}>1.2MB</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar-label">JPEG</div>
                    <div className="bar-track"><div className="bar-fill" style={{ background: 'rgba(255,255,255,0.1)', width: '65%' }} /></div>
                    <div className="bar-label" style={{ textAlign: 'left', color: 'var(--text-primary)' }}>800KB</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar-label" style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>WebP</div>
                    <div className="bar-track"><div className="bar-fill" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', width: '35%', boxShadow: '0 0 15px rgba(255,0,51,0.3)' }} /></div>
                    <div className="bar-label" style={{ textAlign: 'left', color: 'var(--accent-secondary)', fontWeight: 800 }}>320KB</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar-label" style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>AVIF</div>
                    <div className="bar-track"><div className="bar-fill" style={{ background: 'var(--accent-tertiary)', width: '25%', boxShadow: '0 0 10px rgba(161, 0, 31, 0.5)' }} /></div>
                    <div className="bar-label" style={{ textAlign: 'left', color: 'var(--accent-secondary)', fontWeight: 800 }}>210KB</div>
                  </div>
                </div>
              </div>
            </MonolithElement>

            {/* Seamless UI feature discovered in code */}
            <MonolithElement asCard data-reveal className="bento-box">
              <div className="bento-icon-wrapper">
                <SlidersHorizontal size={20} color="var(--text-primary)" />
              </div>
              <h3>Seamless Admin UI.</h3>
              <p>Editors can select formats directly from the media sidebar, complete with real-time compression savings analytics directly in Payload.</p>
            </MonolithElement>
          </div>
        </section>

        {/* All Features Section - Raycast Style */}
        <section id="all-features" className="section" style={{ marginTop: '120px', marginBottom: '160px' }}>
          <div style={{ textAlign: 'left', marginBottom: '100px' }}>
            <h2 data-reveal className="section-title" style={{ fontSize: '48px', marginBottom: '16px' }}>
              Everything you need. <br /><span style={{ color: 'var(--text-dim)' }}>Nothing you don't.</span>
            </h2>
            <p data-reveal style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '600px' }}>
              A complete suite of tools to handle your image pipeline exactly how you want it. Zero compromises.
            </p>
          </div>

          <div className="all-features-container">
            {Object.entries(groupedFeatures).map(([groupName, features]) => {
              let Icon = Settings2;
              if (groupName.includes("Conversion")) Icon = Repeat;
              if (groupName.includes("Resize")) Icon = Maximize;
              if (groupName.includes("Admin")) Icon = SlidersHorizontal;
              if (groupName.includes("Safety")) Icon = ShieldCheck;
              if (groupName.includes("Architecture")) Icon = Cpu;

              return (
                <div key={groupName} className="category-section">
                  <div className="category-sticky-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                      <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Icon size={32} color="var(--accent-secondary)" />
                      </div>
                    </div>
                    <h3 className="category-title">{groupName}</h3>
                  </div>

                  <div className="category-scroll-content">
                    {features.map(f => (
                      <MonolithElement asCard key={f.title} data-reveal className="feature-row-card">
                        <div className="feature-row-icon">
                          <CheckCircle2 size={24} color="var(--text-muted)" />
                        </div>
                        <div className="feature-row-content">
                          <h4 className="feature-row-title">{f.title}</h4>
                          <p className="feature-row-desc">{f.desc}</p>
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
        <section id="developers" className="code-section section" style={{ marginBottom: '240px' }}>
          <div className="code-text" style={{ textAlign: 'left' }}>
            <h2 data-reveal className="code-title">Three lines.<br />Infinite performance.</h2>
            <p data-reveal>Drop the plugin into your Payload config. It hooks into the upload cycle natively, utilizing Sharp for blazingly fast compression. Zero boilerplate.</p>
            <ul data-reveal className="code-list">
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
          <div data-reveal className="code-editor-wrapper">
            <div className="code-editor">
              <div className="ce-header">
                <div className="ce-tab" style={{ borderBottomColor: 'var(--accent-primary)' }}>payload.config.ts</div>
                <Copy size={14} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
              </div>
              <div className="ce-body">
                <pre><code><span className="sy-kw">import</span> {'{'} buildConfig {'}'} <span className="sy-kw">from</span> <span className="sy-str">'payload/config'</span>
                  <span className="sy-kw">import</span> {'{'} imageConverterPlugin {'}'} <span className="sy-kw">from</span> <span className="sy-str">'payload-img-convert'</span>

                  <span className="sy-kw">export default</span> <span className="sy-fn">buildConfig</span>({'{'}
                  <span className="sy-prop">plugins</span>: [
                  <span className="sy-fn">imageConverterPlugin</span>({'{'}
                  <span className="sy-prop">collections</span>: [<span className="sy-str">'media'</span>],
                  <span className="sy-prop">formats</span>: [<span className="sy-str">'webp'</span>, <span className="sy-str">'avif'</span>],
                  <span className="sy-prop">maxWidth</span>: <span className="sy-num">1920</span>,
                  <span className="sy-prop">quality</span>: <span className="sy-num">80</span>,
                  <span className="sy-prop">oversizeThreshold</span>: <span className="sy-num">2000</span>
                  {'}'})
                  ],
                  <span className="sy-com">// Database and collections...</span>
                  {'}'})</code></pre>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Extreme Depth Bottom Lasers */}
      <div className="bottom-laser-bg">
        <div className="raycast-laser-environment">
          <div className="laser-beam laser-1" />
          <div className="laser-beam laser-2" />
          <div className="laser-beam laser-3" />
          <div className="laser-beam laser-4" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ position: 'relative', zIndex: 10 }}>
        <div className="footer-grid">
          <div className="fg-brand">
            <span className="mono" style={{ color: 'var(--accent-secondary)', fontWeight: 500 }}>payload-img-convert</span>
            <p>The developer-first image optimization pipeline for Payload CMS.</p>
          </div>
          <div className="fg-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#developers">Documentation</a>
            <a href="#">CLI Reference</a>
          </div>
          <div className="fg-column">
            <h4>Ecosystem</h4>
            <a href="https://github.com/stianlarsen/payload-img-convert">GitHub Repository</a>
            <a href="https://npmjs.com/package/payload-img-convert">NPM Package</a>
            <a href="https://payloadcms.com/">Payload CMS</a>
          </div>
          <div className="fg-column">
            <h4>Maintainer</h4>
            <a href="https://github.com/stianlarsen">Stian Larsen</a>
            <span className="muted-p" style={{ display: 'block', marginTop: '12px' }}>MIT License</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
