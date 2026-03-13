# ⚒️ Automated Amazon stock level tracker with Bright Data MCP and OpenAI

> ⚡ **1,035 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automatically tracks inventory stock levels across multiple products and suppliers to prevent stockouts and optimize inventory management. It saves you time by eliminating the need to manually check stock levels and provides automated alerts when inventory reaches critical thresholds.

## Overview

This workflow automatically scrapes supplier websites, e-commerce platforms, and inventory systems to monitor real-time stock levels and availability. It uses Bright Data to access inventory data and AI to intelligently parse stock information, detect low inventory alerts, and track supply chain trends.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow
- **Bright Data**: For scraping inventory and supplier websites without being blocked
- **OpenAI**: AI agent for intelligent stock level analysis and trend detection
- **Google Sheets**: For storing inventory data and tracking stock movements

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Configure Bright Data**: Add your Bright Data credentials to the MCP Client node
3. **Set Up OpenAI**: Configure your OpenAI API credentials
4. **Configure Google Sheets**: Connect your Google Sheets account and set up your inventory tracking spreadsheet
5. **Customize**: Define product URLs and inventory monitoring parameters

## Use Cases

- **E-commerce**: Monitor product availability across multiple suppliers
- **Retail Management**: Track inventory levels to prevent stockouts
- **Supply Chain**: Monitor supplier stock levels and lead times
- **Procurement**: Identify restocking needs and optimize purchasing decisions

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #inventorytracking #stockmonitoring #brightdata #webscraping #inventorymanagement #n8nworkflow #workflow #nocode #stocklevels #supplychain #inventoryautomation #stockalerts #ecommerce #procurement #inventorycontrol #stockanalysis #suppliermonitoring #inventoryoptimization #stocktracking #warehousemanagement #retailautomation #inventorydata #stockmanagement #supplymanagement #inventorymonitoring #productavailability #stockforecasting #inventoryinsights

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
