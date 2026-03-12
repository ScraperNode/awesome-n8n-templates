# 🎣 Autonomous AI crawler

> ⚡ **73,995 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow with AI agent is designed to navigate through the page to retrieve specific type of information (in this example: social media profile links). 

The agent is equipped with 2 tools:
- **text tool:** to retrieve all the text from the page, 
- **URLs tool:** to extract all possible links from the page.

💡 You can edit prompt and JSON schema connected to the agent in order to return other data then social media profile links. 

👉 This workflow uses Supabase as storage (input/output). Feel free to change it to any other database of your choice.  

🎬 See this workflow in action [in my YouTube video](https://youtu.be/2W09puFZwtY). 

## How it works?

The workflow uses the input URL (website) as a starting point to retrieve the data (e.g. example.com). Using the "URLs tool", the agent is able to retrieve all links from the page and navigate to them. 

For example, if you want to retrieve contact information, agent will try to find a subpage that might contain this information (e.g. example.com/contact) and extract the information using the text tool.  

## Set up steps

1. Connect database with input data (website addresses) or pin sample data to trigger node. 
2. Configure the crawling agent to retrieve the desired data (e.g. modify prompt and/or parsing schema).
3. Set credentials for OpenAI.
4. Optionally: split agent tools to separate workflows. 

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows/) and/or [my newsletter](https://workfloows.com/).

## 🔗 Nodes Used

HTTP Request, Supabase, Markdown, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
