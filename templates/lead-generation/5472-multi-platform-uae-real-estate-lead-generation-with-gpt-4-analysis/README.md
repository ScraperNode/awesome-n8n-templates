# 🎣 Multi-platform UAE real estate lead generation with GPT-4 analysis

> ⚡ **458 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who's it for
Real estate agents, property investment companies, and relocation services operating in the UAE market who want to automate their lead generation and find qualified prospects 24/7.

## How it works
This workflow automatically searches 6 major platforms (Reddit, Facebook, LinkedIn, Twitter, Bayut, PropertyFinder, and news sites) every 6 hours for people looking to buy, sell, or invest in UAE properties. An AI agent then analyzes all results to extract qualified leads with contact information, scores them based on intent and availability, and saves everything to Google Sheets for follow-up.

## What it does
- **Multi-platform search**: Finds prospects across social media, property portals, and news sites
- **AI-powered qualification**: Distinguishes real customers from competitors and low-quality leads  
- **Contact extraction**: Automatically pulls emails, phone numbers, and WhatsApp contacts
- **Lead scoring**: Rates prospects 1-100 based on buying intent and contact quality
- **Automated organization**: Saves all data to Google Sheets with follow-up priorities

## Setup requirements
- Serper.dev API key (2,500 free searches/month)
- OpenAI API key for AI analysis
- Google Sheets account for lead storage
- 10 minutes initial configuration

## How to customize
- **Target markets**: Adjust search terms for luxury, commercial, or specific emirates
- **Search frequency**: Change from 6 hours to your preferred schedule  
- **Additional platforms**: Add more sources by duplicating HTTP request nodes
- **Lead criteria**: Modify AI scoring based on your qualification requirements
- **CRM integration**: Connect output to Salesforce, HubSpot, or other systems

## Expected results
Generate 10-50 qualified leads daily with contact information, saving 5+ hours of manual research while improving lead quality through AI-powered analysis and scoring.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
