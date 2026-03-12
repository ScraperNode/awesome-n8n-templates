# 🎣 Export LinkedIn search results to Google Sheets using ConnectSafely.ai API

> ⚡ **89 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who's it for

This workflow is built for sales professionals, recruiters, founders, and growth marketers who need to build targeted prospect lists from LinkedIn without risking their accounts. Perfect for anyone who wants to find decision-makers, build lead lists, or research target audiences at scale.

If you're running outbound campaigns, building ABM lists, sourcing candidates, or doing competitive research, this automation handles LinkedIn searches and exports results directly to your Google Sheet—no browser cookies, no session hijacking, no ban risk.

## How it works

The workflow automates LinkedIn people searches by leveraging ConnectSafely.ai's compliant API, then exports structured results to Google Sheets or JSON files.

**The process flow:**

1. Define your search parameters (keywords, location, job title, result limit)
2. Execute the search via ConnectSafely.ai API
3. Process and normalize the response data
4. Export to Google Sheets for CRM import or further automation
5. Optionally save as JSON file for data backup or processing

No LinkedIn cookies required. No browser automation. Platform-compliant searches that won't get your account restricted.

**Watch the complete step-by-step implementation guide:**

[LinkedIn Search Export Automation Tutorial](https://www.youtube.com/watch?v=N4kZ3YiLh2Q)

---

## Setup steps

### Step 1: Get Your ConnectSafely.ai API Credentials

**Obtain API Key:**
1. Log into [ConnectSafely.ai Dashboard](https://connectsafely.ai/dashboard)
2. Navigate to **Settings → API Keys**
3. Generate a new API key
4. Copy your API key (you'll need this in the next step)

**Add Bearer Auth Credential in n8n:**
1. Go to **Credentials** in n8n
2. Click **Add Credential → HTTP Bearer Auth**
3. Paste your ConnectSafely.ai API key
4. Save the credential

---

### Step 2: Configure Search Parameters

Open the **Set Search Parameters** node and customize your search:

| Parameter | Description | Example |
|-----------|-------------|---------|
| keywords | Search terms for profiles | `CEO SaaS`, `Marketing Director` |
| location | Geographic filter | `United States`, `San Francisco Bay Area` |
| title | Job title filter | `Head of Growth`, `VP Sales` |
| limit | Maximum results to return | `100` (max varies by plan) |

**Pro Tips:**
- Use specific keywords for better targeting
- Combine title + keywords for precision (e.g., keywords: "B2B" + title: "VP Sales")
- Start with smaller limits (25-50) for testing

---

### Step 3: Configure Google Sheets Integration

**3.1 Connect Google Sheets Account**
1. Go to **Credentials → Add Credential → Google Sheets OAuth2**
2. Follow the OAuth flow to connect your Google account
3. Grant access to Google Sheets

**3.2 Prepare Your Google Sheet**

Create a new Google Sheet with the following columns (the workflow will auto-populate these):

| Column Name | Description |
|-------------|-------------|
| profileUrl | LinkedIn profile URL |
| fullName | Contact's full name |
| firstName | First name |
| lastName | Last name |
| headline | LinkedIn headline/tagline |
| currentPosition | Current job title |
| company | Company name (extracted from headline) |
| location | Geographic location |
| connectionDegree | 1st, 2nd, or 3rd degree connection |
| isPremium | LinkedIn Premium member (true/false) |
| isOpenToWork | Open to work badge (true/false) |
| profilePicture | Profile image URL |
| extractedAt | Timestamp of extraction |

**3.3 Configure the Export Node**
1. Open the **Export to Google Sheets** node
2. Select your Google Sheets credential
3. Enter your Document ID (from the sheet URL)
4. Select the Sheet Name
5. The column mapping is pre-configured for auto-mapping

---

### Step 4: Test the Workflow

1. Click the **Manual Trigger** node
2. Click **Test Workflow**
3. Verify:
   - Search executes successfully
   - Results appear in the Format Results output
   - Data exports to your Google Sheet
   - JSON file is generated (optional)

---

## Customization

### Search Parameter Combinations

**Sales Prospecting:**
```
keywords: "B2B SaaS"
location: "United States"
title: "VP of Sales"
limit: 100
```

**Recruiting:**
```
keywords: "Python Machine Learning"
location: "San Francisco Bay Area"
title: "Senior Engineer"
limit: 50
```

**Founder Networking:**
```
keywords: "Seed Series A"
location: "New York City"
title: "Founder CEO"
limit: 100
```

### Extending the Workflow

**Add to CRM:** Connect the Format Results output to HubSpot, Salesforce, or Pipedrive nodes

**Enrich Data:** Add a loop to fetch full profile details for each result using the `/linkedin/profile` endpoint

**Chain with Outreach:** Connect to the [LinkedIn Connection Request Workflow](https://connectsafely.ai/templates) to automatically send personalized invites to your search results

**Schedule Searches:** Replace Manual Trigger with a Schedule Trigger to run daily/weekly searches

---

## Output Data Format

Each result includes:

```json
{
  "profileUrl": "https://www.linkedin.com/in/johndoe",
  "profileId": "johndoe",
  "profileUrn": "urn:li:member:123456789",
  "fullName": "John Doe",
  "firstName": "John",
  "lastName": "Doe",
  "headline": "VP of Sales at TechCorp | B2B SaaS",
  "currentPosition": "VP of Sales",
  "company": "TechCorp",
  "location": "San Francisco, California",
  "connectionDegree": "2nd",
  "isPremium": true,
  "isOpenToWork": false,
  "profilePicture": "https://media.licdn.com/...",
  "extractedAt": "2024-01-15T10:30:00.000Z"
}
```

---

## Use Cases

**Sales Prospecting:** Build targeted lead lists of decision-makers at companies matching your ICP

**Recruiting & Talent Sourcing:** Find passive candidates with specific skills and experience levels

**Market Research:** Analyze competitor employee profiles and organizational structures

**Event Planning:** Build invite lists for webinars, conferences, or virtual events

**Partnership Development:** Identify potential partners and integration opportunities

**Investor Research:** Find founders and executives at companies in specific stages/verticals

---

## Troubleshooting

### Common Issues & Solutions

**Issue:** "No results found" error
- **Solution:** Broaden your search parameters; try removing one filter at a time

**Issue:** Empty company field in results
- **Solution:** Company is extracted from headline; some profiles may not include company in their headline format

**Issue:** API authentication errors
- **Solution:** Verify your ConnectSafely.ai API key is valid and has proper permissions; check Bearer Auth credential format

**Issue:** Google Sheets not updating
- **Solution:** Confirm OAuth credentials are valid; check that the sheet has write permissions

**Issue:** Fewer results than expected
- **Solution:** LinkedIn limits search results; try more specific parameters or upgrade your ConnectSafely.ai plan

**Issue:** Rate limit errors
- **Solution:** Add delay between multiple searches; check your API plan limits

---

## Documentation & Resources

### Official Documentation
- **ConnectSafely.ai Docs:** [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **API Reference:** Available in ConnectSafely.ai dashboard
- **n8n HTTP Request Node:** [https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest](https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest)

### Support Channels
- **Email Support:** support@connectsafely.ai
- **Documentation:** [https://connectsafely.ai/docs](https://connectsafely.ai/docs)
- **Custom Workflows:** Contact us for custom automation

---

## Connect With Us

Stay updated with the latest automation tips, LinkedIn strategies, and platform updates:

- **LinkedIn:** [linkedin.com/company/connectsafelyai](https://linkedin.com/company/connectsafelyai)
- **YouTube:** [youtube.com/@ConnectSafelyAI-v2x](https://youtube.com/@ConnectSafelyAI-v2x)
- **Instagram:** [instagram.com/connectsafely.ai](https://instagram.com/connectsafely.ai)
- **Facebook:** [facebook.com/connectsafelyai](https://www.facebook.com/people/ConnectSafelyAI/61582550884724/)
- **X (Twitter):** [x.com/AiConnectsafely](https://x.com/AiConnectsafely)
- **Bluesky:** [connectsafelyai.bsky.social](https://connectsafelyai.bsky.social)
- **Mastodon:** [mastodon.social/@connectsafely](https://mastodon.social/@connectsafely)

---

## Need Custom Workflows?

Looking to build sophisticated LinkedIn automation workflows tailored to your business needs?

**Contact our team** for custom automation development, strategy consulting, and enterprise solutions.

We specialize in:
- Multi-channel prospecting workflows
- AI-powered lead scoring and qualification
- CRM integration and data synchronization
- Custom search and enrichment pipelines
- Bulk outreach automation with personalization

## 🔗 Nodes Used

Google Sheets, HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
