# 🎬 Content farming - : AI-powered blog automation for WordPress

> ⚡ **32,801 views** · 🎬 [Content Creation & Video](../)

## Description

## ==🔥 Upgrade to V4==
We’ve released Version 4 of our AI Powered Blog Automation workflow. We heard your complains and made a complete redesign built for serious content creators.

ChatGPT 5, Inbound Links, Verified Outbound Links,YOAST seo integration, Company profile, higher SEO ranking, banner images using companys mascot, FAQ sections and conclusions, 35% cost reduction, 

📝 Read the [New Articles published by Content Farming v4](https://articles.emp0.com/tag/v4/)

🛒 View the [updated and improved v4 workflow](https://0emp0.gumroad.com/l/content-farming-v4)

# Content Farming V2
## AI Powered Blog Automation for WordPress 

This workflow automatically generates and publishes 10 blog posts per day to a WordPress site. It collects tech-related news articles, filters and analyzes them for relevance, expands them with research, generates SEO-optimized long-form articles using AI, creates a matching image using Leonardo AI, and publishes them via the WordPress REST API. Every step is tracked and stored in MongoDB for reference and performance tracking.

You can see the demo results for the AI based articles here: [Emp0 Articles](https://articles.emp0.com/tag/v2/)

![Screenshot 20250625 010731.png](fileId:1578)



## How it works

1. A scheduler runs daily to fetch the latest news from RSS feeds including BBC, TechCrunch, Wired, MIT Tech Review, HackerNoon, and others.
2. The RSS data is normalized and filtered to include only articles published within the past 24 hours.
3. Each article is passed through an OpenAI-powered classifier to check for relevance to predefined user topics like AI, robotics, or tech policy.
4. Relevant articles are then aggregated, researched, and summarized with supporting sources and citations.
5. An AI agent generates five long-tail SEO blog title ideas, ranks them by uniqueness and performance score, and selects the top one.
6. A blog outline is created including H1 and H2 headers, keyword targeting, content structure, and featured snippet optimization.
7. A full-length article (1000 to 1500 words) is generated based on the outline, with analogies, citations, examples, and keyword density maintained.
8. SEO metadata is produced including meta title, description, image alt text, slug, and a readability audit.
9. An AI-generated image is created based on the blog theme using Leonardo AI, enhanced for emotional storytelling and visual consistency.
10. The blog article, metadata, and image are uploaded to WordPress as a draft, the image is attached, Yoast SEO metadata is set, and the article is published.

All outputs including article versions, metadata, generation steps, and final blog URLs are stored in MongoDB to allow for future analytics and feedback.

## Requirements

To run this project, you need accounts and API access for the following:

| Tool         | Purpose                                                         | Notes                                                                 |
|--------------|------------------------------------------------------------------|-----------------------------------------------------------------------|
| OpenAI       | Used for blog classification, generation, summarization, SEO    | Around $0.20 per day, using GPT-4o-mini. Estimated monthly: $6       |
| MongoDB      | Stores data flexibly including drafts, titles, metadata, logs   | Free tier on MongoDB Atlas offers 512 MB, enough for 64,000 articles |
| Leonardo AI  | Generates featured images for blog articles                     | $9 for 3500 credits, $5 monthly top-up needed for 300 images          |
| WordPress    | Final publishing platform via REST API                          | Hosted on Hostinger for $15/year including domain                     |

## Setup Instructions

1. Import the provided JSON file into your n8n instance.
2. Configure these credentials in n8n:
   - OpenAI API key
   - MongoDB Atlas connection string
   - HTTP Header Auth for Leonardo AI
   - WordPress REST API credentials
3. Modify the classifier and prompt nodes to reflect your preferred content themes.
4. Adjust scheduler nodes if you want to change post frequency or publishing times.
5. Run the n8n instance continuously using Docker, PM2, or hosted automation platform.

## Cost Estimate

| Component     | Daily Usage                  | Monthly Cost Estimate |
|---------------|------------------------------|------------------------|
| OpenAI        | 10 posts per day             | ~$6                   |
| Leonardo AI   | 10 images per day (15 credits each) | ~$14 (9 base + 5 top-up) |
| MongoDB       | Free up to 512 MB            | $0                    |
| WordPress     | Hosting and domain           | ~$1.25                |
| **Total**     |                              | **~$21/month**        |

## Observations and Learnings

This system can scale daily article publishing with zero manual effort. However, current limitations include inconsistent blog length and occasional coherence issues. To address this, I plan to build a feedback loop within the workflow:

- An SEO Commentator Agent will assess keyword strength, structure, and discoverability.
- An Editor-in-Chief Agent will review tone, clarity, and narrative structure.
- Both agents will loop back suggestions to the content generator, improving each draft until it meets human-level standards.

The final goal is to consistently produce high-quality, readable, SEO-optimized content that is indistinguishable from human writing.

## 🔗 Nodes Used

HTTP Request, RSS Read, MongoDB, Wordpress, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
