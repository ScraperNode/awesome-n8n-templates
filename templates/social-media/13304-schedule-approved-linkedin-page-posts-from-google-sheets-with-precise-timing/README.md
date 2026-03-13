# 📱 Schedule approved LinkedIn page posts from Google Sheets with precise timing

> ⚡ **62 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

Automate LinkedIn organization page posting with precise time scheduling and Google Drive media management. Runs hourly during business hours, processes approved posts scheduled for today, waits until exact time, publishes to LinkedIn, and updates tracking sheet—perfect for maintaining consistent LinkedIn presence.

---

## What this workflow does

This workflow automates LinkedIn organization page posting with precise timing control and a centralized Google Sheets content calendar. It runs four times daily (9:45 AM, 10:45 AM, 11:45 AM, 12:45 PM) and reads your Google Sheet to find posts marked with Approval Status = "Good" and Platform = "LinkedIn" that are scheduled for today. Unlike batch processing workflows, this processes ONE post per run to prevent duplicate scheduling. Once it finds a post, it marks it as "Scheduled" in your sheet, then uses a Wait node to pause the workflow execution until the exact scheduled time (with automatic timezone conversion from Eastern to India time). At the scheduled moment, it either downloads an image from Google Drive and publishes a Creative Post, or publishes an Article link—depending on the Post Type. After successfully publishing to your LinkedIn organization page, it updates your Google Sheet with the live post URL and changes the Approval Status to "Published", creating a complete audit trail with precise timing control.

Perfect for social media managers maintaining consistent LinkedIn presence, marketing agencies scheduling client LinkedIn content with approval checkpoints, content creators batch-planning professional posts, and teams needing collaborative LinkedIn calendars with exact time control.

---

## Key features

**Precise time scheduling with Wait node:** Unlike immediate publishing, this workflow uses n8n's Wait node to pause execution until the exact scheduled time—ensuring posts publish at 10:00 AM sharp, not 9:45 AM when the workflow runs.

