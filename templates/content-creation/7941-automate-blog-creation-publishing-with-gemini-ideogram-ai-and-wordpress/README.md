# 🎬 Automate blog creation & publishing with Gemini, Ideogram AI and WordPress

> ⚡ **1,091 views** · 🎬 [Content Creation & Video](../)

## Description

## **Overview:**
This n8n workflow automates the complete blog publishing process from topic research to WordPress publication. It researches topics, writes SEO-optimized content, generates images, publishes posts, and notifies teams—all automatically from Google Sheets input.

## **How It Works:**
**Step 1: Client Management & Scheduling**

- **Client Data Retrieval:** Scans master Google Sheet for clients with "Active" project status and "Automation" blog publishing setting
- **Publishing Schedule Validation:** Checks if current day matches client's weekly frequency (Mon, Tue, Wed, Thu, Fri, Sat, Sun) or if set to "Daily"
- **Content Source Access:** Connects to client-specific Google Sheet using stored document ID and sheet name

**Step 2: Content Planning & Selection**

- **Topic Filtering:** Retrieves rows where "Status for Approval" = "Approved" and "Live Link" = "Pending"
- **Content Validation:** Ensures Focus Keyword field is populated before proceeding
- **Single Topic Processing:** Selects first available topic to maintain quality and prevent API rate limits

**Step 3: AI-Powered Research & Writing**

- **Comprehensive Research:** Google Gemini analyzes search intent, competitor content, audience needs, trending subtopics, and LSI keywords
- **Content Generation:** Creates 800-1000 word articles with natural keyword integration, internal linking, and conversational tone optimized for Indian investors
- **Quality Assessment:** Evaluates content for human-like writing, conversational tone, readability, and engagement factors
- **Content Optimization:** Automatically fixes grammar, punctuation, sentence flow, and readability issues while maintaining HTML structure

**Step 4: Visual Content Creation**

- **Image Prompt Generation:** OpenAI creates detailed prompts based on blog title and content for professional visuals
- **Image Generation:** Ideogram AI produces 1248x832 resolution images with realistic styling and professional appearance
- **Binary Processing:** Downloads and converts generated images to binary format for WordPress upload

**Step 5: WordPress Publication**

- **Media Upload:** Uploads generated image to WordPress media library with proper filename and headers
- **Content Publishing:** Creates new WordPress post with title, optimized content, and embedded image
- **Featured Image Assignment:** Sets uploaded image as post's featured thumbnail for proper display
- **Category Assignment:** Automatically assigns posts to predefined category

**Step 6: Tracking & Communication**

- **Status Updates:** Updates Google Sheet with live blog URL in "Live Link" column using S.No. as identifier
- **Team Notification:** Sends Discord message to designated channel with published blog link and review request
- **Process Completion:** Triggers next iteration or workflow conclusion based on remaining topics

## **Setup Steps:**

**Estimated Setup Time:** 45-60 minutes

**Required API Credentials:**

**1. Google Sheets API**
- Service account with sheets access
- OAuth2 credentials for client-specific sheets
- Proper sharing permissions for all target sheets

**2. Google Gemini API**
- Active API key with sufficient quota
- Access to Gemini Pro model for content generation
- Rate limiting considerations for bulk processing

**3. OpenAI API**

- GPT-4 access for creative prompt generation
- Sufficient token allocation for daily operations
- Fallback handling for API unavailability

**4. Ideogram AI API**

- Premium account for quality image generation
- API key with generation permissions
- Understanding of rate limits and pricing

**5. WordPress REST API**

- Application passwords for each client site
- Basic authentication setup with proper encoding
- REST API enabled in WordPress settings
- User permissions for post creation and media upload

**6. Discord Bot API**
- Bot token with message sending permissions
- Channel ID for notifications
- Guild access and proper bot roles

## **Master Sheet Configuration:**

**Document Structure:** Create primary tracking sheet with columns

- **Client Name:** Business identifier
- **Project Status:** Active/Inactive/Paused
- **Blog Publishing:** Automation/Manual/Disabled
- **Website URL:** Full WordPress site URL with trailing slash
- **Blog Posting Auth Code:** Base64 encoded username: password
- **On Page Sheet:** Google Sheets document ID for content planning
- **WeeklyFrequency:** Daily/Mon/Tue/Wed/Thu/Fri/Sat/Sun
- **Discord Channel:** Channel ID for notifications

## **Content Planning Sheet Structure:**

**Required Columns** (exact naming required):

- **S.No.:** Unique identifier for tracking
- **Focus Keyword:** Primary SEO keyword
- **Content Topic** Article title/subject
- **Target Page:** Internal linking target
- **Words:** Target word count
- **Brief URL:** Content brief reference
- **Content URL:** Draft content location
- **Status for Approval:** Pending/Approved/Rejected
- **Live Link:** Published URL (auto-populated)

## **WordPress Configuration:**

- **REST API Activation:** Ensure wp-json endpoint accessibility
- **User Permissions:** Create dedicated user with Editor or Administrator role
- **Application Passwords:** Generate secure passwords for API authentication
- **Category Setup:** Create or identify category ID for automated posts
- **Media Settings:** Configure upload permissions and file size limits
- **Security:** Whitelist IP addresses if using security plugins

## **Discord Integration Setup:**

- **Bot Creation:** Create application and bot in Discord Developer Portal
- **Permissions:** Grant Send Messages, Embed Links, and Read Message History
- **Channel Configuration:** Set up dedicated channel for blog notifications
- **User Mentions:** Configure user ID for targeted notifications
- **Message Templates:** Customize notification format and content

## **Workflow Features & Capabilities:**

**Content Quality Standards:**

- **SEO Optimization:** Natural keyword integration with LSI keywords and related terms
- **Readability:** Conversational tone with short sentences and clear explanations
- **Structure:** Proper HTML formatting with headings, lists, and internal links
- **Length:** Consistent 800-1000 word count for optimal engagement
- **Audience Targeting:** Content tailored for Indian investor audience with relevant examples

**Image Generation Specifications:**

- **Resolution:** 1248x832 pixels optimized for blog headers
- **Style:** Realistic professional imagery with human subjects
- **Design:** Clean layout with heading text placement (bottom or left side)
- **Quality:** High-resolution output suitable for web publishing
- **Branding:** Light beige to gradient backgrounds with golden overlay effects

**Error Handling & Reliability:**

- **Graceful Failures:** Workflow continues even if individual steps encounter errors
- **API Rate Limits:** Built-in delays and retry mechanisms for external services
- **Data Validation:** Checks for required fields before processing
- **Backup Processes:** Alternative paths for critical failure points
- **Logging:** Comprehensive tracking of successes and failures

**Security & Access Control:**

- **Credential Encryption:** All API keys stored securely in n8n vault
- **Limited Permissions:** Service accounts with minimum required access
- **Authentication:** Basic auth for WordPress with encoded credentials
- **Data Privacy:** No sensitive information exposed in logs or outputs
- **Access Logging:** Track all sheet modifications and blog publications

## **Troubleshooting:**
**Common Issues:**

- **API Rate Limits:** Check your API quotas and usage limits
- **WordPress Authentication:** Verify your basic auth credentials are correct
- **Sheet Access:** Ensure Google Sheets API has proper permissions
- **Image Generation Fails:** Check Ideogram API key and quotas

## **Need Help?:**

**For technical support or questions:**  
**Email:** [info@incrementors.com](mailto:info@incrementors.com)  
**Contact Form:** [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
