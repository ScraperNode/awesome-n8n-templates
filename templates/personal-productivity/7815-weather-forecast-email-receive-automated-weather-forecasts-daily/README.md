# ⚡ Weather forecast email - receive automated weather forecasts daily

> ⚡ **727 views** · ⚡ [Personal Productivity](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recux4gNImLpzqvyd.jpg)](https://youtu.be/mMEX4Zsz4XY)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow automatically delivers a daily weather forecast to your email inbox every morning at 7:00 AM. It demonstrates practical API-to-API integration by connecting the Meteosource weather API directly to Gmail using n8n's HTTP Request node, without requiring a pre-built Meteosource integration.

## Why This Workflow is Valuable

Instead of manually checking weather forecasts each morning, this automation fetches current and next-day weather summaries from Meteosource and delivers them directly to your inbox. It's a perfect example of how direct API integration unlocks tools that don't have dedicated n8n nodes, giving you access to the full functionality of any service with an API.

## Key Features

- Scheduled daily execution at 7:00 AM (customizable)
- Fetches weather data using the Meteosource API with secure Query Auth credentials
- Sends formatted email with today's weather in the subject and tomorrow's forecast in the body
- Easy location and recipient customization through a Config node

## Setup Requirements

**Meteosource API Account**: Sign up for a free account at [Meteosource](https://www.meteosource.com/) to get your API key (includes 400 free calls per day, more than enough for daily forecasts).

**Credentials needed**:
- **Meteosource credentials**: Create an HTTP Query Auth credential in n8n with the parameter name `key` and your Meteosource API key as the value
- **Gmail OAuth2**: Connect your Gmail account to n8n for sending emails

## Configuration

Open the **Config** node to personalize:
- **place_id**: Change from "london" to your desired location (use Meteosource place ID format)
- **send_to_email**: Update with your preferred recipient email address

This workflow demonstrates the power of the HTTP Request node for connecting any API to your automation workflows.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
