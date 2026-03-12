# 🎬 Generate multi-scene AI videos from scripts with Claude, Stability AI and Runway

> ⚡ **79 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is a fully automated AI video production pipeline. It accepts a raw script or topic via webhook, uses Claude AI to break the script into optimized video scenes, generates AI images for each scene using Stability AI, submits each scene to Runway Gen-3 Alpha for video generation, polls until all videos are ready, stitches metadata together, and delivers the final video package — all without any manual editing or human intervention.

Designed for content creators, marketing agencies, social media teams, and SaaS platforms that need to produce consistent, high-quality AI video content at scale.

---

### What's the Goal?
To eliminate the bottleneck between having a script and having a publishable video. Traditional video production takes days and thousands of dollars. This workflow produces a multi-scene AI video package in under 15 minutes for a fraction of the cost.

Specific goals:
- Convert any text script into scene-by-scene video clips automatically
- Maintain visual consistency across all scenes using structured prompts
- Support multiple video styles: cinematic, documentary, social media, explainer
- Deliver ready-to-publish video assets with no manual editing required
- Log every job for billing, audit, and quality tracking

---

### Why Does It Matter?
Video is the highest-performing content format across every platform — but it has always required expensive equipment, editors, and time. Runway Gen-3 and other generative video tools have changed that. This workflow makes AI video production:

- Accessible: no video editing skills needed
- Scalable: generate 10 or 1000 videos with the same workflow
- Fast: full video package ready in 10-20 minutes
- Consistent: same quality every time, no human error
- Profitable: agencies can charge $200-$2000 per video package this workflow produces in minutes

---

### How It Works

Stage 1 — Script Intake and Validation
Webhook receives the script payload. Set node stores all API credentials and job config. IF node validates that a script or topic is present before any API calls are made.

Stage 2 — Scene Breakdown with Claude AI
Claude AI reads the full script and breaks it into 4-6 structured scenes. For each scene it writes: a visual description, a Runway video prompt, a Stability AI image prompt, camera movement instructions, mood and color palette, and estimated duration. Output is clean JSON.

Stage 3 — Scene Processing Loop
SplitInBatches node processes each scene one at a time. For each scene, a Code node formats the exact prompts needed for both image and video generation.

Stage 4 — Image Generation (Stability AI)
Stability AI generates a reference frame image for the current scene. This image is used as the visual anchor for Runway video generation, ensuring frame consistency.

Stage 5 — Runway Video Generation
The scene prompt and reference image are submitted to Runway Gen-3 Alpha Turbo API. Runway returns a task ID immediately. A Wait node pauses 30 seconds, then a Poll node checks job status. If not ready, it loops back and waits again. When complete, the video URL is captured.

Stage 6 — Collect and Package Results
After all scenes are processed, a Code node assembles the complete video package: all scene video URLs, metadata, prompts used, durations, and delivery info.

Stage 7 — Delivery and Logging
Slack notification with job summary and video links. SendGrid email with full delivery report. Google Sheets audit log entry. Webhook returns complete JSON with all video URLs and metadata.

---

### Configuration Requirements
- ANTHROPIC_API_KEY — Claude AI for script-to-scene breakdown (claude-sonnet-4-20250514)
- RUNWAY_API_KEY — Runway Gen-3 Alpha video generation (runwayml.com)
- STABILITY_API_KEY — Stability AI SDXL image generation (stability.ai)
- SENDGRID_API_KEY — Email delivery of final report
- SLACK_WEBHOOK_URL — Slack notifications on completion
- GOOGLE_SHEET_ID — Job audit log and video URL tracking

---

### Setup Guide
Step 1: Import this workflow into your n8n instance
Step 2: Open the Set Credentials and Config node
Step 3: Replace all YOUR_XXX_KEY placeholders with your real API keys
Step 4: Set your GOOGLE_SHEET_ID in the Log Job to Sheets node
Step 5: Set your SLACK_WEBHOOK_URL in the Set node
Step 6: Activate the workflow and POST to /webhook/runway-video

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
