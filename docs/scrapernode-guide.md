# Using ScraperNode in n8n

[ScraperNode](https://www.npmjs.com/package/n8n-nodes-scrapernode) is a community node for n8n that provides web scraping capabilities for platforms like LinkedIn, Instagram, TikTok, YouTube, and more.

## Installation

1. In your n8n instance, go to **Settings > Community Nodes**
2. Click **Install a community node**
3. Enter: `n8n-nodes-scrapernode`
4. Click **Install**

## Getting an API Key

1. Sign up at [useweld.com](https://useweld.com)
2. Go to your dashboard and copy your API key
3. In n8n: **Settings > Credentials > Add Credential > ScraperNode API**
4. Paste your API key

## Available Scrapers

ScraperNode supports scraping data from:

- **LinkedIn** - Profiles, companies, job listings, search results
- **Instagram** - Profiles, posts, hashtags, reels
- **TikTok** - Profiles, videos, hashtags
- **YouTube** - Channels, videos, search results
- **Twitter/X** - Profiles, tweets, search
- **Facebook** - Pages, posts
- **Indeed** - Job listings
- **Glassdoor** - Company reviews, salaries
- **Yelp** - Business listings, reviews
- **GitHub** - Repositories, profiles
- **Crunchbase** - Company data

## How It Works

Each scraper node has three operations:

1. **Create** - Start a new scraping job with your parameters
2. **Get** - Check the status of a running job
3. **Get Results** - Retrieve the scraped data once the job completes

## Example Workflow

A basic scraping workflow:

1. **Trigger** (Manual, Schedule, or Webhook)
2. **ScraperNode - Create** job with your target URL/parameters
3. **Wait** node (or poll with Get operation)
4. **ScraperNode - Get Results** to retrieve data
5. **Process** the data (filter, transform, store)

Check the `templates/web-scraping/` folder for ready-to-use workflow templates.

## Tips

- Use the **ScraperNode Jobs** management node to check credit balance and manage jobs
- The node is AI agent compatible, so you can use it with n8n's AI workflow nodes
- Start with small batches when testing new scraping workflows
