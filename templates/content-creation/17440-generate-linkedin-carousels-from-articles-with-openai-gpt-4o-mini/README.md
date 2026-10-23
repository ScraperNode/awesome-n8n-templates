# 🎬 Generate LinkedIn carousels from articles with OpenAI GPT-4o-mini

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Send article text or a URL to generate a validated LinkedIn carousel with an exact slide count, caption, hashtags, alt text, and Canva-ready copy. The workflow only prepares content; it does not publish to LinkedIn.

## How it works
1. Receives a POST request containing article text or a URL, plus optional language, audience, and slide count.
2. Normalizes the input, validates that a source is present, and constrains the requested slide count to 5–10.
3. If a URL is provided, fetches the page and extracts readable text from the returned HTML.
4. Sends the source content and formatting requirements to OpenAI to generate structured carousel JSON.
5. Parses the response, keeps exactly the requested number of slides, normalizes the language and audience, and creates Canva-ready copy.
6. Validates the final carousel and returns the structured result through the webhook response.

## Setup
1. Create an OpenAI API credential in n8n and select it in the OpenAI node.
2. Activate the workflow and copy the production webhook URL. Send a POST request containing text or articleText/content, or url/articleUrl.
3. Optionally provide language, audience, and slideCount. slideCount must be between 5 and 10; the default language is Spanish and the default audience is B2B content creators and consultants.

## Requirements
- An OpenAI API credential with permission to make chat completion requests.
- A client or automation capable of sending POST requests to an n8n webhook.
- For URL inputs, the article must be publicly reachable and return readable HTML.

## Customization
- language: output language code, such as es or en.
- audience: target audience for the carousel.
- slideCount: exact number of slides, from 5 to 10.
- Source mode: provide either article text or a publicly accessible URL.

## Additional info
The workflow does not publish to LinkedIn or create Canva designs. It returns structured JSON and a formatted copy block for manual use in Canva or another design tool. Pages requiring authentication, heavy client-side rendering, or anti-bot verification may not return usable article text. Review AI-generated claims before publication.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
