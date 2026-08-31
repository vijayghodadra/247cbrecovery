# 🚛 Cambridge Vehicle Recovery

A premium, highly-optimized Single Page Application (SPA) for **24/7 Emergency Breakdown and Accident Recovery Services** in Cambridge and surrounding areas.

This application is built with **React**, **Vite**, and **Vanilla CSS**. It implements a custom history-friendly routing system, dynamic SEO subpage rendering for targeting specific cities/counties, and an inline administrative control panel to configure critical details.

---

## 🛠️ Tech Stack & Dependencies

*   **Framework:** React 19.x
*   **Bundler & Dev Server:** Vite 8.x
*   **Styling:** Vanilla CSS (custom design system, responsive design layout)
*   **Icon Library:** Lucide React (for UI indicators)
*   **Hosting Configuration:** Vercel ready (`vercel.json`)

---

## 🚀 Getting Started

Follow these steps to run the project locally or build for production:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

### 2. Installation
Install the project dependencies using npm:
```bash
npm install
```

### 3. Running Locally
Start the Vite local development server:
```bash
npm run dev
```
The application will run by default at `http://localhost:5173/`.

### 4. Build for Production
Compile and minify the asset files for deployment:
```bash
npm run build
```
The output directory will be `dist/`.

### 5. Preview Locally
Test the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```bash
├── public/                # Static assets (images, icons)
├── src/
│   ├── components/        # UI components & their corresponding stylesheets
│   │   ├── AdminPanel.jsx        # Admin page to manage system settings
│   │   ├── CambridgePage.jsx     # Specialized page for central Cambridge
│   │   ├── ServiceAreaPage.jsx   # Dynamic landing page layout for service cities
│   │   └── [Other layout components: Hero, Contact, FAQ, etc.]
│   ├── context/
│   │   └── SettingsContext.jsx   # Persists global contact settings (Phone, WhatsApp)
│   ├── data/
│   │   ├── seoCities.js          # Dynamic data generation for long-tail SEO pages
│   │   └── serviceAreas.js       # List of statically targeted SEO service areas
│   ├── App.jsx            # Main app router, SEO tags injector & layout resolver
│   ├── App.css            # Root layouts & grid structures
│   ├── main.jsx           # App bootstrapping & ReactDOM rendering
│   └── index.css          # Core CSS variables, typography, reset rules
├── vercel.json            # Deployment configuration file
├── package.json           # Scripts & project dependencies
└── vite.config.js         # Vite configuration (React plugin setup)
```

---

## 🧭 Routing & SEO Subpages

This project utilizes a **History API-based router** instead of React Router to ensure lightweight rendering and absolute control over path injection.

### Dynamic SEO Injection
Paths are resolved inside `src/App.jsx` using:
1. **Homepage (`/`)**: Renders all default components (Hero, Services, Booking, FAQ, Reviews, Contact).
2. **Central Cambridge (`/cambridge`)**: Renders a custom `CambridgePage` styled for Cambridge center.
3. **Static Areas**: Path slugs defined in `src/data/serviceAreas.js` will map immediately to `ServiceAreaPage` with custom headlines, prices, and map positions.
4. **Dynamic Areas**: Path slugs not found in static files are matched programmatically by `generateDynamicSeoPage(slug)` inside `src/data/seoCities.js` to create dynamic landing pages on-the-fly.

During routing, the browser's document Title (`document.title`) and Meta Description tag (`meta[name="description"]`) are updated dynamically to target localized SEO search queries.

---

## ⚙️ Administration & Settings Persistence

Commonly modified configurations (e.g. phone numbers, WhatsApp links, and homepage recovery images) can be managed inline:

*   **Accessing Admin Panel**: Navigating to the page and clicking the **Admin** button in either the header navigation or the mobile drawer opens the administration panel.
*   **Persistence**: Changes made in the Admin Panel are passed down via `SettingsContext` and saved into `localStorage` (`cvr_settings`). If the browser finds localStorage defaults, it populates the site's UI with them instantly.
*   **Emergency Contact Override**: Notice that any edited phone numbers merge with `+447438189791` as the override defaults inside `SettingsContext.jsx`.

---

## 🔗 Deployment

The project contains a `vercel.json` configured for Single Page Apps (handling rewrites pointing to `/index.html` to support client-side routing on reload):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
Deploying to **Vercel** or **Netlify** requires zero configuration. Simply connect the Git repository and deploy.
