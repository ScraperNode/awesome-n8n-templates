# 🎬 Enrich FAQ sections on your website pages at scale with AI

> ⚡ **10,202 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow template lets you easily generate comprehensive FAQ (Frequently Asked Questions) content for multiple services (or any items or pages you need to add the FAQs to). Simply provide the Google Sheets document containing the items to scrape, and the workflow automatically creates detailed, AI-enhanced FAQ documents.

## How it works
* The workflow reads data from a Google Sheets document containing information about different services and categories (again, in your case - whatever objects you need).
* For each service and category, it generates a set of standard questions and answers covering setup, permissions, integrations, use cases, and pricing benefits.
* An AI model (OpenAI's GPT) is used to enhance or complete some of the answers, making the content more comprehensive and natural-sounding.
* The workflow formats the Q&A pairs, combining AI-generated content with predefined answers where applicable.
* It creates a text file (JSON) for each service or category, containing the formatted Q&A pairs.
* The generated files are saved to specific folders in Google Drive, organized by the type of integration (native, credential-only, non-native) or category.
* After processing each service or category, it updates the status in the original Google Sheets document to mark it as completed.

## Ideal for:
* Marketing teams: Rapidly create comprehensive FAQ documents for multiple products or services.
* Customer support: Generate consistent and detailed answers for common customer queries.
* Product managers: Easily maintain up-to-date documentation as products evolve.
* Content creators: Streamline the process of creating informative content about various offerings.

## Accounts required
* Google account (for Google Sheets and Google Drive)
* OpenAI API account (for AI-enhanced content generation)
* n8n.io account (for workflow execution)

## Set up instructions
1. Set up the required credentials for Google Sheets, Google Drive, and OpenAI when you first open the workflow.
2. Prepare your Google Sheets document with the service/category information. [Here's an example of Google Sheet]( https://docs.google.com/spreadsheets/d/1DCf-phfLWvuTwu02bumx-qykVQeFANnacTTAkRj5tZk/edit?usp=sharing).
3. Fill the "Define Sheets" node with your sheets
4. Adjust the folder IDs in the "Prepare Job" node to match your Google Drive structure.
5. Configure the OpenAI model settings in the "OpenAI Chat Model" node if needed.
6. Test the workflow with a small subset of data before running it on your entire dataset.
7. Adjust the questions asked in the "Create your Q&A templates" section
8. After testing, activate your workflow for automated FAQ generation.

🙏 Big, big kudos to [Jim Le](https://n8n.io/creators/jimleuk/) for his ideas, input and support when building this workflow. Your approach to AI workflows is always super helpful!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Execute Sub-workflow, Wordpress, Strapi

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
