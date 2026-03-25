# Troubleshooting Guide

Common issues and solutions for the admin panel system.

## 🔴 Critical Issues

### Admin Panel Shows "Not Authenticated"

**Symptoms:** 
- Login button appears but won't accept credentials
- Error: "Not authenticated" in admin

**Causes:**
1. Identity not enabled
2. Git Gateway not enabled
3. Browser cookies/cache

**Solutions:**

1. **Check Netlify settings:**
   ```
   Netlify Dashboard → Site Settings → Identity → Enabled?
   Netlify Dashboard → Site Settings → Services → Git Gateway → Enabled?
   ```

2. **Both must be enabled**, in this order:
   - Enable Identity first
   - Then enable Git Gateway

3. **Clear browser cache:**
   ```
   Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   Clear cookies and cached images/files
   Try again
   ```

4. **Try private/incognito mode:**
   - Sometimes old cookies interfere
   - Open new private window
   - Visit `/admin` again

5. **Check if user invited:**
   - In Identity tab → Users
   - If you're not listed, need invitation email
   - Check spam folder

---

### Changes Don't Appear On Site

**Symptoms:**
- Created event in admin
- Wait 10 minutes
- Event still doesn't appear

**Causes:**
1. Build failed
2. Content file in wrong folder
3. API not connected to component

**Solutions:**

1. **Check build status in Netlify:**
   ```
   Netlify Dashboard → Deploys tab
   ```
   - Look for red X or yellow warning
   - Click the failed deploy
   - Read the error logs
   - Common issues:
     - Syntax error in markdown
     - File in wrong folder path

2. **Verify content file exists:**
   ```
   GitHub → Your repo → content/[collection]/
   File should be there with .md extension
   ```

3. **Check the markdown format:**
   - Must have frontmatter between `---` lines
   - YAML must be valid (check indentation)
   - Example:
     ```markdown
     ---
     title: "My Event"
     date: "2026-03-25T09:00:00Z"
     ---
     ```

4. **Verify API endpoint works:**
   ```
   Visit: https://your-site.netlify.app/api/events
   Should return JSON array
   If empty [], no files found
   ```

5. **Rebuild manually:**
   - Netlify Dashboard → Deploys
   - Click "Trigger deploy" (button top-right)
   - Wait for green checkmark

---

### Admin Panel Blank/Loading Forever

**Symptoms:**
- `/admin` page is completely white
- "Loading..." forever
- Nothing appears

**Causes:**
1. Invalid config.yml YAML
2. Missing admin files
3. Decap CMS CDN down

**Solutions:**

1. **Check admin files exist:**
   ```
   /public/admin/index.html ✓
   /public/admin/config.yml ✓
   ```

2. **Validate config.yml:**
   - Check for syntax errors
   - Use: https://www.yamllint.com/
   - Common issues:
     - Indentation (use spaces, not tabs)
     - Missing colons
     - Wrong field names

3. **Check browser console:**
   - Press F12
   - Go to Console tab
   - Look for red errors
   - Report them if unclear

4. **Check CDN:**
   - Decap CMS is loaded from CDN
   - If CDN down, admin won't load
   - Try later or check https://status.decapcms.org/

5. **GitHub Actions / Build logs:**
   - Netlify might be failing to deploy files
   - Check Deploys tab for errors
   - Look for: "public/admin not found"

---

## 🟡 Medium Priority Issues

### Can't Publish (Publish Button Unresponsive)

**Symptoms:**
- Click "Publish" → nothing happens
- No error message
- Button seems frozen

**Causes:**
1. Git Gateway token expired
2. GitHub connection lost
3. Validation errors in form

**Solutions:**

1. **Check form validation:**
   - Required fields marked with *
   - Make sure all are filled
   - Look for red error messages

2. **Check Git Gateway status:**
   - Netlify Dashboard → Identity → Services
   - Git Gateway should say "Enabled"

3. **Re-authenticate:**
   - Click your profile (top-right)
   - Click "Logout"
   - Refresh page
   - Login again

4. **Check browser console errors:**
   - F12 → Console tab
   - Clear error log
   - Try to publish again
   - Look for network or auth errors

---

### Images Not Uploading

**Symptoms:**
- Click image widget in admin
- Can't select file
- Upload fails silently

**Causes:**
1. `/public/images/` folder doesn't exist
2. Image too large
3. File permission issues

**Solutions:**

1. **Create images folder:**
   ```bash
   # Create it if missing
   mkdir public/images
   git add public/images
   git commit -m "Create images folder"
   git push
   ```

2. **Check image size:**
   - Max 5-10 MB recommended
   - Compress large images first
   - Use online tool: https://imagecompressor.com/

3. **Check file format:**
   - Supported: JPG, PNG, GIF, WebP
   - Not supported: BMP, TIFF, etc
   - Convert if needed

4. **Verify in Netlify config:**
   - Check `/public/admin/config.yml`
   - Should have:
     ```yml
     media_folder: "public/images"
     public_folder: "/images"
     ```

5. **Check file permissions:**
   - Netlify needs write access to `/public/`
   - Usually works automatically
   - If stuck, contact Netlify support

---

### Collections Not Showing in Admin

**Symptoms:**
- Login to `/admin` successful
- Collections sidebar empty
- "No collections found" message

**Causes:**
1. Invalid config.yml
2. Collections not defined
3. YAML syntax error

**Solutions:**

1. **Validate config.yml:**
   - Use https://www.yamllint.com/
   - Paste config contents
   - Fix any error messages

