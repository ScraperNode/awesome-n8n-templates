# 📱 Translate & repost Twitter threads in multiple languages with OpenAI

> ⚡ **5,329 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Twitter Thread (Flood) Translator & Poster

## What it does

- **Thread Extraction:** Automatically detects and extracts all tweets from a provided Twitter thread (flood) link.
- **Translation:** Translates each extracted tweet into your target language using OpenAI.
- **Rewriting:** Rewrites each translated tweet to maintain the original meaning while improving clarity or style.
- **Automated Posting:** Posts the rewritten tweets as a new thread on Twitter using twitterapi.io, preserving the original thread structure.

## How it works

- Accepts a Twitter thread (flood) link as input.
- Extracts all tweets from the thread in their original order.
- Each tweet is sent to OpenAI for translation into your desired language.
- The translated tweets are then rewritten for clarity and natural flow, while keeping the original meaning intact.
- The processed tweets are automatically posted as a new thread on your Twitter account via twitterapi.io.

## Setup Steps

1. **Create a Notion Database:**  
   Set up a database page in Notion to store and manage your Twitter links and workflow data.
2. **Configure Notion Integration:**  
   Add the created database page ID to the Notion nodes in your workflow.
3. **Set Twitter API Credentials:**  
   Add your twitterapi.io API key to the relevant nodes.
4. **Add Twitter Account Details:**  
   Enter your Twitter account username/email and password for authentication.
5. **Set Up OpenAI Credentials:**  
   Provide your OpenAI API credentials to enable translation and rewriting.
6. **Subworkflow Integration:**  
   Create a separate workflow for subworkflow logic and call it using the Execute Workflow node for modular automation.
7. **Set Desired Language & Thread Link:**  
   Change the target language and Twitter thread (flood) link directly in the Manual Trigger node to customize each run.

## Benefits

- **Ultra Low Cost:** **Total cost for a 15-tweet thread (flood) is just $0.016 USD** ($0.015 for twitterapi.io + $0.001 for OpenAI API). *(Actual cost may vary depending on the density of tweets in the thread.)*
- **End-to-End Automation:** Go from thread extraction to translation, rewriting, and reposting-all in one workflow.
- **Multilingual Support:** Effortlessly translate and republish Twitter threads in any supported language.



&gt; **Note:** Detailed configuration instructions and node explanations are included as sticky notes within the workflow canvas.

---

**Ideal for:**  
- Content creators looking to reach new audiences by translating and republishing Twitter threads  
- Social media managers automating multilingual content workflows  
- Anyone wanting to streamline the process of thread extraction, translation, and posting

---

## Notes

- This workflow is **not able to post images or videos to Twitter**-it handles text-only threads.

## 🔗 Nodes Used

Function, HTTP Request, Execute Sub-workflow, X (Formerly Twitter), Notion, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
