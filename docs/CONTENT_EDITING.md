# Content Editing Guide

How to update your portfolio content without touching code.

## Overview

All portfolio content lives in one file:

**`apps/api/src/services/data.service.ts`**

This file contains three methods that return all portfolio data:
- `getProfile()` - Hero section, about, performance rating, links
- `getProjects()` - Case studies
- `getArchitecture()` - Architecture diagram and technologies

The website fetches this data and displays it. Update the data, rebuild the API, and the website automatically reflects changes.

## Editing Content

### Profile Section

File: `apps/api/src/services/data.service.ts` → `getProfile()`

**Fields:**

```typescript
{
  name: string;                    // Your full name
  title: string;                   // Job title / role
  tagline: string;                 // One-line tagline (in quotes on hero)
  secondaryTagline: string;        // Secondary description (2-3 sentences)
  about: string;                   // Long-form about section
  leadershipThemes: string[];      // Bullet points of leadership qualities
  performanceRating: string;       // Performance rating (e.g., "2025: Exceeding")
  performanceText: string;         // Supporting text for performance
  links: {
    linkedin: string;              // Full LinkedIn URL
    github: string;                // Full GitHub URL
    email: string;                 // Email as mailto: link
  };
}
```

**Example:**

```typescript
{
  name: 'Jane Doe',
  title: 'Engineering Lead',
  tagline: 'I build scalable systems and lead engineering teams.',
  secondaryTagline: 'Engineering leader with 8+ years of experience...',
  about: 'I am an engineering leader with...',
  leadershipThemes: [
    'End-to-end ownership',
    'Team mentoring',
    // ...
  ],
  performanceRating: '2025: Exceeding',
  performanceText: 'Recognized for...',
  links: {
    linkedin: 'https://linkedin.com/in/janedoe',
    github: 'https://github.com/janedoe',
    email: 'mailto:jane@example.com'
  }
}
```

### Case Studies

File: `apps/api/src/services/data.service.ts` → `getProjects()`

**Fields per case study:**

```typescript
{
  id: string;                    // Unique identifier (alphanumeric-slug)
  title: string;                 // Case study title
  context: string;               // Brief context (1-2 sentences)
  challenge: string;             // The problem you faced
  role: string;                  // Your role(s) in the project
  technicalApproach: string;     // How you solved it technically
  outcome: string;               // What was accomplished
  lessons: string[];             // Key learnings (3-4 items)
}
```

**Example:**

```typescript
{
  id: 'real-time-platform',
  title: 'Real-Time Operations Platform',
  context: 'Built a system coordinating 1000+ daily operations.',
  challenge: 'Handling concurrent state updates with 99.9% reliability...',
  role: 'Lead Architect, Full-Stack Engineer',
  technicalApproach: 'Event-driven architecture with Pub/Sub, Redis state...',
  outcome: 'Reduced operational latency by 60%, eliminated race conditions...',
  lessons: [
    'Idempotency is critical for distributed systems',
    'Observability catches bugs before customers do',
    'Clear contracts prevent team misalignment'
  ]
}
```

Add as many case studies as you like. They appear in order on the website.

### Architecture

File: `apps/api/src/services/data.service.ts` → `getArchitecture()`

**Diagram Stages:**

```typescript
diagram: {
  stages: [
    'Operational Events',           // Stage 1
    'Message Broker / Pub/Sub',     // Stage 2
    'TypeScript Services',          // Stage 3
    'State Processing',             // Stage 4
    'Data Store (Redis/MongoDB)',   // Stage 5
    'Analytics & Observability'     // Stage 6
  ],
  explanation: 'Events flow through...'  // Explain the flow
}
```

**Topics:**

List of architectural concepts you work with (bullet points on website):

```typescript
topics: [
  'Event ingestion',
  'Idempotency',
  'Retries and failure handling',
  // Add or remove as needed
]
```

**Technologies:**

Organized by category:

```typescript
technologies: {
  leadership: ['Engineering Management', 'Technical Strategy', ...],
  backend: ['TypeScript', 'Node.js', 'NestJS', ...],
  frontend: ['Next.js', 'React', 'TypeScript', ...],
  cloud: ['GCP', 'Kubernetes', 'Terraform', ...]
}
```

Remove items you don't use, add ones you do.

## Making Changes

### 1. Edit the File

```bash
# Open the file
code apps/api/src/services/data.service.ts

# Or use your editor
nano apps/api/src/services/data.service.ts
```

### 2. Update Content

Example - changing the tagline:

