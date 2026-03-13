# 👥 Automate job search and matching with Adzuna API, GPT-3.5, and Google Sheets

> ⚡ **994 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Job Search Automation Workflow
Streamline Job Discovery with API-Powered Intelligence
This workflow template transforms the job search process by leveraging the Adzuna API and AI to automatically find, summarize, and evaluate job opportunities. Unlike traditional RSS-based job search tools, this workflow connects directly to Adzuna's comprehensive job API for real-time, high-quality job data.
Workflow Overview
The Job Search Automation Workflow follows a streamlined process:

    Define job titles to search for
    Fetch current job listings from Adzuna's API
    Split individual job results for processing
    Use AI to extract and summarize key job information
    Score each job against candidate profiles
    Organize results for easy review

This automation eliminates manual searching across job boards and provides objective evaluation of opportunities, saving valuable time for both job seekers and professionals who support them.
Technical Implementation
The workflow is built with a focus on efficiency and extensibility:

    API Integration: Direct connection to Adzuna's job API ensures access to current listings with comprehensive details
    AI Processing: Leverages OpenAI's GPT models to intelligently summarize job descriptions and evaluate candidate fit
    Modular Design: Each node serves a specific purpose, making the workflow easy to understand and customize
    Scalable Architecture: Can be expanded to include additional job sources or evaluation criteria

Use Cases
This template serves multiple user groups:

    Job Seekers: Automate discovery of relevant positions matching your skills
    Recruiters: Quickly identify quality positions for your candidate pool
    Career Coaches: Systematically help clients find suitable positions
    AI Automation Builders: Learn how to integrate job APIs with AI evaluation systems

Prerequisites
To use this workflow, you'll need:

    An Adzuna API key (available at Adzuna.com)
    n8n instance (cloud or self-hosted)
    OpenAI API credentials (or compatible alternative)

Getting Started

    Import this template to your n8n instance
    Configure your Adzuna API credentials
    Set up your OpenAI API connection
    Customize job titles and candidate profiles
    Execute the workflow to start discovering opportunities

Customization Options
The workflow can be easily adapted to your specific needs:

    Modify job search parameters (location, industry, etc.)
    Adjust AI prompts for different summarization styles
    Customize scoring criteria based on specific skills or requirements
    Add nodes to integrate with other tools in your workflow

Why This Approach Matters
Traditional job search methods often rely on RSS feeds, which can be limited in detail and frequency of updates. By connecting directly to the Adzuna API, this workflow ensures you're always working with the most current job data available.
The AI-powered evaluation provides objective scoring of how well each position matches candidate profiles, helping prioritize applications for positions with the highest potential fit.
Whether you're a job seeker looking to streamline your search, a professional helping others find opportunities, or an automation enthusiast interested in API integrations, this template provides a solid foundation for more efficient job discovery and evaluation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
