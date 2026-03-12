# 📊 Ingredient price trend analysis & buying recommendations with PostgreSQL, API & Slack

> ⚡ **522 views** · 📊 [Market Research & Insights](../)

## Description

This automated n8n workflow monitors ingredient price changes from external APIs or manual sources, analyzes historical trends, and provides smart buying recommendations. The system tracks price fluctuations in a PostgreSQL database, generates actionable insights, and sends alerts via email and Slack to help restaurants optimize their purchasing decisions.

## **What is Price Trend Analysis?**
Price trend analysis uses historical price data to identify patterns and predict optimal buying opportunities. The system analyzes price movements over time and generates recommendations on when to buy ingredients based on current trends and historical patterns.

## **Good to Know**
* Price data accuracy depends on the reliability of external API sources
* Historical data improves recommendation accuracy over time (recommended minimum 30 days)
* PostgreSQL database provides robust data storage and complex trend analysis capabilities
* Real-time alerts help capture optimal buying opportunities
* Dashboard provides visual insights into price trends and recommendations

## **How It Works**
1. **Daily Price Check** - Triggers the workflow daily to monitor price changes
2. **Fetch API Prices** - Retrieves the latest prices from an external ingredient pricing API
3. **Setup Database** - Ensures database tables are ready before inserting new data
4. **Store Price Data** - Saves current prices to the PostgreSQL database for tracking
5. **Calculate Trends** - Analyzes historical prices to detect patterns and price movements
6. **Generate Recommendations** - Suggests actions based on price trends (buy/wait/stock up)
7. **Store Recommendations** - Saves recommendations for future reporting
8. **Get Dashboard Data** - Gathers necessary data for dashboard generation
9. **Generate Dashboard HTML** - Builds an HTML dashboard to visualize insights
10. **Send Email Report** - Emails the dashboard report to stakeholders
11. **Send Slack Alert** - Sends key alerts or recommendations to Slack channels

## **Database Structure**
The workflow uses PostgreSQL with two main tables:

1. **price_history** - Historical price tracking with columns:
   - id (Primary Key)
   - ingredient (VARCHAR 100) - Name of the ingredient
   - price (DECIMAL 10,2) - Current price value
   - unit (VARCHAR 50) - Unit of measurement (kg, lbs, etc.)
   - supplier (VARCHAR 100) - Source supplier name
   - timestamp (TIMESTAMP) - When the price was recorded
   - created_at (TIMESTAMP) - Record creation time

2. **buying_recommendations** - AI-generated buying suggestions with columns:
   - id (Primary Key)
   - ingredient (VARCHAR 100) - Ingredient name
   - current_price (DECIMAL 10,2) - Latest price
   - price_change_percent (DECIMAL 5,2) - Percentage change from previous price
   - trend (VARCHAR 20) - Price trend direction (INCREASING/DECREASING/STABLE)
   - recommendation (VARCHAR 50) - Buying action (BUY_NOW/WAIT/STOCK_UP)
   - urgency (VARCHAR 20) - Urgency level (HIGH/MEDIUM/LOW)
   - reason (TEXT) - Explanation for the recommendation
   - generated_at (TIMESTAMP) - When recommendation was created

## **Price Trend Analysis**
The system analyzes historical price data over the last 30 days to calculate percentage changes, identify trends (INCREASING/DECREASING/STABLE), and generate actionable buying recommendations based on price patterns and movement history.

## **How to Use**
* Import the workflow into n8n
* Configure PostgreSQL database connection credentials
* Set up external ingredient pricing API access
* Configure email credentials for dashboard reports
* Set up Slack webhook or bot credentials for alerts
* Run the Setup Database node to create required tables and indexes
* Test with sample ingredient data to verify price tracking and recommendations
* Adjust trend analysis parameters based on your purchasing patterns
* Monitor recommendations and refine thresholds based on actual buying decisions

## **Requirements**
1. PostgreSQL database access
2. External ingredient pricing API credentials
3. Email service credentials (Gmail, SMTP, etc.)
4. Slack webhook URL or bot credentials
5. Historical price data for initial trend analysis

## **Customizing This Workflow**
Modify the Calculate Trends node to adjust the analysis period (currently 30 days) or add seasonal adjustments. Customize the recommendation logic to match your restaurant's buying patterns, budget constraints, or supplier agreements. Add additional data sources like weather forecasts or market reports for more sophisticated predictions.

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, Postgres

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
