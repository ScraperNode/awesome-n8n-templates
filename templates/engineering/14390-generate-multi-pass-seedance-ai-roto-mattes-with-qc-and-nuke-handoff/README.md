# ⚒️ Generate multi-pass Seedance AI roto mattes with QC and Nuke handoff

> ⚡ **89 views** · ⚒️ [Engineering](../)

## Description

## 📘 Description
This workflow is an AI-powered roto matte generation and first-pass compositing pipeline designed for VFX production. It transforms structured roto requests into multiple high-precision matte passes using AI, performs automated quality evaluation, generates production-ready Nuke scripts, and delivers fully organized assets and review tasks to the team—bridging the gap between manual rotoscoping and scalable AI-assisted matte generation.

## ⚙️ Step-by-Step Flow
The workflow begins with a Google Sheets trigger that continuously monitors for new roto requests, acting as the intake layer for structured production data such as plate image URLs, subject descriptions, shot codes, subject type, and complexity. Once a new entry is detected, the system moves into a validation and extraction stage, where input fields are normalized, defaults are assigned, and essential attributes like sequence codes, frame ranges, QC thresholds, and project metadata are structured for downstream processing. The pipeline then performs prompt engineering and expands the request into four specialized roto passes: an alpha matte pass for clean silhouette extraction, an edge detail pass for fine hair and motion blur accuracy, a foreground isolation pass for compositing-ready subject separation, and a motion tracking reference pass enriched with tracking markers and velocity overlays. Each variation includes detailed instructions aligned with shot context and technical constraints to ensure precise AI-driven outputs.

At the core of the workflow, an image-to-video generation layer constructs structured API requests and submits each variation as an independent job to the Seedance AI model, always using the plate image as a reference for accurate subject extraction. A polling mechanism continuously monitors each job at fixed intervals, ensuring that processing proceeds only after successful completion. Once rendering is complete, a metadata and automated QC layer evaluates each pass by assigning a quality score based on resolution and predefined thresholds, classifying outputs as either AI-approved or requiring manual intervention. A decision routing layer then determines the next stage—approved passes continue through the pipeline, while failed outputs trigger immediate Slack alerts for senior artist review and manual roto assignment.

For approved outputs, the system generates a fully production-ready Nuke roto template, automatically configuring nodes for plate input, AI matte extraction, alpha application, edge refinement, and artist-level roto adjustments, along with structured EXR output paths and naming conventions. The pipeline then proceeds to asset handling, where generated videos are downloaded and distributed via email to requesters, while simultaneously creating Jira review tasks to ensure pipeline tracking and accountability. An aggregation layer consolidates all roto passes into a unified structured summary, combining QC results, video links, task references, and technical metadata. Finally, a team notification system delivers a comprehensive summary to the roto team via Telegram, including per-pass QC status, preview links, task tracking, output paths, and artist notes highlighting areas requiring refinement—ensuring seamless collaboration between AI outputs and human artists.

## 🚨 Error Handling
 • Global error trigger across the workflow
 • Instant Slack alerts with failure details
 • Prevents silent failures and ensures pipeline reliability

## 🧩 Prerequisites
 • Seedance API (AI video generation)
 • Google Sheets OAuth2 (trigger input)
 • Jira API (task tracking)
 • Gmail OAuth2 (asset delivery)
 • Slack OAuth2 (alerts & QC failures)
 • Telegram Bot (team notifications)

## 💡 Key Benefits
 ✔ Automated roto matte generation with AI-assisted precision
 ✔ Multiple specialized passes for production flexibility
 ✔ Built-in QC scoring and intelligent decision routing
 ✔ Auto-generated Nuke scripts with pre-configured nodes
 ✔ Integrated task tracking via Jira
 ✔ Seamless delivery via email and team notifications
 ✔ Scalable pipeline for high-volume roto workflows

## 👥 Perfect For
-  Roto and paint teams in VFX studios
-  Compositors working with Nuke pipelines
-  Film and post-production environments
-  AI-assisted rotoscoping workflows
-  Studios handling high-volume shot processing

## 🔗 Nodes Used

HTTP Request, Slack, Telegram, Jira Software, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
