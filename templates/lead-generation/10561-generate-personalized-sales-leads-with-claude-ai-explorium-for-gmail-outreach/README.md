# 🎣 Generate personalized sales leads with Claude AI & Explorium for Gmail outreach

> ⚡ **279 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Outbound Agent - AI-Powered Lead Generation with Natural Language Prospecting

This n8n workflow transforms natural language queries into targeted B2B prospecting campaigns by combining Explorium's data intelligence with AI-powered research and personalized email generation. Simply describe your ideal customer profile in plain English, and the workflow automatically finds prospects, enriches their data, researches them, and creates personalized email drafts.

## DEMO

[Template Demo](https://youtu.be/7CddMDY8QUM)

## Credentials Required

To use this workflow, set up the following credentials in your n8n environment:

### Anthropic API
- **Type:** API Key
- **Used for:** AI Agent query interpretation, email research, and email writing
- Get your API key at [Anthropic Console](https://console.anthropic.com/)

### Explorium API
- **Type:** Generic Header Auth
- **Header:** `Authorization`
- **Value:** `Bearer YOUR_API_KEY`
- **Used for:** Prospect matching, contact enrichment, professional profiles, and MCP research
- Get your API key at [Explorium Dashboard](https://app.explorium.ai/)

### Explorium MCP
- **Type:** HTTP Header Auth
- **Used for:** Real-time company and prospect intelligence research
- Connect to: `https://mcp.explorium.ai/mcp`

### Gmail
- **Type:** OAuth2
- **Used for:** Creating email drafts
- Alternative options: Outlook, Mailchimp, SendGrid, Lemlist

Go to **Settings → Credentials**, create these credentials, and assign them in the respective nodes before running the workflow.

---

## Workflow Overview

### Node 1: When chat message received
This node creates an interactive chat interface where users can describe their prospecting criteria in natural language.

- **Type:** Chat Trigger
- **Purpose:** Accept natural language queries like "Get 5 marketing leaders at fintech startups who joined in the past year and have valid contact information"
- **Example Prompts:**
  - "Find SaaS executives in New York with 50-200 employees"
  - "Get marketing directors at healthcare companies"
  - "Show me VPs at fintech startups with recent funding"

### Node 2: Chat or Refinement
This code node manages the conversation flow, handling both initial user queries and validation error feedback.

- **Function:** Routes either the original chat input or validation error messages to the AI Agent
- **Dynamic Input:** Combines `chatInput` and `errorInput` fields
- **Purpose:** Creates a feedback loop for validation error correction

### Node 3: AI Agent
The core intelligence node that interprets natural language and generates structured API calls.

**Functionality:**
- Interprets user intent from natural language queries
- Maps concepts to Explorium API filters (job levels, departments, company size, revenue, location, etc.)
- Generates valid JSON requests with precise filter criteria
- Handles off-topic queries with helpful guidance
- Connected to MCP Client for real-time filter specifications

**AI Components:**
- **Anthropic Chat Model:** Claude Sonnet 4 for query interpretation
- **Simple Memory:** Maintains conversation context (100 message window)
- **Output Parser:** Structured JSON output with schema validation
- **MCP Client:** Connected to `https://mcp.explorium.ai/mcp` for Explorium specifications

**System Instructions:**
- Expert in converting natural language to Explorium API filters
- Can revise previous responses based on validation errors
- Strict adherence to allowed filter values and formats
- Default settings: `mode: "full"`, `size: 10000`, `page_size: 100`, `has_email: true`

### Node 4: API Call Validation
This code node validates the AI-generated API request against Explorium's filter specifications.

**Validation Checks:**
- Filter key validity (only allowed filters from approved list)
- Value format correctness (enums, ranges, country codes)
- No duplicate values in arrays
- Proper range structure for experience fields (`total_experience_months`, `current_role_months`)
- Required field presence

**Allowed Filters:**
- `country_code`, `region_country_code`, `company_country_code`, `company_region_country_code`
- `company_size`, `company_revenue`, `company_age`, `number_of_locations`
- `google_category`, `naics_category`, `linkedin_category`, `company_name`
- `city_region_country`, `website_keywords`
- `has_email`, `has_phone_number`
- `job_level`, `job_department`, `job_title`
- `business_id`, `total_experience_months`, `current_role_months`

**Output:**
- `isValid`: Boolean validation status
- `validationErrors`: Array of specific error messages

### Node 5: Is API Call Valid?
Conditional routing node that determines the next step based on validation results.

- **If Valid:** Proceed to Explorium API: Fetch Prospects
- **If Invalid:** Route to Validation Prompter for correction

### Node 6: Validation Prompter
Generates detailed error feedback for the AI Agent when validation fails.
This creates a self-correcting loop where the AI learns from validation errors and regenerates compliant requests by routing back to Node 2 (Chat or Refinement).

### Node 7: Explorium API: Fetch Prospects
Makes the validated API call to Explorium's prospect database.

- **Method:** POST
- **Endpoint:** `/v1/prospects/fetch`
- **Authentication:** Header Auth (Bearer token)
- **Input:** JSON with filters, mode, size, page_size, page
- **Returns:** Array of matched prospects with prospect IDs based on filter criteria

### Node 8: Pull Prospect IDs
Extracts prospect IDs from the fetch response for bulk enrichment.

- **Input:** Full fetch response with prospect data
- **Output:** Array of `prospect_id` values formatted for enrichment API

### Node 9: Explorium API: Contact Enrichment
Single enrichment node that enhances prospect data with both contact and profile information.

- **Method:** POST
- **Endpoint:** `/v1/prospects/enrich`
- **Enrichment Types:** contacts, profiles
- **Authentication:** Header Auth (Bearer token)
- **Input:** Array of prospect IDs from Node 8

**Returns:**
- **Contacts:** Professional emails (current, verified), phone numbers (mobile, work), email validation status, all available email addresses
- **Profiles:** Full professional history, current role details, company information, skills and expertise, education background, experience timeline, job titles and seniority levels

### Node 10: Clean Output Data
Transforms and structures the enriched data for downstream processing.

### Node 11: Loop Over Items
Iterates through each prospect to generate individualized research and emails.

- **Batch Size:** 1 (processes prospects one at a time)
- **Purpose:** Enable personalized research and email generation for each prospect
- **Loop Control:** Processes until all prospects are complete

### Node 12: Research Email
AI-powered research agent that investigates each prospect using Explorium MCP.

**Input Data:**
- Prospect name, job title, company name, company website
- LinkedIn URL, job department, skills

**Research Focus:**
- Company automation tool usage (n8n, Zapier, Make, HubSpot, Salesforce)
- Data enrichment practices
- Tech stack and infrastructure (Snowflake, Segment, etc.)
- Recent company activity and initiatives
- Pain points related to B2B data (outdated CRM data, manual enrichment, static workflows)
- Public content (speaking engagements, blog posts, thought leadership)

**AI Components:**
- **Anthropic Chat Model1:** Claude Sonnet 4 for research
- **Simple Memory1:** Maintains research context
- **Explorium MCP1:** Connected to `https://mcp.explorium.ai/mcp` for real-time intelligence

**Output:** Structured JSON with research findings including automation tools, pain points, personalization notes

### Node 13: Email Writer
Generates personalized cold email drafts based on research findings.

**Input Data:**
- Contact info from Loop Over Items
- Current experience and skills
- Research findings from Research Email agent
- Company data (name, website)

**AI Components:**
- **Anthropic Chat Model3:** Claude Sonnet 4 for email writing
- **Structured Output Parser:** Enforces JSON schema with email, subject, message fields

**Output Schema:**
- `email`: Selected prospect email address (professional preferred)
- `subject`: Compelling, personalized subject line
- `message`: HTML formatted email body

### Node 14: Create a draft (Gmail)
Creates email drafts in Gmail for review before sending.

- **Resource:** Draft
- **Subject:** From Email Writer output
- **Message:** HTML formatted email body
- **Send To:** Selected prospect email address
- **Authentication:** Gmail OAuth2

**After Creation:** Loops back to Node 11 (Loop Over Items) to process next prospect

**Alternative Output Options:**
- **Outlook:** Create drafts in Microsoft Outlook
- **Mailchimp:** Add to email campaign
- **SendGrid:** Queue for sending
- **Lemlist:** Add to cold email sequence

---

## Workflow Flow Summary

1. **Input:** User describes target prospects in natural language via chat interface
2. **Interpret:** AI Agent converts query to structured Explorium API filters using MCP
3. **Validate:** API call validation ensures filter compliance
4. **Refine:** If invalid, error feedback loop helps AI correct the request
5. **Fetch:** Retrieve matching prospect IDs from Explorium database
6. **Enrich:** Parallel bulk enrichment of contact details and professional profiles
7. **Clean:** Transform and structure enriched data
8. **Loop:** Process each prospect individually
9. **Research:** AI agent uses Explorium MCP to gather company and prospect intelligence
10. **Write:** Generate personalized email based on research
11. **Draft:** Create reviewable email drafts in preferred platform

This workflow eliminates manual prospecting work by combining natural language processing, intelligent data enrichment, automated research, and personalized email generation—taking you from "I need marketing leaders at fintech companies" to personalized, research-backed email drafts in minutes.

---

## Customization Options

### Flexible Triggers
The chat interface can be replaced with:
- Scheduled runs for recurring prospecting
- Webhook triggers from CRM updates
- Manual execution for ad-hoc campaigns

### Scalable Enrichment
Adjust enrichment depth by:
- Adding more Explorium API endpoints (technographics, funding, news)
- Configuring prospect batch sizes
- Customizing data cleaning logic

### Output Destinations
Route emails to your preferred platform:
- **Email Platforms:** Gmail, Outlook, SendGrid, Mailchimp
- **Sales Tools:** Lemlist, Outreach, SalesLoft
- **CRM Integration:** Salesforce, HubSpot (create leads with research)
- **Collaboration:** Slack notifications, Google Docs reports

### AI Model Flexibility
Swap AI providers based on your needs:
- Default: Anthropic Claude (Sonnet 4)
- Alternatives: OpenAI GPT-4, Google Gemini

---

## Setup Notes

1. **Domain Filtering:** The workflow prioritizes professional emails—customize email selection logic in the Clean Output Data node
2. **MCP Configuration:** Explorium MCP requires Header Auth setup—ensure credentials are properly configured
3. **Rate Limits:** Adjust Loop Over Items batch size if hitting API rate limits
4. **Memory Context:** Simple Memory maintains conversation history—increase window length for longer sessions
5. **Validation:** The AI self-corrects through validation loops—monitor early runs to ensure filter accuracy

This workflow represents a complete AI-powered sales development representative (SDR) that handles prospecting, research, and personalized outreach with minimal human intervention.

## 🔗 Nodes Used

Gmail, AI Agent, Anthropic Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
