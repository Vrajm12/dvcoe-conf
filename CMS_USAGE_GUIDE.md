# CMS Access & Publishing Guide

**Complete step-by-step guide for ICCET-2026 CMS portal access and content publishing**

---

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Accessing the CMS](#accessing-the-cms)
3. [Managing Pages](#managing-pages)
4. [Publishing Changes](#publishing-changes)
5. [Troubleshooting](#troubleshooting)
6. [FAQ](#faq)

---

## Initial Setup

### Step 1: User Invitation
1. Admin adds your email address to the Netlify Identity → **Invite Users** section
2. You will receive an invitation email at the registered email address
3. Check your email inbox (and spam folder if not found)

### Step 2: Accept Invitation
1. **Open the invitation email** from Netlify
2. Look for the subject: *"You've been invited to join a site"*
3. **Click the "Accept the invite" button** in the email
   - This will redirect you to create your password
4. You may need to confirm your email address first

### Step 3: Create Your Password
1. On the Netlify authentication page, enter your desired password
   - Password requirements: Minimum 8 characters, include uppercase, lowercase, numbers
2. **Click "Create account"**
3. You will be logged in automatically
4. **Save your credentials** in a secure location:
   - Email: [Your registered email]
   - Password: [Your created password]

---

## Accessing the CMS

### Step 1: Navigate to Admin Panel
1. Open your browser and go to: **`https://iccet2026.in/admin`**
   - Alternative: `https://iccet2026.in/admin/`
2. You will see the Netlify CMS login page

### Step 2: Login to CMS
1. **Enter your email address** (the one used for invitation)
2. **Enter your password** (created during initial setup)
3. **Click "Log in"**
4. Wait for authentication to complete

### Step 3: CMS Dashboard
1. After successful login, you will see the **CMS Dashboard**
2. On the left sidebar, click **"Pages"**
3. You will see all editable pages listed

---

## Managing Pages

### Available Pages in CMS

| Page Name | Description | Use Case |
|-----------|-------------|----------|
| **Home Page** | Main landing page with hero section, about, dates, etc. | Conference overview and key information |
| **Call for Papers** | Paper submission guidelines and deadline | Author recruitment |
| **Contact Page** | Contact information and form | User inquiries |
| **Important Dates** | All conference deadlines | Schedule management |
| **Events** | Conference events and activities | Event promotion |
| **Program** | Schedule and keynotes | Conference agenda |
| **Authors** | Information for authors | Author resources |
| **Committee** | Organizing and advisory committees | Team information |
| **Gallery** | Previous edition photos | Event highlights |
| **Registration** | Registration forms and information | Attendee sign-up |

### Editing a Page

#### Step 1: Select Page
1. From the CMS Dashboard, click on **"Pages"** in the left sidebar
2. **Choose the page** you want to edit from the list
   - Example: Click "Home Page" to edit the home page

#### Step 2: View Page Fields
1. The page will open with all editable fields visible
2. Fields are organized by sections (Hero, About, Acknowledgement, etc.)
3. Each field shows:
   - **Field Label** (what to edit)
   - **Field Type** (text, text area, image, date, etc.)
   - **Current Value** (existing content)

#### Step 3: Edit Content
1. **Click on a field** you want to modify
2. **Clear the existing content** (if needed)
3. **Type the new content**
4. For **images**: Click the image field and upload a new image from your computer
5. For **dates**: Click the date field and select from the date picker
6. For **large text areas**: Click and type directly

#### Step 4: Save Draft (Optional)
1. While editing, click **"Save"** button at top right
2. This saves your changes as a draft
3. Draft changes are **NOT** live on the website yet

---

## Publishing Changes

### Step 1: Prepare Your Changes
1. Make all edits to the page fields
2. Review all changes for accuracy
3. Check spelling and formatting

### Step 2: Publish Changes
1. After editing is complete, click the **"Publish"** button
   - Located at the top right of the page editor
   - Usually a green button
2. You may see a confirmation dialog asking **"Ready to publish?"**
3. **Click "Publish"** to confirm
4. Wait for the publishing process to complete
   - You should see a success message like: *"Entry published successfully"*

### Step 3: Changes Go Live
1. After publishing, changes are committed to GitHub
2. **Netlify will automatically build and deploy** the website
3. **Wait 2-5 minutes** for the deployment to complete
4. The website will update with your changes automatically

### Step 4: Verify Changes
1. After 5 minutes, **visit the website** at `https://iccet2026.in`
2. **Refresh the page** (Ctrl+F5 for hard refresh)
3. Your changes should now be visible
4. Check all sections where you made edits

---

## Publishing Workflow - Quick Reference

```
EDIT PAGE
    ↓
REVIEW CHANGES
    ↓
CLICK "PUBLISH"
    ↓
CONFIRM PUBLICATION
    ↓
WAIT 2-5 MINUTES
    ↓
VISIT WEBSITE
    ↓
HARD REFRESH (Ctrl+F5)
    ↓
VERIFY CHANGES ARE LIVE
```

---

## Troubleshooting

### Issue: Can't Login to CMS
**Solution:**
- Verify your email address is correct
- Check that you've accepted the invitation email
- If not received, ask admin to resend invitation
- Try clearing browser cache and cookies
- Use a different browser or incognito mode

### Issue: Changes Not Showing After Publishing
**Solution:**
- Wait full 5 minutes (don't refresh immediately)
- **Hard refresh** the website: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache completely
- Try accessing from a different device/network
- Check in browser console for errors (F12 key)

### Issue: Image Upload Fails
**Solution:**
- Ensure image file is less than 5MB
- Use common formats: JPG, PNG, WebP
- Check your internet connection
- Try uploading again
- Contact admin if problem persists

### Issue: Date Field Not Saving
**Solution:**
- Ensure date is in valid format
- Check that date is not in the past (for future events)
- Try selecting date from date picker instead of typing
- Refresh and try again

### Issue: "Publish" Button Disabled
**Solution:**
- Check all required fields are filled (marked with *)
- Ensure all field formats are correct
- Review browser console for validation errors
- Save draft first, then try publishing
- Contact admin if issue persists

---

## Best Practices

### Before Publishing
- ✅ **Proofread** all text for typos and grammar
- ✅ **Verify** all links are correct
- ✅ **Check** image quality and alignment
- ✅ **Confirm** dates are accurate
- ✅ **Test** on multiple devices if possible

### After Publishing
- ✅ **Wait 5 minutes** before checking live site
- ✅ **Hard refresh** browser to clear cache
- ✅ **Test all links** on published page
- ✅ **Check mobile view** is formatted correctly
- ✅ **Document** what changes were published

### General Tips
- 📌 Save drafts frequently while editing
- 📌 Don't close browser during publishing
- 📌 Use descriptive text for better SEO
- 📌 Keep consistency in formatting
- 📌 Backup important content before major changes

---

## FAQ

### Q: Can I schedule content to publish at a specific time?
**A:** The current CMS publishes immediately. For scheduled publishing, contact the admin team.

### Q: What if I make a mistake after publishing?
**A:** Simply edit the page again and publish the corrected version. Changes go live immediately after the 5-minute deployment window.

### Q: Can multiple people edit at the same time?
**A:** It's recommended that only one person edits a page at a time to avoid conflicts. If multiple edits happen simultaneously, the last "Publish" will overwrite previous changes.

### Q: How do I revert to a previous version?
**A:** The CMS stores version history. Contact admin to restore a previous version.

### Q: What file types can I upload for images?
**A:** JPG, PNG, WebP, GIF. Maximum file size: 5MB.

### Q: Is my password secure?
**A:** Yes, passwords are encrypted. Don't share your credentials with others.

### Q: Can I preview changes before publishing?
**A:** Click "Save" to save as draft, then visit the site. It won't be live, but you can check the saved state.

### Q: What if the website doesn't update after 5 minutes?
**A:** Hard refresh your browser (Ctrl+F5). If still not showing, contact the admin team.

### Q: Can I delete pages?
**A:** No, page deletion is restricted. Only admins can delete pages. You can only edit existing content.

### Q: How do I contact support if something goes wrong?
**A:** Contact the admin team at: `info@iccet2026.in`

---

## Example: Complete Editing Workflow

### Scenario: Update the Home Page Title

1. **Login**: Go to `https://iccet2026.in/admin` and login
2. **Navigate**: Click "Pages" → Select "Home Page"
3. **Find Field**: Scroll to find "Hero Title" field
4. **Edit**: Click the field and change from "ICCET-2026" to "ICCET 2026 - Computing & Technology"
5. **Save**: Click "Save" to save as draft
6. **Review**: Check the change looks correct
7. **Publish**: Click "Publish" button
8. **Confirm**: Click "Publish" in confirmation dialog
9. **Wait**: Wait 5 minutes for deployment
10. **Verify**: Visit `https://iccet2026.in`, hard refresh (Ctrl+F5), and verify the new title is visible

---

## Important URLs

| Purpose | URL |
|---------|-----|
| **Website** | https://iccet2026.in |
| **CMS Admin Portal** | https://iccet2026.in/admin |
| **API - Home Page Data** | https://iccet2026.in/api/pages/home |
| **API - All Events** | https://iccet2026.in/api/events |
| **API - All Announcements** | https://iccet2026.in/api/announcements |
| **API - All Keynotes** | https://iccet2026.in/api/keynotes |

---

## Support & Contact

**For CMS-related issues or questions:**
- Email: `info@iccet2026.in`
- Response Time: 24-48 hours
- Include: Screenshots, error messages, and steps you took

**For urgent access issues:**
- Contact the technical team immediately
- Provide: Email address and time issue occurred

---

**Document Version**: 1.0  
**Last Updated**: March 26, 2026  
**Next Review**: April 2026

---

## Video Walkthrough (If Available)

A video tutorial covering the complete workflow will be provided separately. This includes:
- CMS login walkthrough
- Page editing demonstration
- Publishing and verification process
- Troubleshooting common issues

