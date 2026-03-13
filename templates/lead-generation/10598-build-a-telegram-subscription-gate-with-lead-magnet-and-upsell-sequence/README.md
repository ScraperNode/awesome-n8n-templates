# 🎣 Build a Telegram subscription gate with lead magnet and upsell sequence

> ⚡ **138 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 😎 For Fast-Growing Your Telegram Channel (Lead Magnet Gate)

## 📋 No plug-and-play workflow
This workflow implements a subscription gate for a Telegram lead magnet campaign. Users must subscribe to a Telegram channel before they can access the lead magnet (e.g., a free resource, discount code, or exclusive content).

## 🇺🇦 Українською
Цей воркфлоу реалізує шлюз підписки для кампанії лід-магніту в Telegram. Користувачі повинні підписатися на канал Telegram, перш ніж зможуть отримати доступ до лід-магніту (наприклад, безкоштовного ресурсу, коду знижки або ексклюзивного контенту).

## 🎥 YouTube Video Integration
[Watch Tutorial in English](https://www.youtube.com/watch?v=example) - UPD Link After Approve Workflow

[Дивитись Інструкцію Українською](https://www.youtube.com/watch?v=example) -UPD Link After Approve Workflow

NOW Sticky Notes - all have for Implementation

## 🛠️ Configuration Notes

1. **Channel ID** - Replace `inputyourid` with your actual Telegram channel ID (without @) or -100 type for closed channel
2. **Bot Token** - Replace bot token placeholders with your actual Telegram bot token
3. **Lead Magnet** - Update the lead magnet delivery message with your actual file/resource links/ webinar link / discount code
4. **Upsell Content** - Customize the upsell/cross-sell content as needed

## 🌍 Bilingual Support
All user-facing messages are provided in both Ukrainian and English to support international audiences:
- Ukrainian text appears first
- English text follows after a line break
- Buttons include both languages where appropriate.

## 📈 Use Cases
- Lead generation for Telegram channels
- Content gating for exclusive resources
- Community building through subscription requirements
- Marketing funnel automation

## 🤖 Template Features

### ✅ Ready-to-Use Template
Simply import and configure with your Telegram bot credentials.

### 📚 Comprehensive Documentation
- Visual sticky notes explaining each node's purpose
- Detailed workflow documentation
- Logic explanation notes

### 🧠 Smart Workflow Design
- Efficient data flow with minimal API calls
- Proper error handling and user feedback
- Responsive button interactions
- Conditional routing based on subscription status

## 🚀 Quick Start Guide

1. **Import Workflow**
   - Download the JSON file
   - Import into your n8n instance (Cloud or Self-hosted)

2. **Configure Telegram Credentials**
   - Set up your Telegram bot token in the credentials section
   - Ensure your bot has necessary permissions

3. **Customize Channel Settings**
   - Replace `inputyourid` with your actual Telegram channel ID
   - Update all placeholder links with your actual resources

4. **Personalize Messages**
   - Modify lead magnet delivery messages
   - Customize upsell content
   - Watch YouTube tutorial links

5. **Test the Workflow**
   - Activate the workflow in your n8n instance
   - Test with a non-subscribed account
   - Verify subscription verification works correctly
   - Test the upsell sequence with the /ok command (command you can change)

## 📄 License
This template is provided as-is for use with n8n automation platform. Feel free to modify and adapt to your specific needs.

## 🙋‍♂️ Support
For issues with this template, please check:
1. All placeholder values have been replaced
2. Telegram bot has proper permissions
3. n8n instance is properly configured
4. Internet connectivity is available
5. https://t.me/nikolenkoclub

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
