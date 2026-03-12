# 📱 Find AliExpress affiliate products via Telegram with OpenAI and Decodo

> ⚡ **109 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Find and share AliExpress affiliate products through Telegram

Build a Telegram bot that helps users find AliExpress products using natural language requests. The bot uses OpenAI to optimize search queries, Decodo to scrape product listings, and AI analysis to select the best options based on ratings, reviews, and price—then automatically generates affiliate tracking links for each recommendation.

## What it does

When users send "Find me wireless keyboard":

1. Bot checks user is member of your Telegram channel (optional)
2. Validates command starts with accepted phrases
3. OpenAI generates optimized English search query
4. Decodo scrapes products from AliExpress  
5. AI analyzes the top 10 products and selects best 2 based on reviews, ratings, and price
6. AliExpress Affiliate API creates tracking links
7. Bot sends formatted recommendations with images, prices, ratings, and links

## Who this is for

- Affiliate marketers monetizing Telegram channels
- E-commerce entrepreneurs automating recommendations
- Channel owners adding value while earning commissions
- Anyone building AliExpress affiliate systems

## Setup requirements

### Credentials needed

**Telegram Bot API**
- Create bot via @BotFather
- Add token to n8n
- Make bot admin in your channel

**AliExpress Affiliate API**
- Sign up for affiliate program
- Get: App Key, App Secret, Tracking ID
- Add to n8n

**OpenAI API**
- Get API key
- Add to n8n
- Used for search and analysis

### Configuration required

Before activation:

1. **Channel username** - Replace `@YOUR_CHANNEL` in 2 nodes:
   - Check Channel Membership
   - Verify Channel Member

2. **Tracking ID** - Set `YOUR_AFFILIATE_TRACKING_ID` in:
   - Generate Affiliate Links
   - Create Affiliate Link

3. **Channel URL** - Update button in Request Channel Join

4. **Bot admin** - Make bot admin in your channel

## How to use

### User commands

Users send messages starting with:
- Find me [product]
- Search for [product]
- Look for [product]
- Get me [product]
- Send me [product]
- Show me [product]

**Examples:**
- Find me wireless mouse
- Search for phone case
- Look for bluetooth speaker

### Bot responses

**Non-member:** Asks to join channel

**Invalid format:** Shows usage examples

**Valid request:**
1. Sends "searching..." status
2. Processes with AI
3. Returns 2 recommendations
4. Each includes: image, title, price, rating, orders, link
5. "More Results" button available

## Customization options

**Product count:** Edit "Select Top 2 Products" node

**Selection criteria:** Modify AI prompts in "AI Product Search"

**Commands:** Add/remove in "Validate Command Format"

**Channel gate:** Delete verification nodes to remove

**Language:** Translate Telegram message nodes

**AI model:** Switch to GPT-3.5-turbo for lower costs

## Technical details

**Workflow components:**
- Entry: Telegram webhook
- Verification: Channel membership  
- Validation: Command format
- Processing: AI query → Decodo scrape → AI analysis
- Output: Affiliate links → Message format → Send

**APIs used:**
- Telegram Bot API - User interaction
- OpenAI API - Search optimization, product analysis
- Decodo - AliExpress scraping
- AliExpress Affiliate API - Link generation

**Error handling:**
- Invalid commands → Usage guide
- Non-members → Join request
- No results → Error message
- Spam → Auto-removal

## Best practices

**Cost management:**
- OpenAI: $0.01-0.05 per search
- Cache popular searches
- Use GPT-3.5 for lower costs

**Security:**
- Store credentials in n8n
- Rotate API keys regularly
- Monitor activity

**Performance:**
- Use webhook mode
- Set up error notifications  
- Implement rate limiting

## Troubleshooting

**Bot not responding**
- Verify workflow activated
- Check credentials valid
- Review error logs

**Channel verification fails**
- Confirm bot is admin
- Check @username correct
- Ensure user joined

**No products found**
- Validate credentials
- Check tracking ID
- Try different terms

**Links broken**
- Confirm account active
- Verify tracking ID
- Check permissions

## Version

**Version:** 1.0  
**Updated:** January 2026  
**Compatible:** n8n v1.0+  
**Setup:** 10-15 minutes

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