2. **Check YAML structure:**
   ```yml
   backend:          # required
     name: git-gateway
     branch: main
   
   collections:      # required
     - name: events
       # ... fields ...
   ```

3. **Check indentation:**
   - Spaces only (no tabs!)
   - Each level +2 spaces
   - Hyphens at start of lists

4. **Common config mistakes:**
   - Missing `backend:` section → nothing works
   - Collections spelled wrong → not found
   - Field names with spaces → invalid

5. **Reload admin:**
   - Hard refresh: Ctrl+Shift+R
   - Clear cookies
   - Try private mode

---

## 🟢 Minor Issues

### Content Missing Timestamps

**Symptoms:**
- Events show but dates blank
- Announcements have no date

**Causes:**
- Date field empty in form
- Wrong date format

**Solutions:**
- Edit the content
- Make sure date is filled in
- Admin shows date picker (easier than typing)

---

### Images Show as Broken Links

**Symptoms:**
- Image placeholder with broken icon
- URL shows correct path
- File might exist

**Causes:**
1. Path incorrect in markdown
2. File not actually uploaded
3. Wrong media_folder setting

**Solutions:**
1. **Check file exists:**
   ```
   GitHub → public/images/ → look for file
   Or: https://your-site.netlify.app/images/filename.jpg
   ```

2. **Check markdown path:**
   - Should be: `/images/filename.jpg`
   - NOT: `public/images/filename.jpg`
   - NOT: `../public/images/filename.jpg`

3. **Re-upload image:**
   - Edit content
   - Remove old image
   - Re-upload

---

### API Returns Empty Array

**Symptoms:**
- Visit `/api/events` 
- Returns: `[]` (empty)
- But admin shows events

**Causes:**
1. Netlify build hasn't completed
2. Files not committed to Git
3. Files in wrong folder

**Solutions:**
1. **Wait for build:**
   - Check Netlify Deploys tab
   - Build usually takes 1-2 minutes

2. **Verify on GitHub:**
   - Go to your repo
   - Check `/content/events/` folder exists
   - Should see `.md` files

3. **Force rebuild:**
   - Netlify Dashboard → Deploys → "Trigger build"
   - Wait for green checkmark

4. **Check file location:**
   ```
   Correct:   /content/events/event.md
   Wrong:     /content/event.md
   Wrong:     /events/event.md
   Wrong:     /event/event.md
   ```

---

## 🔧 Debug Steps

When something breaks, do this in order:

1. **Check browser console:**
   ```
   F12 → Console tab
   Look for red errors
   ```

2. **Check Netlify build logs:**
   ```
   Netlify → Deploys → Click recent deploy
   Expand "Deploy log"
   Look for error messages
   ```

3. **Verify files exist:**
   ```
   GitHub → Your repo
   Check /public/admin/ exists
   Check /content/ exists
   ```

4. **Check API endpoint:**
   ```
   Visit: https://your-site.netlify.app/api/events
   Should be JSON, not HTML error
   ```

5. **Check config.yml validity:**
   ```
   Use: https://www.yamllint.com/
   Paste content, validate
   ```

6. **Clear and retry:**
   ```
   Clear browser cache
   Hard refresh (Ctrl+Shift+R)
   Close/reopen browser
   Try again
   ```

---

## 🆘 If Still Stuck

### Provide this info to support:

1. **What you did:**
   - "Tried to create event, clicked publish"

2. **What happened:**
   - "Button doesn't respond / changes don't appear"

3. **Screenshots of:**
   - Netlify Deploys tab (show build status)
   - Browser console errors (F12)
   - Admin form (what you filled in)

4. **Check Netlify logs:**
   - Deploy logs (what went wrong)
   - Function logs (API errors)

5. **Share links:**
   - Your deployment URL
   - GitHub repo URL (if public)

### Get help from:

- **Decap CMS:** https://github.com/decaporg/decap-cms/issues
- **Netlify:** https://community.netlify.com/
- **Next.js:** https://github.com/vercel/next.js/discussions

---

## 📋 Checklist Before Reporting Issue

- [ ] Netlify deploy is green (not red/processing)
- [ ] Identity is enabled
- [ ] Git Gateway is enabled
- [ ] User invited and password set
- [ ] config.yml passes YAML validation
- [ ] Tested in private/incognito mode
- [ ] Cleared browser cache
- [ ] Tried on different browser
- [ ] Checked GitHub for actual files
- [ ] Ran manual rebuild

---

## Pro Debugging Tips

### Check if Git Gateway working:
```
Try editing a file locally, push to GitHub
Site should rebuild automatically
If yes → Git Gateway working
```

### Check if API working:
```
From terminal:
curl https://your-site.netlify.app/api/events

Should return JSON array (even if empty)
```

### Check content file format:
```
On GitHub, click a .md file in /content/
Should show valid frontmatter at top:
---
title: something
date: 2026-03-25
---
```

### Check admin config:
```
Go to GitHub → public/admin/config.yml
Use https://www.yamllint.com/ 
Validate it
```

---

## 🎓 Remember

- **Netlify logs are your best friend** - Most issues are build errors
- **YAML syntax matters** - One space wrong breaks everything
- **Git is working** - If no file in GitHub, Git Gateway didn't work
- **Identity + Git Gateway both required** - Not just one
- **Be patient** - Builds take 1-2 minutes

---

**Still need help? Read ADMIN_SETUP.md from the beginning.**
