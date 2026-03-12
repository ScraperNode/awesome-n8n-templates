# 📊 Monitor brand mentions with GPT-5 Nano, Brave Search, Gmail and Google Sheets

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Description:

This advanced workflow automates brand monitoring and media coverage tracking for musicians, bands, and music labels. The system uses multiple search queries (dorky) to discover mentions across the web, verifies relevance using AI, and delivers clean, actionable reports via email.

**Key Features:**

* **Multi-query search strategy**: X different search patterns per keyword for comprehensive coverage
* **AI relevance verification**: GPT-powered filtering eliminates false positives
* **Smart domain filtering**: Automatically excludes social media and streaming platforms
* **Duplicate detection**: Cross-query deduplication ensures clean results
* **Historical tracking**: Google Sheets logging with automatic duplicate prevention
* **Customizable time windows**: Search within last 24 hours, week, or custom timeframe
* **Email digest**: Beautiful HTML reports with all new mentions

## Perfect For:
* Anyone who wants to follow news about own brand. 
### But I did if for:

* Independent musicians and bands
* Record labels and music managers
* PR agencies in music industry
* Artist management companies
* Music publicists and booking agents

## Use Cases:

* Album/single release coverage tracking
* Festival/concert announcement monitoring
* Press coverage aggregation
* Playlist feature discovery
* Interview and review tracking
* Competitive brand monitoring

---

## Required Setup:

### 1. Credentials & APIs:

* **Brave Search API** (free tier: 2000 queries/month)
* **OpenAI API** or compatible LLM (for AI verification)
* **Google Sheets API** (for historical logging [TEMPLATE](https://docs.google.com/spreadsheets/d/1feofDtkQRP1SHtOMdqFUqLAs791_h78tPUrUOdRz9RA/edit?usp=drive_link))
* **Gmail OAuth2** (for email notifications)

### 2. Configuration:

* **Keyword**: Your brand name to monitor
* **Keyword description**: Additional description for context
* **Banned Domains**: List of domains to exclude (Spotify, socials, etc.)
* **Time Range**: How far back to search (default: past day)
* **Email Recipient**: Where to send digest reports
 
## Setup Instructions:

### Step 1: API Setup

1. **Brave Search API**
   - Go to: https://brave.com/search/api/
   - Sign up for free tier (2000 queries/month)
   - Copy API key

2. **OpenAI API**
   - Go to: https://platform.openai.com/
   - Create API key
   - Ensure billing is set up

3. **Google Sheets API**
   - Create new Google Sheet for logging
   - Enable Google Sheets API in n8n
   - Authorize OAuth2

4. **Gmail API**
   - Enable Gmail in n8n
   - Authorize OAuth2 with draft creation permissions

### Step 2: Configure Workflow

1. **Import Workflow**
   - Import JSON into n8n
   - Connect all credentials

2. **Set Config Node**
   - Edit `keyword` to your artist/band name
   - Update `bannedDomains` if needed
   - Adjust `timeRange` (default: `pd` for past day)

3. **Brave Search Node**
   - Add your Brave API key
   - Verify endpoint: `https://api.search.brave.com/res/v1/web/search`

4. **AI Verification Node**
   - Connect OpenAI credentials
   - Verify model: `gpt-5-nano`
   - Check JSON mode is enabled

5. **Google Sheets Node**
   - Select your tracking spreadsheet
   - Ensure columns match: URL, Title, Source, Domain, Published, Snippet, Found
   - [TEMPLATE](https://docs.google.com/spreadsheets/d/1feofDtkQRP1SHtOMdqFUqLAs791_h78tPUrUOdRz9RA/edit?usp=drive_link)

6. **Send Email Node**
   - Set recipient email address
   - Test draft creation first

## Cost Breakdown:

### API Costs (Monthly Estimates)

**Brave Search API**
- Free tier: 2000 searches/month
- 6 dorky × 4 runs/day = 24 searches/day = 720/month
- **Cost: $0** (within free tier)

**OpenAI API (gpt-4o-mini)**
- Average 60 articles/day need verification
- ~100 tokens per verification
- 60 × 30 = 1,800 verifications/month
- **Cost: ~$0.27/month**

**Google Sheets API**
- Free (within Google quotas)
- **Cost: $0**

**Gmail API**
- Free (within Google quotas)
- **Cost: $0**

**Total Monthly Cost: ~$0.27** (essentially free)

## Template Author:
Questions or need help with setup?
📧 Email:[xciklv@gmail.com](mailto:xciklv@gmail.com)
💼 LinkedIn:[https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
