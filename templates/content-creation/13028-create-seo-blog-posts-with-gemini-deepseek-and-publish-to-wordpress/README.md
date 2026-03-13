# 🎬 Create SEO blog posts with Gemini, DeepSeek and publish to WordPress

> ⚡ **312 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

An intelligent n8n workflow that automates your entire blog content pipeline—from keyword research to WordPress publishing. Using Google Gemini, DeepSeek, and Perplexity, this workflow generates SEO-optimized blog posts and publishes them automatically while tracking everything in Google Sheets.

---

## What this workflow does

This automation handles your complete blog creation process:

- **Scheduled content research:** Fetches approved topics from Google Sheets and conducts deep SEO research using Perplexity
- **AI-powered writing:** Uses DeepSeek for competitor analysis and Google Gemini to write 800-1000 word SEO-optimized articles with FAQs
- **Automated publishing:** Publishes directly to WordPress via REST API and updates tracking in Google Sheets
- **Smart scheduling:** Runs daily at 7 AM, respects weekly frequency settings, and processes multiple clients in batches

---

## Setup requirements

**Tools you'll need:**
- Active n8n instance (self-hosted or n8n Cloud)
- Google Sheets with OAuth access
- WordPress site with REST API enabled
- API keys: Google Gemini, DeepSeek, Perplexity (optional)

**Estimated setup time:** 20-25 minutes

---

## Step-by-step setup

### 1. Prepare your Google Sheets

Create two sheets:

**Client projects sheet:**
```
Columns: Client ID | Website URL | Blog API | GMB Name | Weekly Frequency | On Page Sheet
Example: CLIENT001 | https://example.com | xxxx xxxx xxxx | Example Co | Mon,Wed,Fri | Sheet URL
```

**Content topics sheet** (one per client, named "Content Requirement & Posting"):
```
Columns: S.No. | Focus Keyword | Content Topic | Internal Linking URLs | Words | Topic Approval | Content Approval | Publish URLs | Weekly Frequency
Example: 1 | best investment tips | Top 10 Investment Tips | https://example.com/page | 1000 | Approved | Approved | (empty) | Mon,Wed
```

### 2. Connect Google Sheets

1. In n8n: **Credentials** → **Add credential** → **Google Sheets OAuth2 API**
2. Complete OAuth authentication
3. Open "Load Active Client Projects" node → Select your client sheet URL and credential
4. Open "Get Approved Blog Topics from Sheet" node → Select credential (document URL is dynamic)

### 3. Add AI API credentials

**Google Gemini:**
- Get API key: https://makersuite.google.com/app/apikey
- Add credential in n8n: **Google PaLM API**
- Select in "Gemini - Content Writing Model" node

**DeepSeek:**
- Get API key: https://platform.deepseek.com/
- Add credential in n8n: **DeepSeek API**
- Select in "DeepSeek - Research Model" node

**Perplexity (optional):**
- Get API key: https://www.perplexity.ai/settings/api
- Add credential in n8n: **Perplexity API**
- Select in "Perplexity - Web Search Tool" node

### 4. Set up WordPress

1. WordPress admin → **Users** → **Profile** → **Application Passwords**
2. Create new application password (format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
3. Add to your Google Sheet:
   - **Blog API column:** Paste application password
   - **Website URL column:** Enter full URL (e.g., `https://example.com`)

### 5. Configure schedule

1. Open "Daily Blog Publishing Schedule" node
2. Set time (recommended: 7:00 AM)
3. Choose timezone
4. Save settings

### 6. Test and activate

1. Add one test row in your sheets with today's day in Weekly Frequency
2. Click "Daily Blog Publishing Schedule" → **Execute node**
3. Verify: Blog published in WordPress, URL updated in Google Sheet
4. Toggle workflow **Active** at the top

---

## How it works

**1. Schedule & filtering (7 AM daily)**
- Loads client projects from Google Sheets
- Filters clients by Weekly Frequency (e.g., only those publishing today)

**2. Content fetching**
- Loops through each client
- Fetches approved topics (Topic Approval = "Approved", Publish URLs = empty)
- Selects first pending topic

**3. AI content creation**
- **Research phase:** DeepSeek + Perplexity analyze competitors, search intent, content gaps, LSI keywords
- **Writing phase:** Google Gemini writes 800-1000 word article with FAQs in conversational English

**4. Publishing**
- Extracts title and body content
- Publishes to WordPress via REST API
- Updates Google Sheet with publish URL
- Continues to next topic/client

---

## Key features

✅ **Automated research:** Deep competitor analysis and SEO insights with Perplexity  
✅ **Dual AI models:** DeepSeek for research, Gemini for writing  
✅ **SEO optimized:** Natural keyword integration, LSI keywords, FAQs  
✅ **Batch processing:** Handles multiple clients and topics in one run  
✅ **Smart scheduling:** Publishes only on specified weekdays  
✅ **Complete tracking:** End-to-end visibility in Google Sheets  
✅ **WordPress ready:** Direct publishing with proper HTML formatting

---

## Troubleshooting

**Google Sheets not connecting:**
- Re-authenticate OAuth credentials
- Verify sheet URLs and column names match exactly (case-sensitive)
- Check sharing permissions on sheets

**AI API errors:**
- Verify API keys are active and have credits
- Check rate limits on API dashboards
- Reduce token usage if hitting limits

**WordPress publishing fails:**
- Test REST API: Visit `https://yoursite.com/wp-json/wp/v2/posts`
- Verify application password is correct (with spaces)
- Ensure user has Author/Editor role
- Check Website URL includes `https://`

**No topics being processed:**
- Verify Topic Approval = "Approved" and Content Approval = "Approved"
- Ensure Publish URLs column is empty
- Check today's day matches Weekly Frequency setting
- Confirm sheet name is exactly "Content Requirement & Posting"

---

## Use cases

**Marketing agencies:** Manage 10+ client blogs, scale without hiring writers  
**SEO teams:** Execute keyword strategies at scale with consistent quality  
**Solo bloggers:** Save 5-10 hours/week, maintain regular publishing schedule  
**Content teams:** Run company blog on autopilot with oversight and tracking  
**Publishers:** Operate multiple niche blogs, reduce costs by 70-80%

---

## Expected results

- **Time savings:** 5-10 hours per week per client
- **Output:** 10-20 SEO-optimized posts per week
- **SEO impact:** Improved rankings within 2-3 months
- **Cost efficiency:** 70-80% reduction vs. hiring writers
- **Reliability:** Never miss a publishing deadline

---

## Workflow Customization & Next Steps

This workflow (Part 1) focuses on content research and writing. To complete the full automation, you will need Part 2, which you will get in the next post. Please ensure you set it up as well, as it manages WordPress publishing along with featured images.

---

## Resources

- [n8n documentation](https://docs.n8n.io/)
- [Google Gemini API](https://ai.google.dev/docs)
- [DeepSeek API docs](https://platform.deepseek.com/api-docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)

---

## Support

**Need help or custom development?**

📧 Email: [info@isawow.com ](info@isawow.com ) 
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Schedule Trigger, AI Agent, Google Gemini Chat Model, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
