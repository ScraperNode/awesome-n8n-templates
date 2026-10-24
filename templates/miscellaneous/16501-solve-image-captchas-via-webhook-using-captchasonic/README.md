# 🔧 Solve image CAPTCHAs via webhook using CaptchaSonic

> ⚡ **12 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes a POST webhook that accepts base64 CAPTCHA images and uses the CaptchaSonic community node to solve multiple CAPTCHA types (OCR, reCAPTCHA v2, AWS WAF, TikTok, Binance, and more), returning a standardized JSON response.

## How it works
1. Receives a POST request on the `captchasonic-solve` webhook containing a JSON body with a `type` and required fields like `image` (base64) and sometimes `question`.
2. Validates the request payload, checks required fields for the requested CAPTCHA type, and routes the request to the matching solver.
3. Sends the image challenge to CaptchaSonic using the appropriate recognition operation for the selected type.
4. Normalizes the CaptchaSonic result into a consistent JSON structure with `success`, `type`, `solution`, and a `solvedAt` timestamp.
5. Returns the formatted solution to the original webhook caller, or responds with HTTP 400 and an error message if validation fails.

## Setup
1. Self-host n8n and install the `n8n-nodes-captchasonic` community node.
2. Create and select a CaptchaSonic API credential (API key from https://my.captchasonic.com) for the CaptchaSonic nodes.
3. Activate the workflow, copy the production webhook URL for `captchasonic-solve`, and configure your client to POST JSON with `type` plus the required fields (including a base64 `image` and optional `question` depending on type).

## Requirements
- • Self-hosted n8n (community nodes are not available on n8n Cloud)
- • CaptchaSonic API key from https://my.captchasonic.com

## Customization
- • Add new CaptchaSonic solver branches to the Switch node for additional CAPTCHA types
- • Modify the Format CAPTCHA Solution code node to change the JSON response structure
- • Adjust validation rules in the Validate CAPTCHA Request code node to add or remove required fields

## Additional info
Supported CAPTCHA types: imagetotext, recaptchav2, popularcaptcha, awswaf, blsocr, tiktok, binance, visionengine. Send a POST request with {"type": "imagetotext", "image": "<base64>"} to the webhook URL. Full API docs at https://docs.captchasonic.com

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
