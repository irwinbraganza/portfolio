# Testing Checklist

Complete verification before deployment.

## Local Development

### Setup
- [ ] Node.js 18+ installed (`node --version`)
- [ ] pnpm installed (`pnpm --version`)
- [ ] Repository cloned
- [ ] Dependencies installed (`pnpm install`)
- [ ] Environment variables configured:
  - [ ] `apps/api/.env` or env vars set
  - [ ] `apps/web/.env.local` or env vars set

### Running

- [ ] API starts successfully (`pnpm --filter @irwin/api dev`)
  - [ ] Runs on http://localhost:3001
  - [ ] No TypeScript errors
  - [ ] No runtime errors in console

- [ ] Web app starts successfully (`pnpm --filter @irwin/web dev`)
  - [ ] Runs on http://localhost:3000
  - [ ] No TypeScript errors
  - [ ] No build errors

- [ ] Both run together (`pnpm dev`)
  - [ ] No port conflicts
  - [ ] Both start without errors

### API Testing

#### Health Check
- [ ] `GET http://localhost:3001/api/health` returns:
  ```json
  { "status": "ok", "timestamp": "..." }
  ```

#### Profile Endpoint
- [ ] `GET http://localhost:3001/api/profile` returns valid JSON
  - [ ] Contains `name` field
  - [ ] Contains `title` field
  - [ ] Contains `links` object with `linkedin`, `github`, `email`

#### Projects Endpoint
- [ ] `GET http://localhost:3001/api/projects` returns valid JSON
  - [ ] Contains `caseStudies` array
  - [ ] Each study has required fields

#### Architecture Endpoint
- [ ] `GET http://localhost:3001/api/architecture` returns valid JSON
  - [ ] Contains `title` field
  - [ ] Contains `diagram` object with `stages` array
  - [ ] Contains `technologies` object with all categories

#### Swagger Documentation
- [ ] `GET http://localhost:3001/api/docs` loads in browser
  - [ ] All endpoints documented
  - [ ] Request/response schemas visible
  - [ ] Can test endpoints from Swagger UI

### Web App Testing

#### Loading & Rendering
- [ ] Website loads at http://localhost:3000
- [ ] No console errors on page load
- [ ] Initial HTML includes proper meta tags:
  - [ ] `<title>` present
  - [ ] `<meta name="description">` present
  - [ ] `<meta property="og:image">` present

#### Content Sections
- [ ] Hero section renders
  - [ ] Name displays correctly
  - [ ] Tagline is quoted
  - [ ] CTA buttons are clickable

- [ ] About section renders
  - [ ] About text displays
  - [ ] Leadership themes listed as bullets
  - [ ] Performance rating card visible

- [ ] Case Studies section renders
  - [ ] All case studies display
  - [ ] Each has context, challenge, role, approach, outcome, lessons
  - [ ] Proper layout on desktop and mobile

- [ ] Architecture section renders
  - [ ] Diagram with numbered stages displays
  - [ ] Topics listed
  - [ ] Explanation text present

- [ ] Technologies section renders
  - [ ] All four categories visible
  - [ ] Technologies display as tags
  - [ ] Categories: Leadership, Backend, Frontend, Cloud

- [ ] Timeline section renders
  - [ ] Events display in chronological order
  - [ ] Periods, roles, and descriptions visible

- [ ] Contact section renders
  - [ ] Email, LinkedIn, GitHub buttons visible
  - [ ] Contact information cards display

#### Navigation
- [ ] Header sticky and responsive
- [ ] Navigation links scroll to sections:
  - [ ] About
  - [ ] Leadership
  - [ ] Case Studies
  - [ ] Architecture
  - [ ] Technologies
  - [ ] Timeline
  - [ ] Contact

- [ ] Mobile menu opens/closes
- [ ] Footer displays with links and copyright

#### Buttons & Links
- [ ] "Explore My Work" button scrolls to About
- [ ] "Download Resume" opens/downloads resume.pdf
- [ ] "LinkedIn" link opens LinkedIn profile
- [ ] "GitHub" link opens GitHub profile
- [ ] "Email" link opens email client
- [ ] Resume link in footer works

#### Dark Mode
- [ ] Light mode displays correctly
- [ ] Colors use warm-white background (neutral-50)
- [ ] Text is charcoal (neutral-900)
- [ ] Accents are deep green (forest-700)

- [ ] Dark mode toggle works (if implemented)
- [ ] Dark colors are appropriate
- [ ] Text is readable in dark mode
- [ ] No contrast violations

#### Responsive Design
- [ ] Mobile (375px width)
  - [ ] All content visible
  - [ ] Text readable
  - [ ] Buttons are touch-friendly (44px min height)
  - [ ] No horizontal scrolling

- [ ] Tablet (768px width)
  - [ ] Layout adapts to two columns where appropriate
  - [ ] Navigation doesn't overflow

- [ ] Desktop (1200px width)
  - [ ] Multi-column layouts render
  - [ ] Full width content uses max-width constraint

#### Accessibility (WCAG 2.1 AA)
- [ ] Keyboard navigation works
  - [ ] Tab through all interactive elements
  - [ ] Focus indicators visible
  - [ ] Can reach all buttons with Tab key

- [ ] Screen reader compatibility
  - [ ] Page has proper heading hierarchy (h1, h2, h3)
  - [ ] Images have alt text
  - [ ] Link text is descriptive (not "click here")