```typescript
// Before
tagline: 'I lead engineering teams and build distributed systems that coordinate real-time physical operations.'

// After
tagline: 'I design scalable backend systems and lead high-performing engineering teams.'
```

### 3. Rebuild and Test Locally

```bash
# Install dependencies (first time only)
pnpm install

# Run development servers
pnpm dev

# API should be at http://localhost:3001/api/profile
# Website should be at http://localhost:3000
```

Visit the website and verify your changes appear.

### 4. Commit and Deploy

```bash
git add apps/api/src/services/data.service.ts
git commit -m "docs: update portfolio content"
git push origin main

# Changes will auto-deploy to production
```

## Static Assets

### Resume

Place your resume PDF at:

```
apps/web/public/resume.pdf
```

Users download it via the "Download Resume" button.

To add/replace:
1. Export your resume as PDF
2. Rename to `resume.pdf`
3. Copy to `apps/web/public/`
4. Commit and push

### Open Graph Image

Social media preview image:

```
apps/web/public/og-image.png
```

Recommended: 1200 x 630 pixels

Create using:
- Screenshot of your hero section
- Design tool (Figma, Canva)
- Simple text + background

## Content Best Practices

### Profile

- **Name:** Full legal name
- **Title:** Current role or aspiration
- **Tagline:** One compelling statement (quoted on hero)
- **About:** 3-4 sentences about your background and approach
- **Leadership themes:** 8-10 key qualities or practices
- **Performance:** Latest rating and supporting text

### Case Studies

- **Title:** Action-oriented or project-focused
- **Context:** 1-2 sentences setting the stage
- **Challenge:** Specific problem you solved (not generic)
- **Role:** Your titles/responsibilities in the project
- **Technical approach:** Concrete technologies and patterns used
- **Outcome:** Tangible results (business or technical)
- **Lessons:** Transferable insights

Avoid:
- Vague metrics ("improved performance by X%")
- Generic statements
- Confidential information
- Specific company product names

### Technologies

Group logically:
- Leadership: Process and people skills
- Backend: Languages, frameworks, databases
- Frontend: UI frameworks and tools
- Cloud: Infrastructure and deployment

Keep only technologies you actively use or want to highlight.

## Validation

After editing, check:

- [ ] All text appears correctly in browser
- [ ] No syntax errors in TypeScript
- [ ] Links (mailto:, https://) work correctly
- [ ] Formatting is consistent with other sections
- [ ] No HTML special characters (`<`, `>`, `&`) — they need escaping
- [ ] Strings don't contain unescaped quotes

If you see errors in the browser console:

```javascript
// Check the Network tab in DevTools
// Verify /api/profile returns valid JSON
// Check server logs: pnpm --filter @irwin/api dev
```

## Examples

### Adding a New Case Study

```typescript
// In getProjects() method
caseStudies: [
  // ... existing studies ...
  {
    id: 'new-case-study',
    title: 'Your New Project Title',
    context: 'Brief context about the project.',
    challenge: 'The specific challenge you faced...',
    role: 'Your role(s)',
    technicalApproach: 'How you solved it...',
    outcome: 'What was accomplished...',
    lessons: [
      'Lesson one',
      'Lesson two',
      'Lesson three'
    ]
  }
]
```

### Updating Technologies

```typescript
// In getArchitecture() method
technologies: {
  leadership: [
    'Engineering Management',
    'Technical Strategy',
    'Mentoring',
    'Sprint Planning',
    'New Skill Here',
    // ...
  ],
  // ... other categories
}
```

### Changing the About Section

```typescript
// In getProfile() method
about: `I am an engineering leader with more than 10 years of experience...
This is where you write your longer bio that appears in the About section.
Feel free to write 3-5 sentences about your background, approach, and values.`
```

## Troubleshooting

### Changes Don't Appear

1. **Rebuild the API:**
   ```bash
   pnpm --filter @irwin/api build
   pnpm --filter @irwin/api dev
   ```

2. **Clear cache:**
   - Browser: DevTools → Clear site data
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

3. **Check for syntax errors:**
   - Look for red squiggles in your editor
   - Check terminal for TypeScript errors

### Deployment Issues

If changes don't appear after pushing:

1. Check GitHub Actions logs (if using CI/CD)
2. Verify the commit was pushed (`git log`)
3. Check deployment logs:
   - Vercel: vercel.com → Project → Deployments
   - Cloud Run: Cloud Console → Cloud Run → Logs

## Help

For questions:
- Check TypeScript errors in your editor
- Review existing examples in `data.service.ts`
- Test locally before committing
- Check git status: `git status`
- View changes before committing: `git diff`
