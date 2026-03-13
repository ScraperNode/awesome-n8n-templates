# 📊 Affiliate competitor tracking & analysis with AI, Bright Data, Sheets & Slack

> ⚡ **176 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it Works

This workflow automatically monitors competitor affiliate programs twice daily using Bright Data's web scraping API to extract commission rates, cookie durations, average order values, and payout terms from competitor websites. The AI analysis engine scores each competitor (0-100 points) by comparing their commission rates, cookie windows, earnings per click (EPC), and affiliate-friendliness against your program, then categorizes them as Critical (70+), High (45-69), Medium (25-44), or Low (0-24) threat levels.

Critical and high-threat competitors trigger immediate Slack alerts with detailed head-to-head comparisons and strategic recommendations, while lower threats route to monitoring channels. All competitors are logged to Google Sheets for tracking and historical analysis. The system generates personalized email reports—urgent action plans with 24-48 hour deadlines for critical threats, or standard intelligence updates for routine monitoring.

The entire process takes minutes from scraping to strategic alert, eliminating manual competitive research and ensuring you never lose affiliates to better-positioned competitor programs.

---

## Who is this for?

- Affiliate program managers monitoring competitor programs who need automated intelligence
- E-commerce brands in competitive verticals who can't afford to lose top affiliates
- Affiliate networks managing multiple merchants needing competitive benchmarking
- Performance marketing teams responding to commission rate wars in their industry

---

## Setup Steps

- Setup time: Approx. 20-30 minutes (Bright Data setup, API configuration, spreadsheet creation)
- Requirements:
    - Bright Data account with web scraping API access
    - Google account with a competitor tracking spreadsheet
    - Slack workspace
    - SMTP email provider (Gmail, SendGrid, etc.)

- Sign up for Bright Data and get your API credentials and dataset ID.
- Create a Google Sheets with two tabs: "Competitor Analysis" and "Historical Log" with appropriate column headers.
- Set up these nodes:
    - **Schedule Competitor Check:** Pre-configured for twice daily (adjust timing if needed).
    - **Scrape Competitor Sites:** Add Bright Data credentials, dataset ID, and competitor URLs.
    - **AI Offer Analysis:** Review scoring thresholds (commission, cookies, AOV, EPC).
    - **Route by Threat Level:** Automatically splits by 70-point critical and 45-point high thresholds.
    - **Google Sheets Nodes:** Connect spreadsheet and map data fields.
    - **Slack Alerts:** Configure channels for critical alerts and routine monitoring.
    - **Email Reports:** Set up SMTP and recipient addresses.

- Credentials must be entered into their respective nodes for successful execution.

---

## Customization Guidance

- **Scoring Weights:** Adjust point values for commission (35), cookies (25), cost efficiency (25), volume (15) based on your priorities.
- **Threat Thresholds:** Modify 70-point critical and 45-point high thresholds for your risk tolerance.
- **Benchmark Values:** Update commission gap thresholds (5%+ = critical, 2%+ = warning) and cookie duration benchmarks (30+ days = critical).
- **Competitor URLs:** Add or remove competitor websites to monitor in the HTTP Request node.
- **Alert Routing:** Create tier-based channels or route to Microsoft Teams, Discord, or SMS via Twilio.
- **Scraping Frequency:** Change from twice-daily to hourly for competitive markets or weekly for stable industries.
- **Additional Networks:** Duplicate workflow for different affiliate networks (CJ, ShareASale, Impact, Rakuten).

---

Once configured, this workflow will continuously monitor competitive threats and alert you before top affiliates switch to better-paying programs, protecting your affiliate revenue from competitive pressure.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
