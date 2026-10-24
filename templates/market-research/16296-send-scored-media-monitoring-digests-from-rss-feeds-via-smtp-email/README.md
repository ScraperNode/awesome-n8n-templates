# 📊 Send scored media monitoring digests from RSS feeds via SMTP email

> ⚡ **30 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs hourly to read multiple RSS/Atom feeds, applies rule-based topic matching, relevance scoring, sentiment and entity tagging with deduplication, and then sends scored HTML email digests via SMTP (optionally routed per audience) when new matches are found.

## How it works
1. Runs on an hourly schedule trigger.
2. Loads the monitoring configuration (feed URLs, topic include/exclude rules, scoring weights, sentiment lexicon, entity aliases, and digest recipients).
3. Fetches items from each configured RSS/Atom feed and continues even if a feed fails.
4. Normalizes each article, drops items that match no topic, scores relevance and sentiment, tags matching entities, and de-duplicates links across runs using workflow static data.
5. Builds one or more HTML email digests (a full digest plus optional routed digests filtered by topic) and applies minimum relevance and maximum item limits.
6. Skips sending when there are zero matches unless empty-run emails are enabled, then sends each digest via SMTP email.

## Setup
1. Add an SMTP credential to the email-sending step so n8n can send messages.
2. Update the Config settings with your feed URLs, topic rules, entity aliases, scoring/lexicon values, and digest sender/recipient addresses (including any route-specific recipients and topic filters).
3. Optionally adjust the schedule interval and the deduplication cap (seenCap) to fit your monitoring cadence and retention needs.

## 🔗 Nodes Used

Send Email, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
