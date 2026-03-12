# 💬 Personalized customer retention campaigns with GPT-4o analytics & Gmail

> ⚡ **75 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## HOW IT WORKS
This workflow automates end-to-end data intelligence processing by ingesting structured data (CSV, JSON), enriching it through multiple AI analysis pathways, and generating actionable insights. Designed for business analysts, data scientists, and operations teams, it solves the problem of manual data enrichment and fragmented analysis by consolidating diverse AI models (GPT-4, LLM analysis, sentiment detection) into a unified pipeline. Data flows from source ingestion → enrichment/validation → branching into three specialized analysis paths (Competitive Intelligence, Sentiment Analysis, Market Insights) → aggregation → result storage (Google Sheets) and notifications (Slack, Gmail). Each path applies distinct AI models for comprehensive intelligence gathering.

## SETUP STEPS
1. Configure OpenAI API key in credentials
2. Set up Google Sheets connection with service account
3. Add Slack webhook for notifications
4. Connect Gmail for automated report distribution
5. Configure NVIDIA API (if using specialized models)
6. Map input data source (CSV upload or API endpoint)
7. Test each branch independently before full deployment

## PREREQUISITES
OpenAI API key, Google Sheets access, Slack workspace, Gmail account, basic n8n familiarity.  

## USE CASES
Market research automation, competitive intelligence monitoring, customer feedback analysis at scale 

## CUSTOMIZATION
Swap AI models (Claude, Gemini, Llama), add/remove analysis branches, modify output destinations 

## BENEFITS
Eliminates manual data processing (80% time savings), enables simultaneous multi-perspective analysis

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
