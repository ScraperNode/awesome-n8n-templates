# 🎬 Generate AI videos from prompts with Seedance, Jira, Slack, and Gmail

> ⚡ **124 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
This workflow is an end-to-end AI video generation, review, and delivery pipeline. It takes a plain-text creative prompt via webhook, generates a video using an AI model, continuously checks job status until completion, and then automates the entire post-production workflow—metadata creation, Jira ticketing, Slack notifications, and final email delivery with the video attached. It ensures zero manual coordination between creative, ops, and delivery teams. 

The process begins with a webhook trigger that acts as the input layer, receiving a request containing the prompt text, record ID, and user email. This input is then passed through a prompt sanitisation step using a code node, where the text is cleaned and escaped to prevent API errors or malformed payloads. Once sanitised, the system submits a video generation request via an HTTP call to the AI video model (Seedance API). A polling loop is then initiated, which waits for 20 seconds between each cycle and repeatedly checks the job status using HTTP requests until the status is marked as “succeeded.” After completion, the system extracts the video output through a metadata builder, parsing the response to structure key details such as the video URL, job ID, resolution, duration, timestamp, and AI-generated tags including review status. Following this, a Jira review ticket is automatically created to log the generated video within the review workflow. Simultaneously, a Slack notification is sent to the VFX supervisor, containing the Jira ticket reference, video URL, status, and associated metadata. The system then downloads the final video file from the generated URL and completes the process by sending a professional email via Gmail to the requester, including the video as an attachment along with job details and the Jira reference.

## 🚨 Error Handling Flow
• Global error trigger catches failures
 • Sends Slack alert instantly
 • Prevents silent pipeline breakdown

## 🧩 Prerequisites
 • AI video API (Seedance or similar)
 • Jira Cloud credentials
 • Slack OAuth2
 • Gmail OAuth2
 • Webhook endpoint integration

## 💡 Key Benefits
 ✔ Fully automated creative pipeline (idea → video → delivery)
 ✔ Async job handling with polling loop
 ✔ Built-in review workflow (Jira + Slack)
 ✔ Zero manual coordination required
 ✔ Production-ready structure with metadata tracking
 ✔ Fault-tolerant with global error alerts

## 👥 Perfect For
-  AI video production teams
-  Content studios / VFX pipelines
-  Marketing creative automation
-  UGC/ad generation workflows
-  Internal media ops systems

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
