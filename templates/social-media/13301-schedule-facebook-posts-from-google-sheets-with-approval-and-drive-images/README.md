# 📱 Schedule Facebook posts from Google Sheets with approval and Drive images

> ⚡ **154 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Description

Automate Facebook post scheduling from a Google Sheets content calendar. Runs 4 times daily, reads approved posts scheduled for today, downloads images from Google Drive, schedules via Facebook Graph API, and updates tracking sheet with published URLs—perfect for social media managers and agencies.

---

## What this workflow does

This workflow eliminates manual Facebook posting by automating the entire scheduling process from a centralized Google Sheets content calendar. It runs four times daily (9:35 AM, 10:35 AM, 11:35 AM, 12:35 PM) to catch posts scheduled at different times throughout the morning. The workflow reads your Google Sheet, filters posts marked with Approval Status = "Good" and Platform = "Facebook", then checks which posts are scheduled for today. For each approved post, it intelligently determines if it's a text-only post or a photo post—if there's a Media URL, it downloads the image from Google Drive; otherwise, it schedules just the text. Both types are scheduled via Facebook Graph API with future publishing times (not posted immediately), and once successfully scheduled, the workflow updates your Google Sheet with the published post URL and changes the Approval Status to "Published". This creates a complete audit trail of all scheduled content while supporting team collaboration through the approval workflow.

Perfect for social media managers handling multiple Facebook pages, marketing agencies scheduling client content with approval checkpoints, content creators batch-planning posts in Google Sheets, and teams needing collaborative content calendars with centralized image management.

---

## Key features

**Google Sheets content calendar:** Manage all Facebook posts in a familiar spreadsheet with columns for Scheduled On, Platform, Post Type, Caption, Media URL, and Approval Status—no complex social media management tools needed.

**Built-in approval workflow:** Only posts marked "Good" in the Approval Status column are published. Team members can review, approve, or reject posts directly in Google Sheets before they go live.

**Dual post type support:** Handles both text-only posts (scheduled via /feed endpoint) and photo posts (scheduled via /photos endpoint with binary image data)—automatically detects which type based on Media URL presence.

**Google Drive image integration:** Stores all images in Google Drive (centralized, shared storage), then automatically downloads them when scheduling photo posts—no manual file management needed.

**Runs 4 times daily:** Schedule trigger fires at 9:35 AM, 10:35 AM, 11:35 AM, and 12:35 PM to catch posts scheduled at different morning times—handles busy posting schedules without missing slots.

**Facebook Graph API scheduling:** Uses official Facebook Graph API v24.0 with scheduled_publish_time parameter (published: false) to schedule posts for future times—not immediate posting, actual scheduling.

**Post URL tracking:** After successfully scheduling, updates Google Sheet with the published Facebook post URL—creates complete audit trail and enables easy post performance tracking.

**Multi-platform ready:** Uses "Platform" column to filter Facebook posts only—same Google Sheet can manage Instagram, LinkedIn, Twitter content by adding more platform-specific workflows.

**Story post filtering:** Automatically skips posts where Post Type = "Story" (Facebook Stories scheduling not supported by this workflow)—only processes Feed and Photo posts.

---

## How it works

### 1. Scheduled trigger fires 4 times daily
A cron trigger runs at 9:35 AM, 10:35 AM, 11:35 AM, and 12:35 PM every day. This catches posts scheduled at different times throughout the morning without needing to run the workflow every minute.

### 2. Load Facebook credentials
The workflow reads a separate ".env" sheet in your Google Sheets document containing:
- **Facebook Page ID:** Your Facebook Page's unique ID
- **Facebook Page Access Token:** Long-lived access token with `pages_manage_posts` and `pages_read_engagement` permissions

These credentials are used for all Facebook Graph API calls later in the workflow.

### 3. Read approved Facebook posts
The workflow reads your main "Post URL" sheet and applies two filters:
- **Approval Status = "Good":** Only processes approved posts
- **Platform = "Facebook":** Filters out Instagram, LinkedIn, etc.

This returns all approved Facebook posts regardless of scheduled date.

### 4. Filter posts scheduled for today
A Code node compares the "Scheduled On" column value against today's date (ignores time, just checks the date part). Posts scheduled for today pass through; others are filtered out.

