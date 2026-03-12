# 🤖 Create dynamic crypto market monitors with Gemini AI and Telegram Bot

> ⚡ **414 views** · 🤖 [AI Chatbots & Agents](../)

## Description

**Template Description**
This description details the template's purpose, how it works, and its key features. You can copy and use it directly.

**Overview**
This is a powerful n8n "meta-workflow" that acts as a Supervisor. Through a simple Telegram bot, you can dynamically create, manage, and delete countless independent, AI-driven market monitoring agents (Watchdogs).

This template is a perfect implementation of the "Workflowception" (workflow managing workflows) concept in n8n, showcasing how to achieve ultimate automation by leveraging the the n8n API.

**How It Works ?**
Telegram Bot Interface:
Execute all operations by sending commands to your own Telegram Bot:

```
/add SYMBOL INTERVAL PROMPT: Add a new monitoring task.

/delete SYMBOL: Delete an existing monitoring task.

/list: List all currently running monitoring tasks.

/help: Get help information.
```
Use Telegram Bot to control
![image.png](fileId:2166)

The watchdog workfolw created in the below
![image.png](fileId:2167)

**Dynamic Workflow Management:**
Upon receiving an /add command, the Supervisor system reads a "Watchdog" template, fills in your provided parameters (like trading pair and time interval), and then automatically creates a brand new, independent workflow via the n8n API and activates it.

**Persistent Storage:**
All monitoring tasks are stored in a PostgreSQL database, ensuring your configurations are safe even if n8n restarts. The ID of each newly created workflow is also written back to the database to facilitate future deletion operations.

**AI-Powered Analysis:**
Each created "Watchdog" workflow runs on schedule. It fetches the latest candlestick chart by calling a self-hosted `tradingview-snapshot` service. This service, available at `https://github.com/0xcathiefish/tradingview-snapshot`, works by simulating a login to your account and then using TradingView's official snapshot feature to generate an unrestricted, high-quality chart image. An example of a generated snapshot can be seen here: `https://s3.tradingview.com/snapshots/u/uvxylM1Z.png`.

To use this, you need to download the Docker image from the packages in the GitHub repository mentioned above, and run it as a container. The n8n workflow then communicates directly with this container via an HTTP API to request and receive the chart snapshot.

After obtaining the image, the workflow calls a multimodal AI model (Gemini). It sends both the chart image and your custom text-based conditions (e.g., "breakout above previous high on high volume" or "break below 4-hour MA20") to the AI for analysis, enabling truly intelligent chart interpretation and alert triggering.

**Key Features**
Workflowception: A prime example of one workflow using an API to create, activate, and delete other workflows.

Full Control via Telegram: Manage your monitoring bots from anywhere, anytime, without needing to log into the n8n interface.

AI Visual Analysis: Move beyond simple price alerts. Let an AI "read" the charts for you to enable complex, pattern-based, and indicator-based intelligent alerts.

Persistent & Extensible: Built on PostgreSQL for stability and reliability. You can easily add more custom commands.

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
