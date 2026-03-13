# 📱 Automate tweet filtering and replies on X with GPT and scheduled rotation

> ⚡ **1,259 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

# Automate tweet engagement on X (formerly Twitter)

## Description

Automate professional engagement on X (formerly Twitter) by searching for, filtering, liking, and replying to tweets that match your key topics. This workflow enables you to engage consistently and efficiently with relevant conversations, using your defined professional role and the power of GPT for filtering and replies. Save time and maintain high-quality interactions, while staying focused on your business or personal brand interests.

---

## How it Works

1. **Rotating Topic Selection**
   The workflow selects one search term from your list on each run, using a rotating index based on the date.

2. **Search Tweets & Extract Essentials**
   Searches X (formerly Twitter) for tweets matching the chosen topic, then extracts only the tweet `id` and `text` for further processing.

3. **GPT‑Based Filtering with Role Context**
   Filters tweets based on your role and strict criteria, removing non-English tweets, memes, spam, Grok-generated content, political posts, internships, and more.

4. **Engagement Loop**
   For every filtered tweet, the workflow likes the post, generates a professional, concise reply with GPT (matching language and context), and posts the reply. Wait nodes ensure compliance with Twitter’s API rate limits (can be adjusted for paid API tiers).

---

## Requirements

* X (Twitter) API credentials (for searching, liking, and replying to tweets)
* OpenAI API key (for GPT-based steps)

---

## Setup Steps

1. **Obtain your X (Twitter) API credentials.**
2. **Obtain your OpenAI API key.**
3. **Configure the schedule** in the trigger node to your desired frequency (e.g., every 3 days or daily).
4. **Set your list of topics and professional role** in the variables node.

---

## How to Customize the Workflow (Optional)

* **Adjust prompts** in the GPT nodes to fine-tune filtering and reply style.
* **Upgrade your Twitter API plan** to increase request limits and search for more tweets per run.
* **Change tweet processing logic:** For high-volume engagement (e.g., analyzing 100+ tweets per run), consider switching to a per-tweet loop for advanced filtering and response handling.

---

**This workflow enables scalable, professional, and targeted engagement on X (formerly Twitter), fully customizable to your audience and objectives.**

## 🔗 Nodes Used

X (Formerly Twitter), Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
