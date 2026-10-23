# 🎬 Generate and monitor Fal LTX text-to-video jobs with recovery manifests

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually to validate a JSON shot list and turn it into a downloadable Markdown production brief with per-shot video prompts, timeline timing, and review warnings for missing details or duration mismatches.

## How it works
1. Runs when you manually start the workflow.
2. Sets your video brief details, including project name, aspect ratio, target duration, shared visual style, and a JSON array of shots.
3. Validates the shot list and constraints (1–30 shots, supported aspect ratios, per-shot seconds limits), calculates each shot’s start/end timecodes, and builds a prompt for every shot.
4. Generates a Markdown production brief that includes a review checklist (warnings) plus the full prompt pack and production checklist.
5. Outputs the brief as a downloadable .md file in binary data.

## Setup
1. In the video brief configuration, replace the sample project details and provide your own valid shots JSON with at least subject, action, and seconds per shot.
2. Ensure the aspect ratio is one of 9:16, 16:9, or 1:1 and that the targetSeconds value matches your intended total duration.
3. Execute the workflow and download the generated Markdown file from the final node’s binary output.

## Additional info
I work on [Flow AI Video](https://www.flowaivideo.org/). You can manually copy the resulting shot prompts into Flow AI Video or another video generator. This template only prepares a production brief: it does not call a video-generation API, create videos, consume generation credits, or guarantee clip timing. No credentials are required. The transformation logic has been locally checked with valid and invalid sample inputs; full execution inside n8n has not been independently verified.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