**Timezone conversion included:** Automatically converts "Scheduled On" times from Eastern Time (content creator's timezone) to India Time (server timezone) using DateTime.fromFormat—no manual calculation needed.

**One post per run:** Processes only the first pending post each time the workflow runs, preventing duplicate scheduling if multiple posts share the same time slot—ensures clean execution and tracking.

**Dual post type support:** Handles both Creative Posts (image posts downloaded from Google Drive) and Articles (link posts with article URL)—automatically routes based on Post Type column.

**LinkedIn organization posting:** Posts directly to your LinkedIn organization/company page (not personal profile) using LinkedIn Community Management API with proper OAuth authentication.

**Status progression tracking:** Three-stage workflow: Good (approved) → Scheduled (waiting for time) → Published (live on LinkedIn)—always know what's queued vs. what's live.

**Google Sheets content calendar:** Manage LinkedIn posts in a familiar spreadsheet with columns for Scheduled On, Platform, Post Type, Caption, Media URL, and Approval Status—no complex tools needed.

**Google Drive media integration:** Stores images in Google Drive (centralized storage), then automatically downloads them when publishing Creative Posts—supports shared drives and private files.

**Post URL tracking:** After publishing, updates Google Sheet with the live LinkedIn post URL (https://www.linkedin.com/feed/update/{urn})—enables easy performance tracking and reporting.

**Runs during business hours only:** Schedule trigger fires at :45 minutes (9-12 AM) to catch morning posts—won't run at night or on weekends unless you modify the cron.

---

## How it works

### 1. Hourly trigger during business hours
A cron trigger runs at 9:45 AM, 10:45 AM, 11:45 AM, and 12:45 PM every day. The :45 timing gives a 15-minute buffer before the hour to schedule posts for :00, :15, :30, or :45 times.

### 2. Load LinkedIn credentials
The workflow reads a separate ".env" sheet in your Google Sheets document containing:
- **LinkedIn Organization ID:** Your company page's unique ID (e.g., 56420402)
- Other LinkedIn-specific configuration

This centralizes credentials so multiple workflows can share the same settings.

### 3. Fetch approved LinkedIn posts
The workflow reads your main "Post URL" sheet and applies two filters:
- **Approval Status = "Good":** Only processes approved posts
- **Platform = "LinkedIn":** Filters out Facebook, Instagram, etc.

This returns all approved LinkedIn posts regardless of date.

### 4. Filter posts scheduled for today
A Code node compares the "Scheduled On" column value against today's date (ignores time, just checks the date part). Only posts scheduled for today pass through.

**Supported date format:**
- "2025-10-30 10:00" (YYYY-MM-DD HH:MM)
- Time uses 24-hour format

### 5. Process first post only
**Critical difference from Facebook workflow:** A Code node extracts only the FIRST item from the filtered posts.

**Why only one post?**
- Prevents duplicate scheduling if workflow runs multiple times
- Wait node works on single execution paths
- Ensures precise timing per post
- Next run will pick up the next pending post

### 6. Route by post type
A Switch node checks the Post Type column:
- **Output 0 (Creative Post):** Posts with images (routes to Branch A)
- **Output 1 (Article):** Posts with article links (routes to Branch B)

---

### Branch A: Creative Post with Image

### 7a. Mark as scheduled in sheet
Before waiting, the workflow updates the Google Sheet:
- **Approval Status:** "Scheduled"

This prevents the same post from being picked up again in the next hourly run.

### 8a. Wait until scheduled time
**Most critical node:** The Wait node pauses workflow execution until the exact scheduled time.

**Timezone conversion logic:**
```javascript
DateTime.fromFormat(
  $('Route by Post Type').item.json['Scheduled On'],
  'yyyy-MM-dd HH-mm',
  { zone: 'America/New_York' }  // Input timezone (Eastern)
)
.setZone('Asia/Kolkata')        // Server timezone (India)
.toFormat("yyyy-MM-dd'T'HH:mm:ss")
```

**Example:**
- Sheet value: "2025-10-30 14:00" (Eastern Time)
- Converted to: "2025-10-30T23:30:00" (India Time)
- Workflow resumes at exactly 11:30 PM India time = 2:00 PM Eastern

### 9a. Prepare post data
Aggregate node (keeps data structure intact for next nodes).

### 10a. Download image from Google Drive
Uses the Media URL (Google Drive sharing link) to download the image file. Supports:
- Direct Google Drive file URLs
- Shared Drive files
- Public or private files (as long as OAuth account has access)

The image is downloaded as binary data.

### 11a. Publish creative post to LinkedIn
Uses n8n's LinkedIn node with these settings:
- **Authentication:** communityManagement (LinkedIn Community Management API)
- **Post as:** organization
- **Organization:** 56420402 (your company page ID)
- **Text:** Caption from Google Sheet
- **Share media category:** IMAGE
- **Binary data:** Downloaded image

The LinkedIn API returns a URN (unique post identifier).

### 12a. Save post URL & mark published
Constructs the LinkedIn post URL:
```
https://www.linkedin.com/feed/update/{urn}
```

Then updates the Google Sheet row:
- **Approval Status:** "Published"
- **Post URL:** Constructed LinkedIn URL

---

### Branch B: Article Post with Link

### 7b. Mark article as scheduled
Updates Google Sheet: **Approval Status = "Scheduled"**

### 8b. Wait until article scheduled time
Same Wait node logic as Creative Posts—pauses until exact scheduled time with timezone conversion.

### 9b. Prepare article data
Aggregate node.

### 10b. Publish article link to LinkedIn
Uses LinkedIn node with these settings:
- **Authentication:** communityManagement
- **Post as:** organization
- **Organization:** 56420402
- **Text:** Caption from Google Sheet
- **Share media category:** ARTICLE
- **Original URL:** Media URL (the article link)

LinkedIn scrapes the article URL and creates a rich preview card.

### 11b. Save article URL & mark published
Same as Creative Posts—constructs post URL and updates sheet with "Published" status.

---

## Setup requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access
- Google Drive with OAuth access
- LinkedIn organization/company page (not personal profile)
- LinkedIn Community Management API credentials

**Estimated setup time:** 35–40 minutes

---

## Configuration steps

### 1. Set up LinkedIn Community Management API
- Go to [LinkedIn Developer Console](https://www.linkedin.com/developers/)
- Create an app (or use existing)
- Add "Community Management API" product
- Request access for your organization page
- Under **Auth → OAuth 2.0 settings:**
  - Add redirect URL: `https://your-n8n-instance.com/rest/oauth2-credential/callback`
  - Note your Client ID and Client Secret
- In n8n: **Credentials → Add credential → LinkedIn Community Management OAuth2 API**
- Complete OAuth flow and select your organization page

### 2. Find your LinkedIn Organization ID
**Method 1 (URL):**
- Go to your LinkedIn company page
- URL will be: `https://www.linkedin.com/company/{company-name}/`
- View page source and search for "organizationId"
- Copy the numeric ID (e.g., 56420402)

**Method 2 (API):**
- Use LinkedIn API endpoint: `/v2/organizationalEntityAcls?q=roleAssignee`
- Find your organization in the response

### 3. Set up Google Sheets
**Create two sheets in one Google Sheets document:**

**Sheet 1: ".env" (credentials)**
| LinkedIn Organization ID |
|---|
| 56420402 |

**Sheet 2: "Post URL" (content calendar)**
| Scheduled On | Platform | Post Type | Caption | Media URL | Approval Status | Post URL | row_number |
|---|---|---|---|---|---|---|---|
| 2025-10-30 10:00 | LinkedIn | Creative Post | Excited to announce our new product! | https://drive.google.com/file/d/xxx | Good | | 1 |
| 2025-10-30 14:00 | LinkedIn | Article | Check out our latest blog post | https://blog.example.com/post | Good | | 2 |

**Important column details:**
- **Scheduled On:** Format YYYY-MM-DD HH-MM (24-hour, Eastern Time)
- **Platform:** Must be "LinkedIn" (case-sensitive)
- **Post Type:** "Creative Post" (with image) or "Article" (with link)
- **Caption:** Post text (LinkedIn supports up to 3,000 characters)
- **Media URL:** Google Drive URL for Creative Post, article URL for Article
- **Approval Status:** "Good" (publish), "Pending" (hold), "Rejected" (skip)
- **Post URL:** Leave empty (auto-filled after publishing)
- **row_number:** Auto-generated by Google Sheets

### 4. Connect Google Sheets OAuth
- In n8n: **Credentials → Add credential → Google Sheets OAuth2 API**
- Complete OAuth authentication
- Update these nodes with your sheet URL:
  - "Load LinkedIn Organization Credentials" → .env sheet
  - "Fetch Approved LinkedIn Posts" → Post URL sheet
  - "Mark as Scheduled in Sheet" → Post URL sheet
  - "Save Post URL & Mark Published" → Post URL sheet
  - "Mark Article as Scheduled" → Post URL sheet
  - "Save Article URL & Mark Published" → Post URL sheet

### 5. Connect Google Drive OAuth
- In n8n: **Credentials → Add credential → Google Drive OAuth2 API**
- Complete OAuth authentication
- Open "Download Image from Google Drive" node
- Select your Google Drive credential

### 6. Update LinkedIn Organization ID
Open these nodes and replace "56420402" with your organization ID:
- **"Publish Creative Post to LinkedIn"**
- **"Publish Article Link to LinkedIn"**

### 7. Adjust timezone (if needed)
If your content calendar uses a different timezone than Eastern:
- Open "Wait Until Scheduled Time" node
- Change `{ zone: 'America/New_York' }` to your timezone
- Common values: 'America/Los_Angeles' (Pacific), 'UTC', 'Europe/London'

If your n8n server is not in India Time:
- Change `.setZone('Asia/Kolkata')` to your server's timezone

### 8. Test the workflow
- Add a test post scheduled for 5 minutes from now
- Set Platform = "LinkedIn", Post Type = "Creative Post", Approval Status = "Good"
- Manually trigger the workflow (or wait for next hourly run)
- Verify:
  - Sheet updated to "Scheduled"
  - Workflow execution shows as "Waiting" in n8n
  - At scheduled time, post publishes to LinkedIn
  - Sheet updated to "Published" with URL

### 9. Activate the workflow
- Toggle the workflow to **Active**
- The workflow will now run automatically 4 times daily
- Check your LinkedIn page to verify posts are publishing correctly

---

## Use cases

**Social media managers:** Schedule 15-20 LinkedIn posts per week from one Google Sheet. Team members add content, you approve, workflow handles precise timing and publishing—no manual LinkedIn.com logins.

**B2B marketing teams:** Maintain consistent LinkedIn company page presence with thought leadership articles, product updates, and team highlights. Schedule weeks in advance, let automation publish at optimal times.

**Content creators:** Batch-create LinkedIn content on Mondays, schedule throughout the week with precise timing. Focus on creation, not distribution—workflow handles publishing.

**Agencies managing client pages:** One Google Sheet per client, separate workflows per organization ID. Centralized content calendar with approval workflow before posting to client pages.

**Recruiting teams:** Schedule hiring posts, culture updates, and employee spotlights to maintain active company presence. Track all post URLs for performance analysis.

**Personal brands using company pages:** If you manage a LinkedIn company page for your personal brand or business, schedule promotional content, case studies, and announcements with professional timing control.

---

## Customization options

### Process multiple posts per run
Change "Process First Post Only" node logic:
- Current: Returns only item 0
- Modified: Return all items (use Loop node to process sequentially)
- Note: Wait nodes won't work with loops—consider using scheduled_publish_time if LinkedIn API supports it

### Change scheduling frequency
Edit the "Run Every Hour" cron expression:
- Current: `45 9-12 * * *` (9:45-12:45 AM hourly)
- All day: `45 * * * *` (every hour at :45)
- Business hours extended: `45 9-17 * * 1-5` (9 AM-5 PM, Monday-Friday)
- Twice daily: `0 9,15 * * *` (9:00 AM and 3:00 PM)

### Add video post support
LinkedIn supports video posts via Community Management API:
- Add "Post Type" = "Video"
- Download video from Google Drive (instead of image)
- Change share media category to VIDEO
- Upload video to LinkedIn media upload endpoint first, then create post

### Support personal profiles
If you want to post to personal profiles (not organization):
- Change authentication from "communityManagement" to "oAuth2"
- Change "Post as" from "organization" to "person"
- Use LinkedIn OAuth2 API credentials (not Community Management)

### Add Slack notifications
After publishing nodes, add:
- **Slack node** to send confirmation
- **Format:** "Published LinkedIn post: [URL] at [time]"
- **Include:** Post caption preview for context

### Multi-organization support
Modify .env sheet to support multiple company pages:
| Organization Name | LinkedIn Organization ID |
|---|---|
| Main Brand | 56420402 |
| Sub Brand | 78901234 |

Add "Organization Name" column to Post URL sheet, then filter and route by organization.

---

## Troubleshooting

### Posts not publishing
- **OAuth expired:** Re-authenticate LinkedIn Community Management API credentials in n8n.
- **Organization permissions:** Verify your LinkedIn account has admin/content creator role on the organization page.
- **API access:** Ensure your LinkedIn app has Community Management API product added and approved.
- **Organization ID wrong:** Double-check the ID matches your actual company page.

### Wait node not working
- **Scheduled time in past:** n8n Wait node requires future times. If "Scheduled On" is in the past when workflow runs, it fails. Ensure posts are scheduled for future times only.
- **Timezone mismatch:** If posts publish at wrong times, verify timezone conversion is correct (Eastern → your server timezone).
- **DateTime format error:** Ensure "Scheduled On" uses exactly "YYYY-MM-DD HH-MM" format with space between date and time.

### Images not downloading from Google Drive
- **OAuth expired:** Re-authenticate Google Drive credentials.
- **File permissions:** Ensure the Google account connected to n8n has "Viewer" access to Drive files.
- **Sharing link format:** Media URL must be full Google Drive URL (https://drive.google.com/file/d/FILE_ID/view), not shortened.

### Multiple posts with same time
- **Current limitation:** This workflow processes ONE post per run. If multiple posts share the same scheduled time, only the first will publish.
- **Solution:** Stagger times by 1 minute (10:00, 10:01, 10:02) or modify workflow to process multiple posts.

### Sheet not updating
- **OAuth expired:** Re-authenticate Google Sheets credentials.
- **Sheet name mismatch:** Verify sheet tab name is exactly "Post URL" and ".env" (case-sensitive).
- **row_number missing:** Ensure the sheet has a `row_number` column auto-generated by formula: `=ROW()-1`

### Article previews not showing
- **URL not accessible:** LinkedIn needs to scrape the article URL. Ensure it's publicly accessible (not behind login/paywall).
- **No Open Graph tags:** Article pages need Open Graph meta tags (og:title, og:description, og:image) for LinkedIn to generate previews.
- **LinkedIn cache:** Sometimes LinkedIn caches old previews. Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh cache.

---

## Resources

- [n8n documentation](https://docs.n8n.io/)
- [LinkedIn Community Management API](https://docs.microsoft.com/en-us/linkedin/marketing/community-management/shares)
- [LinkedIn OAuth Guide](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Google Drive API](https://developers.google.com/drive/api)
- [n8n Wait node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/)
- [n8n LinkedIn node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linkedin/)

---

## Support

Need help or custom development?

📧 Email: info@isawow.com  
🌐 Website: https://isawow.com/

## 🔗 Nodes Used

Google Sheets, Google Drive, LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
