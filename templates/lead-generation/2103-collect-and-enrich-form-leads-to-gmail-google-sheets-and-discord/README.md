# 🎣 Collect and enrich form leads to Gmail, Google Sheets and Discord

> ⚡ **2,606 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

**Product Introduction:**
You can create a form on n8n through which you can collect leads from interested user's.

You can also verify each user's email address to validate whether it's a valid email to make sure it lands on their inbox(suitable for those who have newletter / want's to send bulk email)

The leads with valid email will then get saved as a leads with the relevant field data to gmail, google sheets and discord(through webhook). You can add/remove any integration you feel like.

**Setup Guide:**

1. **Create Your Form:** Begin by logging into your n8n account and navigating to the workflow editor. You can then customize your form fields to gather relevant information from your prospects, such as name, email address, and any additional data you require.

2. **Email Verification:** After collecting the lead data, add an Email Verification node to validate each user's email address. This crucial step ensures that only genuine and deliverable email addresses are included in your lead database, maximizing the effectiveness of your outreach efforts.
We have used hunter.io service in this, you can change it to any other service you need.

3. **Save Leads:** Next, incorporate nodes to save your verified leads to various platforms for streamlined management. Utilize the Gmail node to store lead information directly in your Gmail account, ensuring easy access and organization. Additionally, leverage the Google Sheets node to archive lead data in a spreadsheet for comprehensive tracking and analysis.

4. **Integrate with Discord:** For real-time notifications and collaboration, integrate n8n with Discord using the Webhook node. Configure the webhook to send lead information to your designated Discord channel, enabling your team to stay informed and coordinate effectively.

5. **Customize Integrations:** Tailor your workflow by adding or removing integrations based on your specific requirements. Whether you prefer to connect with additional platforms or streamline your workflow further, n8n offers unparalleled flexibility to adapt to your business needs.

Experience the simplicity and efficiency of n8n to revolutionize your lead generation strategy and propel your success to new heights.

## 🔗 Nodes Used

Google Sheets, Discord, Hunter, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
