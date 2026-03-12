# 📈 Get IPO calendar alerts via Telegram with Finnhub API and Gemini AI

> ⚡ **155 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Get instant notifications about new US companies going public (IPOs) sent straight to your Telegram—easy setup, no programming skills needed. 

Perfect for investors, traders, and anyone interested in the latest stock market opportunities.

## Purpose & Audience
This n8n workflow is designed for investors, financial analysts, and community managers who want real-time, structured US companies recent and upcoming IPO (Initial Public Offerings) updates directly to their Telegram channels or chats. It’s perfect for anyone running a financial community, managing a trading group, or investing in new companies for personal investment decisions.

## What It Does
1. Fetches recent and upcoming IPO calendar updates for US companies expected to be listed on US exchanges using the Finnhub API (free-tier), with a default window of the next 7 days (customizable to any date range).
2. Uses Google Gemini AI to automatically format and structure the calendar data into a clean, grouped, and enhanced message, including company names, tickers, total number of shares, total value of shares, and expected stock price (with intelligent scaling for billions/millions).
3. Sends the formatted IPO updates directly to your chosen Telegram chat or channel via a Telegram bot. (can be customised for email updates or any other preferred channel for updates)

## Who Is It For?
Retail and professional investors
Financial influencers and Telegram group admins
Trading desk or community managers
Anyone who wants hands-off, AI-powered IPO calendar alerts for US companies

## How to Set Up
#### **Get Finnhub API Key:**
- Sign up at https://www.finnhub.io and copy your API key.

#### Connect Google Gemini (or OpenAI) Model:
- Add your Gemini API credentials in n8n for advanced AI formatting and structuring of earnings updates.

#### **Set Up Your Telegram Bot:**
- Create a bot with @BotFather, get your API token, and add it to n8n’s Telegram credentials.
- Obtain your Telegram chat or group ID (use @RawDataBot for this).

#### **Customize Date Range (Optional):**
- By default, the workflow fetches upcoming IPOs for the next 7 days, but you can adjust it to any custom window (e.g., today to 3 days in the future).

#### **Activate the Workflow:**
- Schedule how often you want updates (default: every 7 days; can be as frequent as daily).
- The workflow will automatically fetch, format, and send the latest US IPO calendar updates to your Telegram.

## Key Features
1. No coding required—fully automated and customizable.
2. Handles Telegram’s message length limit by default.
3. AI-enhanced formatting for maximum readability and engagement.
4. Free to use with Finnhub’s free API tier.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
