# 📊 Spot workplace discrimination patterns with AI

> ⚡ **4,824 views** · 📊 [Market Research & Insights](../)

## Description

![Spot Workplace Discrimination Patterns with AI.png](fileId:924)

## How It Works:
• Scrapes company review data from Glassdoor using ScrapingBee.
• Extracts demographic-based ratings using AI-powered text analysis.
• Calculates workplace disparities with statistical measures like z-scores, effect sizes, and p-values.
• Generates visualizations (scatter plots, bar charts) to highlight patterns of discrimination or bias.


### Example Visualizations:
![twilio_effect_size.png](fileId:922)![twilio_scatter_plot.png](fileId:923)

## Set Up Steps:
*Estimated time: ~20 minutes.*
• Replace ScrapingBee and OpenAI credentials with your own.
• Input the company name you want to analyze (best results with large U.S.-based organizations).
• Run the workflow and review the AI-generated insights and visual reports.

This workflow empowers users to identify potential workplace discrimination trends, helping advocate for greater equity and accountability.

#### Additional Credit: [Wes Medford](https://medium.com/@wryanmedford/an-open-letter-to-twilios-leadership-f06f661ecfb4)
For algorithms and inspiration

## 🔗 Nodes Used

HTTP Request, QuickChart, Basic LLM Chain, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
