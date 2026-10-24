# 📱 Generate and publish LinkedIn posts with OpenAI, Gmail, and Google Sheets

> ⚡ **110 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow generates LinkedIn post ideas and drafts with OpenAI, routes approvals through Gmail replies, tracks each content cycle in Google Sheets, and publishes the selected draft to LinkedIn as a person or organization.

## How it works
1. Starts manually and uses OpenAI to generate a numbered list of LinkedIn post idea titles for the configured niche and audience.
2. Logs the idea batch and run settings to Google Sheets and emails the ideas to your Gmail inbox with a correlation ID in the subject.
3. Polls Gmail for unread replies containing the correlation ID, extracts the reply number, and looks up the matching row in Google Sheets.
4. If the sheet row is in the ideas stage, it uses OpenAI to generate multiple LinkedIn post drafts for the selected idea, updates Google Sheets with the drafts, and emails them for final approval.
5. If the sheet row is in the drafts stage, it selects the chosen draft text and publishes it to LinkedIn with public visibility as the configured person or organization.
6. Updates the Google Sheets row to mark the post as posted and sends a Gmail confirmation email with a preview.

## Setup
1. Add credentials for OpenAI, Gmail, Google Sheets, and LinkedIn (Community Management authentication) in n8n.
2. Create/select a Google Sheets spreadsheet and sheet used as the content tracker, and map it in all Google Sheets steps (append, lookup, and updates).
3. Update the Configuration values, especially the notification email address, niche/audience, idea/draft counts, word limits, and the OpenAI model.
4. Configure LinkedIn posting by setting post-as mode (person or organization) and filling in the required LinkedIn URNs (person URN and/or organization URN) in the publish step.
5. Ensure your approval replies keep the original email subject containing the [CID: …] token and reply with only the idea/draft number so the workflow can parse it.

## Additional info
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-and-publish-LinkedIn-posts-from-AI-ideas-with-Gmail-approval-39f3d6550fd981f1b644e1926f21e134)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Gmail, LinkedIn, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
