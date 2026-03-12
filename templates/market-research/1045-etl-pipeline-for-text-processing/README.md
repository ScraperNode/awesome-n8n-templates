# 📊 ETL pipeline for text processing

> ⚡ **9,841 views** · 📊 [Market Research & Insights](../)

## Description

This workflow allows you to collect tweets, store them in MongoDB, analyse their sentiment, insert them into a Postgres database, and post positive tweets in a Slack channel.

![workflow-screenshot](fileId:481)

**Cron node:** Schedule the workflow to run every day

**Twitter node**: Collect tweets

**MongoDB node:** Insert the collected tweets in MongoDB

**Google Cloud Natural Language node:** Analyse the sentiment of the collected tweets

**Set node:** Extract the sentiment score and magnitude

**Postgres node:** Insert the tweets and their sentiment score and magnitude in a Posgres database

**IF node:** Filter tweets with positive and negative sentiment scores

**Slack node:** Post tweets with a positive sentiment score in a Slack channel

**NoOp node:** Ignore tweets with a negative sentiment score

## 🔗 Nodes Used

Cron, Postgres, Slack, Start, MongoDB, X (Formerly Twitter)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
