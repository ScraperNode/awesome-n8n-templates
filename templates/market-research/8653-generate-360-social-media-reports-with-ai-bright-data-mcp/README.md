# 📊 Generate 360 social media reports with AI - Bright Data MCP

> ⚡ **7,160 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Social Media Intelligence Workflow with Bright Data and OpenAI

Get a 360 Social media presence report for a person

## Who's it for
Business development professionals, recruiters, sales teams, and market researchers who need comprehensive social media intelligence on individuals for lead qualification, due diligence, partnership evaluation, or candidate assessment.

## How it works
1. Enter target person's details through the web form (name, company, location)
2. AI Discovery Agent searches across selected platforms using name variations
3. Profile validator verifies discovered profiles with confidence scoring
4. Platform-specific agents analyze each profile using Bright Data MCP tools
5. GPT-4 synthesizes all data into a comprehensive intelligence report
6. Report automatically generated as formatted Google Doc with direct link

## Requirements
- Bright Data MCP account with PRO access ([Get your Bright Data API key here](https://get.brightdata.com/qsg36y0kkq70))
- OpenAI API key (or alternative LLM provider)
- Google Drive OAuth connection for report delivery
- n8n self-hosted instance or cloud account

## How to set up
1. **Update Bright Data credentials**:
   - Find "Bright Data MCP" node (look for red warning note)
   - Replace YOUR_BRIGHT_DATA_TOKEN_HERE with your actual token
   - Update UNLOCKER_CODE_HERE with your unlocker code
2. **Update Google Drive settings**:
   - Find "Create Empty Google Doc" node
   - Select target folder there
3. Configure your LLM credentials (OpenAI or alternative)
4. Test with your own name using "Basic" search depth

[Watch Youtube Tutorial](https://www.youtube.com/watch?v=8zJnJLIzSAo)

![Watch Youtube Tutorial](https://raw.githubusercontent.com/czlonkowski/public/main/research.png)


## How to customize the workflow
- **Add platforms**: Extend the Switch node with new cases and create corresponding prompt builders
- **Modify analysis depth**: Edit the platform-specific prompt builders to focus on different metrics
- **Change report format**: Update the final LLM Chain prompt to adjust report structure
- **Add notifications**: Insert Slack or email nodes after report generation
- **Adjust confidence thresholds**: Modify validators to change profile verification requirements
- **Alternative outputs**: Replace Google Docs with PDF, Excel, or webhook to CRM

## 🔗 Nodes Used

Google Drive, Markdown, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
