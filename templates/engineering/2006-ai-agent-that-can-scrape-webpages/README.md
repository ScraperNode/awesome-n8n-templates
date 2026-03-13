# ⚒️ AI agent that can scrape webpages

> ⚡ **276,305 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![n8nReAct.webp](fileId:720)

⚙️🛠️🚀🤖🦾

This template is a PoC of a ReAct AI Agent capable of fetching random pages (not only Wikipedia or Google search results).

On the top part there's a manual chat node connected to a LangChain ReAct Agent. The agent has access to a workflow tool for getting page content.

The page content extraction starts with converting query parameters into a JSON object. There are 3 pre-defined parameters:
- **url** – an address of the page to fetch
- **method** = full / simplified
- **maxlimit** - maximum length for the final page. For longer pages an error message is returned back to the agent

Page content fetching is a multistep process:
1. An HTTP Request mode tries to get the page content.

If the page content was successfuly retrieved, a series of post-processing begin:

2. Extract HTML BODY; content
3. Remove all unnecessary tags to recuce the page size
4. Further eliminate external URLs and IMG scr values (based on the method query parameter)
5. Remaining HTML is converted to Markdown, thus recuding the page lengh even more while preserving the basic page structure
6. The remaining content is sent back to an Agent if it's not too long (maxlimit = 70000 by default, see CONFIG node).

*NB:*
- You can isolate the HTTP Request part into a separate workflow.
- Check the Workflow Tool description, it guides the agent to provide a query string with several parameters instead of a JSON object.

Please reach out to [Eduard](https://www.linkedin.com/in/parsadanyan/) is you need further assistance with you n8n workflows and automations!

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 🔗 Nodes Used

HTTP Request, Markdown, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
