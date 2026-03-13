# 📊 AI-powered Amazon product recommendations via Decodo, Telegram and Gemini 2.5

> ⚡ **118 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Decodo Amazon Product Recommender delivers instant, AI-powered shopping recommendations directly through Telegram. Send any product name and receive Amazon product analysis featuring price comparisons, ratings, sales data, and categorized recommendations (budget, premium, best value) in under 40 seconds—eliminating hours of manual research.

## Why Use This Workflow?

**Time Savings:** Reduce product research from 45+ minutes to under 30 seconds  

**Decision Quality:** Compare 20+ products automatically with AI-curated recommendations 

**Zero Manual Work:** Complete automation from message input to formatted recommendations

## Ideal For

- **E-commerce Entrepreneurs:** Quickly research competitor products, pricing strategies, and market trends for inventory decisions
- **Smart Shoppers & Deal Hunters:** Get instant product comparisons with sales volume data and discount tracking before purchasing
- **Product Managers & Researchers:** Analyze Amazon marketplace positioning, customer sentiment, and pricing ranges for competitive intelligence

## How It Works

1. **Trigger:** User sends product name via Telegram (e.g., "iPhone 15 Pro Max case")
2. **AI Validation:** Gemini 2.5 Flash extracts core product keywords and validates input authenticity
3. **Data Collection:** Decodo API scrapes Amazon search results, extracting prices, ratings, reviews, sales volume, and product URLs
4. **Processing:** JavaScript node cleans data, removes duplicates, calculates value scores, and categorizes products (top picks, budget, premium, best value, most popular)
5. **Intelligence Layer:** AI generates personalized recommendations with Telegram-optimized markdown formatting, shortened product names, and clean Amazon URLs
6. **Output & Delivery:** Formatted recommendations sent to user with categorized options and direct purchase links
7. **Error Handling:** Admin notifications via separate Telegram channel for workflow monitoring

## Setup Guide

### Prerequisites

| Requirement | Type | Purpose |
|-------------|------|---------|
| [n8n instance](https://n8n.partnerlinks.io/khmuhtadin) | Essential | Workflow execution platform |
| [Decodo Account](dashboard.decodo.com/register?referral_code=744f4d340e73d131117de4af6a3129e343f0f8e4) | Essential | Amazon product data scraping |
| Telegram Bot Token | Essential | Chat interface for user interactions |
| Google Gemini API | Essential | AI-powered product validation and recommendations |
| Telegram Account | Optional | Admin error notifications |

### Installation Steps

1. Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/khmuhtadin)
2. **Configure credentials:**
   - **Decodo API**: Sign up at [decodo.com](https://decodo.com) → Dashboard → Scraping APIs → Web Advanced → Copy BASIC AUTH TOKEN
   - **Telegram Bot**: Message @BotFather on Telegram → `/newbot` → Copy HTTP API token (format: `123456789:ABCdefGHI...`)
   - **Google Gemini**: Obtain API key from Google AI Studio for Gemini 2.5 Flash model
3. **Update environment-specific values:**
   - Replace `YOUR-CHAT-ID` in "Notify Admin" node with your Telegram chat ID for error notifications
   - Verify Telegram webhook IDs are properly configured
4. **Customize settings:**
   - Adjust AI prompt in "Generate Recommendations" node for different output formats
   - Set character limits (default: 2500) for Telegram message length
5. **Test execution:**
   - Send test message to your Telegram bot: "iPhone 15 Pro"
   - Verify processing status messages appear
   - Confirm recommendations arrive with properly formatted links



## Customization Options

**Basic Adjustments:**
- **Character Limit**: Modify `2500` in AI prompt to adjust response length (Telegram max: 4096)

**Advanced Enhancements:**
- **Multi-language Support**: Add language detection and translation nodes for international users
- **Price Tracking**: Integrate Google Sheets to log historical prices and trigger alerts on drops
- **Image Support**: Enable Telegram photo messages with product images from scraping results

## Troubleshooting

**Common Issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| "No product detected" for valid inputs | AI validation too strict or ambiguous query | Add specific product details (model number, brand) in user input |
| Empty recommendations returned | Decodo API rate limit or Amazon blocking | Wait 60 seconds between requests; verify Decodo account status |
| Telegram message formatting broken | Special characters in product names | Ensure Telegram markdown mode is set to "Markdown" (legacy) not "MarkdownV2" |

## Use Case Examples

### Scenario 1: E-commerce Store Owner
**Challenge:** Needs to quickly assess competitor pricing and product positioning for new inventory decisions without spending hours browsing Amazon  
**Solution:** Sends "wireless earbuds" to bot, receives categorized analysis of 20+ products with price ranges ($15-$250), top sellers, and discount opportunities  
**Result:** Identifies $35-$50 price gap in market, sources comparable product, achieves 40% profit margin

### Scenario 2: Smart Shopping Enthusiast
**Challenge:** Wants to buy a laptop backpack but overwhelmed by 200+ Amazon options with varying prices and unclear value propositions  
**Solution:** Messages "laptop backpack" to bot, gets AI recommendations sorted by budget ($30), premium ($50+), best value (highest discount + good ratings), and most popular (by sales volume)  
**Result:** Purchases "Best Value" recommendation with 35% discount, saves $18 and 45 minutes of research time

---

**Created by:** [Khaisa Studio](https://khaisa.studio)  
**Category:** AI | Productivity | E-commerce | **Tags:** amazon, telegram, ai, product-research, shopping, automation, gemini

**Need custom workflows?** [Contact us](https://khaisa.studio/contact)

**Connect with the creator:**  
[Portfolio](https://khmuhtadin.com) • [Workflows](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
