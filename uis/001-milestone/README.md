# Nexova Public Website

English-language public website and talent registration project using HTML, vanilla JavaScript, and Tailwind CSS v4.

Requirements and progress are recorded in [plan.md](plan.md), [tasks.md](tasks.md), and [BRIEFING.md](../BRIEFING.md).

## Current Status

The landing page, separate application form, and JavaScript validation are implemented. The form is a demonstration only: it makes no submission request and does not persist candidate information. Approved privacy-policy content and a confirmed production domain are still required before production launch.

Tailwind source detection was verified against utilities in both pages and JavaScript error states. Rebuild the stylesheet whenever application utility classes change.

## Prerequisites

- Node.js and npm, including npx. Setup was verified with Node.js 24.18.1 and npm 11.11.0.
- Run the following commands inside this project folder:

```sh
cd /workspaces/PedroTenreiro_Milestone/uis/001-milestone
```

## Install Dependencies

Use the committed dependency lockfile for reproducible installation:

```sh
npm ci
```

Tailwind CSS, its CLI, and the static preview server are development dependencies. No additional application framework is required.

## Generate Styles

```sh
npx @tailwindcss/cli -i ./tailwind.input.css -o ./assets/tailwind.css --minify
```

The input contains only Tailwind's import. All design must use utility classes, including complete class names in JavaScript state changes. Do not add handwritten CSS or inline styles. The generated stylesheet is build output and must not be manually edited.

During development, optionally run the compiler in a separate terminal:

```sh
npx @tailwindcss/cli -i ./tailwind.input.css -o ./assets/tailwind.css --watch
```

## Run the Local Preview

After dependency installation and CSS generation:

```sh
npx serve . --listen tcp://0.0.0.0:3000
```

Open http://localhost:3000. The landing page is available at `/index.html` and the talent registration form at `/application.html`.

The server binds to all container interfaces so Codespaces can forward its port. Stop the server or compiler watcher with Ctrl+C in its terminal.

If port 3000 is occupied, select an unused port explicitly:

```sh
npx serve . --listen tcp://0.0.0.0:3001
```

Check the server's reported address and forward the port actually in use. A missing clipboard-helper warning is harmless; append `--no-clipboard` to suppress clipboard integration.

## Public Codespaces Preview

1. Keep the preview server running in the Codespace.
2. Open the VS Code Ports panel and confirm port 3000 is forwarded, or add the actual port selected above.
3. Change that port's visibility to Public using its context menu.
4. Copy the actual forwarded HTTPS address from the Ports panel. Do not construct or invent the URL.
5. Open that URL in a signed-out/private browser and verify the pages and assets load before sharing it for external accessibility and SEO audits.
6. Record the verified URL and audit findings here when those checklist tasks are completed.

Public preview: https://congenial-computing-machine-545xj549r9c4jvg-3000.app.github.dev

The public-visibility command succeeded on 2026-10-21. An unauthenticated HTTP request returned Nexova content, and a fresh browser context reached the landing page after GitHub's standard first-visit Continue warning. No GitHub sign-in was needed. Full external verification of both pages and assets remains pending: the second browser attempt inspected the photograph before it was ready and stopped before reaching the form. The checklist records the two-attempt limit and this remaining check.

If account or organization policy prevents Public visibility, record that blocker and request an authorized policy change. Do not claim that a private preview is publicly accessible. The preview stops being available when the server or Codespace stops.

This is a development server exposing the project directory, not a production deployment. Do not put secrets, CVs, or candidate records in this folder. Approved privacy-policy content and a confirmed production domain remain launch prerequisites.

## Dependency Security

Scoped overrides in the package configuration select `@parcel/watcher` 2.6.0 for the Tailwind CLI and `compression` 1.8.2 for serve. These resolved the six vulnerabilities reported during initial installation without downgrading Tailwind or serve.

The security audit reported zero vulnerabilities on 2026-10-21. Recheck dependency security when changing versions; reconsider the overrides once upstream dependencies incorporate the patched releases. Do not run forced breaking upgrades automatically.

## Image Source

The local `assets/team.jpg` photograph depicts professionals collaborating in an office. Source: [Unsplash image photo-1522071820081-009f0129c71c](https://images.unsplash.com/photo-1522071820081-009f0129c71c). Usage is subject to the [Unsplash License](https://unsplash.com/license). The downloaded JPEG is 1600 by 1067 pixels; dimensions and descriptive alternative text are included in the page.

## Verification Results

Checks performed on 2026-10-21 using Chromium and temporary Playwright/axe tooling installed outside this project; no test files or additional application frameworks were added:

- Both pages rendered without horizontal overflow at 320, 375, 768, and 1440 CSS pixels, and at 200% text size on a desktop viewport. Desktop and mobile screenshots were visually inspected.
- Informative image loading, labels, IDs, skip links, navigation destinations, and keyboard-only form submission passed.
- Fifty-seven validation cases passed, including every allowed option, invalid values, 0/50 experience boundaries, optional blank fields, URL protocols, and 499/500/501-character comments.
- All eleven exact error messages, real-time correction, first-error focus, confirmation focus, and reset after errors and success passed.
- Browser monitoring showed no requests or persistent-storage changes during simulated submission.
- Axe WCAG A/AA rule scans found zero violations on both pages and on the invalid form state. The landing-page image contrast item required manual review; the 75% black overlay guarantees at least 8.10:1 for the tested hero text even over a white image pixel.
- Form-control boundaries measured 4.74:1 against white. These checks are not a WCAG certification or a substitute for a full assistive-technology review.
- Organization JSON-LD parsed successfully and includes both offices and the preserved 2011 founding date. The temporary preview is not declared as the production canonical URL.
- The structured-data-testing-tool CLI passed the Organization schema with zero warnings and zero failures. This temporary audit tool was not added to application dependencies.
- Direct page routes, generated styles, validation JavaScript, the photograph, and the brand favicon returned successfully with no browser-console or resource errors in the final local check.

Full external browser verification, a final production domain, and approved privacy-policy content remain outstanding. The implementation is a demonstration, not a production candidate-data collection service.