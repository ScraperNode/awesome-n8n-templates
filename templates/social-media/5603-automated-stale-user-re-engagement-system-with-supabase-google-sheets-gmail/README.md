# 📱 Automated stale user re-engagement system with Supabase, Google Sheets & Gmail

> ⚡ **179 views** · 📱 [Social Media & Email Marketing](../)

## Description

Built this workflow because most of our users signed up, then vanished after ~30 days.
It runs daily, grabs those stale users from Supabase, updates a Google Sheet for tracking, and automatically sends each one a personalized HTML email through Gmail to bring them back.

All fully automated — so once it’s set up, it quietly does its job in the background.
Currently, it only supports Supabase, but the concept should work with any DB or API if you swap out the request node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
