# ICCET-2026 Conference Website

A modern Next.js conference website with a **Decap CMS admin panel** for easy content management via Git.

## 🎯 Quick Start

### Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then visit:
- **Site:** [http://localhost:3000](http://localhost:3000)
- **API:** [http://localhost:3000/api/events](http://localhost:3000/api/events)

### Admin Panel

---

## 🏗️ Project Structure

```
conference-site/
├── app/
│   ├── api/              # API routes for content
│   │   ├── events/
│   │   ├── announcements/
│   │   ├── keynotes/
│   │   └── pages/
│   ├── events/           # Events page (dynamic example)
│   ├── program/
│   ├── registration/
│   └── ...
├── public/
│   ├── admin/           # Decap CMS interface
│   │   ├── index.html
│   │   └── config.yml
│   └── images/
├── content/             # Markdown files (managed by admin)
│   ├── events/
│   ├── announcements/
│   ├── keynotes/
│   └── pages/
├── lib/
│   └── content.ts       # Content loader utilities
└── ...
```

---

## 🔧 How It Works

### 1. **Add Content via Admin Panel**
1. Login to `/admin`
2. Click a collection (Events, Announcements, etc)
3. Create/edit content
4. Click "Publish"

### 2. **Git Commit Created Automatically**
- Decap CMS sends to Git Gateway
- New markdown file created in `/content/`
- Commit goes to GitHub

### 3. **Site Rebuilds**
- Netlify detects commit
- Builds the site
- React components read the new content

### 4. **Changes Live**
- Updated within 1-2 minutes
- Full version history in Git

---

## 📝 Content Management

### Example: Creating an Event

1. Go to `/admin`
2. Click "Events" → "New Event"
3. Fill in:
   - Title: "AI Summit 2026"
   - Date: March 25, 2026, 9:00 AM
   - Description: "Join industry leaders..."
   - Image: Upload or select existing
4. Click "Publish"

**Result:**
- File created: `content/events/ai-summit-2026.md`
- Commit made to GitHub
- Appears on `/events` page (if component connected)

---

## 🔌 Using Content in Components

```tsx
// Fetch events
const response = await fetch('/api/events');
const events = await response.json();

// Use in component
{events.map(event => (
  <div key={event.slug}>
    <h2>{event.title}</h2>
    <p>{event.description}</p>
    <img src={event.image} alt={event.title} />
  </div>
))}
```

---

## 🚀 Deployment

### Recommended: Netlify

1. Push to GitHub
2. Deploy to Netlify
3. Enable Identity + Git Gateway in Netlify dashboard
4. Invite users
5. Start managing content!

**[See DEPLOYMENT_CHECKLIST.md for detailed steps](./DEPLOYMENT_CHECKLIST.md)**

---

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **gray-matter** - Parse markdown front matter
- **Decap CMS** - Admin panel (imported via CDN)

---

## 🔐 Security

✅ **Secure by default:**
- Netlify Identity handles authentication
- Git Gateway only allows authorized users
- All changes tracked in version control
- "Invite only" prevents random signups

---

## 📖 Learn More

- [Decap CMS Documentation](https://decapcms.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [gray-matter on npm](https://www.npmjs.com/package/gray-matter)

---

## 🤝 Contributing

This site uses an admin panel for content management. To make changes:

1. **Content updates:** Use `/admin` panel (recommended)
2. **Code changes:** Pull request to GitHub
3. **Direct edits:** Only if absolutely necessary

---

## 📄 License

Check LICENSE file for

## 📚 Documentation

### Setup & Deployment
- **[ADMIN_SETUP.md](./ADMIN_SETUP.md)** - Complete setup guide for Netlify + Git Gateway
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Step-by-step deployment checklist
- **[CONTENT_FORMAT.md](./CONTENT_FORMAT.md)** - Content file format examples

### Key Features
- 🚀 Zero backend needed
- 📝 Git-based content management
- 🔐 Secure with Netlify Identity
- ⚡ Automatic rebuilds on content changes
- 📱 Responsive design with Tailwind CSS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
