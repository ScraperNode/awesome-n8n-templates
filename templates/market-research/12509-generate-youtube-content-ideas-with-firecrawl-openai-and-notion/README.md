# 📊 Generate YouTube content ideas with Firecrawl, OpenAI and Notion

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

## Description

This workflow acts as an autonomous **Chief Solution Officer**, automating the process of deep market research. Instead of simply tracking video views, it scrapes deep into YouTube data—including descriptions and top 20 comments—to identify the real "Decision Confusion" and "Operational Pain Points" of your target audience.

By analyzing what competitors are missing and what their audience is actually complaining about, it generates five data-backed, strategic content ideas that focus on high-level business logic rather than generic advice.

**Use cases are many:**

* **Competitor Gap Analysis:** Identify specific topics your niche is ignoring but the audience is begging for.
* **Content Strategy Automation:** Shift your output from basic tutorials to "System-Thinking" content that attracts decision-makers.
* **Market Voice Extraction:** Capture the literal "voice of the customer" from thousands of comments without manual reading.

**Good to know**

* **Strategic Persona:** The AI Agent uses a "Sage + Ruler" archetype to ensure professional, objective, and high-value output.
* **Deep Scraping:** Powered by Firecrawl, it bypasses basic metadata to read actual audience sentiment in the comments section.
* **Sentence Case:** All outputs and headers follow n8n’s preferred capitalization standards.

**How it works**

1. **Targeting:** You define your niche or search keyword in the initial configuration node.
2. **Data Extraction:** Firecrawl searches YouTube and scrapes the most relevant video details and comment threads.
3. **AI Logic:** The OpenAI node analyzes the "Audience Voice" to find patterns of frustration and unmet needs.
4. **Strategizing:** It converts these insights into 5 actionable content briefs with unique strategic angles.
5. **Storage:** All insights and content ideas are automatically organized and saved into your Notion workspace.

**Setup steps**

1. **Firecrawl:** Get your API Key from firecrawl.dev and add it to the Header Auth in the HTTP nodes.
2. **OpenAI:** Connect your OpenAI credentials (GPT-4o recommended for best results).
3. **Notion:** Connect your Notion account and prepare two databases for "Insights" and "Ideas."
4. **Configuration:** Enter your target keyword in the 'Set Niche' node and run the workflow.

**Requirements**

* Firecrawl API Key
* OpenAI API Key
* Notion Integration

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
