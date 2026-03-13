# 🎣 Capture LinkedIn leads and sync them with Google Sheets, HubSpot or Salesforce

> ⚡ **975 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automatically captures LinkedIn leads from multiple sources (new connections, post engagements), enriches the data with AI-powered scoring, eliminates duplicates, syncs to Google Sheets and your CRM (HubSpot or Salesforce), and sends instant notifications to your sales team for high-quality leads. No more manual copy-pasting or lost opportunities—every LinkedIn interaction becomes a tracked, qualified lead ready for follow-up.


## **Benefits**

* **Zero Manual Data Entry:** Eliminates tedious copy-paste work—saves 10+ hours per week for active LinkedIn users
* **Smart Lead Scoring:** AI calculates quality scores (0-100) and assigns temperature labels (Hot/Warm/Cold) based on engagement patterns
* **Multi-Source Capture:** Monitors new connections, post comments, likes, and shares to catch leads from all touchpoints
* **Duplicate Prevention:** Tracks leads for 90 days to avoid database clutter and redundant outreach
* **Instant Sales Alerts:** Notifies team via Slack/Email within seconds for Hot & Warm leads, enabling rapid follow-up
* **CRM Integration:** Syncs directly to HubSpot or Salesforce with custom fields for lead temperature and quality metrics
* **Built-in Analytics:** Tracks cumulative statistics (total leads, temperature distribution) for performance monitoring
* **Always-On Automation:** Runs every 15 minutes 24/7, capturing leads even when you're sleeping or in meetings


## **Useful for Which Industry**

* **B2B SaaS & Tech:** Sales teams prospecting decision-makers and capturing demo requests from LinkedIn content
* **Consulting & Professional Services:** Agencies tracking client inquiries and partnership opportunities from thought leadership posts
* **Recruiting & HR:** Talent acquisition teams building candidate pipelines from LinkedIn engagement
* **Real Estate & Financial Services:** Agents capturing high-intent leads from market updates and educational content
* **Marketing Agencies:** Business development teams converting social engagement into qualified opportunities
* **E-Learning & Coaching:** Course creators and consultants tracking interested prospects from free content
* **Manufacturing & B2B Sales:** Enterprise sales teams monitoring buying committee members engaging with product content

### How it works

1. **Monitor LinkedIn** - Checks every 15 minutes for new connections and post engagements
2. **Extract data** - Pulls profile information, company, position from multiple sources
3. **Score leads** - Calculates quality score (0-100) and assigns temperature (Hot/Warm/Cold)
4. **Prevent duplicates** - Tracks leads for 90 days to avoid duplicate entries
5. **Sync to platforms** - Saves to Google Sheets and your CRM (HubSpot or Salesforce)
6. **Smart notifications** - Alerts sales team via Slack/Email for Hot and Warm leads only

### Setup steps

1. **Connect LinkedIn** - Add OAuth2 credentials to both LinkedIn nodes
2. **Setup Google Sheets** - Create spreadsheet with these columns: leadId, fullName, firstName, lastName, email, phone, company, position, headline, location, profileUrl, leadSource, leadTemperature, qualityScore, engagementType, commentText, dateAdded, status, assignedTo, notes, lastUpdated
3. **Choose CRM** - Enable either HubSpot OR Salesforce nodes (disable the other)
4. **Configure alerts** - Add Slack webhook URL and/or email settings
5. **Test workflow** - Run manually first to verify all connections
6. **Activate** - Turn on for automatic lead capture

### Key features

- **Smart scoring**: Quality score based on engagement level and profile completeness
- **Temperature labels**: Hot (70+), Warm (50-69), Cold (&lt;50) for prioritization
- **No duplicates**: 90-day tracking prevents duplicate entries
- **Multi-CRM support**: Works with HubSpot or Salesforce
- **Analytics built-in**: Tracks total leads and temperature distribution

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, LinkedIn, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
