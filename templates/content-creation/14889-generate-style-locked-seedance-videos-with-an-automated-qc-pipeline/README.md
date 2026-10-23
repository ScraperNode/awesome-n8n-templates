# 🎬 Generate style-locked Seedance videos with an automated QC pipeline

> ⚡ **77 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
This workflow is an AI-powered style look transfer and quality control pipeline designed for VFX and editorial production. It transforms a new shot brief and a hero reference image into multiple style-locked video variants, evaluates them against a predefined show style profile, and delivers only approved outputs to editorial—bridging the gap between creative direction consistency and automated production validation.
⚙️ Step-by-Step Flow
The workflow begins with a webhook trigger that acts as the style transfer request intake layer, receiving a POST request containing the shot code, shot description, hero reference image, and optional show-specific style parameters. This input flows into a validation and normalization stage, where required fields are verified and a structured show style profile is extracted, including attributes such as color grading, contrast levels, grain texture, lighting mood, atmospheric style, and color temperature, along with QC thresholds for evaluation. The system then performs prompt engineering and expands the single shot brief into three distinct style-locked variants: a primary composition designed for editorial use, an alternate framing option offering a different perspective, and a stress test variant that pushes style boundaries to validate consistency limits. Each variation is tightly anchored to the hero reference image and enriched with detailed cinematic instructions to ensure strict adherence to the approved show look.

At the core of the pipeline, an image-to-video generation layer constructs structured API requests and submits each variant as an independent job to the Seedance AI model, ensuring that all outputs remain visually consistent with the reference style. A polling mechanism continuously monitors each job at fixed intervals, allowing the workflow to proceed only after successful completion. Once rendering is complete, an automated QC engine evaluates each variant using measurable metrics such as contrast score, color match accuracy, and brightness variance, comparing them against predefined thresholds from the show style profile. Each variant is then assigned a QC grade and classified as either approved for editorial delivery or rejected for further review.

A decision routing layer ensures that only approved variants move forward, while failed outputs trigger alerts for review without disrupting the pipeline. An aggregation layer then compiles all QC results into a structured report, summarizing approved and rejected variants along with their performance metrics and visual references. Finally, a multi-channel delivery system distributes the QC report and outputs to key stakeholders: a Slack message provides a quick overview for the team, a detailed HTML email is sent to editorial with full QC breakdown and style profile context, and a Jira task is created for tracking and review—ensuring transparency, consistency, and alignment across creative and production teams.

## 🚨 Error Handling
 • Global error trigger across the workflow
 • Instant Slack alerts with error details and timestamps
 • Prevents silent failures and ensures production reliability

## 🧩 Prerequisites
 • Seedance API (AI video generation)
 • Webhook integration (input trigger)
 • Slack OAuth2 (QC reporting)
 • Gmail OAuth2 (editorial delivery)
 • Jira API (task tracking)
 • Optional Telegram Bot (QC failure alerts)

## 💡 Key Benefits 
 ✔ Ensures strict style consistency using hero reference anchoring
 ✔ Automated QC validation using measurable visual metrics
 ✔ Multiple style-locked variants for editorial flexibility
 ✔ Prevents incorrect outputs from reaching editorial
 ✔ Fully automated reporting and task tracking
 ✔ Scalable pipeline for episodic and film production

## 👥 Perfect For
-  VFX supervisors and creative directors
-  Editorial and finishing teams
-  Look development and color grading pipelines
-  Film and episodic production workflows
-  AI-assisted style consistency and QC systems

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram, Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