- [ ] Color contrast
  - [ ] Text meets 4.5:1 contrast ratio (WCAG AA)
  - [ ] Use DevTools Lighthouse or WebAIM contrast checker

- [ ] Motion
  - [ ] No auto-playing animations
  - [ ] Respects `prefers-reduced-motion` setting

#### Performance (Lighthouse)
- [ ] Performance score ≥90
  - [ ] Largest Contentful Paint (LCP) < 2.5s
  - [ ] Cumulative Layout Shift (CLS) < 0.1
  - [ ] First Input Delay (FID) < 100ms

- [ ] Accessibility score ≥90

- [ ] Best Practices score ≥90

- [ ] SEO score ≥90
  - [ ] Meta tags present
  - [ ] Mobile friendly
  - [ ] HTTPS (in production)

Run Lighthouse:
```bash
# Chrome DevTools: F12 → Lighthouse
# Or use CLI:
npm install -g lighthouse
lighthouse http://localhost:3000
```

#### API Integration
- [ ] Website fetches from API on load
- [ ] Fallback to local content if API unavailable:
  - [ ] Stop API server
  - [ ] Website still displays content
  - [ ] Console shows fallback warning

- [ ] Network tab shows requests:
  - [ ] `/api/profile` request completes
  - [ ] `/api/projects` request completes
  - [ ] `/api/architecture` request completes

#### SEO Testing
- [ ] Open Graph tags correct:
  ```bash
  # In Network tab, view page source
  # Or use: https://opengraphcheck.com
  ```

- [ ] Twitter Card tags present (if implemented)

- [ ] Canonical URL set

- [ ] robots.txt allows crawling (if needed)

- [ ] sitemap.xml generates correctly:
  ```bash
  curl http://localhost:3000/sitemap.xml
  ```

## Production Testing

### Build Verification

#### API Build
```bash
pnpm --filter @irwin/api build
# Check: dist/ folder exists with compiled code
```

#### Web Build
```bash
pnpm --filter @irwin/web build
# Check: .next/ folder exists
# No build errors
# No TypeScript errors
```

### Staging Deployment

- [ ] Deploy to staging environment
- [ ] Test with production API URL
- [ ] Verify all sections render
- [ ] Test all links work with live API
- [ ] Performance metrics acceptable
- [ ] No console errors in production build

### Production Verification

#### Web (Vercel)
- [ ] Site loads at production URL
- [ ] All content renders
- [ ] Images load correctly
- [ ] Links work (especially external links)
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] Lighthouse scores acceptable

#### API (Cloud Run)
- [ ] API responds to health check
  ```bash
  curl https://api.yourdomain.com/api/health
  ```

- [ ] Endpoints return correct data
  ```bash
  curl https://api.yourdomain.com/api/profile
  curl https://api.yourdomain.com/api/projects
  curl https://api.yourdomain.com/api/architecture
  ```

- [ ] Swagger docs accessible
  ```
  https://api.yourdomain.com/api/docs
  ```

- [ ] CORS configured correctly
  - [ ] Web can fetch from API
  - [ ] No CORS errors in browser console

#### Integration
- [ ] Website loads and fetches from production API
- [ ] All data displays correctly
- [ ] No network errors
- [ ] Performance acceptable

### Security Checklist

- [ ] No sensitive credentials in code
- [ ] No API keys in repository
- [ ] CORS origin set correctly (not * in production)
- [ ] Security headers present:
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] X-XSS-Protection

## Browser Compatibility

Test in multiple browsers:

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS latest)
- [ ] Chrome Mobile (Android latest)

Check for:
- [ ] Layout correct
- [ ] Colors render properly
- [ ] Fonts load
- [ ] Interactive elements work
- [ ] No console errors

## Content Verification

- [ ] All text is current and accurate
- [ ] No placeholder text remains
- [ ] Links point to correct profiles
- [ ] Email address is correct
- [ ] Resume is up-to-date
- [ ] Case studies are relevant

## Performance Verification

- [ ] First page load < 3 seconds
- [ ] Navigate between sections smoothly
- [ ] No layout shifts during loading
- [ ] Images load without quality loss
- [ ] Scroll performance is smooth

## Deployment Checklist

Before pushing to production:

- [ ] All local tests pass
- [ ] No uncommitted changes
- [ ] Branch is up-to-date with main
- [ ] Commit messages are clear
- [ ] No debug code or console.log()
- [ ] Environment variables documented
- [ ] Deployment steps documented

## Post-Deployment

After deployment:

- [ ] Production site loads
- [ ] Monitor error logs for 24 hours
- [ ] Check Lighthouse scores weekly
- [ ] Monitor uptime (if using monitoring service)
- [ ] Check for security alerts
- [ ] Verify analytics (if implemented)

## Reporting Issues

If tests fail:

1. **Note the failure:** What test failed?
2. **Reproduce:** Can you reproduce it locally?
3. **Debug:**
   ```bash
   # Check logs
   tail -f logs/api.log
   
   # Check browser console (F12)
   # Check Network tab for failed requests
   ```

4. **Fix:** Update code and re-test
5. **Document:** Add to TESTING_CHECKLIST.md if new test

## Automation

To automate testing:

```bash
# Run type checking
pnpm --parallel -r run build

# Run linting
pnpm --parallel -r run lint

# Run integration tests (if added)
pnpm test
```

Consider setting up CI/CD to run tests on every push.
