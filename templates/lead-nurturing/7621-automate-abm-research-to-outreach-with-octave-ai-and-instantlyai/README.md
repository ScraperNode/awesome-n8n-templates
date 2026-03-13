# 💬 Automate ABM research to outreach with Octave, AI, and Instantly.ai

> ⚡ **254 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Complete account-based outreach automation with Octave context engine

## Who is this for?
Revenue teams, account-based marketing professionals, and growth operators who want a complete, automated pipeline from account identification to contextualized outreach. Built for teams ready to move beyond fragmented point solutions to an integrated, context-aware GTM engine.

## What problem does this solve?
Most GTM teams are flying blind with disconnected tools that can't talk to each other. You qualify accounts in one system, find contacts in another, research context manually, then hope your email sequences land. Each step loses context, and by the time you're writing outreach, you've forgotten why the account was qualified in the first place. Octave centralizes all this typically fragmented context - your ICP definitions, personas, value propositions, and business logic - so every agent operation can act on the same unified understanding of your market. This workflow demonstrates how Octave's agents work together seamlessly because they all share the same context foundation.

## What this workflow does

**Complete Account-to-Outreach Pipeline:**
This workflow demonstrates the full power of Octave's context engine by connecting multiple agent operations in a seamless flow. Unlike traditional tools that lose context at each handoff, Octave centralizes your business context - ICP definitions, personas, value propositions, competitive positioning - so every agent operates from the same unified understanding of your market.

**External Context Research:**
- Gathers real-time external data about target accounts (job postings, news, funding, etc.)
- Processes this information to create runtime context for later use in outreach
- Establishes the "why reach out now" foundation for the entire workflow

**Company-Level Qualification:**
- Uses Octave's company qualification to assess account fit against your specific offering
- Leverages Product and Segment-level fit criteria defined in your Library
- Filters out accounts that don't meet your qualification thresholds
- Ensures only high-potential accounts proceed through the workflow

**Intelligent Contact Discovery:**
- Runs Octave's prospector agent on qualified accounts
- Finds relevant stakeholders based on responsibilities and business context, not just job titles
- Discovers multiple contacts per account for comprehensive coverage
- Maintains qualification context when identifying the right people

**Runtime Context Integration:**
- Takes the external context gathered at the beginning and injects it into sequence generation
- Creates truly dynamic, timely outreach that references current company events
- Generates sequences that feel impossibly relevant and well-researched

**Multi-Contact Sequence Generation:**
- Splits discovered contacts into individual records for processing
- Generates contextualized email sequences for each contact
- Maintains account-level context while creating contact-specific messaging
- Produces sequences (1-7 emails) that feel unmistakably meant for each person

**Automated Campaign Deployment:**
- Automatically adds all qualified contacts with their contextualized sequences to email campaigns
- Maps dynamic content to campaign variables for seamless execution
- Maintains the context chain from qualification through delivery

## Setup

**Required Credentials:**
- Octave API key and workspace access
- External data source API (job boards, news APIs, enrichment services, etc.)
- Email platform API key (Instantly.ai configured, easily adaptable)
- Optional: LLM credentials if using the example external research agent

**Step-by-Step Configuration:**

1. **Set up Account Input Source:**
   - Replace `your-webhook-path-here` with a unique, secure path
   - Configure your account source (CRM, website visitors, target lists) to send company data
   - Ensure account data includes company name and domain for processing

2. **Configure External Context Research:**
   - Replace the example AI agent with your preferred external data source
   - Set up connections to job boards, news APIs, or enrichment services
   - Configure context gathering to find timely, relevant information about target accounts

3. **Set up Company Qualification Agent:**
   - Add your Octave API credentials
   - Replace `your-octave-company-qualification-agent-id` with your actual agent ID
   - Configure qualification criteria at Product and Segment levels in your Octave Library

4. **Configure Prospector Agent:**
   - Replace `your-octave-prospector-agent-id` with your actual prospector agent ID
   - Define target personas and stakeholder types in your Octave Library
   - Set contact discovery parameters for optimal coverage

5. **Set up Sequence Agent:**
   - Replace `your-octave-sequence-agent-id` with your actual sequence agent ID
   - Configure runtime context integration for dynamic content
   - Test sequence quality with the external context integration

6. **Configure Email Campaign Platform:**
   - Add your email platform API credentials
   - Replace `your-campaign-id-here` with your actual campaign ID
   - Ensure campaign supports custom variables for dynamic content

**Required Webhook Payload Format:**
```json
{
  "body": {
    "companyName": "InnovateTech Solutions",
    "companyDomain": "innovatetech.com"
  }
}
```

## How to customize

**External Context Sources:** Replace the example research with your data sources:
- **Job Board APIs:** Reference current hiring and team expansion
- **News APIs:** Mention funding, product launches, or market expansion
- **Enrichment Services:** Pull technology adoption, market changes, or competitive moves
- **Social Monitoring:** Reference recent company posts or industry discussions

**Company Qualification:** Configure qualification in your Octave company qualification agent:
- **Product Level:** Define "good fit" and "bad fit" questions for your core offering
- **Segment Level:** Set criteria for different market segments or use cases
- **Qualification Thresholds:** Adjust the filter score based on your standards

**Contact Discovery:** Customize prospecting in your Octave prospector agent:
- **Target Personas:** Define which Library personas to prioritize
- **Organizational Levels:** Focus on specific seniority levels or decision-making authority
- **Contact Volume:** Adjust how many contacts to discover per qualified account

**Runtime Context Integration:** Configure dynamic content injection:
- **Context Definition:** Specify what external data represents in your sequences
- **Usage Instructions:** Define how to incorporate context into messaging
- **Email-Level Control:** Apply different context to different emails in sequences

**Sequence Generation:** Customize email creation:
- **Core Context (Library):** Define personas, use cases, and offering definitions
- **Strategy (Playbooks):** Configure messaging frameworks and value propositions
- **Writing Style (Agent):** Adjust tone, voice, and communication approach

**Campaign Integration:** Adapt for different email platforms:
- Update API endpoints and authentication for your preferred platform
- Modify variable mapping for platform-specific requirements
- Adjust sequence formatting and length based on platform capabilities

## Use Cases
- Complete inbound lead processing from website visitor to qualified outreach
- Event-triggered account processing for funding announcements or hiring spikes
- Competitive displacement campaigns with account qualification and contact discovery
- Market expansion automation for entering new territories or segments
- Product launch outreach with context-aware targeting and messaging
- Customer expansion workflows for upselling within existing account bases

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
