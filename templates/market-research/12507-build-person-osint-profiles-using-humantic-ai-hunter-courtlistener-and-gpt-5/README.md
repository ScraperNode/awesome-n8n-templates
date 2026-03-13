# 📊 Build person OSINT profiles using Humantic AI, Hunter, CourtListener and GPT-5

> ⚡ **139 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Who is this for

This workflow is designed for sales professionals, recruiters, and researchers who need to:
- Build comprehensive profiles of individuals from public sources
- Understand communication and personality styles before outreach
- Find verified contact information
- Research legal and public record history for individuals

It's ideal for animal advocacy campaigns targeting corporate decision-makers, researchers profiling legislators on animal welfare issues, and activists preparing for meetings with executives at companies being asked to adopt animal welfare policies.

## What it does

This multi-source OSINT agent creates comprehensive individual profiles:
1. **Personality analysis**: Uses Humantic AI to analyze LinkedIn profiles for communication preferences, personality traits, and engagement recommendations
2. **Contact discovery**: Uses Hunter.io to find and verify professional email addresses
3. **Legal research**: Searches CourtListener for any court cases involving the individual
4. **Legislation involvement**: Checks LegiScan for any legislative activity or testimony
5. **Document search**: Searches DocumentCloud for government documents mentioning the person
6. **Web research**: Uses Serper to find news articles, publications, and public appearances
7. **Synthesis**: Combines all findings into an actionable intelligence report

The workflow waits for Humantic AI profile generation (45 seconds) before retrieving the complete personality analysis.

## How to set up

1. Import the workflow into your n8n instance
2. Configure the required API credentials:
   - **Humantic AI API** for personality analysis
   - **Hunter API** for email finding
   - **CourtListener API** for court case searches
   - **LegiScan API** for legislation searches
   - **Serper API** for web searches
   - **Jina AI API** for content extraction
   - **OpenRouter API** for AI synthesis
3. Test with a public figure to verify all integrations
4. Activate the workflow

### Example usage

```json
{
  "firstName": "John",
  "lastName": "Davis",
  "companyName": "Smithfield Foods",
  "companyDomain": "smithfieldfoods.com",
  "linkedinURL": "https://linkedin.com/in/johndavis",
  "reportGoal": "Prepare for corporate campaign meeting - understand decision-making authority, communication style, and any public statements on animal welfare"
}
```

## Requirements

- Humantic AI API key
- Hunter API key
- CourtListener API key
- LegiScan API key
- Serper API key
- Jina AI API key
- OpenRouter API key

## How to customize

- **Skip personality analysis**: Remove the Humantic AI nodes if you only need factual research
- **Add social media**: Integrate Twitter/X or other social platform analysis to track public statements on animal issues
- **Extend contact finding**: Add additional email verification or phone number lookup services
- **Customize report format**: Adjust the final synthesis prompt for campaign briefings, legislator profiles, or corporate target research
- **Add campaign database integration**: Connect output directly to your advocacy CRM or campaign tracking system
- **Batch processing**: Wrap the workflow to process multiple decision-makers from a target company list

## 🔗 Nodes Used

Webhook, Hunter, Humantic AI, Execute Workflow Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
