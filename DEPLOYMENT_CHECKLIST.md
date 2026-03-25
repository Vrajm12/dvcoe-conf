# Deployment Checklist

Use this checklist when deploying the admin panel system to production.

## Pre-Deployment (Local Testing)

- [x] `gray-matter` installed (`npm install gray-matter`)
- [x] `/public/admin/index.html` created
- [x] `/public/admin/config.yml` created
- [x] `/lib/content.ts` created with content loaders
- [x] `/app/api/events/route.ts` created
- [x] `/app/api/announcements/route.ts` created
- [x] `/app/api/keynotes/route.ts` created
- [x] `/app/api/pages/[page]/route.ts` created
- [x] `/content/events/` folder with sample files
- [x] `/content/announcements/` folder with sample files
- [x] `/content/keynotes/` folder with sample files
- [x] `/content/pages/` folder with `home.md` and `call-for-papers.md`
- [x] Updated `/app/events/page.tsx` to use dynamic content
- [x] Test locally: `npm run dev`
- [x] Visit `http://localhost:3000/api/events` - should return JSON

## Push to GitHub

```bash
git add .
git commit -m "Add admin panel with Decap CMS"
git push origin main
```

- [ ] Verify files are on GitHub
- [ ] Check `public/admin/`, `content/`, `lib/`, `app/api/` folders

## Deploy to Netlify

### Option A: Via Netlify Dashboard

1. Go to [`netlify.com`](https://netlify.com)
2. Click "Add new site"
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy site"

### Option B: Via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

- [ ] Site deployed successfully
- [ ] Build logs show "Build complete"
- [ ] Live at: `https://your-site-name.netlify.app/`
- [ ] Can visit `/api/events` endpoint
- [ ] Admin panel loads at `/admin`

## Configure Netlify Identity & Git Gateway

⚠️ **ORDER MATTERS - Follow exactly:**

### Step 1: Site Settings

- [ ] In Netlify dashboard, click site name
- [ ] Left sidebar → "Site settings"

### Step 2: Enable Identity

- [ ] Left sidebar → "Identity"
- [ ] Click "Enable Identity"
- [ ] Wait for confirmation

### Step 3: Configure Registration

- [ ] You'll see "Registration" section
- [ ] Change from "Open" to **"Invite only"** ⚠️
- [ ] This prevents random people signing up

### Step 4: Enable Git Gateway

- [ ] In same "Identity" section
- [ ] Scroll to "Services" 
- [ ] Or go directly to: Left sidebar → "Services"
- [ ] Find "Git Gateway"
- [ ] Click "Enable"

### Step 5: Invite Yourself

- [ ] In "Identity" tab, click "Invite users"
- [ ] Enter your email
- [ ] Send invitation
- [ ] Check email for Netlify invite link
- [ ] Click link and set password

- [ ] Created at least one team member account
- [ ] Tested login at `/admin`

## Test Admin Panel

1. Visit: `https://your-site.netlify.app/admin`
2. Login with your email and password
3. Click on "Events" in sidebar
4. Click "New Event"
5. Fill in sample data (title, date, description, pick an image)
6. Click "Publish"
7. Wait for deploy (check Deploys tab)
8. Visit `/api/events` - your new event should appear

- [ ] Create test event
- [ ] Event appears in API response
- [ ] Event appears on events page (if component added)
- [ ] Can edit existing event
- [ ] Can delete event (reverts in GH)

## Post-Deployment Tasks

- [ ] Update more pages to use dynamic content
- [ ] Create announcements
- [ ] Add keynote speakers
- [ ] Update home page content
- [ ] Test image uploads in admin
- [ ] Invite team members
- [ ] Document access credentials

## Performance Checks

- [ ] Admin panel loads quickly (`/admin`)
- [ ] API endpoints respond in < 1 second
- [ ] Site builds in < 5 minutes after changes
- [ ] Images are hosted on Netlify CDN

## Backup Procedure

All content is in GitHub! Your "backup" is automatic:

- Every change creates a Git commit
- Full history available on GitHub
- Can revert any change
- Clone repo locally anytime

**Important:** Regular GitHub backups (they're free and automatic)

## Common Issues & Fixes

### Issue: Admin shows "Not authenticated"
**Fix:**
1. Refresh page
2. Check Identity is enabled
3. Check Git Gateway is enabled
4. Try incognito/private mode
5. Clear browser cookies

### Issue: Changes don't appear on site
**Fix:**
1. Check Netlify Deploys tab
2. Look for build errors
3. Ensure commit was created
4. Try manual rebuild in Netlify

### Issue: Can't upload images
**Fix:**
1. Create `/public/images` folder manually
2. Check `media_folder` in config.yml
3. Netlify may need elevated permissions

### Issue: Admin page blank/white
**Fix:**
1. Check browser console for errors
2. Verify `/public/admin/index.html` exists
3. Verify `/public/admin/config.yml` valid YAML
4. Try in different browser

## Security Verification

- [ ] Registration set to "Invite only" (not open)
- [ ] Only invited users can login
- [ ] Git commits show correct author
- [ ] Branch protection on `main` (optional but recommended)

## Documentation Created

- [x] `ADMIN_SETUP.md` - Complete setup guide
- [x] `CONTENT_FORMAT.md` - Markdown examples
- [x] `DEPLOYMENT_CHECKLIST.md` - This file
- [ ] Create custom instructions for your team

## Final Verification

Visit each URL:

- [ ] `https://your-site.netlify.app/` (site works)
- [ ] `https://your-site.netlify.app/admin` (panel loads)
- [ ] `https://your-site.netlify.app/api/events` (returns JSON)
- [ ] `https://your-site.netlify.app/api/announcements` (returns JSON)
- [ ] `https://your-site.netlify.app/api/keynotes` (returns JSON)

## Success Criteria ✅

You're ready when:
1. Admin panel loads without errors
2. Can create/edit/delete content
3. Changes appear on site within 2 minutes
4. Multiple users can access (if team)
5. Images upload correctly
6. All API endpoints respond

## Rollback Plan

If something breaks:

1. **Quick rollback:**
   - Go to Netlify Deploys tab
   - Click previous successful deploy
   - Click "Restore"

2. **Git rollback:**
   - On GitHub, revert commits
   - Netlify redeploys automatically

3. **Content rollback:**
   - On GitHub, restore old files
   - Or use admin panel to reedit
   - Or revert to older commit

## Next: Connect More Pages

After deployment, update these pages to use content APIs:

- [ ] `/app/program/keynotes/page.tsx` - Show keynote speakers
- [ ] `/app/page.tsx` - Show announcements  
- [ ] `/app/contact/page.tsx` - Or `/app/dates/page.tsx`
- [ ] Create `/app/announcements/page.tsx` - Show all announcements
- [ ] Update `/app/authors/call-for-papers/page.tsx` - Use CFP content

## Questions?

Refer to:
1. `ADMIN_SETUP.md` - Detailed instructions
2. `CONTENT_FORMAT.md` - Content examples
3. Decap CMS docs: https://decapcms.org/docs/
4. Netlify docs: https://docs.netlify.com/

---

**Deployment Date:** _______________

**Deployed By:** _______________

**Notes:**

___________________________
___________________________
