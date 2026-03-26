import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  slug?: string;
}

export interface Announcement {
  title: string;
  content: string;
  date: string;
  slug?: string;
}

export interface Keynote {
  title: string;
  topic: string;
  bio: string;
  image: string;
  time: string;
  slug?: string;
}

export interface PageContent {
  // Home Page Fields
  hero_title?: string;
  hero_subtitle?: string;
  hero_tagline?: string;
  hero_event_type?: string;
  hero_background?: string;
  about_title?: string;
  about_conference_title?: string;
  about_conference_content?: string;
  about_objectives_title?: string;
  about_objectives_content?: string;
  acknowledgement_title?: string;
  acknowledgement_microsoft_title?: string;
  acknowledgement_microsoft_content?: string;
  acknowledgement_springer_title?: string;
  acknowledgement_springer_content?: string;
  publication_partner_title?: string;
  publication_partner_subtitle?: string;
  publication_partner_description?: string;
  publication_indexing_title?: string;
  publication_indexing_subtitle?: string;
  publication_indexing_content?: string;
  dates_title?: string;
  dates_subtitle?: string;
  date_submission_label?: string;
  date_submission_title?: string;
  date_submission_date?: string;
  date_notification_label?: string;
  date_notification_title?: string;
  date_notification_date?: string;
  date_camera_label?: string;
  date_camera_title?: string;
  date_camera_date?: string;
  date_conference_label?: string;
  date_conference_title?: string;
  date_conference_date?: string;
  cta_title?: string;
  cta_subtitle?: string;
  cta_expected_papers?: string;
  cta_countries?: string;
  cta_participants?: string;
  join_title?: string;
  join_subtitle?: string;
  join_content?: string;
  mai_title?: string;
  mai_papers_count?: string;
  mai_talks_count?: string;

  // Call for Papers Page
  deadline?: string;
  guidelines?: string;
  topics?: string;

  // Generic Page Fields
  page_title?: string;
  page_subtitle?: string;
  page_intro?: string;

  // Contact Page
  contact_email?: string;
  contact_phone?: string;
  contact_address?: string;
  form_title?: string;

  // Dates Page
  submission_deadline?: string;
  notification_date?: string;
  camera_ready_date?: string;
  conference_date?: string;

  // Events Page
  featured_event?: string;

  // Program Page
  schedule_intro?: string;
  keynotes_intro?: string;

  // Authors Page
  cfp_link_title?: string;
  submission_link_title?: string;

  // Committee Page
  organizing_title?: string;
  national_title?: string;
  international_title?: string;

  // Gallery Page
  year_2023_title?: string;
  year_2022_title?: string;
  year_2021_title?: string;

  // Registration Page
  author_reg_title?: string;
  delegate_reg_title?: string;
}

async function getContentFromFolder(folderName: string): Promise<any[]> {
  try {
    // Try multiple possible root paths
    const possibleRoots = [
      process.cwd(),
      path.join(__dirname, '..'),
    ];

    let contentDir: string | null = null;
    
    for (const root of possibleRoots) {
      const candidatePath = path.join(root, 'content', folderName);
      if (fs.existsSync(candidatePath)) {
        contentDir = candidatePath;
        break;
      }
    }

    // Return empty array if directory doesn't exist
    if (!contentDir) {
      console.warn(`Content folder not found: content/${folderName}`);
      return [];
    }

    const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md'));

    const content = files.map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        ...data,
        body,
      };
    });

    return content;
  } catch (error) {
    console.error(`Error reading content from ${folderName}:`, error);
    return [];
  }
}

export async function getEvents(): Promise<Event[]> {
  return getContentFromFolder('events');
}

export async function getEvent(slug: string): Promise<Event | null> {
  const events = await getEvents();
  return events.find((event) => event.slug === slug) || null;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const announcements = await getContentFromFolder('announcements');
  return announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getKeynotes(): Promise<Keynote[]> {
  return getContentFromFolder('keynotes');
}

export async function getPageContent(pageName: string): Promise<PageContent | null> {
  try {
    // Try multiple possible root paths
    const possibleRoots = [
      process.cwd(),
      path.join(__dirname, '..'),
    ];

    let filePath: string | null = null;
    
    for (const root of possibleRoots) {
      const candidatePath = path.join(root, 'content', 'pages', `${pageName}.md`);
      if (fs.existsSync(candidatePath)) {
        filePath = candidatePath;
        break;
      }
    }

    if (!filePath) {
      console.warn(`Page content not found for: ${pageName}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return data;
  } catch (error) {
    console.error(`Error reading page content for ${pageName}:`, error);
    return null;
  }
}