**Supported date formats:**
- "2025-10-30 10:00"
- "2025-10-30 06-42"
- Any format with YYYY-MM-DD at the beginning

### 5. Loop through each post
The Split in Batches node processes one post at a time, preventing API rate limits and ensuring each post is handled individually. If there are 5 approved posts for today, it loops 5 times.

### 6. Platform verification
A Switch node double-checks that Platform = "Facebook" (redundant but ensures accuracy). This allows the same workflow structure to be copied for other platforms.

### 7. Story post filtering
An If node checks if Post Type != "Story". Facebook Stories scheduling is not supported in this workflow, so Story posts are skipped and merged back into the loop to continue with the next post.

### 8. Determine post type (text-only vs. photo)
An If node checks if the "Media URL" column is empty:
- **Empty → Text-only post** (routes to Branch A)
- **Has value → Photo post** (routes to Branch B)

---

### Branch A: Text-Only Post

### 9a. Schedule Facebook text post
HTTP POST request to Facebook Graph API:
```
https://graph.facebook.com/v24.0/{page-id}/feed
```

**Parameters:**
- `message`: Caption text from Google Sheet
- `access_token`: From credentials sheet
- `published`: false (schedules instead of posting immediately)
- `scheduled_publish_time`: Unix timestamp converted from "Scheduled On" field

**Example:**
If Scheduled On = "2025-10-30 14:00", the workflow converts this to Unix timestamp (1730296800) and Facebook schedules the post for that exact time.

### 10a. Update sheet with text post URL
After successful API response, the workflow constructs the Facebook post URL from the response ID:
```
https://www.facebook.com/{page-id}/posts/{post-id}
```

Then updates the Google Sheet row:
- **Approval Status:** "Published"
- **Post URL:** Constructed Facebook URL

This marks the post as published and provides a clickable link to view it on Facebook.

---

### Branch B: Photo Post

### 9b. Download image from Google Drive
Uses the Media URL (Google Drive sharing link) to download the image file. Supports:
- Direct Google Drive file URLs
- Shared Drive files
- Public or private files (as long as the OAuth account has access)

The image is downloaded as binary data and passed to the next node.

### 10b. Schedule Facebook photo post
HTTP POST request to Facebook Graph API:
```
https://graph.facebook.com/v24.0/{page-id}/photos
```

**Content-Type:** multipart/form-data

**Parameters:**
- `source`: Binary image data (from Google Drive download)
- `caption`: Caption text from Google Sheet
- `access_token`: From credentials sheet
- `published`: false (schedules instead of posting immediately)
- `scheduled_publish_time`: Unix timestamp + 15 minute buffer

**Note:** Photo posts get an extra 15-minute buffer in the scheduled time to account for image processing delays on Facebook's side.

### 11b. Update sheet with photo post URL
After successful API response, constructs the Facebook photo URL:
```
https://www.facebook.com/photo/?fbid={photo-id}
```

Then updates the Google Sheet row:
- **Approval Status:** "Published"
- **Post URL:** Constructed Facebook photo URL

---

### 12. Merge and loop
All three branches (text posts, photo posts, skipped stories) merge back together. The loop then proceeds to the next post until all approved posts for today are processed.

---

## Setup requirements

**Tools you'll need:**

- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access
- Google Drive with OAuth access
- Facebook Page (not personal profile)
- Facebook Page Access Token with proper permissions

**Estimated setup time:** 30–35 minutes

---

## Configuration steps

