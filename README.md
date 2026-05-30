ereckers.github.io
==================

Personal one-page static website for Ed Reckers, hosted on GitHub Pages at
[www.edreckers.com](https://www.edreckers.com).

No build tooling — edit the files directly and push to `master` to deploy.

### Structure

* `index.html` — single page with all sections inline (hero, about, projects, photo, contact).
* `css/style.css` — all styles, using CSS custom properties for the dark theme.
* `js/scripts.js` — jQuery for the scroll-triggered fixed nav and smooth-scroll anchors.

External dependencies (jQuery, Font Awesome, Google Fonts) are loaded from CDN.
The `old/` directory holds the pre-redesign version of the site.

### Local preview

```bash
python3 -m http.server 8000
```

### DNS

The `CNAME` file points GitHub Pages to `www.edreckers.com`. A redirect hosted on
WP Engine issues a 301 from `edreckers.com` to `www.edreckers.com`.

### Contact form

The contact form submits via [Formspree](https://formspree.io/) (AJAX), using the
`@formspree/ajax` client. The form ID is configured inline in `index.html`.
