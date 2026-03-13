# 💬 Generate Personalized Email Sequences with Octave, LLM & External Data

> ⚡ **128 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Generate dynamic email sequences with runtime context and external data

## Who is this for?
Growth teams, sales development reps, and outbound marketers who want to reference specific, real-time information about prospects in their email sequences. Built for teams that have access to external data sources and want to create truly contextualized outreach that feels impossibly relevant.

## What problem does this solve?
Most outbound sequences are static - they use the same messaging for everyone regardless of what's actually happening at the prospect's company right now. You might know they're hiring, launched a product, got funding, or expanded to new markets, but your email sequences can't dynamically reference these timely events. This workflow shows how to inject real-time external context into Octave's sequence generation, creating outreach that feels like you're personally monitoring each prospect's company.

## What this workflow does

**Lead Data & Context Collection:**
- Receives lead information via webhook (firstName, companyName, companyDomain, profileURL, jobTitle)
- Uses external data sources to gather timely context about the prospect's company
- Example: AI agent researches current job postings to find roles they're actively hiring for
- Processes this context into structured data for sequence generation

**Runtime Context Integration:**
- Feeds external context into Octave's sequence generation as "runtime context"
- Defines both WHAT the context is ("they are hiring a software engineer") and HOW to use it ("mention the role in the opening")
- Allows Octave to weave timely, relevant details into each email naturally
- Creates sequences that feel like personal research rather than mass outreach

**Dynamic Sequence Generation:**
- Leverages Octave's context engine plus runtime data to create hyper-relevant sequences (1-7 emails)
- Generates subject lines and email content that reference specific, current company context
- Maintains your positioning and value prop while incorporating timely relevance
- Creates messaging that feels unmistakably meant for that specific moment in the prospect's business

**Campaign Integration:**
- Automatically adds leads with contextualized sequences to your email platform
- Maps generated content to campaign variables for automated sending
- Supports multiple email platforms with easy customization

## Setup

**Required Credentials:**
- Octave API key and workspace access
- External data source API (job boards, news APIs, enrichment services, etc.)
- Email platform API key (Instantly.ai configured, easily adaptable)
- Optional: LLM credentials if using the example AI agent for testing

**Step-by-Step Configuration:**

1. **Set up External Data Source:**
   - Replace the AI Agent with your preferred data source (job board APIs, news APIs, company databases)
   - Configure data collection to find relevant, timely information about prospects
   - Structure the output to provide clean context for sequence generation

2. **Set up Octave Sequence Agent:**
   - Add your Octave API credentials in n8n
   - Replace `your-octave-sequence-agent-id` with your actual sequence agent ID
   - Configure runtime context parameters:
     - **Runtime Context:** Define WHAT the external data represents
     - **Runtime Instructions:** Specify HOW to use it in the messaging

3. **Configure Email Platform:**
   - Add your email platform API credentials
   - Replace `your-campaign-id-here` with your actual campaign ID
   - Ensure campaign supports custom variables for dynamic content

4. **Set up Lead Source:**
   - Replace `your-webhook-path-here` with a unique, secure path
   - Configure your lead source to send prospect data to the webhook
   - Test end-to-end flow with sample leads

**Required Webhook Payload Format:**
```json
{
  "body": {
    "firstName": "Alex",
    "lastName": "Chen",
    "companyName": "InnovateTech",
    "companyDomain": "innovatetech.com",
    "profileURL": "https://linkedin.com/in/alexchen",
    "email": "alex@innovatetech.com",
    "jobTitle": "VP of Engineering"
  }
}
```

## How to customize

**External Data Sources:** Replace the AI agent with your preferred context collection method:
- **Job Board APIs:** Reference current hiring needs and team expansion
- **News APIs:** Mention recent company announcements, funding, or product launches
- **Social Media Monitoring:** Reference recent LinkedIn posts, company updates, or industry discussions
- **Enrichment Services:** Pull real-time company data, technology stack changes, or market expansion

**Runtime Context Configuration:** Customize how external data integrates with sequences:
- **Context Definition:** Specify what the external data represents ("they just raised Series B funding")
- **Usage Instructions:** Define how to incorporate it ("mention the funding in the opening and tie it to growth challenges")
- **Email-Level Control:** Configure different context usage for different emails in the sequence
- **Global vs. Specific:** Apply context to all emails or target specific messages

**Data Processing:** Replace the example AI agent with your external data processing:
- Modify data source connections to pull relevant context
- Ensure consistent output formatting for runtime context integration
- Add error handling for cases where external data isn't available
- Implement fallback context for prospects without relevant external data

**Sequence Customization:** Configure Octave sequence generation:
- **Core Context (Library):** Define your personas, use cases, and offering definitions
- **Strategy (Playbooks):** Configure messaging frameworks and value proposition delivery
- **Writing Style (Agent):** Adjust tone, voice, and communication style

**Email Platform Integration:** Adapt for different email sequencing platforms:
- Update API endpoints and authentication for your preferred platform
- Modify variable mapping for platform-specific custom fields
- Adjust sequence length and formatting requirements

## Use Cases
- Job posting-triggered outreach for hiring managers and HR teams
- Funding announcement follow-ups for growth-stage companies
- Product launch congratulations with relevant use case discussions
- Market expansion outreach when companies enter new territories
- Technology adoption sequences based on recent stack additions
- Event attendance follow-ups with session-specific references

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
