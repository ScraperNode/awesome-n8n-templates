# 🎣 Build lists of profiles from any platform using Airtop and Google Sheets

> ⚡ **2,683 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

### About The List Building Automation

This automation will guide you on how to automate list building using Airtop. You’ll have a streamlined workflow that can reduce your research time by up to 90% while improving the accuracy of your target lists.

### How to automate list building

It can be challenging to spend too much time on tasks like compiling lists of potential investors, customers, job candidates, industry influencers, or key decision-makers. Verifying contact details often requires significant effort, whether building an outreach list, tracking thought leaders, or researching potential customers. Not anymore. With Airtop's List Building Automation, turn hours of tedious research into clean, reliable and accurate lists, built in just minutes. 

Check this out:

![list_building_demo.gif](fileId:1097)

### What You'll Need

- A free [Airtop API Key](https://portal.airtop.ai/?utm_campaign=n8n)
- Target audience parameters (persona and which network. i.e. "AI Influencers on LinkedIn)
- Make a copy of [this template](https://docs.google.com/spreadsheets/d/150eh4t5GyEBN_TcO5TDeNWpE2GzHR4hQWoNRbUpw7A0/edit?usp=sharing) to start


### Understanding the Process

This automation leverages Airtop's advanced data processing capabilities powered by AI to scan multiple unstructured sources and compile accurate, targeted lists based on your specific requirements. The magic lies in its ability to understand context and verify information across different platforms.

This workflow:
 - Handles multi-source data collection and consolidation
 - Manages automatic verification of social profiles and domains
 - Automates the filtering and ranking of results based on relevance


### Setting Up Your Automation

1. Enter your search criteria in the "Parameters" node:
    - Who: Your target audience (e.g., "Angel investors in Europe," "Top AI influencers")
    - Where: The platform or domain to focus on (e.g., "LinkedIn," "TikTok") 
2. Configure your Airtop API Key
    - Create one for free at the [Airtop Portal](https://portal.airtop.ai/api-keys)
 3. In the last node, select the spreadsheet that you copied earlier
 4. Run the workflow

### Customization Options

While our template works out of the box, you might want to customize it for your specific needs:

- Add custom filtering criteria for more targeted results
- Implement automatic data enrichment from additional sources
- Set up automatic exports to your preferred CRM or database


### Real-World Applications

Here's how businesses can use this automation:

**A VC firm** could use this automation to build a comprehensive EU angel investors database. What previously required their analysts to work 15 hours per week now runs automatically in the background, providing fresh leads daily.

**A PR agency** could automate its influencer discovery process across multiple platforms, reducing its research time from 10 hours to 30 minutes per client while increasing the relevance of its outreach lists.

### Best Practices

To get the most out of this automation:

- Start with specific, well-defined parameters to ensure relevant results
- Regularly update your parameters to keep your lists fresh and relevant
- Combine multiple runs with different parameters for comprehensive coverage

### What's Next?

Now that you've automated your list building, you might be interested in:

- Setting up automated outreach sequences
- Creating dynamic lead scoring systems
- Implementing automatic list updating and maintenance

Happy automating!

## 🔗 Nodes Used

Google Sheets, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
