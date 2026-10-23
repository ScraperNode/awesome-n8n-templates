# 📱 Reply to Facebook ad comments with OpenRouter AI, Google Docs and Slack

> ⚡ **309 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Every comment on your Facebook ad is a sales opportunity.
But manually replying to dozens of comments every day - in the right tone,
in the right language, at the right speed - is simply not scalable.

This workflow deploys an AI agent that watches your boosted Facebook posts 24/7,
classifies every incoming comment, and instantly posts a smart public reply -
so your ads stay engaged, your leads get answered, and your team only steps in
when it truly matters.

---

### 🚨 The Problem This Solves

When businesses and agencies run Facebook Ads, comments pile up fast:

- **Queries go unanswered** for hours, killing purchase intent
- **Positive reviews get ignored**, wasting social proof
- **Negative reviews stay public** with no response, damaging brand trust
- **Spam clutters the thread**, making the brand look unmonitored
- **Manual replies are slow**, inconsistent, and cost agency time

This workflow eliminates all four problems automatically — with zero manual effort
for routine engagement and instant alerts for anything that needs a human touch.

---

### ⚙️ How It Works

1. **Webhook** fires every time someone comments on your Facebook page
2. **Filter** skips comments by the page owner and ignores non-boosted organic posts —
   only real comments on active ad posts continue
3. **Get Comment Details** fetches the full comment text from the Facebook Graph API
4. **Skip Attachments** drops GIF, sticker, and image-only comments —
   only text comments are processed
5. **Get Post Data** fetches the original ad post text so the AI understands the context
6. **AI Classifier** reads both the ad and the comment together, then classifies into:
   `QUERY` · `POSITIVE_REVIEW` · `NEGATIVE_REVIEW` · `SPAM`
7. **Switch** routes each classification to the right action branch
8. **AI Reply Generator** writes a warm, human-sounding public reply —
   automatically in the commenter's own language (English / Urdu / mixed)
   and searches your Google Docs Knowledge Base for accurate answers to queries
9. **Reply to Comment** posts the reply publicly on Facebook via Graph API
10. **Slack Alert** sends your team a full notification with commenter name,
    comment text, post link, and comment link — for every negative review
    that needs a manual response

---

### ✅ Key Benefits

- **Always-on engagement**: Replies post instantly, day or night, no human needed
- **Context-aware AI**: Reads the ad post AND the comment together before classifying —
  not just the comment alone
- **Multilingual replies**: Automatically matches the language of the commenter —
  English, Urdu, or mixed — without any configuration
- **Knowledge Base powered**: Queries are answered using your own pricing, FAQs,
  and service info stored in Google Docs — no hallucinated answers
- **Smart escalation**: Negative reviews never get an auto-reply —
  your team is alerted on Slack immediately with full context
- **Spam-proof**: Attachment comments and spam are silently ignored,
  keeping your workflow clean and cost-efficient

---

### 🛠️ Setup Steps

1. Subscribe your Facebook Page to webhook feed events and paste the webhook URL
2. Add your **Facebook Graph API access token** to the Query Auth credential
3. Add your **OpenRouter API** credential (used for both classification and reply generation)
4. Create a **Google Doc** with your agency's FAQs, services, and pricing —
   paste the document ID into the Knowledge Base node
5. Connect your **Slack** account and update the Slack user ID
   in the Inform User node to the right team member
6. In the **Filter node**, replace `your page name` with your actual Facebook page name

⏱️ Estimated setup time: 20–30 minutes

---

### 📋 Requirements

- Facebook Page with webhook subscription (feed changes)
- Facebook Graph API access token
- OpenRouter account (LLM — supports all major models)
- Google Docs account (Knowledge Base document)
- Slack account (for negative review alerts)

---
For assistance and support: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
