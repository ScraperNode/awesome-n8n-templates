# 🎬 Transform Gmail newsletters into insightful LinkedIn posts using OpenAI

> ⚡ **3,238 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Who Is This For?  
This workflow is perfect for content creators, marketers, and business professionals who receive regular newsletters and want to effortlessly convert them into engaging LinkedIn posts. By automating the extraction and repurposing process, you can save time and consistently share thoughtful updates with your network.

## What Problem Does This Workflow Solve?  
Manually reading newsletters, extracting the key points, and then formatting that content into professional, engaging LinkedIn posts can be time-consuming and error-prone. This workflow automates those steps by:
- **Filtering Emails:** Uses the Gmail node to process only those emails from a specific sender (e.g., `newsletter@example.com`).
- **Extracting Content:** Leverages OpenAI to identify and summarize the top news items in your newsletter.
- **Generating Posts:** Crafts concise, insightful LinkedIn posts in a smart, deadpan style with a touch of subtle humor.
- **Publishing:** Posts the generated content directly to LinkedIn.

## What This Workflow Does  
- **Filter Newsletters:** The Gmail node is set up to only handle emails from your chosen sender, ensuring that only relevant newsletters are processed.
- **Extract Key Content:** An OpenAI node analyzes the newsletter text to pull out the most important news items, including headlines and summaries.
- **Split Content:** A Split Out node divides the extracted content so each news item is processed on its own.
- **Generate LinkedIn Posts:** Another OpenAI node takes each news item's details and produces a well-structured LinkedIn post that delivers practical insights and ends with a reflective observation or question.
- **Publish to LinkedIn:** The LinkedIn node publishes the crafted posts directly to your account.

## Setup  
1. **Gmail Node:** Rename it to “Filter Gmail Newsletter” and configure it to filter emails by your newsletter sender.
2. **OpenAI Nodes:** Ensure your OpenAI API credentials are set up correctly. Customize the prompt if needed to match your desired tone.
3. **LinkedIn Node:** Rename it to “Post to LinkedIn” and confirm that your LinkedIn OAuth2 credentials are properly configured.

## How to Customize  
- **OpenAI Prompts:** Adjust the prompts in the OpenAI nodes to fine-tune the post tone and output formatting.
- **Email Filter:** Change the Gmail filter to match the sender of your newsletters.
- **Post Processing:** Optionally, add extra formatting (using Function nodes) to further enhance the readability of the generated LinkedIn posts.

*This template offers an automated, hands-off solution to transform your newsletter content into engaging LinkedIn updates, keeping your audience informed and inspired with minimal effort.*

## 🔗 Nodes Used

Gmail, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
