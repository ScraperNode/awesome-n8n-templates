# 🎬 Automate blog creation in brand voice with AI

> ⚡ **26,283 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

This n8n template demonstrates a simple approach to using AI to automate the generation of blog content which aligns to your organisation's brand voice and style by using examples of previously published articles.

In a way, it's quick and dirty "training" which can get your automated content generation strategy up and running for very little effort and cost whilst you evaluate our AI content pipeline.

## How it works
* In this demonstration, the n8n.io blog is used as the source of existing published content and 5 of the latest articles are imported via the HTTP node.
* The HTML node is extract the article  bodies which are then converted to markdown for our LLMs.
* We use LLM nodes to (1) understand the article structure and writing style and (2) identify the brand voice characteristics used in the posts.
* These are then used as guidelines in our final LLM node when generating new articles.
* Finally, a draft is saved to Wordpress for human editors to review or use as starting point for their own articles.

## How to use
* Update Step 1 to fetch data from your desired blog or change to fetch existing content in a different way.
* Update Step 5 to provide your new article instruction. For optimal output, theme topics relevant to your brand.

## Requirements
* A source of text-heavy content is required to accurately breakdown the brand voice and article style. Don't have your own? Maybe try your competitors?
* OpenAI for LLM - though I recommend exploring other models which may give subjectively better results.
* Wordpress for blog but feel free to use other preferred publishing platforms.

## Customising this workflow
* Ideally, you'd want to "train" your agent on material which is similar to your output ie. your social media post may not get the best results from your blog content due to differing formats.
* Typically, this brand voice extraction exercise should run once and then be cached somewhere for reuse later. This would save on generation time and overall cost of the workflow.

## 🔗 Nodes Used

HTTP Request, Wordpress, Markdown, Basic LLM Chain, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
