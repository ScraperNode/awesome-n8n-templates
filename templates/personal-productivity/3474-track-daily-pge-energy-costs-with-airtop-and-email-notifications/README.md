# ⚡ Track daily PG&E energy costs with Airtop and email notifications

> ⚡ **506 views** · ⚡ [Personal Productivity](../)

## Description

### About The Airtop Automation

Are you tired of being shocked by unexpectedly high energy bills? With this automation using Airtop and n8n, you can take control of your daily energy costs and ensure you’re always informed.

### How to monitor your daily energy consumption

With this automation, we’ll walk you through setting up an automation that retrieves your PG&E (Pacific Gas and Electric) energy usage data, calculates costs, and emails you the details—all without manual effort.

### What You’ll Need
To get started, make sure you have the following:

- A free [Airtop API Key](https://portal.airtop.ai/?utm_campaign=n8n)
- PG&E Account Credentials - with minor adaptations, this will also work with other providers
- An Email Address - To receive the energy cost updates

Estimated setup time: 5 minutes

### Understanding the Process

This automation works by:
 
1. Logging into your PG&E account using your credentials
2. Navigating to your energy usage data
3. Extracting relevant details about energy consumption and costs
4. Emailing the daily summary directly to your inbox

The automation is straightforward and ensures you have real-time insights into your energy usage, empowering you to adjust your habits and save money.

### Setting Up Your Automation
We’ve created a step-by-step guide to help you set up this workflow. Here’s how:

#### Insert Your Credentials:

- In the tools section, add your PG&E login details as variables
- In Airtop, add your [Airtop API Key](https://portal.airtop.ai/api-keys)
- Configure your email address to receive the updates

#### Run the Automation:

- Start the scenario, and watch as the automation retrieves your energy data and sends you a detailed email summary.

### Customization Options

While the default setup works seamlessly, you can tweak it to suit your needs:

- Data Storage: Store energy usage data in a database for long-term tracking and analysis
- Visualization: Plot graphs of your energy usage trends over time for better insights
- Notifications: Change the automation to only send alerts on high usage instead of a daily email

### Real-World Applications

This automation isn’t just about monitoring energy usage and taking control. Here are some practical applications:

- Daily Energy Management: Receive updates every morning and adjust your energy consumption based on costs
- Smart Home Integration: Use the data to automate appliances during off-peak hours
- Budgeting: Track energy expenses over weeks or months to plan your budget more effectively

Happy automating!

## 🔗 Nodes Used

Gmail, Schedule Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
