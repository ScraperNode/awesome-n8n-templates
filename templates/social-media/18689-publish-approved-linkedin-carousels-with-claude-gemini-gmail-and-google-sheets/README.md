# 📱 Publish approved LinkedIn carousels with Claude, Gemini, Gmail and Google Sheets

> ⚡ **24 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily on a schedule, pulls fresh Google News headlines, uses Anthropic Claude to draft a LinkedIn company-page post, generates and uploads slide images via a helper workflow using Google Gemini, then emails you for approval before publishing to LinkedIn and logging the outcome to Google Sheets.

## How it works
1. Runs every day at 09:20 am based on a schedule trigger. The time can of course be changed in the trigger
2. Loads your publication and LinkedIn company-page settings, selects a rotating daily content pillar, and fetches related Google News RSS headlines.
3. Uses Anthropic Claude to pick one timely, small-business-focused post idea grounded in the pulled headlines.
4. Uses Anthropic Claude to write the LinkedIn hook, body text, hashtags, and a slide-by-slide plan for either a single image or a carousel.
5. Builds brand-consistent image prompts, then calls a separate helper workflow to generate each slide image with Google Gemini and upload the images to LinkedIn.
6. Emails the finished post text and slide preview links via Gmail and waits for your approve/decline decision.
7. If approved, publishes the single-image or multi-image post to the LinkedIn company page and logs the approved post to Google Sheets; if declined, skips publishing and logs the decline to Google Sheets.

## Setup
1. Create and connect credentials for Anthropic (Claude), LinkedIn OAuth2 (with permission to post as an organization), Gmail, and Google Sheets.
2. Import the companion helper workflow that generates and uploads one LinkedIn slide image with Google Gemini, then select it in the “Make Slide Image (helper workflow)” step.
3. Update the “Your Settings” values (publication name, publication promise, LinkedIn organization ID, approval email, and post type mode).
4. Choose the target Google Sheets document and sheet in both logging steps, and ensure the sheet has columns for date, topic (including the trailing space as configured), type, status, and angle.

## Additional info
Hello,
I have not added the sub-worflow for image generation with this template. I will do that in the next template upload attempt but I am unsure if I can because I read that without the first template approval, second cannot be submitted. 

Thanks,
Prakhyat

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Execute Sub-workflow, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
