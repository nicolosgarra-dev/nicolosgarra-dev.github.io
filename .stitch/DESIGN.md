---
name: Architect Terminal Blue
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bec7d4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#88919d'
  outline-variant: '#3f4852'
  surface-tint: '#98cbff'
  primary: '#98cbff'
  on-primary: '#003354'
  primary-container: '#00a3ff'
  on-primary-container: '#00375a'
  inverse-primary: '#00629d'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c8c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#9e9c9c'
  on-tertiary-container: '#343434'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-base:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  button-label:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is engineered for power users, developers, and system architects who require high-density information environments. It adopts a **Technical Minimalism** aesthetic, drawing inspiration from high-end integrated development environments (IDEs) and command-line interfaces. 

The personality is precise, authoritative, and low-latency. It avoids decorative flourishes in favor of structural clarity and functional contrast. The primary blue accent (#00a3ff) acts as a high-signal beacon against a deep, monochromatic background, signaling interactivity and system health. The emotional response should be one of total control and professional efficiency.

## Colors

The palette is anchored by a "True Dark" foundation. The background is nearly black (#0a0a0a) to eliminate distraction and maximize the luminosity of the accent colors. 

- **Primary Blue (#00a3ff):** Reserved strictly for active states, primary actions, and critical progress indicators. 
- **Surface Tiers:** UI depth is managed through subtle greyscale shifts. Level 0 is the background; Level 1 (#1a1a1a) is for cards and containers; Level 2 (#2e2e2e) is for borders and hover states.
- **High-Contrast Text:** Text is rendered in pure white or off-white for maximum legibility, while secondary metadata uses a mid-grey to maintain visual hierarchy.

## Typography

This design system utilizes **Geist** for all UI elements to ensure a clean, geometric, and Swiss-inspired appearance. To enhance the "Terminal" feel, **JetBrains Mono** is introduced for data displays, code snippets, and system labels.

- **Tracking:** Headlines use tight tracking (-0.04em) to appear dense and impactful.
- **Scaling:** Font sizes are kept intentionally small (12px - 14px for body) to facilitate high-density information layouts.
- **Weight:** Use SemiBold (600) for interactive elements and Regular (400) for content to provide clear differentiation without relying on color.

## Layout & Spacing

The layout philosophy is built on a strict **4px baseline grid**. Components and spacing should always be multiples of 4.

- **Grid:** A 12-column fixed grid is used for desktop layouts, transitioning to a single-column fluid layout for mobile.
- **Density:** High density is preferred. Gutters are kept at 16px to allow for more content on screen.
- **Consistency:** Use "sm" (8px) for internal component padding and "md" (16px) for spacing between distinct UI blocks.

## Elevation & Depth

This design system avoids traditional drop shadows. Depth is communicated through **Tonal Layering** and **High-Contrast Outlines**.

- **Surfaces:** Elevated elements (modals, popovers) use a slightly lighter background (#1a1a1a) than the base layer.
- **Borders:** Instead of shadows, use 1px solid borders. Base borders are #2e2e2e. Focus or active borders use the Primary Blue (#00a3ff).
- **Z-Index:** Content is conceptually "etched" into the screen. When an element sits "above" another, it is defined by a subtle inner glow or a distinct border-color change rather than a cast shadow.

## Shapes

To maintain the architectural and technical look, the design system utilizes **Sharp (0px)** corners for all primary containers, buttons, and input fields. 

In specific instances where "softness" is required for user comfort (e.g., small status pips or avatars), a maximum radius of 2px may be applied, but the overarching rule is a rigid, rectangular geometry that mimics a terminal window.

## Components

- **Buttons:** Primary buttons are solid #00a3ff with black text. Secondary buttons are outlined with #2e2e2e and white text, turning to blue borders on hover.
- **Inputs:** Input fields are dark backgrounds (#0a0a0a) with 1px borders (#2e2e2e). On focus, the border turns #00a3ff and a 1px "ghost" blue glow is permitted.
- **Lists:** Use monospaced fonts for list indices. Hover states on list items should utilize a subtle background shift to #1a1a1a.
- **Cards:** Cards should have no shadow, defined only by a #2e2e2e border. Headers within cards are separated by a 1px horizontal rule.
- **Terminal Console:** A specific component for logging and system feedback. Uses a black background, JetBrains Mono font, and Primary Blue for timestamps or success messages.
- **Status Chips:** Small, rectangular badges with low-opacity background tints of the status color (e.g., Blue at 10% opacity) and a solid 1px border.