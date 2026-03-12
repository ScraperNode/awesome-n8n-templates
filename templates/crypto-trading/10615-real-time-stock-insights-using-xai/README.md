# 📈 Real-time stock insights using xAI

> ⚡ **455 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Who is this for?
This n8n workflow is designed for **investors, financial analysts, automated trading system developers, and finance enthusiasts** who require daily, comprehensive, data-driven insights into specific stock symbols. It's perfect for users who need to automate the complex process of **combining technical indicators, news sentiment, professional analyst ratings, and social media buzz** into a single, actionable recommendation. This system provides a 24/7 automated "analyst" for portfolio monitoring.

## What this Workflow Does
This n8n workflow executes a daily, multi-faceted analysis of a target stock. It starts by gathering all relevant data (price history, news, ratings, social posts) and processes it through specialized **Code nodes** to calculate **technical indicators (SMA, RSI)**, determine **price predictions (Linear Regression)**, and perform **sentiment analysis** on news and social media. Finally, it uses a weighted model to synthesize all data into a **single, comprehensive Buy/Sell/Hold recommendation** and delivers a detailed report via **Telegram**.

## Key Features
* **Daily Scheduling**: Automatically triggers analysis every day at a specified time (e.g., 9:00 AM).
* **Multi-Factor Analysis**: Combines **four key domains** for a holistic view: Technical, Prediction, News Sentiment, Analyst Ratings, and Social Sentiment.
* **Technical Indicator Calculation**: Calculates **SMA (20, 50, 200)**, **RSI (14-day)**, and identifies Support/Resistance levels.
* **Price Prediction**: Uses **Simple Linear Regression** to forecast a 7-day price trend and generate an initial recommendation.
* **Sentiment Analysis**: Custom Code nodes perform **keyword-based sentiment analysis** on news articles and social media posts.
* **Composite Recommendation**: A weighted model combines all analysis scores (35% Technical, 25% News, 25% Analyst, 15% Social) to generate a **final recommendation, confidence score, and summary**.
* **Automated Alerting**: Delivers a fully formatted, easily readable **Markdown report** via **Telegram**.

## Requirements
* **API Configuration Node**: A preliminary node (implied by the expression references) containing:
    * Target **`stockSymbols`** (e.g., `TSLA`, `AAPL`).
    * **`telegramChatId`** for receiving the report.
    * **API Keys** for data sources (e.g., a Financial Data API for price/news/ratings, a Social Media API).
* **Telegram Credentials**: For the Telegram node to send the final message.
* **Financial Data Source Workflow**: Requires preceding nodes (not fully visible) to fetch:
    * Historical price data (required for SMA/RSI/Regression).
    * Recent news headlines and summaries.
    * Recent analyst ratings.
    * Social media data (e.g., from Twitter/StockTwits).
* **n8n Instance**: Self-hosted or cloud-based n8n installation.

---

## How to Use
### Step-by-Step Setup
#### 1. Configure Scheduling
* Open the **"Daily Stock Check"** node.
* Set the **interval rule** to the precise hour you want the report to run (e.g., 9:00 AM).

#### 2. Configure Stock Symbol and Telegram
* In the (implied) **"API Configuration"** node, set the **`stockSymbols`** you wish to track.
* Set the target **`telegramChatId`** where the report will be delivered.
* Ensure your Telegram credentials are set up in n8n.

#### 3. Verify Data Fetching Nodes
* Ensure the nodes feeding data into **"Analyze Stock Trends," "Analyze News Sentiment," "Process Analyst Ratings,"** and **"Analyze Social Sentiment"** are correctly configured to fetch the required historical price, news, ratings, and social data.

#### 4. Adjust Analysis Weights (Advanced)
* If you wish to change the importance of different factors, edit the **`WEIGHTS`** object inside the **"Generate Comprehensive Recommendation"** Code node.
    * *Default Weights:* Technical (0.35), News (0.25), Analyst (0.25), Social (0.15).

#### 5. Test the Workflow
* Manually execute the workflow to ensure all Code nodes process the incoming data correctly and the **"Send Telegram Alert"** successfully delivers the final, formatted message.

---

## Workflow Components
The workflow is structured into three main phases: **Data Processing, Recommendation Synthesis, and Reporting.**

### 1. Data Processing and Indicator Calculation
| Node Name | Type | Key Functionality |
| :--- | :--- | :--- |
| **Daily Stock Check** | Schedule Trigger | Initiates the entire workflow daily at the set time. |
| **Analyze Stock Trends** | Code | Calculates **Technical Indicators**: SMA (20, 50, 200), RSI (14-day), Volume Trend, and Support/Resistance levels. |
| **Predict Future Trends** | Code | Performs **Simple Linear Regression** on historical prices to determine slope and predict the price 7 days ahead. |
| **Analyze News Sentiment** | Code | Performs **keyword-based sentiment analysis** on news headlines and summaries to categorize overall sentiment (positive/negative/neutral) and assign a score. |
| **Process Analyst Ratings** | Code | Aggregates analyst recommendations (Buy/Hold/Sell) to calculate **consensus rating** and **average price target**. |
| **Analyze Social Sentiment** | Code | Performs **keyword-based sentiment analysis** on social media data to determine community mood and trending hashtags. |

### 2. Recommendation Synthesis
| Node Name | Type | Description |
| :--- | :--- | :--- |
| **Combine All Analysis** | Merge | Consolidates the outputs from the four analysis branches (**Technical, News, Analyst, Social**) into a single data item. |
| **Generate Comprehensive Recommendation** | Code | **The core logic.** Calculates a weighted composite score (from -100 to 100) based on all four inputs, generating the final **STRONG BUY/BUY/HOLD/SELL/STRONG SELL** recommendation and a numerical confidence score. |

### 3. Reporting and Alerting
| Node Name | Type | Description |
| :--- | :--- | :--- |
| **Format Telegram Message** | Set | Constructs the final detailed report message using **Markdown** formatting, pulling data from all preceding analysis nodes into a clear, structured report. |
| **Send Telegram Alert** | Telegram | Sends the fully formatted analysis report to the pre-configured Telegram chat ID. |


## 🙋 For Help & Community
- 👾 Discord: [n8n channel](https://discord.gg/9SDFKGnh2Y)
- 🌐 Website: [devcodejourney.com](https://devcodejourney.com)
- 🔗 LinkedIn: [Connect with Shakil](https://www.linkedin.com/in/shakilpg/)
- 📱 WhatsApp Channel: [Join Now](https://whatsapp.com/channel/0029Vb5l6JuDTkK5BRORNn0B)
- 💬 Direct Chat: [Message Now](https://wa.me/8801316320957)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
