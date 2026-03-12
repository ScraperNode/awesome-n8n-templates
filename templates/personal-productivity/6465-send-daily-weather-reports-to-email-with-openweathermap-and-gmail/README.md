# ⚡ Send daily weather reports to email with OpenWeatherMap and Gmail

> ⚡ **568 views** · ⚡ [Personal Productivity](../)

## Description

## Overview

This n8n workflow automates the process of sending a daily weather report for a specified city directly to your email inbox. It's a simple yet effective way to stay informed about the weather without manually checking.

## How It Works
This workflow operates in four main steps:

**Daily Schedule Trigger**:

The workflow begins with a Cron node, which acts as a scheduler.

It's configured to trigger the workflow automatically at a specific time each day (e.g., every morning at 8:00 AM).

Fetch Weather Data:

Next, an HTTP Request node is used to interact with the OpenWeatherMap API.

This node constructs a URL to query the API for current weather conditions in a specified city (e.g., "London").

It includes parameters like units=metric (for Celsius temperatures) and your unique appid (API key) for authentication with OpenWeatherMap.

**Format Weather Report**:

A Code node receives the raw JSON weather data from the OpenWeatherMap API.

Inside this node, JavaScript code extracts relevant information such as city name, weather description, temperature (current and "feels like"), humidity, and wind speed.

It then formats this information into a human-readable text string, creating the actual weather report message.

**Send Email Report**:

Finally, a Gmail node takes the formatted weather report from the Code node.

It uses your configured Gmail credentials to send an email to your specified recipient address.

The email's subject line dynamically includes the city name, and the body contains the full formatted weather report.

## Setup Steps
To get this workflow up and running, follow these instructions:

Step 1: Get Your OpenWeatherMap API Key

Go to the OpenWeatherMap website.

Sign up for a free account if you don't already have one.

Once logged in, navigate to the "API keys" section of your profile.

Copy your unique API key. You will need this in Step 4.

Step 2: Create Gmail Credentials in n8n

In your n8n instance, click on Credentials in the left sidebar.

Click New Credential.

Search for and select "Gmail OAuth2 API" or "Gmail API" (OAuth2 is generally preferred).

Follow the on-screen instructions to connect your Gmail account. This usually involves clicking an "Authenticate with Google" button and granting n8n the necessary permissions. Save the credential.

Make note of the Credential Name (e.g., "My Gmail Account").

## 🔗 Nodes Used

Cron, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
