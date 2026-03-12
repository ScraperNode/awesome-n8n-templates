# 🎣 Find LinkedIn professionals with Google Search and Airtable

> ⚡ **1,260 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Find LinkedIn Professionals with Google Search and Airtable

## Who is this for?

This workflow is perfect for **sales professionals**, **recruiters**, **business development teams**, and **marketers** who need to build targeted prospect lists from LinkedIn. Whether you're looking for specific job titles, industry professionals, or experts in particular locations, this template automates the tedious process of manual LinkedIn searching.

[**Follow me for more**](https://www.linkedin.com/in/javier-hitavb/)

## What problem is this workflow solving?

Finding qualified prospects on LinkedIn manually is time-consuming and inefficient. Traditional methods involve:
- Manually searching LinkedIn with limited search capabilities
- Copy-pasting profile information one by one
- Struggling with LinkedIn's search limitations and restrictions
- Difficulty organizing and tracking prospect data
- No systematic way to avoid duplicate contacts

This workflow solves these challenges by leveraging Google's powerful search capabilities to find LinkedIn profiles at scale, automatically extracting key information, and organizing everything in a structured database.

## What this workflow does

The workflow performs intelligent LinkedIn prospect discovery through these key steps:

1. **Keyword-Based Search**: Uses Google Custom Search API to find LinkedIn profiles matching your specific criteria (job titles, industries, locations)
2. **Smart Data Extraction**: Automatically parses profile titles, descriptions, URLs, and search snippets from Google results
3. **Structured Storage**: Saves all prospect data to Airtable with proper field mapping and automatic deduplication
4. **Pagination Handling**: Automatically processes multiple pages of search results to maximize prospect discovery
5. **Rate Limiting**: Includes built-in delays to respect API limits and ensure reliable operation

Key features:
- **Deduplication**: Prevents storing duplicate LinkedIn profiles
- **Batch Processing**: Handles large prospect lists efficiently
- **Customizable Search**: Easily modify keywords to target different professional segments
- **Clean Data Output**: Structured data ready for outreach campaigns

## Setup

### Prerequisites
You'll need accounts with the following services:
- **Google Cloud Console** (for Custom Search API)
- **Airtable** (free tier works)
- **n8n** (cloud or self-hosted)

### Step 1: Google Custom Search Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Custom Search API**
4. Create credentials (API Key)
5. Set up a Custom Search Engine at [Google CSE](https://cse.google.com/)
6. Configure it to search the entire web
7. Copy your **Search Engine ID** (cx parameter)

	*Bonus*: **[Youtube Set-up Guide](https://www.youtube.com/watch?v=oFH5RqqjOWk&t=228s)**

### Step 2: Airtable Base Setup

Create a new Airtable base with a table named **"LinkedIn Prospects"** containing these fields:

```
- Title (Single line text) - LinkedIn profile headline
- linkedin_url (URL) - Direct link to LinkedIn profile  
- Search (Single line text) - Original search terms used
- Description (Long text) - Profile description/summary
- Snippet (Long text) - Google search result snippet
```

### Step 3: n8n Credentials Configuration

Set up these credentials in n8n:

**Google Custom Search API:**
- Type: HTTP Query Auth
- Name: `Google Query Auth`
- Query Parameter Name: `key`
- Value: Your Google API key

**Airtable:**
- Type: Airtable Personal Access Token
- Token: Your Airtable personal access token
- Configure the base and table IDs in the Airtable node

### Step 4: Workflow Configuration

1. Import this workflow template
2. Update the **"⚙️ CUSTOMIZE YOUR SEARCH KEYWORDS HERE"** node with your target keywords
3. Configure the Airtable node with your base and table information
4. Test the workflow with a small keyword set first

## How to customize this workflow to your needs

### Targeting Different Industries

Modify the search keywords in the yellow configuration node:

```javascript
// For technology professionals
"Software Engineer React" 
"Product Manager SaaS"
"Data Scientist Machine Learning"

// For sales professionals  
"Account Executive Enterprise"
"Sales Director B2B"
"Business Development Manager"

// For marketing professionals
"Digital Marketing Manager"
"Content Marketing Specialist" 
"Growth Marketing Lead"
```

### Geographic Targeting

Add location keywords to narrow your search:

```javascript
"Marketing Manager London"
"Sales Director New York" 
"Software Engineer Berlin"
```

### Company Size Targeting

Include company type indicators:

```javascript
"CFO Startup"
"VP Engineering Fortune 500"
"Marketing Director SMB"
```

### Adjusting Search Volume

Modify the `Maxresults` parameter in the **"Configure Search Settings"** node:
- Set to `10` for quick tests
- Set to `50-100` for comprehensive searches  
- Maximum recommended: `100` per search to respect API limits

### Industry-Specific Customization

**For Recruiters:**
- Target specific job titles and seniority levels
- Add skills-based keywords ("Python Developer", "React Specialist")
- Include experience indicators ("Senior", "Lead", "Principal")

**For Sales Teams:**
- Focus on decision-maker titles ("Director", "VP", "C-Level")
- Target specific company sizes or industries
- Include location-based searches for territory management

**For Marketers:**
- Search for industry influencers and thought leaders
- Target specific professional communities
- Look for content creators and industry experts

### Advanced Filtering

Add conditional logic after the search results to filter prospects based on:
- Profile description keywords
- Title patterns
- Company information (when available in snippets)

### Integration Extensions

Connect additional tools to enhance your prospect research:
- **Email finder tools** (Hunter.io, Apollo) for contact discovery
- **CRM integration** (HubSpot, Salesforce) for automatic lead creation  
- **Enrichment services** (Clearbit, ZoomInfo) for additional prospect data
- **Slack/Teams notifications** for real-time prospect alerts

### Data Quality Improvements

Enhance the workflow with additional processing:
- **Duplicate detection** across multiple search terms
- **Profile validation** to ensure active LinkedIn profiles
- **Keyword scoring** to rank prospect relevance
- **Export formatting** for specific CRM requirements

This template provides a solid foundation that can be adapted for virtually any B2B prospect research need, making it an essential tool for modern sales and marketing teams.

## 🔗 Nodes Used

Airtable, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
