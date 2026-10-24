# 🎬 Generate clean plates and automate object removal with Seedance AI

> ⚡ **83 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
This workflow is an AI-assisted clean plate and object removal pipeline built for modern VFX production environments. It transforms a single plate image and removal brief into multiple high-quality clean plate variations, complete with automated quality evaluation, compositing-ready assets, and production-ready Nuke scripts—bridging the gap between manual paint workflows and fully automated AI-driven cleanup pipelines.

## ⚙️ Step-by-Step Flow
1 . The workflow begins with a webhook trigger that acts as the clean plate request intake layer, receiving a POST request containing the plate image URL, removal brief, shot code, and optional parameters such as object type, frame range, and QC thresholds. This input flows into a validation and data structuring stage, where required fields are verified, default values are assigned, and the payload is normalized to ensure consistency across downstream processes. The system then performs prompt engineering and expands the single removal brief into four specialized passes: a primary production-ready clean plate, an alternative variation, a foreground removal pass for background isolation, and a difference map for quality control visualization. Each pass is enriched with object-specific removal instructions, reconstruction constraints, and technical shot metadata to guide accurate AI generation.

2 . At the core of the pipeline, an image-to-video rendering process leverages the provided plate image as a reference and submits each variation as an independent job to the Seedance AI API, generating video-based clean plate outputs. A polling mechanism continuously tracks each job at fixed intervals, ensuring that processing only advances once rendering is successfully completed. Once outputs are available, a metadata and automated QC layer evaluates each pass by assigning a quality score based on resolution and consistency logic, comparing it against a predefined threshold to classify results as either auto-approved or flagged for review. A decision routing layer then determines the next step—allowing approved outputs to continue through the pipeline while immediately notifying the team via Slack in case of failures.

3 . Following this, the system generates a fully production-ready Nuke compositing script, automatically configuring nodes for the original plate, AI-generated clean plate, difference map visualization, merge operations, grading adjustments, and final output writes, all aligned with standardized folder structures and naming conventions. The asset pipeline then downloads the generated videos, uploads them to Google Drive using structured shot-based organization, and logs all associated metadata—including plate references, output variations, and project details—into a Notion database for centralized tracking. An aggregation layer consolidates all outputs into a unified structured response, combining QC results, video links, compositing scripts, and storage paths. Finally, a multi-channel notification system dispatches a detailed message to Slack and Telegram, presenting all clean plate variations with QC status, video previews, inline Nuke scripts, and direct access to delivery folders for seamless team review and integration into production workflows.

## 🚨 Error Handling
• Global error trigger
 • Sends failure alerts to Slack instantly
 • Prevents silent pipeline failures and data loss

## 🧩 Prerequisites
• Seedance API (AI video generation)
 • Google Drive OAuth2
 • Notion API
 • Slack + Telegram credentials
 • Webhook integration

## 💡 Key Benefits
✔ Fully automated clean plate generation with zero manual prep
 ✔ Multiple AI-generated passes for flexible compositing workflows
 ✔ Built-in QC validation with intelligent decision routing
 ✔ Auto-generated Nuke scripts ready for production use
 ✔ Structured asset storage and centralized tracking
 ✔ Real-time notifications for faster team collaboration

## 👥 Perfect For
-  VFX paint and prep teams
-  Compositors working in Nuke pipelines
-  Film and post-production studios
-  AI-assisted cleanup and restoration workflows
-  Studios managing high-volume plate processing

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram, Google Drive, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
