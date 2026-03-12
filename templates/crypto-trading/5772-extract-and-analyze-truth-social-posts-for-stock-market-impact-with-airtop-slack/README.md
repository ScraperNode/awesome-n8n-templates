# 📈 Extract and analyze Truth Social posts for stock market impact with Airtop & Slack

> ⚡ **2,563 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Trump-o-meter: Extract and Evaluate Truth Social Posts

## Use Case

Automatically extracting posts from Donald Trump's Truth Social account and estimating their potential impact on the U.S. stock market enables teams to monitor high-profile communications that may influence financial markets. This automation streamlines intelligence gathering for analysts, traders, and policy observers.

## What This Automation Does

This automation retrieves up to 3 posts from Donald Trump's Truth Social profile and outputs structured information including:

* Author name
* Image URL
* Post text
* Post URL
* Estimated stock market impact:

  * Direction: positive, negative, or neutral
  * Magnitude: None, Small, Medium, Large

## How It Works

1. Creates a browser session on Truth Social using an Airtop profile.
2. Navigates to `https://truthsocial.com/@realDonaldTrump`.
3. Uses a natural language prompt with a defined JSON schema to extract structured data for up to 3 posts.
4. Splits the results into individual post items.
5. Filters posts that contain actual content and have a non-zero estimated market impact.
6. Sends selected posts and impact summaries to a Slack channel.
7. Terminates the browser session to clean up.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) that is connected and logged into Truth Social.
3. A Slack workspace and authorized app with write permissions to a target channel.

## Next Steps

* **Integrate with Trading Signals**: Link output to financial alert systems or dashboards for timely insights.
* **Expand Monitoring**: Extend to other high-impact accounts (e.g., politicians, CEOs).
* **Enhance Analysis**: Add sentiment scoring or topic classification for deeper context.

## Legal Disclaimer
This tool is intended solely for informational and analytical purposes. The market impact estimations provided are speculative and should not be construed as financial advice. **Do not make investment decisions based on this automation.** Always consult with a licensed financial advisor before making any trades.


Read more about [Trump-o-meter automation](https://www.airtop.ai/automations/trump-o-meter-extract-and-evaluate-truth-social-posts-n8n)

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
