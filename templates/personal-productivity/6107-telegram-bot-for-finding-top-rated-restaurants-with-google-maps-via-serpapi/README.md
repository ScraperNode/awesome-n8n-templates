# ⚡ Telegram bot for finding top-rated restaurants with Google Maps via SerpAPI

> ⚡ **568 views** · ⚡ [Personal Productivity](../)

## Description

# Telegram Restaurant Bot Workflow
![Screenshot 20250718 at 3.07.08 AM.png](fileId:1773)
---
This workflow creates a Telegram bot that fetches the top 5 rated restaurants for any specified area in Egypt using SerpAPI's Google Maps search. It's designed to provide quick, detailed, and richly formatted information directly in your chat.

## Key Features

- **Simple Command Trigger**: Activate the search with a straightforward command (e.g., التحرير)
- **Real-Time Restaurant Data**: Utilizes SerpAPI to pull live data, ratings, and details from Google Maps
- **Top 5 Ranking**: Automatically sorts restaurants by their rating in descending order and presents the top five
- **Richly Formatted Replies**: Generates a clean, user-friendly Markdown message with essential details:
  - Rating ⭐
  - Phone Number ☎️
  - Website 🌐
  - Service Options (Dine-in ✅ | Takeaway ❌)
  - A direct link to the location on a map 📍
- **Arabic Language Focused**: The workflow is initially configured to process requests and format replies in Arabic

## How It Works

1. A user sends a place name like `التحرير` to the Telegram bot
2. The **Parse Area** node extracts the location name from the message text
3. The **Geocode (Nominatim)** node finds the geographic coordinates for the area (this can be adapted for more precise location searches)
4. The **Find Restaurants (SerpAPI)** node uses this area to perform a Google Maps search
5. The **Format Reply** node processes the search results. It sorts them by rating, takes the top 5, and builds a detailed Markdown-formatted string
6. The **Send to Telegram** node delivers the final formatted message back to the user who made the request

## Setup

- **Telegram**: Configure your credentials in the Telegram Trigger and Send to Telegram nodes
- **SerpAPI**: Add your free or paid API key in the Find Restaurants (SerpAPI) HTTP Request node

## 🔗 Nodes Used

Function, HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
