# 🔧 Draft and review restaurant review replies with OpenAI and n8n forms

> ⚡ **1 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow collects a restaurant review through an n8n Form, uses OpenAI to draft an on-brand public reply, runs safety checks for risky wording, and presents the draft for human approval and editing so you can copy it to Google, Yelp, Facebook, or other platforms.

## How it works
1. Receives a review submission through an authenticated n8n Form with the reviewer name, star rating, platform, and review text.
2. Normalizes the input, flags sensitive topics (for example illness, allergies, legal threats, refunds, or prompt-injection text), and builds brand-voice instructions from your configured settings.
3. Sends the prepared prompt to an OpenAI chat model to generate a short draft reply with your required tone and sign-off.
4. Scans the draft for policy and quality issues (such as refunds/freebies, staff names, last names, argumentative language, emojis/hashtags, or missing sign-off) and applies safe fallbacks or cleanup when needed.
5. Shows an editable approval form with the draft and any flags, where you choose to use or discard the reply.
6. Displays a final “Ready to copy” message with the approved text, or confirms the draft was discarded, without posting anything to review platforms.

## Setup
1. Add an OpenAI (or OpenAI-compatible) API credential and select the model in the OpenAI Chat Model step.
2. Update the Settings values (restaurant name, brand voice, sign-off, contact line, and whether offers are allowed) to match your business.
3. Publish the workflow and use the production URL of the n8n Form (and ensure n8n user authentication is appropriate for who should access it).

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
