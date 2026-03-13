# 📊 Automate product Hunt discovery with Airtop and Slack

> ⚡ **1,247 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### About The Product Hunt Automation

Staying up-to-date with specific topics and launches on Product Hunt can be time-consuming. Manually checking the site multiple times a day interrupts your workflow and risks missing important launches. What if you could automatically get relevant launches delivered to your Slack workspace?

### How to Monitor Product Hunt

In this guide, you'll learn how to create a Product Hunt monitoring system using Airtop's built-in node in n8n. This automation will scan Product Hunt for your chosen topics and deliver the most relevant launches directly to Slack.


### What You'll Need

- A free [Airtop API key](https://portal.airtop.ai/?utm_campaign=n8n)
- A Slack workspace with permissions to add incoming webhooks
- Estimated setup time: 5 minutes

### Understanding the Process

The Monitor Product Hunt automation uses Airtop's cloud browser capabilities to access Product Hunt and extract launch information. Here's what happens:

- Airtop visits Product Hunt and navigates the page
- It searches for and extracts up to 5 launches related to your chosen topic
- The information is formatted and sent to your specified Slack channel

This process can run on your preferred schedule, ensuring you never miss relevant launches.

![image.png](fileId:1101)


### Setting Up Your Automation

We've created a ready-to-use template that handles all the complex parts. Here's how to get started:

- Connect your Airtop account by adding the API key you created
- Connect your Slack account
- Set your prompt in the Airtop node. For this example, we’ve set it to be _“Extract up to 5 launches related to AI products”_
- Choose your preferred monitoring schedule.

### Customization Options

While our template works immediately, you might want to customize it for your specific needs:

- Adjust the prompt and the maximum number of launches to monitor
- Customize the Slack message format
- Change the monitoring frequency
- Add filters for particular keywords or companies

### Real-World Applications

Here's how teams can use this automation:

- A **startup's engineering team** could track trends in other product’s tech stack, helping them stay informed about potential issues and improvements.

- A **product manager** can track launches of competitor products, enabling them to gather valuable market insights and user feedback directly from the tech community on that launch.

### Best Practices

To get the most out of this automation:

- **Choose Specific Search Terms**: For more relevant results, instead of broad terms like "AI," use specific phrases like "machine learning for healthcare"
- **Optimize Scheduling**: When setting the monitoring frequency, consider your team's workflow. Running the scenario every 4 hours during working hours often provides a good balance between staying updated and avoiding notification fatigue.
- **Set Up Error Handling**: Enable n8n's error output to alert you if the automation encounters any issues with accessing Product Hunt or sending messages to Slack.
- **Regular Topic Review**: Schedule a monthly review of your monitored topics to ensure they're still relevant to your needs and adjust as necessary.


### What's Next?

Now that you've set up your Product Hunt monitor automation, you might be interested in:

- Creating a similar monitor for other tech websites
- Setting up automated content curation for your team's newsletter
- Building a competitive intelligence dashboard using web monitoring

Happy Automating!

## 🔗 Nodes Used

Slack, Schedule Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
