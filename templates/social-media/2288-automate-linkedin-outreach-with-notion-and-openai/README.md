# 📱 Automate LinkedIn Outreach with Notion and OpenAI

> ⚡ **20,530 views** · 📱 [Social Media & Email Marketing](../)

## Description

This template is based on the [following template](https://n8n.io/workflows/2273-automated-workflow-for-daily-linkedin-posts-using-notion/). Thank you for the groundwork, Matheus.

## How it works:
1. Store your snippets of text in a Notion table.  Each snippet should have an image associated with it (copy + pasted into the text)
2. Connect to your table via a Notion _"integration"_, from which N8N can then query your pre-meditated posts
3. The text is fed through an OpenAI assistant to boost engagement via formatting
4. The re-formatted text along with the image pulled from the Notion snippet are combined into a post for your LinkedIn
5. The row in the original Notion table from step 1 containing this post is set to a status of _"Done"_

## Set up steps:
- You will need to create a Notion _"integration"_, which will yield a _"secret key"_ which you enter into your N8N as a _"Credential"_. 
- You will need to create a LinkedIn _"app"_ in order to post on your behalf.  When creating your LinkedIn _"app"_, you will be required to link this _"app"_ to a company page on LinkedIn.  If you are doing this for yourself, seach for the _"Default Company Payge (for API testing)"_, and select this page as it is provided by LinkedIn for individuals.  You can find your LinkedIn apps here, and if you get stuck, further instructions on setting up this workflow (including this LinkedIn OAuth piece) can be found in this [YouTube Video Aide](https://www.youtube.com/watch?v=oOgmv6E9PAM) to these instructions.
- Lastly, you will need to create an OpenAI API key, found on your [OpenAI Playground Dashboard](https://platform.openai.com/playground/chat).  Once you created an API key, make sure you have an assistant created from the _"Assistants"_ tab on the OpenAI dashboard.  This assistant and its instructions will be needed for carrying out the re-formatting of your post.

## 🔗 Nodes Used

HTTP Request, LinkedIn, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
