# 🎬 Autonomous blog publishing from YouTube videos with ChatGPT, Sheets, Apify, Pexels & WordPress

> ⚡ **147 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Autonomous YouTube - Blog Builder / SEO Autopublisher (Sheets, ChatGPT, Apify, Pexels, WordPress) – Multilanguage

**100% autonomous** workflow that transforms **YouTube videos** into **unique, high-quality, SEO-optimized blog articles** and automatically publishes them to WordPress. No human intervention required: it uses **YouTube as the main source** for fresh, original content ideas, manages a **keyword bank in Google Sheets**, finds relevant videos via **Apify**, **transcribes**, **writes**, **formats**, selects a **featured image** via Pexels, generates **SEO metadata**, and **publishes**.
When all keywords are used, it will **automatically generate new ones** (avoiding duplicates) to keep producing content without interruptions.

**Estimated cost per post** (including ChatGPT + Apify (free 5$ new user)) → **\$0.01 – \$0.03** depending on video length.

Includes:

* **Access to APIs with 7-day free trials** (Apify, Pexels, etc.).
* **Step-by-step documentation** to get each API key.
* **Basic setup support** to get you started.

## Who it’s for

* Agencies and creators looking to **scale blogging** from video content.
* SEO teams needing **automation with quality control**.
* Technical bloggers who want **hands-off publishing** with tracking.

## SEO
* SEO teams needing **automation with quality control (modifiable from the options node like including h1, hierarchy among other SEO options)**.
* The title and description of the page (SEO) is based on the language in which the blog was created
* Allows you to add keywords

## How it works (phase summary)

**Part 1 – Keyword initialization**

* Manual or scheduled trigger.
* Checks if the Google Sheet is empty; if so, **generates 10 keywords** based on a seed idea and saves them.

**Part 2 – Keyword management & blog settings**

* Includes an **“options” node** to configure global blog language and formatting rules (H1, headings, bold, intro, conclusion, etc.).
* Selects a keyword with `false` status (unused), marks it `true` with a **usage date**, and if none are left, **generates new ones** while avoiding duplicates.

**Part 3 – Video search & duplicate filtering**

* Searches YouTube via **Apify** using the keyword, retrieves \~30 results, **excludes Shorts**, and selects **2 videos** based on title/description/hashtags.
* Checks for duplicates; if found, **retries up to 5 times** with variations.
* If still duplicated, discards the keyword and selects another.

## Error Handling & Continuity

Includes **fallbacks and failure alerts in every critical node** to ensure the workflow keeps running even if a step fails.

**Part 4 – Article creation**

1. **Transcribes** the video (cost included in \$0.01–\$0.03).
2. ChatGPT writes a formal blog post in the **language set** in the “options” node.
3. A second ChatGPT step applies the formatting rules (structure, H1/H2…, intro/conclusion).
4. Ensures **SEO compliance**.
5. Converts **Markdown → HTML** and **publishes** to WordPress (more info results screenshots).

**Part 5 – Image & final publishing**

* Searches **Pexels API** for images using the post keyword.
* ChatGPT chooses the most suitable image; it’s **downloaded and attached** to the post.
* Generates an SEO **title** and **meta description** based on the content.
* Sends an **email confirmation** with the published URL (with the chosen language, more info screenshots).

## Requirements

* **OpenAI / ChatGPT** (or compatible provider for transcription and writing).
* **Google Sheets** (keyword storage and usage tracking).
* **Apify** (YouTube search (free 5$ new user)).
* **Pexels API** (image sourcing (free api)).
* **WordPress REST API** (user with permissions to create posts/media).

## Costs & limits (important)

* **Cost per post:** **\$0.01 – \$0.03** (ChatGPT + Apify included (free 5$ new user)).
* **Rate limits**: respect YouTube/Apify, Pexels, and OpenAI limits.

## Thoroughly Tested for Reliability and Performance

* This workflow has been **carefully tested in multiple scenarios** to ensure optimal functionality, stability, and accuracy.
* Various edge cases and potential failure points were simulated, and fallback mechanisms were implemented to handle unexpected situations.
* The result is a **robust and reliable automation** you can run confidently in production environments.

The workflow is multi-language and it has been tested to create blogs in (Russian, Spanish, English, German and French) all the results were verified and good

## Screenshots

- [Is it really autonomous?](https://i.ibb.co/HLbrHmhq/Screenshot-20250811-193829-Chrome.jpg)  
- [Blog example (Eng) – P1](https://i.ibb.co/T914gbr/example-blog-eng-lang.jpg)  
- [Blog example (Eng) – P2](https://i.ibb.co/vvDpS1CV/example-blog-eng-lang-2.jpg)  
- [Blog example (IT)](https://i.ibb.co/zhzHFjHn/example-blog-it-lang.jpg)  
- [Email received](https://i.ibb.co/przyrwQz/blog-created-email.jpg)  

**More info and photos:** [oriolrotllant3@gmail.com](mailto:oriolrotllant3@gmail.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Rename Keys, Wordpress, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
