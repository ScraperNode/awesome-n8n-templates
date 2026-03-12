# 📈 Automated stock analysis reports with technical & news sentiment using GPT-4o

> ⚡ **78,559 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Stock Analysis Agent (Hebrew, RTL, GPT-4o)


### Overview ###

Get comprehensive stock analysis with this AI-powered workflow that provides actionable insights for your investment decisions. On a weekly basis, this workflow:

- Analyzes stock data from multiple sources (Chart-img, Twelve Data API, Alphavantage)
- Performs technical analysis using advanced indicators (RSI, MACD, Bollinger Bands, Resistance and Support Levels)
- Scans financial news from Alpha Vantage to capture market sentiment
- Uses OpenAI's GPT-4o to identify patterns, trends, and trading opportunities
- Generates a fully styled, responsive HTML email (with proper RTL layout) in Hebrew
- Sends detailed recommendations directly to your inbox

**Perfect for investors, traders, and financial analysts who want data-driven stock insights - combining technical indicators with news sentiment for more informed decisions.**

### Setup Instructions ###

**Estimated setup time:**
- 15 minutes

**Required credentials:**
- OpenAI API Key
- Chart-img API Key (free tier)
- Twelve Data API Key (free tier)
- Alpha Vantage API Key (free tier)
- SMTP credentials (for email delivery)

**Steps:**

1. Import this template into your n8n instance.
2. Add your API keys under credentials.
3. Configure the SMTP Email node with: Host (e.g., smtp.gmail.com), Port (465 or 587), Username (your email), Password (app-specific password or login).
4. Activate the workflow.
5. Fill in the Form.
6. **Enjoy!** (Check your Spam mailbox)

### Customization Tips ###

- Modify the analysis timeframe (daily, weekly, monthly)
- Add integrations with trading platforms or portfolio management tools
- Adjust the recommendation criteria based on your risk tolerance

### Why Use This? ###
This is more than just stock data. It's an intelligent financial assistant that combines technical analysis with market sentiment to provide actionable recommendations - automatically.

### Important Note: ###
This report is being generated automatically and does not constitute an investment recommendation. **Please consult a licensed investment advisor before making any investment decisions.**

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Workflow Trigger, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
