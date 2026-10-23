# 🔧 Create and publish car campaigns from one photo with GPT-5, GPT Image 2, LTX 2.3 and Postoria

> ⚡ **77 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow turns a single car photo sent to a Telegram bot into an AI-directed campaign, generating hero frames with OpenAI GPT Image 2, optionally animating them into a short film with fal.ai LTX 2.3, and publishing or scheduling the result via Postoria while logging sessions and posts in n8n Data Tables.

## How it works
1. Triggers when a Telegram message arrives, asks for a photo if none is attached, and pre-fills a creative brief from the photo caption or the last saved session.
2. Collects the campaign objective, aspect ratio, film length, tone, and language via a Telegram form, then uploads the source image to ImgBB to get a public URL.
3. Compiles a production spec (including render sizes, beat plan, negative prompt, and cost estimate), opens a session row in an n8n Data Table, and uses an OpenAI (LangChain) multi-agent director to generate a structured campaign blueprint.
4. Sends the blueprint to Telegram for approval, optionally captures adjustment notes, and then generates one OpenAI GPT Image 2 edited hero frame per beat and presents them for review.
5. If frames are approved, renders one 5-second beat video per frame with fal.ai LTX 2.3 (with native audio), stitches successful beats into a single film using fal.ai FFmpeg Compose, and sends the finished video back to Telegram.
6. Opens a Telegram distribution console, imports the chosen asset (film or a selected still) into Postoria, publishes immediately or schedules it, and records session and post outcomes in n8n Data Tables.
7. Runs daily on a schedule to pull recent Postoria posts plus session logs, has OpenAI summarize throughput and bottlenecks, and sends an ops digest to a configured Telegram chat.

## Setup
1. Create the n8n Data Tables named `car_os_sessions` and `car_os_posts` with the expected columns so the session and post logging steps can read and update rows.
2. Add credentials for Telegram (bot token), OpenAI (API key for the GPT-5.x chat models used by the agents), Postoria (API key), ImgBB (API key via query auth), and fal.ai (HTTP Custom Auth header with your key).
3. In the configuration nodes, set your studio details (e.g. `studio_name`, `brand_link`, quality/pricing fields), and set `ops_chat_id` for the daily report destination.
4. Connect your social accounts inside Postoria and (if your Postoria API key has multiple workspaces) set the preferred workspace name in both workspace-picking code steps.
5. Ensure your n8n instance is reachable over public HTTPS so Telegram “send and wait” approvals can resume via webhook callbacks.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
