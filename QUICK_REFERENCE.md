# Quick Reference Card

Print this or keep it open!

---

## DEPLOYMENT STEPS

```
1. git add .
2. git commit -m "Add admin panel"
3. git push origin main
4. Deploy to Netlify via dashboard or CLI
5. Netlify: Settings → Identity → Enable
6. Netlify: Identity → Registration → "Invite only"
7. Netlify: Services → Git Gateway → Enable
8. Netlify: Identity → Invite users → Add email
9. Check email, set password
10. Visit: https://your-site.netlify.app/admin
```

---

## ADMIN PANEL ACCESS

**Local:** Not available (needs Netlify)
**Production:** `https://your-site.netlify.app/admin`
**Login:** Use invited email + password
**Create content:** Click collection → New → Fill form → Publish

---

## API ENDPOINTS

```
GET /api/events        → Returns all events
GET /api/announcements → Returns all announcements
GET /api/keynotes      → Returns all keynotes
GET /api/pages/home    → Returns home page content
GET /api/pages/call-for-papers → CFP content
```

**Test in browser:**
```
https://your-site.netlify.app/api/events
```

---

## CONTENT LOCATIONS

```
/content/events/           ← Event markdown files
/content/announcements/    ← Announcement files
/content/keynotes/         ← Speaker info
/content/pages/            ← Static page content
  /home.md
  /call-for-papers.md

/public/images/            ← Uploaded images
```

---

## CONTENT FILE FORMAT

```markdown
---
title: "Event Title"
date: "2026-03-25T09:00:00Z"
description: "Short description"
image: "/images/photo.jpg"
---

Optional extended content goes here
```

**Key fields by collection:**

**Events:** title, date, description, image
**Announcements:** title, content, date
**Keynotes:** title (speaker), topic, bio, image, time
**Pages:** varies by page

---

## TROUBLESHOOTING QUICK FIXES

| Issue | Fix |
|-------|-----|
| Admin blank | Clear cache, hard refresh (Ctrl+Shift+R) |
| Not authenticated | Check Identity enabled, Git Gateway enabled |
| Changes don't appear | Check Netlify build (Deploys tab) |
| Can't publish | Check form validation, re-login |
| Images not uploading | Create `/public/images` folder |
| API returns empty | Git files committed? Netlify built? |
| Can't login | User invited? Check email/spam |

---

## GITHUB WORKFLOW

```bash
# Pull latest content changes
git pull

# Make code changes
vim app/page.tsx

# Commit and push
git add .
git commit -m "Update event card"
git push origin main

# Netlify auto-rebuilds
# Done!
```

---

## ADMIN WORKFLOW

1. **Login:** Visit `/admin`
2. **Choose collection:** Events, Announcements, etc
3. **Create:** Click "New [Collection]"
4. **Fill:** Complete all required fields (*)
5. **Upload:** Click image picker for images
6. **Preview:** Optional, to see how it looks
7. **Publish:** Click Publish button
8. **Wait:** Netlify rebuilds (1-2 min)
9. **Check:** Visit `/api/events` to see it

---

## DECAP CMS CONFIG LOCATION

**File:** `/public/admin/config.yml`

**Key sections:**
```yaml
backend:
  name: git-gateway          # Must be this
  branch: main               # Your branch

collections:                 # What admins can edit
  - name: events
    folder: content/events   # Where files stored
    create: true             # Can create new?
    fields:                  # What they fill in
      - { name: "title", label: "Title", widget: "string" }
```

---

## COMMON NETLIFY SETTINGS

| Setting | Location | What to Do |
|---------|----------|-----------|
| Enable Identity | Settings → Identity | Toggle on |
| Invite users | Identity → Users | Email address |
| Set "Invite only" | Identity → Registration | Choose from dropdown |
| Enable Git Gateway | Services → Git Gateway | Toggle on |
| View builds | Deploys | Click to see status |
| Manual rebuild | Deploys → "Trigger build" | Click button |

---

## FILE PATHS QUICK REFERENCE

```
Correct paths:
❌ /public/images/photo.jpg
✅ /images/photo.jpg

Correct folder:
❌ /content/event.md
✅ /content/events/event.md

Correct format:
❌ {"title": "Event"}
✅ title: "Event"
   (in markdown frontmatter)
```

---

## USEFUL LINKS

| Resource | URL |
|----------|-----|
| Admin Panel | `https://your-site.netlify.app/admin` |
| Events API | `https://your-site.netlify.app/api/events` |
| GitHub Repo | `https://github.com/your-org/conference-site` |
| Netlify Dashboard | `https://app.netlify.com` |
| Decap CMS Docs | `https://decapcms.org/docs/` |

---

## VALUES TO REMEMBER

- **Dates:** ISO format `2026-03-25T09:00:00Z`
- **Slugs:** Auto-generated from title, lowercase
- **Images:** JPEG, PNG, GIF, WebP (max 5-10 MB)
- **Build time:** 1-2 minutes after publish
- **Collection folders:** Match config.yml exactly

---

## ONE-OFF COMMANDS

```bash
# Test locally
npm run dev
# Visit http://localhost:3000/api/events

# Install dependencies (first time)
npm install

# Deploy to Netlify
netlify deploy

# Push to GitHub
git push origin main

# Hard refresh in browser
Ctrl+Shift+R
```

---

## SUPPORT DOCS IN REPO

- `ADMIN_IMPLEMENTATION_SUMMARY.md` ← Start here
- `ADMIN_SETUP.md` ← Detailed setup
- `DEPLOYMENT_CHECKLIST.md` ← When deploying
- `CONTENT_FORMAT.md` ← Content examples
- `GIT_STRATEGY.md` ← Git workflows
- `TROUBLESHOOTING.md` ← When stuck
- `README.md` ← Project overview

---

## CRITICAL CHECKLIST

- [ ] Code on GitHub
- [ ] Deployed to Netlify
- [ ] Identity enabled
- [ ] Git Gateway enabled
- [ ] User invited
- [ ] Can access `/admin`
- [ ] Can create event
- [ ] Event visible on `/api/events`

---

**Last updated:** March 25, 2026
**System:** Decap CMS + Netlify + Next.js
**No backend. No database. Just Git.**
