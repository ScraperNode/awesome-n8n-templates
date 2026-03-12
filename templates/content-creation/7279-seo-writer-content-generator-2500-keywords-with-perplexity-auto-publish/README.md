# 🎬 SEO writer: Content generator (2500 keywords) with Perplexity & auto publish

> ⚡ **544 views** · 🎬 [Content Creation & Video](../)

## Description

🔥 TLDR

  Automatically generate and publish 2000+ word SEO-optimized blog posts to GitHub every 8 hours - Complete with trending topic research, AI content generation, and automatic JSON formatting for your blog platform. Instant SEO traffic upcoming! 

  ---
  📌 Who's it for

  Content creators, marketers, and developers who want to:
  - Maintain a consistent blog publishing schedule without manual effort
  - Generate high-quality, SEO-optimized content automatically
  - Keep up with trending topics in their industry
  - Build content libraries for their websites or applications

  🚀 What it does

  This workflow is a complete content generation pipeline that runs
  automatically every 8 hours:

  1. Discovers trending topics using Perplexity Sonar to find what's hot in
   your chosen categories
  2. Conducts deep research with real statistics, expert opinions, and
  current data
  3. Generates comprehensive content - 2000-2500 word articles using GPT-5
  mini
  4. Formats for web - Converts to JSON with proper metadata (slug,
  keywords, reading time)
  5. Publishes automatically to your GitHub repository as blog-ready JSON
  files

  ✨ Key Features

  SEO Optimization

  - Keyword-rich content with targeted keywords naturally integrated
  - Proper heading structure (H1, H2, H3) for search engine crawling
  - Meta descriptions automatically generated from content
  - Reading time calculation for better user engagement metrics
  - URL-friendly slugs with timestamps for uniqueness

  Content Quality

  - 2000+ words minimum ensuring comprehensive coverage
  - Research-backed with current statistics and expert opinions
  - Structured format with clear sections: Introduction, Analysis,
  Applications, Challenges, Future Outlook
  - Markdown formatting for easy rendering on any platform

  🛠️ How to set up

  Requirements

  - n8n instance (self-hosted or cloud)
  - Perplexity API account
  - OpenAI API account (GPT-5 mini access)
  - GitHub repository for storing blog content

  Setup Steps

  1. Import the workflow into your n8n instance
  2. Configure credentials:
    - Add your Perplexity API key
    - Add your OpenAI API key
    - Connect your GitHub account via OAuth2
  3. Customize the GitHub node:
    - Set your repository owner and name
    - Adjust the file path if needed (default: public/blog-data/)
  4. Adjust the schedule (optional):
    - Default runs every 8 hours
    - Modify the Schedule Trigger node for your preferred frequency
  5. Test the workflow with manual execution before enabling automatic
  scheduling

  🎨 How to customize

  Topic Categories

  Edit the "Find trending topics" node to focus on your niche:
  - Technology & AI
  - Social Media & Marketing
  - Business & Finance
  - Health & Wellness
  - Education & Career

  Content Length

  Adjust word count requirements in the "Format Blog JSON" node validation

  Output Format

  Modify the JSON structure in "Format Blog JSON" to match your blog platform's requirements

  Publishing Destination

  Change the GitHub repository path or integrate with other platforms like WordPress, Contentful, or Strapi

  📊 Workflow Benefits

  - Consistency: Never miss a publishing deadline
  - Scale: Generate multiple articles daily without manual effort
  - Quality: Research-backed content with real data and sources
  - SEO-Ready: Optimized structure and metadata for search engines
  - Cost-Effective: Uses efficient AI models for sustainable content
  generation

## 🔗 Nodes Used

GitHub, Schedule Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
