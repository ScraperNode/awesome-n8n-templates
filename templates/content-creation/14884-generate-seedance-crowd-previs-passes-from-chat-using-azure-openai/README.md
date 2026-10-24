# 🎬 Generate Seedance crowd previs passes from chat using Azure OpenAI

> ⚡ **72 views** · 🎬 [Content Creation & Video](../)

## Description

## 📘 Description
This workflow is an AI-driven crowd previs generation pipeline designed for VFX and layout teams. It converts a natural language crowd brief into structured cinematic crowd simulations, generates multiple AI-driven video passes, builds a crowd zone map for layout planning, and delivers a complete previs package to the team—bridging the gap between creative intent and large-scale crowd simulation execution.
⚙️ Step-by-Step Flow
The workflow begins with a chat-based trigger that acts as the crowd brief intake layer, allowing users to submit a natural language description of a scene, including details such as shot code, environment, crowd behavior, lighting conditions, and camera perspective. This input is processed by an AI agent that extracts structured data from the unstructured text, converting it into standardized fields such as scene description, crowd style, motion intensity, time of day, camera angle, and optional layout team contact details. The system then performs prompt engineering and expands the parsed brief into multiple simulation passes, including an establishing shot that captures full scene scale and environment context, and a crowd density pass that visualizes distribution gradients across foreground, midground, and background layers. Each pass is enriched with cinematic instructions, motion characteristics, and camera behavior to ensure realistic and production-relevant outputs.

At the core of the pipeline, an image-to-video generation layer constructs structured API requests and submits each pass as an independent job to the Seedance AI model, using a reference plate image when available to maintain scene consistency. A polling mechanism continuously monitors each job at fixed intervals, ensuring that processing proceeds only after successful completion. Once rendering is complete, a metadata layer extracts video outputs, associates them with pass-specific attributes, and structures all relevant details such as shot context, motion parameters, and generation timestamps.

An aggregation layer then compiles all generated passes into a unified previs package, combining video references with a dynamically generated crowd zone map that defines spatial distribution zones (foreground, midground, background, and traffic layers), along with keyframe-based behavioral notes for simulation planning. Finally, a multi-channel delivery system distributes the complete package to the layout team via Slack and email, presenting all passes with preview links, scene details, and the crowd zone map for direct implementation, while also logging key data into Google Sheets for production tracking and auditability—ensuring seamless collaboration between AI-generated previs and downstream layout and simulation workflows.

## 🚨 Error Handling
 • Robust parsing validation for AI-generated JSON
 • Prevents malformed or missing data from entering the pipeline
 • Ensures reliable job tracking and delivery without silent failures

## 🧩 Prerequisites
 • Seedance API (AI video generation)
 • OpenAI / Azure OpenAI (AI parsing agent)
 • Slack OAuth2 (team delivery)
 • Gmail OAuth2 (email notifications)
 • Google Sheets OAuth2 (logging & tracking)
 • Chat trigger / webhook integration

## 💡 Key Benefits
✔ Converts natural language briefs into structured crowd simulations
 ✔ Automated generation of multiple cinematic previs passes
 ✔ Built-in crowd zone mapping for layout and simulation teams
 ✔ Seamless integration between AI previs and production workflows
 ✔ Multi-channel delivery (Slack, Email, Sheets)
 ✔ Scalable pipeline for large-scale crowd-heavy scenes

## 👥 Perfect For
-  Layout and previs teams
-  Crowd simulation artists (Houdini / Massive)
-  VFX supervisors and directors
-  Film and post-production studios
-  AI-assisted crowd planning and simulation workflows

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, AI Agent, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
