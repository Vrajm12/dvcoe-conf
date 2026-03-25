# Admin Panel Setup Guide

## What's Been Created

✅ **Admin Panel Interface** - `/public/admin/index.html`
✅ **CMS Configuration** - `/public/admin/config.yml`
✅ **Content Loader** - `/lib/content.ts` (reads markdown files)
✅ **API Routes** - `/app/api/events/route.ts`, etc.
✅ **Example Content** - `/content/events/`, `/content/announcements/`, etc.
✅ **Sample Components** - `/app/events/page.tsx` (dynamic content example)

## Step 1: Deploy to Netlify

Your site must be on Netlify for the admin panel to work (Git Gateway requires Netlify).

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `.next`

## Step 2: Enable Git Gateway & Identity

**Critical: Do this EXACTLY in this order**

### In Netlify Dashboard:

1. **Go to Site Settings**
   - Click: Site name → Site settings

2. **Enable Identity**
   - Left sidebar → Identity → Enable Identity

3. **Configure Registration**
   - Once enabled, you'll see "Registration" settings
   - Set to **"Invite only"** (IMPORTANT - prevents random signups)

4. **Enable Git Gateway**
   - Left sidebar → Services → Git Gateway → Enable

5. **Invite User (Yourself)**
   - In Identity tab → Invite users
   - Enter your email
   - Check your email for invite link
   - Set your password

## Step 3: Create Netlify API Token (For CLI)

If you plan to use Netlify CLI for authentication:

1. **Generate token:**
   - Account settings → Applications → Authorized applications
   - Or use: `netlify login`

2. **Set environment variable (optional):**
   ```bash
   NETLIFY_AUTH_TOKEN=your_token_here
   ```

## Step 4: Access Your Admin Panel

After deploying and enabling Git Gateway:

```
https://your-site-name.netlify.app/admin
```

You'll be prompted to:
1. Login with your email/password
2. Grant permission to access GitHub repo
3. Start editing!

## Step 5: How It Works

### Admin Creates Content
1. Login to `/admin`
2. Click "Events" → "New Event"
3. Fill in title, date, description, image
4. Click **"Publish"**

### What Happens Behind Scenes
1. Decap CMS sends data to Git Gateway
2. Git Gateway commits to your GitHub repo
3. New file created: `/content/events/new-event-title.md`
4. Netlify auto-rebuilds your site
5. File appears on your site instantly

### Your React Components Read It
```tsx
// Fetch from API
const response = await fetch('/api/events');
const events = response.json();

// Render dynamic content
events.map(event => <EventCard key={event.slug} {...event} />)
```

## File Structure

```
/public/admin/
  index.html         ← CMS interface
  config.yml         ← CMS schema & collections

/content/
  /events/           ← Event markdown files
  /announcements/    ← Announcement files
  /keynotes/         ← Speaker/keynote files
  /pages/            ← Static page content (home, cfp, etc)

/lib/
  content.ts         ← Helper functions to read files

/app/api/
  /events/           ← API endpoint to fetch events
  /announcements/    ← API endpoint to fetch announcements
  /keynotes/         ← API endpoint to fetch keynotes
  /pages/[page]/     ← API endpoint for page content
```

## Collections Defined

### 1. **Events** 
- Path: `/content/events/`
- Fields: title, date, description, image
- Use for: Conferences, workshops, seminars

### 2. **Announcements**
- Path: `/content/announcements/`
- Fields: title, content, date
- Use for: News, updates, important notices

### 3. **Keynotes**
- Path: `/content/keynotes/`
- Fields: speaker name (title), topic, bio, image, time
- Use for: Speaker information for schedule page

### 4. **Pages**
- Path: `/content/pages/`
- Files managed:
  - `home.md` - Hero section variables
  - `call-for-papers.md` - Submission deadline & guidelines

## Common Tasks

### Update Home Page Title
1. Go to `/admin`
2. Click "Pages" → "Home Page"
3. Edit "Conference Title" field
4. Click "Publish"

### Add New Event
1. Go to `/admin`
2. Click "Events" → "New Event"
3. Fill in details
4. Click "Publish"
5. Netlify rebuilds → Site updates

### Add Announcement
1. Go to `/admin`
2. Click "Announcements" → "New Announcement"
3. Fill in details
4. Click "Publish"

## How to Use in React Components

### Fetch Events Example
```tsx
'use client';
import { useEffect, useState } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      {events.map(event => (
        <div key={event.slug}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Fetch Page Content Example
```tsx
export default async function CallForPapers() {
  const response = await fetch('http://localhost:3000/api/pages/call-for-papers', {
    next: { revalidate: 60 }
  });
  const content = await response.json();

  return (
    <div>
      <p>Deadline: {content.deadline}</p>
      <p>{content.guidelines}</p>
    </div>
  );
}
```

## Important: How Git Commits Work

When you edit in the admin panel:
1. A new commit is created automatically
2. Commit message: `"Update [collection name] [date]"`
3. Commits go directly to your `main` branch
4. You see the changes immediately on the live site

**To keep things clean:**
- Don't manually edit `.md` files on GitHub while admin is in use
- Let admins use the panel exclusively
- Always pull latest from GitHub before deploying

## Troubleshooting

### Admin panel shows "Not Authenticated"
- Check Netlify Identity is enabled (Site Settings → Identity)
- Check Git Gateway is enabled (Site Settings → Services)
- Try logging out and back in

### Changes don't appear on site
- Check Netlify build logs (Deploys tab)
- Ensure content files are in correct folder
- Try a manual rebuild in Netlify

### Can't see collections in admin
- Check `/public/admin/config.yml` is valid YAML
- Ensure folder paths exist (or create: true is set)
- Refresh `/admin` page in browser

### Images not uploading
- Check `media_folder: "public/images"` in config.yml
- Create the `/public/images/` folder manually
- Ensure Netlify has write permissions

## Security Notes

✅ **Good:**
- "Invite only" registration (prevents random signups)
- Git Gateway authenticates through GitHub
- All commits tracked with Git history

❌ **Avoid:**
- Giving public write access
- Hardcoding credentials in CMS
- Storing sensitive data in markdown files

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Netlify
3. ✅ Enable Identity + Git Gateway
4. ✅ Invite your team
5. ✅ Login to `/admin` and test
6. ✅ Update more pages to use dynamic content

## Example: Connected Pages

These pages are ready to use dynamic content:
- ✅ Events - `/app/events/page.tsx` (created as example)
- ⏳ Keynotes - needs update to `/app/program/keynotes/page.tsx`
- ⏳ Announcements - add to home page
- ⏳ Call for Papers - use page content API

## Support

For Decap CMS questions:
- Docs: https://decapcms.org/docs/intro/
- GitHub: https://github.com/decaporg/decap-cms

For this specific setup:
- Check Netlify build logs if anything fails
- Ensure config.yml is valid YAML
- Clear browser cache if admin doesn't load
