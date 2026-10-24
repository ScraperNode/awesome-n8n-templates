# 🎬 Create weekly social visuals from OpenAI ideas with Canvora and Slack

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every Monday and uses OpenAI to generate a social post concept, then sends it to the Canvora API to create on-brand visuals in selected formats and posts the finished image links to a Slack channel for review.

## How it works
1. Runs every Monday at 9am on a scheduled trigger.
2. Sets campaign parameters like topic, desired output formats, optional language, and optional Canvora brand kit ID.
3. Uses OpenAI to write a single, specific social post concept based on the configured topic.
4. Sends the concept to Canvora to generate visuals in the requested formats (and applies language/brand settings when provided).
5. Polls Canvora for generation status until it completes or a timeout threshold is reached.
6. If generation succeeds, sorts the outputs and posts a Slack message with the file URLs and a Canvora review link; otherwise, it posts a failure/timeout notice to Slack.

## Setup
1. Add an OpenAI API credential and select the model you want to use for generating the post concept.
2. Create a Canvora account, generate an API key, and configure an HTTP Header Auth credential named `X-API-Key` with your Canvora key for the Canvora HTTP requests.
3. Add a Slack credential and set the target channel (for example, `#content`) where the review or failure messages should be posted.
4. Update the campaign settings (topic, comma-separated formats, and optional language/brandId) and adjust the schedule time if needed.

## Requirements
- - An OpenAI API key (or swap the node for Anthropic/Gemini — any text model works)
- A free Canvora account – canvora.ai, free credits included, no card required; API keys on all plans (Integrations → API Keys)
- A Slack workspace for the review channel

## Customization
- Change the topic, formats (100+ available via the Canvora formats API), language (150+ generated natively), or brand kit in one Set node
- Swap Slack for LinkedIn/Buffer nodes to go fully automatic

## Additional info
### Example output

  Real visuals produced by this exact workflow during testing – the AI wrote the concept, Canvora designed both:

  ![Instagram post – concept written by AI, designed by Canvora](https://cdn.canvora.ai/visualdocs/generations/70a5473d-d4fb-4749-a8d8-43f7ec5321cb/instagram-post-1-1784534544839-9ebe8b40.png)

  ![LinkedIn post – same concept, LinkedIn format](https://cdn.canvora.ai/visualdocs/generations/70a5473d-d4fb-4749-a8d8-43f7ec5321cb/linkedin-post-2-1784534516673-58254f91.png)

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