### 1. Create Facebook Page Access Token
- Go to [Facebook Developer Console](https://developers.facebook.com/)
- Create an app (or use existing)
- Add "Facebook Login" product
- Under **Tools → Graph API Explorer:**
  - Select your Page
  - Request permissions: `pages_manage_posts`, `pages_read_engagement`, `publish_to_groups`
  - Generate long-lived access token (follow Facebook's token extension process)
- Save the Page ID and Access Token

### 2. Set up Google Sheets
**Create two sheets in one Google Sheets document:**

**Sheet 1: ".env" (credentials)**
| Facebook Page ID | Facebook Page Access Token |
|---|---|
| 123456789 | EAAxxxxxxx... |

**Sheet 2: "Post URL" (content calendar)**
| Scheduled On | Platform | Post Type | Caption | Media URL | Approval Status | Post URL | row_number |
|---|---|---|---|---|---|---|---|
| 2025-10-30 10:00 | Facebook | Photo | Check out our new product! | https://drive.google.com/file/d/xxx | Good | | 1 |
| 2025-10-30 14:00 | Facebook | Feed | Happy Monday everyone! | | Good | | 2 |

**Important column details:**
- **Scheduled On:** Format must be YYYY-MM-DD HH-MM (24-hour format)
- **Platform:** Must be "Facebook" (case-sensitive)
- **Post Type:** "Feed" (text-only), "Photo" (with image), or "Story" (skipped)
- **Media URL:** Google Drive sharing link (leave empty for text-only posts)
- **Approval Status:** "Good" (publish), "Pending" (hold), "Rejected" (skip)
- **Post URL:** Leave empty (auto-filled after publishing)
- **row_number:** Auto-generated by Google Sheets

### 3. Connect Google Sheets OAuth
- In n8n: **Credentials → Add credential → Google Sheets OAuth2 API**
- Complete OAuth authentication
- Open these nodes and select your credential:
  - "Load Facebook Credentials from Sheet"
  - "Read Approved Facebook Posts"
  - "Update Sheet with Photo Post URL"
  - "Update Sheet with Text Post URL"

### 4. Connect Google Drive OAuth
- In n8n: **Credentials → Add credential → Google Drive OAuth2 API**
- Complete OAuth authentication
- Open "Download Image from Google Drive" node
- Select your Google Drive credential

### 5. Update sheet URLs
Open the following nodes and update the `documentId` value with your Google Sheets URL:
- **"Load Facebook Credentials from Sheet"** → Point to your .env sheet
- **"Read Approved Facebook Posts"** → Point to your Post URL sheet
- **"Update Sheet with Photo Post URL"** → Point to your Post URL sheet
- **"Update Sheet with Text Post URL"** → Point to your Post URL sheet

### 6. Test with sample posts
- Add 2 test rows in your Google Sheet:
  - Row 1: Text-only post (no Media URL) scheduled for today
  - Row 2: Photo post (with Google Drive URL) scheduled for today
- Set both Approval Status to "Good"
- Manually trigger the workflow (or wait for the next scheduled run)
- Verify:
  - Posts appear in Facebook's Publishing Tools as scheduled
  - Google Sheet updated with Post URLs
  - Approval Status changed to "Published"

### 7. Activate the workflow
- Toggle the workflow to **Active**
- The workflow will now run automatically at 9:35 AM, 10:35 AM, 11:35 AM, and 12:35 PM daily
- Monitor the first few days to ensure posts are scheduling correctly

---

## Use cases

**Social media managers:** Schedule 20-30 Facebook posts per week from a centralized Google Sheets calendar. Team members add content, you approve in the sheet, workflow handles publishing—no manual Facebook Business Suite logins.

**Marketing agencies:** Manage 10+ client Facebook Pages from one Google Sheet. Each client gets their own rows, separate Facebook credentials loaded per page, automated scheduling with URL tracking for client reporting.

**Content creators:** Batch-create a month of posts in one sitting (captions + images in Google Drive), mark them "Good" when ready, let the workflow publish them at scheduled times—focus on creation, not distribution.

**Small businesses:** Schedule promotional posts, event announcements, and product launches without paying for Buffer, Hootsuite, or Later. Free automation with Google Sheets as the interface.

**E-commerce stores:** Schedule new product announcements with product images from Google Drive. Workflow downloads images, posts to Facebook with captions, tracks URLs for performance analysis.

**Agencies with approval workflows:** Content team creates posts, marks "Pending". Manager reviews, changes to "Good" or "Rejected". Only approved posts publish—built-in quality control without third-party tools.

---

## Resources

- [n8n documentation](https://docs.n8n.io/)
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api/)
- [Facebook Page Access Tokens](https://developers.facebook.com/docs/pages/access-tokens/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Google Drive API](https://developers.google.com/drive/api)
- [n8n Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)
- [n8n Google Sheets node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)

---

## Support

Need help or custom development?

📧 Email: [info@isawow.com](info@isawow.com)  
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
