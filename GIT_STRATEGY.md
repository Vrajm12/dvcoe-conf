# Git Strategy for Admin Panel

This document clarifies what should be committed to Git and what shouldn't.

## ✅ COMMIT THESE (Content Files)

All content files created by the admin panel **SHOULD be committed to Git**. This is the whole point!

```
✅ DO COMMIT:
/content/              (All markdown files)
  /events/
    *.md               ← Commit these!
  /announcements/
    *.md               ← Commit these!
  /keynotes/
    *.md               ← Commit these!
  /pages/
    *.md               ← Commit these!

/public/images/        (User-uploaded images via admin)
  *                    ← Commit these!

/public/admin/         (CMS configuration)
  index.html           ← Already committed
  config.yml           ← Already committed
```

### Why?
- Git = your version control + backup
- You can revert any content change
- Full history of edits
- Team collaboration friendly

### How admins commit?

**Option 1: Automatic (what happens now)**
- Admin updates via `/admin`
- Decap CMS + Git Gateway create commit automatically
- Your job: just pull latest from GitHub

**Option 2: Manual commit (if you edit files directly)**
```bash
git add content/
git commit -m "Update announcements and events"
git push
```

---

## ❌ DO NOT COMMIT (Build Artifacts)

These are auto-generated and should be ignored:

```
❌ DO NOT COMMIT:
node_modules/          (Dependencies, install with npm)
.next/                 (Build output, regenerated each time)
.env.local             (Local environment variables)
dist/                  (Other build outputs)
*.log                  (Log files)
.DS_Store              (macOS files)
```

### These are already in .gitignore (check yours):

```bash
# Check your .gitignore file
cat .gitignore
```

---

## 🔄 Typical Workflow

### For Your Dev Team

```
1. Developer makes code changes
   git add app/
   git commit -m "Update event card styling"
   git push

2. Netlify detects push → rebuilds

3. Changes live
```

### For Content Admins

```
1. Admin goes to /admin
2. Admin edits content (e.g., adds event)
3. Admin clicks "Publish"
4. Git Gateway auto-commits to GitHub
5. Netlify detects commit → rebuilds
6. Event visible on site

(Admin doesn't need to touch terminal/git!)
```

### For Both

```
# Pull latest (check for content changes)
git pull

# Your local code now has latest content files
# You can read/use them
```

---

## 📋 File-by-File Breakdown

| File/Folder | Commit? | Why |
|-----------|---------|-----|
| `/content/` | ✅ YES | Content is source of truth |
| `/public/images/` | ✅ YES | Images are part of content |
| `/public/admin/` | ✅ YES | Config is source of truth |
| `/app/` source code | ✅ YES | Code should be versioned |
| `/.next/` | ❌ NO | Generated on build |
| `/node_modules/` | ❌ NO | Install with npm |
| `.env.local` | ❌ NO | Local secrets |
| `package-lock.json` | ✅ YES | Lock your dependencies |

---

## 🚨 Common Mistakes

### ❌ MISTAKE 1: Manual editing on GitHub while admin is live

```
BAD: You edit /content/events/event.md directly on GitHub
admin panel also tries to edit same file
→ Merge conflicts!
```

**FIX:** Let admin handle content, you handle code.

### ❌ MISTAKE 2: Not pulling changes before deploying

```
BAD: You push code without pulling latest content files
→ Content on live doesn't match your local
```

**FIX:** Always `git pull` before deploying.

### ❌ MISTAKE 3: Uploading images without version control

```
BAD: Uploading to Netlify CDN only (not committed to Git)
→ You lose image history
→ Can't rollback
```

**FIX:** Images go to `/public/images/` (committed to Git)

---

## 💡 Pro Tips

### Tip 1: Review content changes before merging

```bash
# See what admin changed
git log --oneline --graph

# Diff specific content
git diff previous-commit content/events/
```

### Tip 2: Rollback a bad edit

```bash
# Find the commit ID
git log --oneline

# Revert it
git revert abc123
git push
# Netlify rebuilds with old content
```

### Tip 3: Local testing with admin content

```bash
# Pull latest content files
git pull

# Run locally
npm run dev

# Test with real content
# Visit http://localhost:3000/api/events
```

### Tip 4: Branch strategy (optional)

```bash
# Separate branch for big changes
git checkout -b feature/new-content

# Let admin edit
# Review changes
git merge main

# Keep main always deployable
```

---

## 🔐 Access Control

### Your Git Strategy

```
main branch
├── Protected? (recommended yes)
├── Who can push? Netlify auto-push + your team
├── Reviews needed? (optional for content)
└── Auto-deploy on push? Yes (Netlify)
```

### Recommended GitHub Settings

1. **Branch protection on `main`:**
   - Require pull request reviews
   - Dismiss stale reviews
   - OR allow direct pushes (for admins via Git Gateway)

2. **Choose your level:**
   
   **Option A: Trust-based (simpler)**
   ```
   - Anyone invited to repo can commit
   - Direct push to main allowed
   - Good for small teams
   ```
   
   **Option B: Formal (safer)**
   ```
   - Content admins commit via CMS
   - Devs use pull requests
   - Someone reviews and merges
   - Better audit trail
   ```

---

## Netlify + GitHub Sync

### How it works:

```
You push to GitHub main
        ↓
Netlify webhook triggers
        ↓
Netlify builds the site
        ↓
Site updates in real-time
```

### Decap CMS + Git Gateway flow:

```
Admin clicks "Publish" in /admin
        ↓
Decap CMS calls Git Gateway
        ↓
Git Gateway commits to main
        ↓
GitHub receives commit
        ↓
Netlify webhook triggers
        ↓
Site rebuilds (1-2 minutes)
```

---

## 📊 Content Audit Trail

**All your content changes are tracked:**

```
Go to GitHub → Your repo → Commits tab
```

You'll see:
- When changes were made
- Who made them (Git author)
- What changed (file diffs)
- Ability to revert

### Bonus: Github Actions

Could add automated checks:
```yml
# Check frontmatter is valid YAML
# Check files are in right folder
# Check images exist
```

(Not set up by default, but possible)

---

## ✅ Summary

**DO:**
- ✅ Commit content files
- ✅ Commit images
- ✅ Pull before deploying
- ✅ Trust Git history as backup
- ✅ Revert bad changes via `git revert`

**DON'T:**
- ❌ Edit content files manually while admin is live
- ❌ Ignore Git strategy
- ❌ Skip committing images
- ❌ Delete `.md` files permanently (use Git!)
- ❌ Deploy without pulling latest

---

## 🎓 Next Steps

1. **Verify .gitignore** - Make sure build artifacts are ignored
2. **Set branch protection** (optional) - Decide on your approval workflow
3. **Test the flow** - Have admin make a change, watch it sync
4. **Monitor commits** - Check GitHub for expected changes

---

## Questions?

- **How do I review content changes?** → Check GitHub commits
- **How do I undo bad content?** → `git revert` the commit
- **What if two people edit simultaneously?** → Git handles it (simple conflicts auto-merge)
- **Can I have a staging branch?** → Yes, set up `develop` → `main` flow

**Git is your friend here!**
