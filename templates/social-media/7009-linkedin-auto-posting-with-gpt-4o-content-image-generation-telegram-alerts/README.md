# 📱 LinkedIn auto-posting with GPT-4o content & image generation + Telegram alerts

> ⚡ **2,249 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates the process of generating and publishing LinkedIn posts that align with your personal brand tone and trending tech topics. It uses OpenAI to create engaging content and matching visuals, posts it directly to LinkedIn, and sends a confirmation via Telegram with post details.

### 🔑 Key Features

- 🏷️ **Random Hashtag Selection**  
  Picks a trending tag from a custom list for post inspiration.

- ✍️ **AI-Generated Content**  
  GPT-4o crafts a LinkedIn-optimized post in your personal writing style.

- 🖼️ **Custom Image Generation**  
  Uses OpenAI to generate a relevant image for visual appeal.

- 📤 **Direct LinkedIn Publishing**  
  Posts are made automatically to your profile with public visibility.

- 📩 **Telegram Notification**  
  You get a real-time Telegram alert with the post URL, tag, and timestamp.

- 📚 **Writing Style Alignment**  
  Past posts are injected as examples to maintain a consistent tone.

---

**Ideal Use Case**:  
Automate your daily or weekly LinkedIn presence with minimal manual effort while maintaining high-quality, relevant, and visually engaging posts.

## 🔗 Nodes Used

Telegram, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
