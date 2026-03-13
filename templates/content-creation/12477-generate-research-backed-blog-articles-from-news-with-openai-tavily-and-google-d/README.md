# 🎬 Generate research-backed blog articles from news with OpenAI, Tavily and Google Docs

> ⚡ **48 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## **How it works**

This workflow automatically generates full-length, research-backed blog articles from online news sources. It collects headlines from selected URLs, extracts topic ideas, creates an outline, writes well-structured sections with citations, compiles the article, and finally exports the completed piece to Google Docs. The workflow supports SEO outputs such as title, slug, and meta description, making the article ready for publication.

---

## **Key Features**

*  **Automatically discovers article topics** from live news sources
*  **Uses AI + Tavily research** to create credible, well-structured content
*  **Generates full article sections** with inline citations and internal links
*  **Merges sections into a refined 1000–1500 word article**
*  **Creates SEO metadata** — title, slug, and meta description
*  **Exports the final article to Google Docs automatically**
*  Supports multiple topics via batch looping

---

## **Step-by-Step Workflow**

### **1️⃣ News Extraction**

The workflow begins by fetching content from the configured URLs using the **Extract** node. The scraped page content is processed to pull out headlines and article references.

### **2️⃣ Topic Identification**

The **AI Agent** analyzes the extracted headlines and converts them into meaningful blog topic suggestions.

### **3️⃣ Topic Looping**

Each topic is processed individually using a loop, ensuring one full article is generated per topic.

### **4️⃣ Table of Contents Generation**

The **Table of Contents Agent** creates a structured outline for the article:

* Performs research via **Tavily**
* Identifies key subtopics
* Produces an engaging section plan

### **5️⃣ Section Writing**

For each section in the outline:

* Content is expanded into a complete paragraph or section
* Tavily research is used for validation
* Inline hyperlinks and citations are added where appropriate
* Content is written in an **informational article style**

### **6️⃣ Article Assembly**

All generated sections are merged and refined into a complete article:

* Improves readability and flow
* Ensures consistent tone
* Adds a **Sources** section at the end

### **7️⃣ SEO Enhancements**

The workflow automatically generates:

*  **Article Title**
*  **SEO Slug** (hyphen-separated, lowercase)
*  **Meta Description** (~160 characters)

### **8️⃣ Google Docs Export**

The workflow:

* Creates a new Google Doc
* Inserts the complete article
* Saves it to the configured Drive folder

---

## **API & Services Required**

*  **OpenAI API** — article generation, structuring, and metadata
*  **Tavily API** — research and citation support
*  **Google Docs OAuth2** — document creation and export

*(Optional)* You may add additional sources, categories, or CMS publishing integrations.

## 🔗 Nodes Used

Google Docs, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
