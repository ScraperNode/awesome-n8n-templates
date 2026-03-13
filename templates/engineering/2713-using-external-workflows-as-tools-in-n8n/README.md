# ⚒️ Using external workflows as tools in n8n

> ⚡ **3,940 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This guide will show you how to use a workflow as a reusable tool in n8n, such as integrating an AI Agent or other specialized processes into your workflows.

By the end of this example, you'll have a simple, reusable workflow that can be easily plugged into larger projects, making your automations more efficient and scalable.

![url_to_crawl.png](fileId:894)

With this approach, you can create reusable workflows like "Scrape a Page," "Search Brave," or "Generate an Image," which you can then call whenever needed.

While n8n makes it easy to build these workflows from scratch, setting them up as reusable components saves time as your automations grow in complexity.

Setup

Add the "Execute Workflow Trigger" node

Add the node(s) to perform the desired tasks in the workflow

Add a final "Set" or "Edit Fields" node at the end to ensure all external workflows return a consistent output format

Details

In this example, the "Execute Workflow Trigger" expects input in the following JSON format:

```json
[
  {
    "query": {
      "url": "https://en.wikipedia.org/wiki/some_info"
    }
  }
]
```

Once your external workflow is ready, you can instruct the AI Agent to use this tool by connecting it to the external workflow. Set up the schema type to "Generate from JSON Example" using this structure:

```json
{
  "url": "URL_TO_GET"
}
```
![generate_json.png](fileId:896)

Finally, ensure your external workflow includes a "Set" or "Edit Fields" node at the end to define the response format. This helps keep the outputs of your reusable workflows consistent and predictable.

![response.png](fileId:895)

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
