# 🎬 Auto-clip long videos into viral short clips with Vizard AI and social publishing

> ⚡ **2,841 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns long-form YouTube or video URLs into short, high-viral-potential clips, then automatically publishes them to social platforms and logs results in Google Sheets. Made for content creators, social media managers, and marketers who want to scale short-form video production automatically.

## How it works
1. Collect a video URL and viral score through a configured form input or automated schedule trigger.
2. Create a new clipping project in Vizard AI using the video URL collected in the previous step.
3. Automatically poll the project status at regular intervals until Vizard AI completes the clipping process entirely.
4. Filter the resulting clips based on a minimum viral score threshold and limit the total quantity according to your configuration.
5. Publish the selected clips to your social platform, then automatically log all results to a designated Google Sheet.

## Setup
1. Connect your Vizard AI, Google Sheets, and social platform credentials that will be used as the publishing destination.
2. Open the Set Configuration node and define the minimum viral score threshold and the maximum number of clips allowed for publishing.
3. Verify that all credential connections are properly authenticated and no node shows a configuration error before activating the workflow.
4. Activate the workflow so it runs automatically according to the scheduled trigger or form input defined in the initial setup.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
