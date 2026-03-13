# 🔬 Build your own Youtube MCP server

> ⚡ **3,613 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This n8n demonstrates how to build a simple Youtube MCP server to look up videos on Youtube and download their transcripts for research purposes.

Youtube videos are a great source of new and updated information on a variety of cutting edge developments but they''re are not always simple to understand and lengthy videos may take too much time. Using this MCP server, you extract and feed their transcripts for your AI agents which then allows it to breakdown the content into manageble learnings and insights.

### How it works
* A MCP server trigger is used and connected to 3 custom workflow tools: Youtube Search, Youtube Transcripts and Usage Reports.
* Both Youtube tools use an external scraping service called [APIFY.com](https://www.apify.com?fpr=414q6). This is my preference as it's a much simpler interface and there are no rate limits.  
* The Youtube Search fetches 10 results based on the user's query.
* The Youtube Transcripts downloads the subtitles from one or more given URL.
* The usage reports pulls in your monthly [APIFY.com](https://www.apify.com?fpr=414q6) monthly spending and limits as a way to check your account.

### How to use
* This Apify Youtube MCP server allows any compatible MCP client to research YouTube videos for any desired topic. An Apify account is required however to connect and use the service.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Alternatively, connect any n8n AI agent with the MCP client tool.
* Try the following queries in your MCP client:
  * "what is MCP?"
  * "How can I use MCP in n8n?"
  * "How can I use Apify's official MCP server?"

### Requirements
* [APIFY.com](https://www.apify.com?fpr=414q6) for Youtube Scraping. This is a paid service but there is a $5 free tier which is ample for this template.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Add as many [APIFY.com](https://www.apify.com?fpr=414q6) actors as required for your use-case or users. Consider using Apify's official MCP server for 4000+ available tools.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
