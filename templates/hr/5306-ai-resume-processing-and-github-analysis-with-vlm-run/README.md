# 👥 AI resume processing and GitHub analysis with VLM run

> ⚡ **454 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Automatically transform resume submissions into comprehensive candidate profiles with AI-powered parsing, GitHub analysis, and instant team notifications.**

## What this workflow does
1. **Monitors Gmail** for incoming resume attachments
2. **Extracts structured data** using VLM Run AI document parsing
3. **Analyzes GitHub profiles** with deep repository intelligence (30+ frameworks detected)
4. **Creates comprehensive candidate profiles** with technical skills assessment
5. **Delivers multi-channel notifications** via Google Sheets, Slack, and candidate emails

## Setup
**Prerequisites:** Gmail account, VLM Run API credentials, Google Sheets access, Slack workspace, n8n.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.

**Quick Setup:**
1. Configure Gmail OAuth2 for resume monitoring
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard) for document parsing
3. Create Google Sheets candidate database
4. Set up Slack integration for team notifications
5. Update spreadsheet/channel IDs in workflow nodes
6. Test with sample resume and activate

## Perfect for
- HR departments and technical recruiting teams
- Startup hiring and talent acquisition agencies
- Developer assessment and skill evaluation
- Remote team hiring and candidate screening
- Any organization seeking data-driven hiring decisions

## Key Benefits
- **Eliminates manual data entry** - AI extracts all contact info, skills, and experience
- **GitHub intelligence engine** - Analyzes repositories, calculates experience, detects technologies
- **Comprehensive skill assessment** - Identifies programming languages, frameworks, and project metrics
- **Professional candidate experience** - Automated acknowledgment emails with personalized touches
- **Instant team collaboration** - Rich Slack notifications with GitHub profile highlights
- **Structured data storage** - Searchable candidate database with 20+ data columns
- **Saves hours per candidate** - Transforms 30-minute manual reviews into instant insights

## How to customize
**Extend by adding:**
* Integration with ATS systems (Greenhouse, Lever, BambooHR)
* LinkedIn profile analysis and social media insights
* Automated interview scheduling based on qualifications
* Skills-based candidate scoring and ranking algorithms
* Integration with code assessment platforms
* Multi-language resume support and translation
* Custom evaluation criteria and filtering rules
* Advanced GitHub metrics (code quality, contribution patterns)

This workflow revolutionizes technical hiring by combining AI-powered resume parsing with deep GitHub analysis, delivering comprehensive candidate intelligence that empowers data-driven hiring decisions while maintaining a professional candidate experience.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
