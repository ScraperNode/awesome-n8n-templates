# 🎬 Create & track LinkedIn posts with Google Sheets, GPT-5.1, Unsplash, and Sona

> ⚡ **4,380 views** · 🎬 [Content Creation & Video](../)

## Description

Automate LinkedIn content creation by managing ideas in Google Sheets, generating professional AI-written posts, intelligently selecting relevant Unsplash images, sending drafts for email approval, and publishing directly to LinkedIn.

## **How it works**

**Step 1: Scheduled Sheet Check**
- Workflow runs daily at midnight (customizable to hourly/weekly)
- Fetches posts from Google Sheet marked with Status = "Ready"
- Processes one post per run, updates status to "In Progress"

**Step 2: AI Content Generation**
- GPT-5.1 creates engaging LinkedIn post based on your inputs
- Generates content with proper hashtags, formatting, and tone
- Follows your specified content type (tip, story, announcement, etc.)

**Step 3: Quality Validation**
- Automatically checks character limits (3000 max)
- Validates minimum hashtag requirements (3+)
- Loops back to regenerate if quality checks fail

**Step 4: Email Approval Workflow**
- Formats post as HTML email with professional styling
- Sends preview to your Gmail for review
- Waits for your approval response before proceeding
- Nothing posts without explicit confirmation

**Step 5: Smart Image Handling**
- If you provided image URL: Downloads from Google Drive, Dropbox, or direct links
- If no URL is provided: Fetch 10 images from Unsplash and use AI to select the best one.
- If "Include Image?" is "No": Posts text-only content
- Automatically converts share links to downloadable formats

**Step 6: LinkedIn Publishing & Tracking**
- Posts approved content directly to your LinkedIn profile
- Uses appropriate API endpoint based on whether image is included
- Updates Google Sheet status to "Posted" for successful posts
- Marks "Rejected" posts in sheet for review and editing

## **What you'll get**

- **Batch content planning**: Queue multiple posts in advance via Google Sheets
- **Consistent posting schedule**: Automated daily publishing without manual work
- **Professional AI content**: GPT-5.1 generates engaging, platform-optimized posts
- **Full approval control**: Review every post before it goes live
- **Flexible image options**: Your images, AI-generated, or text-only
- **Quality assurance**: Built-in checks prevent poorly formatted posts
- **Status tracking**: Monitor what's ready, in progress, rejected, or posted
- **Smart link conversion**: Automatically handles Google Drive and Dropbox share links

## **Requirements**

**Accounts & credentials:**
- OpenAI API key (requires paid plan for GPT-5.1)
- Gmail account (for approval workflow)
- Google account (for Sheets integration)
- LinkedIn account (for publishing)
- Unsplash API key (for getting images)

**Google Sheet setup:**
Create a sheet with these columns:
- Topic/Subject (required) - Main idea for the post
- Content Type (required) - e.g., "Tip", "Story", "Announcement"
- Tone (required) - e.g., "Professional", "Casual", "Inspirational"
- Target Audience (optional) - Who you're writing for
- Additional Notes (optional) - Specific points to include
- Image link for your post (optional) - URL to your image
- Include Image? (required) - "Yes" or "No"
- Status (required) - "Ready" to trigger workflow

## **Setup steps**

1. **Import workflow** - Click "Use workflow" to add to your n8n instance

2. **Connect credentials**:
   - Google Sheets: Authenticate and select your sheet from dropdown
   - OpenAI: Add your API key in both AI nodes
   - Gmail: Authenticate and update recipient email in approval node
   - LinkedIn: Authenticate (your profile auto-populates)

3. **Create your content sheet** - Add the required columns and fill with post ideas

4. **Test the workflow**:
   - Add one test row with Status = "Ready"
   - Run workflow manually
   - Check email for approval
   - Verify post appears on LinkedIn

5. **Configure schedule** - Default is daily at midnight; adjust Schedule Trigger node for different frequency

6. **Start batching** - Add multiple ideas to your sheet and let automation handle the rest

## **Tips for best results**

- Be specific in Topic/Subject: "5 ways to improve team productivity" beats "productivity tips"
- Mix content types and tones to keep your feed engaging
- Use Additional Notes for data points, statistics, or specific examples. You can also include links that the AI can use for the posts.
- Start with text-only posts to validate content quality before adding images
- Review rejected posts carefully and refine your inputs
- Batch 10-20 ideas at once for weeks of automated content

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, LinkedIn, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
