# 🎬 Generate Seedance AI lighting look dev variations with review via Drive, Notion, and Slack

> ⚡ **152 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
This workflow is an AI-powered lighting and look development pipeline designed for VFX production. It transforms a single lighting brief into multiple high-quality cinematic lighting references using AI, automates rendering, organizes assets, builds a visual lookbook, and delivers structured outputs to the lighting team—bridging the gap between creative lighting direction and CG execution.

## ⚙️ Step-by-Step Flow
The workflow begins with a form-based trigger that acts as the lighting brief intake layer, allowing artists or supervisors to submit structured inputs such as shot code, sequence, project ID, plate image, lighting mood description, scene type, and CG subject type. This input flows into a validation and normalization stage, where required fields are verified, scene and subject types are mapped into standardized pipeline values, and the payload is structured for downstream processing. The system then performs prompt engineering and expands the single lighting brief into five distinct lighting variations: a key light setup for strong directional lighting, a soft diffuse setup for ambient lighting conditions, a high-contrast dramatic setup for stylized visuals, a plate-matched reference for accurate scene integration, and a final comp-grade preview simulating cinematic color grading. Each variation is enriched with detailed lighting instructions, scene context, and subject-specific attributes to guide realistic AI generation.

At the core of the pipeline, an image-to-video rendering layer constructs structured API requests and submits each variation as an independent job to the Seedance AI model, always using the plate image as a reference to maintain lighting consistency with the scene. A polling mechanism continuously monitors each job at regular intervals, ensuring that processing advances only after successful completion. Once rendering is complete, a metadata layer structures detailed information for each asset, including video URLs, lighting types, scene context, subject details, and generation timestamps, along with tagging for pipeline tracking and review status.

The asset pipeline then downloads the generated lighting reference videos and uploads them to Google Drive using a structured naming convention aligned with shot and variation identifiers. An aggregation layer consolidates all variations into a unified output and dynamically generates an HTML-based lookbook, presenting all lighting setups in a structured visual format with preview links, technical details, and usage guidance. This lookbook is stored in a Notion database for centralized tracking and documentation. Finally, an AI-driven messaging layer generates a clean, professional Slack notification summarizing the lighting brief, listing all generated variations with preview links, and prompting the lighting team to review and select the preferred direction before proceeding with CG lighting setup—ensuring seamless collaboration between creative intent and technical execution.

## 🚨 Error Handling
• Global error trigger across the workflow
 • Sends instant Slack alerts with failure details
 • Prevents silent failures and ensures production reliability

## 🧩 Prerequisites
• Seedance API (AI video generation)
 • n8n Form Trigger (input layer)
 • Google Drive OAuth2 (asset storage)
 • Notion API (lookbook tracking)
 • Slack OAuth2 (team notifications)
 • OpenAI API (AI-generated Slack messaging)

## 💡 Key Benefits
✔ Rapid lighting look development with multiple variations instantly
 ✔ Structured prompt engineering for consistent cinematic outputs
 ✔ Automated asset storage and organized lookbook generation
 ✔ AI-generated team communication for faster decision-making
 ✔ Seamless integration between creative direction and CG execution
 ✔ Scalable pipeline for production-ready lighting workflows

## 👥 Perfect For
- Lighting artists and look development teams
-  VFX supervisors and creative directors
-  CG and rendering pipelines
-  Film and post-production studios
-  AI-assisted lighting and visualization workflows

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Notion, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
