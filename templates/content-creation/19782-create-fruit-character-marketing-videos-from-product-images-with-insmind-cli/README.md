# 🎬 Create fruit character marketing videos from product images with insMind CLI

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This self-hosted workflow exposes a webhook that takes a product image path or URL, uses the insMind CLI to select an image-to-video tool and submit an async character video generation job, then returns the resulting video URL (or a pending/failed status).

## How it works
1. Receives a POST request via webhook containing a product image path or URL (and optional video settings).
2. Checks that insMind CLI is authenticated on the n8n host and queries insMind CLI for the available tools and models.
3. Builds a prompt and selects a compatible insMind CLI video tool (or uses the provided insmind_tool) and insmind-cli call command for async generation.
4. Retrieves the selected tool details and submits the async generation job via insmind-cli.
5. Extracts the returned task ID, waits briefly, then fetches the task status/result from insmind-cli.
6. Parses the task output to find a video result URL and responds to the webhook with JSON including success status, workflow status, and the result URL when available.

## Setup
1. Use a self-hosted n8n instance that allows Execute Command, and install insmind-cli on the same worker/container where the workflow runs.
2. Authenticate insmind-cli on that machine/container user (for example, run insmind-cli auth login) and verify insmind-cli auth status succeeds.
3. Activate the workflow and copy the webhook URL, then POST a body that includes product_image_path or product_image_url (optionally insmind_tool, duration_seconds, aspect_ratio, product_name, campaign_goal, and story_language).

## Requirements
- A self-hosted n8n instance with Execute Command enabled. The insMind CLI must
- be installed on the same n8n worker or container and authenticated before
- running the workflow. See the official CLI documentation at
- https://www.insmind.com/cli and the install guide at
- https://www.insmind.com/cli/install.md.

## Customization
- You can customize product_name, campaign_goal, story_language,
- duration_seconds, aspect_ratio, and insmind_tool in the webhook body. If
- insmind_tool is not provided, the workflow discovers available insMind CLI
- tools at runtime and chooses a compatible video generation tool.

## Additional info
insMind CLI is useful when you want AI image or video generation inside
  automated workflows without manually operating a web editor. This template
  uses the CLI for tool discovery, async task submission, and task result
  retrieval, making it suitable for product-image-to-video automation in self-
  hosted n8n.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
