# 🎬 Turn customer reviews into multi-channel content with OpenAI, Gmail, and Google Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a customer review via an n8n form, uses OpenAI to analyze and score it, then either generates a 7-piece content pack and emails it to you or sends a short “below threshold” note, while logging every submission to Google Sheets.

## How it works
1. Receives a review submission through an n8n Form (review text, reviewer details, and your business info).
2. Uses OpenAI to extract structured “review intelligence” (tone, transformation, best quote, credibility signals) and assign a content opportunity score.
3. Routes the submission based on whether the score meets the threshold (7+).
4. For high-scoring reviews, uses OpenAI to generate seven platform-ready assets (LinkedIn long/short posts, X post, website testimonial, newsletter feature, thank-you email, and case study invite).
5. Compiles the generated content into a single email body and appends the key fields to a Google Sheets “Review Content Log” tab.
6. Sends the full content package to the configured recipient via Gmail.
7. For below-threshold reviews, logs a “not generated” entry to Google Sheets and emails a brief explanation with suggestions to improve the testimonial.

## Setup
1. Add an OpenAI API credential and connect it to both OpenAI chat model steps used for analysis and content generation.
2. Add Google Sheets OAuth2 credentials, create a spreadsheet tab named “Review Content Log” with the required headers, and set your Google Sheet ID in the configuration values.
3. Add Gmail OAuth2 credentials for sending emails and set the recipient email and sender name values in the configuration step.
4. Activate the workflow and share or embed the generated form URL so your team can submit reviews.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
