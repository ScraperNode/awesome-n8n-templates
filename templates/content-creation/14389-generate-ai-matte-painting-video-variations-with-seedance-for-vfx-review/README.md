# 🎬 Generate AI matte painting video variations with Seedance for VFX review

> ⚡ **83 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
 This workflow is a fully automated AI matte painting generation system for VFX pipelines, designed to convert a single environment prompt into multiple cinematic background variations. It handles generation, validation, multi-variant rendering, compositing preparation, review workflows, and final delivery—eliminating manual coordination between artists, supervisors, and production systems. 

## ⚙️ Step-by-Step Flow
The process begins with a webhook trigger that serves as the shot request intake layer, receiving a POST request containing the environment prompt, shot code, optional plate image URL, and metadata such as project, sequence, and supervisor details. This input is then passed through a validation and normalization stage, ensuring all required fields are present while standardizing elements like sequence codes, project IDs, Slack channels, and timestamps. Once validated, the system fans out the request into four distinct cinematic variations—day (overcast realism), dusk (golden hour lighting), night (moonlit cinematic), and fog (atmospheric depth)—with each variant assigned a custom-engineered prompt.
At the core of the workflow, a dynamic mode selection logic determines whether to use image-to-video generation (if a plate image is provided) or text-to-video generation (if no reference is available), while also configuring parameters such as audio generation, aspect ratio, and duration. Each variation is then submitted as an independent job to the Seedance API for AI video generation, returning unique job IDs for tracking. A polling loop handles asynchronous processing by checking the status of each job every 20 seconds until all reach a “succeeded” state, operating independently per variation.
Once completed, the system constructs detailed metadata for each asset, including video URL, atmosphere type, variant ID, resolution, duration, and tags such as AI-generated and review status. In parallel, it generates an auto-configured Nuke compositing template with pre-built nodes for plate input, AI background, merge setup, color grading placeholders, and output writing. For production tracking, a Jira review task is created for each variation, while all assets are logged within the ClickUp system. An aggregation layer then consolidates all four variations into a single structured summary, formatted for seamless Slack delivery.
A Slack notification is sent to the supervisor with the complete review package, including links to all variations, Jira tickets, inline Nuke scripts, and associated metadata. Finally, the system downloads the generated video assets and completes the workflow by sending an email to the requester with the video attachments and full production context, ensuring a smooth end-to-end delivery pipeline.

## 🚨 Error Handling
• Global error trigger
 • Instant Slack alert
 • Prevents silent failures across pipeline

## 🧩 Prerequisites
 • Seedance API (video generation)
 • Slack OAuth2
 • Gmail OAuth2
 • Jira Cloud
 • ClickUp API
 • Webhook integration (input system)

## 💡 Key Benefits
 ✔ Parallel generation of multiple cinematic variations
 ✔ Automatic decision between image-to-video vs text-to-video
 ✔ Built-in compositing (Nuke script auto-generation)
 ✔ Full production pipeline (generation → review → delivery)
 ✔ Async-safe with polling loop
 ✔ Centralized asset tracking (Jira + ClickUp)
 ✔ Zero manual VFX coordination

## 👥 Perfect For
-  VFX studios
-  Film/TV production pipelines
-  AI-driven matte painting workflows
-  Previsualization teams
-  Creative automation systems

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Jira Software, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
