# 🎣 Automated LinkedIn profile discovery with Airtop and Google Search

> ⚡ **15,416 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### About The LinkedIn Profile Discovery Automation

Are you tired of manually searching for LinkedIn profiles or paying expensive data providers for often outdated information? If you spend countless hours trying to find accurate LinkedIn URLs for your prospects or candidates, this automation will change your workflow forever. Just give this workflow the information you have about a contact, and it will automatically augment it with a LinkedIn profile.

### How to find a LinkedIn Profile Link

In this guide, you'll learn how to automate LinkedIn profile link discovery using Airtop's built-in node in n8n. Using this automation, you'll have a fully automated workflow that saves you hours of manual searching while providing accurate, validated LinkedIn URLs.

### What You'll Need

- A free [Airtop API key](https://portal.airtop.ai/?utm_campaign=n8n)
- A Google Workspace account. If you have a Gmail account, you’re all set
- Estimated setup time: 10 minutes

### Understanding the Process

This automation leverages the power of intelligent search algorithms combined with LinkedIn validation to ensure accuracy. Here's how it works:

- Takes your input data (name, company, etc.) and constructs intelligent search queries
- Utilizes Google search to identify potential LinkedIn profile URLs
- Validates the discovered URLs directly against LinkedIn to ensure accuracy
- Returns confirmed, accurate LinkedIn profile URLs

![image.png](fileId:1096)

### Setting Up Your Automation

Getting started with this automation is straightforward:

#### Prepare Your Google Sheet

- Create a new Google Sheet with columns for input data (name, company, domain, etc.)
- Add columns for the output LinkedIn URL and validation status (see [this](https://docs.google.com/spreadsheets/d/1rjlKzphEbknNh_ToS9pR_dP_Tw93FsxDte5AI4LH5_E/copy) example)

#### Configure the Automation

- Connect your Google Workspace account to n8n if you haven't already
- Add your Airtop API credentials
- (Optionally) Configure your [Airtop Profile](https://docs.airtop.ai/guides/how-to/saving-a-profile) and sign-in to LinkedIn in order to validate profile URL's

#### Run Your First Test

- Add a few test entries to your Google Sheet
- Run the workflow
- Check the results in your output columns

![image.png](fileId:1102)

### Customization Options

While the default setup uses Google Sheets, this automation is highly flexible:

- **Webhook Integration**: Perfect for integrating with tools like Clay, Instantly, or your custom applications
- **Alternatives**: Replace Google Sheets with Airtable, Notion, or any other tools you already use for more robust database capabilities
- **Custom Output Formatting**: Modify the output structure to match your existing systems
- **Batch Processing**: Configure for bulk processing of multiple profiles


### Real-World Applications

This automation has the potential to transform how we organizations handle profile enrichment.

#### Recruiting Firm Success Story

With this automation, a recruiting firm could save hundreds of dollars a month in data enrichment fees, achieve better accuracy, and eliminate subscription costs. They would also be able to process thousands of profiles weekly with near-perfect accuracy.

#### Sales Team Integration

A B2B sales team could integrate this automation with their CRM, automatically enriching new leads with validated LinkedIn profiles and saving their SDRs hours per week on manual research.

### Best Practices

To maximize the accuracy of your results:

- Always include company information (domain or company name) with your search queries
- Use full names rather than nicknames or initials when possible
- Consider including location data for more accurate results with common names
- Implement rate limiting to respect LinkedIn's usage guidelines
- Keep your input data clean and standardized for best results
- Use the [integrated proxy](https://docs.airtop.ai/guides/how-to/using-a-proxy) to navigate more effectively through Google and LinkedIn


### What's Next?

Now that you've automated LinkedIn profile discovery, consider exploring related automations:

- Automated lead scoring based on LinkedIn profile data
- Email finder automation using validated LinkedIn profiles
- Integration with your CRM for automated contact enrichment

## 🔗 Nodes Used

Google Sheets, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
