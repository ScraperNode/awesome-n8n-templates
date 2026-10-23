# 📊 Analyze Instagram profiles with Apify, Google Gemini, and Supabase

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Description
## **Who’s it for**
This workflow is designed for **students, teachers, and exam preparation content creators** who want to automate the creation and sharing of **multiple-choice questions (MCQs)** with short explanations and notes.

## How it works
- A **Schedule Trigger** runs daily (or at your chosen interval).
- An AI Agent powered by Google Gemini Chat Model generates:
- MCQs with short explanations
- Short exam notes
- The generated content is **automatically stored in Google Sheets** for tracking and reuse.
- A **Telegram node instantly posts** the new MCQs and notes to your chosen channel or group.

This makes it easy to **create, store, and share** exam prep material consistently without manual effort.

## How to set up
- Connect your **Google account** to use Google Sheets.
- Connect your **Telegram Bot** to post messages.
- Add your Gemini** API key** to the AI Agent.
- Adjust the **schedule frequency** as per your study/teaching plan

## Requirements
- **Google account** with Sheets access
- **Telegram Bot** + channel/group
- Google Gemini **API key**

## How to customize
- **Modify the AI prompt** to change exam subject or difficulty.
- Adjust the **format of stored data** in Google Sheets (e.g., columns for Question, Options, Answer, Explanation, Notes).
- Change the **Telegram message formatting** to include only MCQs, only notes, or both.

## 🔗 Nodes Used

Webhook, Supabase, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
