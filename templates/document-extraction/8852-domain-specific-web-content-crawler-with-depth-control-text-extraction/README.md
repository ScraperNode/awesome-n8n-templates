# 🔬 Domain-specific web content crawler with depth control & text extraction

> ⚡ **1,914 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This template implements a recursive web crawler inside n8n. Starting from a given URL, it crawls linked pages up to a maximum depth (default: 3), extracts text and links, and returns the collected content via webhook.

---

## 🚀 How It Works

1) **Webhook Trigger**  
   Accepts a JSON body with a `url` field.  
   Example payload:
    
    { "url": "https://example.com" }

2) **Initialization**  
   - Sets crawl parameters: `url`, `domain`, `maxDepth = 3`, and `depth = 0`.  
   - Initializes global static data (`pending`, `visited`, `queued`, `pages`).

3) **Recursive Crawling**  
   - Fetches each page (HTTP Request).  
   - Extracts body text and links (HTML node).  
   - Cleans and deduplicates links.  
   - Filters out:
     - External domains (only same-site is followed)  
     - Anchors (#), mailto/tel/javascript links  
     - Non-HTML files (.pdf, .docx, .xlsx, .pptx)

4) **Depth Control & Queue**  
   - Tracks visited URLs  
   - Stops at `maxDepth` to prevent infinite loops  
   - Uses SplitInBatches to loop the queue

5) **Data Collection**  
   - Saves each crawled page (`url`, `depth`, `content`) into `pages[]`  
   - When `pending = 0`, combines results

6) **Output**  
   - Responds via the Webhook node with:
     - `combinedContent` (all pages concatenated)
     - `pages[]` (array of individual results)
   - Large results are chunked when exceeding ~12,000 characters

---

## 🛠️ Setup Instructions

1) **Import Template**  
   Load from n8n Community Templates.

2) **Configure Webhook**  
   - Open the **Webhook** node  
   - Copy the Test URL (development) or Production URL (after deploy)  
   - You’ll POST crawl requests to this endpoint

3) **Run a Test**  
   Send a POST with JSON:

    curl -X POST https://&lt;your-n8n&gt;/webhook/&lt;id&gt; \
      -H "Content-Type: application/json" \
      -d '{"url": "https://example.com"}'

4) **View Response**  
   The crawler returns a JSON object containing `combinedContent` and `pages[]`.

---

## ⚙️ Configuration

- **maxDepth**  
  Default: 3. Adjust in the **Init Crawl Params** (Set) node.

- **Timeouts**  
  HTTP Request node timeout is 5 seconds per request; increase if needed.

- **Filtering Rules**  
  - Only same-domain links are followed (apex and `www` treated as same-site)  
  - Skips anchors, `mailto:`, `tel:`, `javascript:`  
  - Skips document links (.pdf, .docx, .xlsx, .pptx)  
  - You can tweak the regex and logic in **Queue & Dedup Links** (Code) node

---

## 📌 Limitations

- No JavaScript rendering (static HTML only)  
- No authentication/cookies/session handling  
- Large sites can be slow or hit timeouts; chunking mitigates response size

---

## ✅ Example Use Cases

- Extract text across your site for AI ingestion / embeddings  
- SEO/content audit and internal link checks  
- Build a lightweight page corpus for downstream processing in n8n

---

## ⏱️ Estimated Setup Time

~10 minutes (import → set webhook → test request)

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
