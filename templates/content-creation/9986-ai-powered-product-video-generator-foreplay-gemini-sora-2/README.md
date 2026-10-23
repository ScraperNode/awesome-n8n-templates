# 🎬 AI-powered product video generator (Foreplay + Gemini + Sora 2)

> ⚡ **8,012 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Sign Up For Foreplay [HERE](https://www.foreplay.co/?via=urpwUS)

Automatically generate personalized, cinematic-quality product videos using Foreplay’s ad data, Google Gemini AI for creative prompts, and Sora 2 for text-to-video generation.

## How it works
1. The workflow fetches product data and related competitor video references directly from Foreplay as the input source.
2. Gemini AI analyzes the fetched data and generates creative, detailed text-to-video prompts tailored for product advertising.
3. The generated prompt and product image are sent to Kie.ai, which renders a short cinematic product video automatically.
4. The finished video file is saved automatically to a designated folder in Google Drive for storage and easy access.

## Setup
1. Connect your Foreplay, Google Drive, Gemini, and Kie.ai credentials in the n8n Credential Manager before running the workflow.
2. Set your product image folder in Google Drive to public so Kie.ai can access the image during video generation.
3. Open the Set Workflow Credentials node and add all required API keys for each connected service.
4. Run the workflow manually to generate your first product video ad and verify the output is saved correctly to Google Drive.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
