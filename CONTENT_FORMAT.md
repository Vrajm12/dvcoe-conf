# Content Format Reference

This document shows exactly what markdown files look like when admins create content.

## Event File Example

**Location:** `content/events/ai-summit-2026.md`

```markdown
---
title: "AI Summit 2026"
date: "2026-07-15T09:00:00Z"
description: "Join industry leaders for three days of AI innovation, networking, and hands-on workshops."
image: "/images/ai-summit.jpg"
---

## Overview

This is an optional extended description that appears in the file but is separate from the frontmatter.
```

**When displayed:**
- title: "AI Summit 2026"
- date: "7/15/2026"
- description: Shows in event list
- image: Displays on card
- slug (auto-generated): "ai-summit-2026"

---

## Announcement File Example

**Location:** `content/announcements/early-bird-launch.md`

```markdown
---
title: "Early Bird Registration Open!"
content: "Save 30% on registration until March 31st. Limited spots available."
date: "2026-03-20T08:00:00Z"
---
```

**When fetched:** Shows newest first (sorted by date)

---

## Keynote Speaker Example

**Location:** `content/keynotes/dr-john-doe.md`

```markdown
---
title: "Dr. John Doe"
topic: "Quantum Computing: The Next Frontier"
bio: "Dr. John Doe is a quantum physicist and AI researcher with 20+ years at MIT and Stanford."
image: "/images/keynotes/john-doe.jpg"
time: "10:30 AM"
---
```

**Used in:** Schedule and keynotes page

---

## Page Content Example

**Location:** `content/pages/home.md`

```markdown
---
title: "ICCET-2026"
subtitle: "9th International Conference on Computing and Technology"
tagline: "International Conference"
event_type: "Hybrid mode"
---
```

**Usage in React:**
```tsx
const homeContent = await fetch('/api/pages/home');
const { title, subtitle, event_type } = await homeContent.json();
```

---

## Call for Papers Example

**Location:** `content/pages/call-for-papers.md`

```markdown
---
deadline: "2026-06-30T23:59:59Z"
guidelines: |
  - Maximum 8 pages in IEEE format
  - Submit in PDF format
  - Original, unpublished work only
  - Include author affiliations
topics: "AI, Machine Learning, Cloud Computing, Cybersecurity, IoT, Data Science, Networks"
---
```

---

## How Files Are Stored

When admin creates a new event called "Machine Learning Conference":
1. Admin fills form in `/admin`
2. Title becomes slug: `machine-learning-conference`
3. File created: `content/events/machine-learning-conference.md`
4. Commit message: `Create "Machine Learning Conference" in events`
5. Deployed to main branch

---

## Image Hosting

All images go to `/public/images/`

**Folder structure suggestion:**
```
/public/images/
  /events/
    ai-summit.jpg
    ml-conference.jpg
  /keynotes/
    dr-john-doe.jpg
    dr-jane-smith.jpg
```

When admin uploads, it creates the file automatically.

---

## Date/Time Format

All dates must be ISO 8601 format:
```
2026-03-25T14:30:00Z
```

- **T** separates date and time
- **Z** means UTC timezone
- In React, convert with: `new Date(event.date).toLocaleDateString()`

---

## How React Reads This

### In Component:
```tsx
const response = await fetch('/api/events');
const events = await response.json();
// events = [
//   {
//     slug: "ai-summit-2026",
//     title: "AI Summit 2026",
//     date: "2026-07-15T09:00:00Z",
//     description: "Join industry leaders...",
//     image: "/images/ai-summit.jpg",
//     body: "## Overview\n\nThis is..."
//   }
// ]
```

### Available fields for each collection:

**Events:**
- title, date, description, image, slug, body

**Announcements:**
- title, content, date, slug, body

**Keynotes:**
- title, topic, bio, image, time, slug, body

**Pages:**
- title, subtitle, tagline, event_type, deadline, guidelines, topics

---

## Fallback Content

If no files exist, APIs return empty arrays `[]`

The site gracefully handles this:
```tsx
{events.length === 0 ? (
  <p>No events scheduled yet.</p>
) : (
  // Show events
)}
```

---

## Version Control

Every change in admin = Git commit

**You can:**
- Rollback changes by reverting commits on GitHub
- See full history of edits
- Restore old versions anytime

**Example workflow:**
1. Admin edits event title
2. Git commit created automatically
3. GitHub shows the change
4. If mistake, click revert on GitHub

This is a major benefit vs databases!
