# ⚒️ Handle verification for Twitter webhook

> ⚡ **884 views** · ⚒️ [Engineering](../)

## Description

This workflow handles the incoming call from Twitter and sends the required response for verification.

On registering the webhook with the Twitter Account Activity API, Twitter expects a signature in response. Twitter also randomly ping the webhook to ensure it is active and secure.

![workflow-screenshot](fileId:605)

**Webhook node:** Use the displayed URL to register with the Account Activity API.

**Crypto node:** In the ***Secret*** field, enter your API Key Secret from Twitter.

**Set node:** This node generates the response expected by the Twitter API.


Learn more about connecting n8n with Twitter in the [Getting Started with Twitter Webhook](https://harshil.dev/writings/getting-started-with-twitter-webhook) article.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
