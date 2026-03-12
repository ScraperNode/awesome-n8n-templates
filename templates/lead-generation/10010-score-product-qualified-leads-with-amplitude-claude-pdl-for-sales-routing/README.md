# 🎣 Score product-qualified leads with Amplitude, Claude & PDL for sales routing

> ⚡ **137 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# AI-Powered Product-Qualified Lead (PQL) Scoring & Sales Routing

## One-Line Description
Automatically score product usage signals from Amplitude cohorts and route hot leads to sales with enriched context.

## Detailed Description

### What it does:
This workflow transforms behavioral data into sales-ready leads by instantly detecting when users hit your PQL threshold, enriching their profile with company intelligence, and using AI to score their conversion potential. Hot leads are routed directly to sales with personalized conversation starters, while warm and cold leads enter appropriate nurture sequences.

### Who it's for:
- **Product-led growth (PLG) teams** bridging the gap between product adoption and sales conversion
- **Sales development teams** needing real-time alerts on high-intent users with actionable context
- **Revenue operations professionals** optimizing lead handoff processes between product and sales

### Key Features:
- **Real-time PQL detection** - Triggers instantly when users enter Amplitude behavior cohorts, eliminating manual lead review
- **Multi-source enrichment** - Combines product usage data with company intelligence from People Data Labs and AI-powered research
- **AI-driven scoring** - Evaluates usage intensity, ICP fit, intent signals, and timing to produce 0-10 lead scores with breakdown reasoning
- **Smart routing logic** - Automatically categorizes leads as hot (8-10), warm (5-7), or cold (0-4) for appropriate follow-up workflows
- **Sales enablement context** - Provides conversation starters, key insights, red flags, and handoff recommendations tailored to each lead
- **Customizable criteria** - References external Google Doc for PQL rules, allowing non-technical teams to update scoring logic

### How it works:
1. **Trigger**: Amplitude fires webhook when user enters predefined PQL cohort based on product usage patterns
2. **Enrichment**: Pulls company data from People Data Labs and conducts AI research on company stage, tech sophistication, and budget indicators
3. **AI Scoring**: Agent evaluates combined usage + enrichment data against ICP criteria stored in Google Docs, producing structured scoring output
4. **Routing**: High-scoring leads (hot) generate formatted Slack alerts for immediate sales outreach; warm/cold leads could trigger email sequences (not shown in this template)

## Setup Requirements

### Prerequisites:
- **Amplitude account** with cohort webhook capability (Growth plan or higher)
- **People Data Labs API key** for company/person enrichment (paid credits required)
- **Perplexity API** for AI-powered company research
- **Anthropic Claude API** for PQL scoring logic
- **Google Gemini API** for Slack message formatting
- **Slack workspace** with OAuth app configured for posting messages
- **Google Docs** containing your PQL criteria and ICP definition (publicly readable or authenticated access)

### Estimated Setup Time:
45-60 minutes including API credential configuration, Amplitude cohort definition, and PQL criteria document creation

## Installation Notes

- **Amplitude cohort setup**: Define your PQL cohort using behavioral criteria (e.g., "Users who viewed 5+ pages AND invited team members in last 7 days"). Configure webhook to fire on cohort entry.
- **PQL criteria document**: Create a Google Doc outlining your scoring components (usage intensity factors, ICP requirements, intent signals). Update the Google Docs Tool node with your document URL.
- **Free email filtering**: The workflow includes logic to flag free email domains (Gmail, Yahoo, etc.) which you may want to route differently
- **Testing tip**: Use Amplitude's "Test Webhook" feature to send sample payloads before going live

## Customization Options

- **Replace People Data Labs** with Clearbit, Apollo, or other enrichment providers by swapping the HTTP Request node
- **Add CRM integration** to automatically create opportunities or update lead scores in Salesforce/HubSpot
- **Extend routing paths** by adding branches for warm/cold leads (e.g., trigger email sequences via Customer.io, Braze)
- **Adjust scoring weights** by modifying the AI agent prompt or criteria document without touching workflow logic
- **Multi-channel alerts** by duplicating output nodes to send to email, SMS, or CRM tasks in addition to Slack

## Category
Sales

## Tags
- amplitude
- pql
- product-qualified-leads
- sales-automation
- lead-scoring
- enrichment
- people-data-labs
- slack-notifications
- ai-scoring
- revenue-operations

## Use Case Examples

- **SaaS PLG companies**: Automatically escalate free trial users who hit usage milestones (API calls, integrations connected, team invites sent) to sales for upgrade conversations
- **Developer tools**: Identify enterprise-ready accounts based on team size growth, deployment patterns, and GitHub integration usage, routing to enterprise sales team
- **B2B marketplaces**: Surface buyers showing high-intent behavior (multiple searches, saved items, pricing page views) to account executives with company context for proactive outreach

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
