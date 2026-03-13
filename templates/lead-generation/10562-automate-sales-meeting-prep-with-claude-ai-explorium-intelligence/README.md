# 🎣 Automate sales meeting prep with Claude AI & Explorium Intelligence

> ⚡ **138 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Research Agent - Automated Sales Meeting Intelligence

This n8n workflow automatically prepares comprehensive sales research briefs every morning for your upcoming meetings by analyzing both the companies you're meeting with and the individual attendees. The workflow connects to your calendar, identifies external meetings, enriches companies and contacts with deep intelligence from Explorium, and delivers personalized research reports—giving your sales team everything they need for informed, confident conversations.


## DEMO

[Template Demo](https://youtu.be/f48VlsuK7SQ)

## Credentials Required

To use this workflow, set up the following credentials in your n8n environment:

### Google Calendar (or Outlook)
- **Type:** OAuth2
- **Used for:** Reading daily meeting schedules and identifying external attendees
- Alternative: Microsoft Outlook Calendar
- Get credentials at [Google Cloud Console](https://console.cloud.google.com/)

### Explorium API
- **Type:** Generic Header Auth
- **Header:** `Authorization`
- **Value:** `Bearer YOUR_API_KEY`
- **Used for:** Business/prospect matching, firmographic enrichment, professional profiles, LinkedIn posts, website changes, competitive intelligence
- Get your API key at [Explorium Dashboard](https://app.explorium.ai/)

### Explorium MCP
- **Type:** HTTP Header Auth
- **Used for:** Real-time company intelligence and supplemental research for AI agents
- Connect to: `https://mcp.explorium.ai/mcp`

### Anthropic API
- **Type:** API Key
- **Used for:** AI-powered company and attendee research analysis
- Get your API key at [Anthropic Console](https://console.anthropic.com/)

### Slack (or preferred output)
- **Type:** OAuth2
- **Used for:** Delivering research briefs
- Alternative options: Google Docs, Email, Microsoft Teams, CRM updates

Go to **Settings → Credentials**, create these credentials, and assign them in the respective nodes before running the workflow.

---

## Workflow Overview

### Node 1: Schedule Trigger
Automatically runs the workflow on a recurring schedule.

- **Type:** Schedule Trigger
- **Default:** Every morning before business hours
- **Customizable:** Set to any interval (hourly, daily, weekly) or specific times

**Alternative Trigger Options:**
- **Manual Trigger:** On-demand execution
- **Webhook:** Triggered by calendar events or CRM updates

### Node 2: Get many events
Retrieves meetings from your connected calendar.

- **Calendar Source:** Google Calendar (or Outlook)
- **Authentication:** OAuth2
- **Time Range:** Current day + 18 hours (configurable via `timeMax`)
- **Returns:** All calendar events with attendee information, meeting titles, times, and descriptions

### Node 3: Filter for External Meetings
Identifies meetings with external participants and filters out internal-only meetings.

**Filtering Logic:**
- Extracts attendee email domains
- Excludes your company domain (e.g., 'explorium.ai')
- Excludes calendar system addresses (e.g., 'resource.calendar.google.com')
- Only passes events with at least one external attendee

**Important Setup Note:** Replace `'explorium.ai'` in the code node with your company domain to properly filter internal meetings.

**Output:**
- Events with external participants only
- `external_attendees`: Array of external contact emails
- `company_domains`: Unique list of external company domains per meeting
- `external_attendee_count`: Number of external participants

---

## Company Research Pipeline

### Node 4: Loop Over Items
Iterates through each meeting with external attendees for company research.

### Node 5: Extract External Company Domains
Creates a deduplicated list of all external company domains from the current meeting.

### Node 6: Explorium API: Match Business
Matches company domains to Explorium's business entity database.

- **Method:** POST
- **Endpoint:** `/v1/businesses/match`
- **Authentication:** Header Auth (Bearer token)

**Returns:**
- `business_id`: Unique Explorium identifier
- `matched_businesses`: Array of matches with confidence scores
- Company name and basic info

### Node 7: If
Validates that a business match was found before proceeding to enrichment.

- **Condition:** `business_id` is not empty
- **If True:** Proceed to parallel enrichment nodes
- **If False:** Skip to next company in loop

### Nodes 8-9: Parallel Company Enrichment

**Node 8: Explorium API: Business Enrich**
- **Endpoints:** `/v1/businesses/firmographics/enrich`, `/v1/businesses/technographics/enrich`
- **Enrichment Types:** firmographics, technographics
- **Returns:** Company name, description, website, industry, employees, revenue, headquarters location, ticker symbol, LinkedIn profile, logo, full tech stack, nested tech stack by category, BI & analytics tools, sales tools, marketing tools

**Node 9: Explorium API: Fetch Business Events**
- **Endpoint:** `/v1/businesses/events/fetch`
- **Event Types:** New funding rounds, new investments, mergers & acquisitions, new products, new partnerships
- **Date Range:** September 1, 2025 - November 4, 2025
- **Returns:** Recent business milestones and financial events

### Node 10: Merge
Combines enrichment responses and events data into a single data object.

### Node 11: Cleans Merge Data Output
Transforms merged enrichment data into a structured format for AI analysis.

### Node 12: Company Research Agent
AI agent (Claude Sonnet 4) that analyzes company data to generate actionable sales intelligence.

**Input:** Structured company profile with all enrichment data

**Analysis Focus:**
- Company overview and business context
- Recent website changes and strategic shifts
- Tech stack and product focus areas
- Potential pain points and challenges
- How Explorium's capabilities align with their needs
- Timely conversation starters based on recent activity

**Connected to Explorium MCP:** Can pull additional real-time intelligence if needed to create more detailed analysis

### Node 13: Create Company Research Output
Formats the AI analysis into a readable, shareable research brief.

---

## Attendee Research Pipeline

### Node 14: Create List of All External Attendees
Compiles all unique external attendee emails across all meetings.

### Node 15: Loop Over Items2
Iterates through each external attendee for individual enrichment.

### Node 16: Extract External Company Domains1
Extracts the company domain from each attendee's email.

### Node 17: Explorium API: Match Business1
Matches the attendee's company domain to get business_id for prospect matching.

- **Method:** POST
- **Endpoint:** `/v1/businesses/match`
- **Purpose:** Link attendee to their company

### Node 18: Explorium API: Match Prospect
Matches attendee email to Explorium's professional profile database.

- **Method:** POST
- **Endpoint:** `/v1/prospects/match`
- **Authentication:** Header Auth (Bearer token)

**Returns:**
- `prospect_id`: Unique professional profile identifier

### Node 19: If1
Validates that a prospect match was found.

- **Condition:** `prospect_id` is not empty
- **If True:** Proceed to prospect enrichment
- **If False:** Skip to next attendee

### Node 20: Explorium API: Prospect Enrich
Enriches matched prospect using multiple Explorium endpoints.

- **Enrichment Types:** contacts, profiles, linkedin_posts
- **Endpoints:** `/v1/prospects/contacts/enrich`, `/v1/prospects/profiles/enrich`, `/v1/prospects/linkedin_posts/enrich`

**Returns:**
- **Contacts:** Professional email, email status, all emails, mobile phone, all phone numbers
- **Profiles:** Full professional history, current role, skills, education, company information, experience timeline, job titles and seniority
- **LinkedIn Posts:** Recent LinkedIn activity, post content, engagement metrics, professional interests and thought leadership

### Node 21: Cleans Enrichment Outputs
Structures prospect data for AI analysis.

### Node 22: Attendee Research Agent
AI agent (Claude Sonnet 4) that analyzes prospect data to generate personalized conversation intelligence.

**Input:** Structured professional profile with activity data

**Analysis Focus:**
- Career background and progression
- Current role and responsibilities
- Recent LinkedIn activity themes and interests
- Potential pain points in their role
- Relevant Explorium capabilities for their needs
- Personal connection points (education, interests, previous companies)
- Opening conversation starters

**Connected to Explorium MCP:** Can gather additional company or market context if needed

### Node 23: Create Attendee Research Output
Formats attendee analysis into a readable brief with clear sections.

### Node 24: Merge2
Combines company research output with attendee information for final assembly.

### Node 25: Loop Over Items1
Manages the final loop that combines company and attendee research for output.

### Node 26: Send a message (Slack)
Delivers combined research briefs to specified Slack channel or user.

**Alternative Output Options:**
- **Google Docs:** Create formatted document per meeting
- **Email:** Send to meeting organizer or sales rep
- **Microsoft Teams:** Post to channels or DMs
- **CRM:** Update opportunity/account records with research
- **PDF:** Generate downloadable research reports

---

## Workflow Flow Summary

1. **Schedule:** Workflow runs automatically every morning
2. **Fetch Calendar:** Pull today's meetings from Google Calendar/Outlook
3. **Filter:** Identify meetings with external attendees only
4. **Extract Companies:** Get unique company domains from external attendees
5. **Extract Attendees:** Compile list of all external contacts

**Company Research Path:**
6. **Match Companies:** Identify businesses in Explorium database
7. **Enrich (Parallel):** Pull firmographics, website changes, competitive landscape, events, and challenges
8. **Merge & Clean:** Combine and structure company data
9. **AI Analysis:** Generate company research brief with insights and talking points
10. **Format:** Create readable company research output

**Attendee Research Path:**
11. **Match Prospects:** Link attendees to professional profiles
12. **Enrich (Parallel):** Pull profiles, job changes, and LinkedIn activity
13. **Merge & Clean:** Combine and structure prospect data
14. **AI Analysis:** Generate attendee research with background and approach
15. **Format:** Create readable attendee research output

**Delivery:**
16. **Combine:** Merge company and attendee research for each meeting
17. **Send:** Deliver complete research briefs to Slack/preferred platform

This workflow eliminates manual pre-meeting research by automatically preparing comprehensive intelligence on both companies and individuals—giving sales teams the context and confidence they need for every conversation.

---

## Customization Options

### Calendar Integration
Works with multiple calendar platforms:
- **Google Calendar:** Full OAuth2 integration
- **Microsoft Outlook:** Calendar API support
- **CalDAV:** Generic calendar protocol support

### Trigger Flexibility
Adjust when research runs:
- **Morning Routine:** Default daily at 7 AM
- **On-Demand:** Manual trigger for specific meetings
- **Continuous:** Hourly checks for new meetings

### Enrichment Depth
Add or remove enrichment endpoints:
- **Company:** Technographics, funding history, news mentions, hiring signals
- **Prospects:** Contact information, social profiles, company changes
- **Customizable:** Select only needed data to optimize speed and costs

### Research Scope
Configure what gets researched:
- **All External Meetings:** Default behavior
- **Filtered by Keywords:** Only meetings with specific titles
- **By Attendee Count:** Only meetings with X+ external attendees
- **By Calendar:** Specific calendars only

### Output Destinations
Deliver research to your preferred platform:
- **Messaging:** Slack, Microsoft Teams, Discord
- **Documents:** Google Docs, Notion, Confluence
- **Email:** Gmail, Outlook, custom SMTP
- **CRM:** Salesforce, HubSpot (update account notes)
- **Project Management:** Asana, Monday.com, ClickUp

### AI Model Options
Swap AI providers based on needs:
- Default: Anthropic Claude (Sonnet 4)
- Alternatives: OpenAI GPT-4, Google Gemini

---

## Setup Notes

1. **Domain Configuration:** Replace `'explorium.ai'` in the Filter for External Meetings code node with your company domain
2. **Calendar Connection:** Ensure OAuth2 credentials have calendar read permissions
3. **Explorium Credentials:** Both API key and MCP credentials must be configured
4. **Output Timing:** Schedule trigger should run with enough lead time before first meetings
5. **Rate Limits:** Adjust loop batch sizes if hitting API rate limits during enrichment
6. **Slack Configuration:** Select destination channel or user for research delivery
7. **Data Privacy:** Research is based on publicly available professional information and company data

This workflow acts as your automated sales researcher, preparing detailed intelligence reports every morning so your team walks into every meeting informed, prepared, and ready to have meaningful conversations that drive business forward.

## 🔗 Nodes Used

Slack, Google Calendar, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
