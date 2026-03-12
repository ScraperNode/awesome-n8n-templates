# 🔬 Generate dynamic contents for EMAILS or HTML pages

> ⚡ **9,396 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![workflown8nnodesdocumentgenerator.jpeg](fileId:663)

==Disclaimer: This template contains a community node and therefore only works for n8n self-hosted users==

This is Miquel from **[Aprende n8n](https://aprenden8n.com)** and **[Automate with n8n](https://automatewithn8n.com)**.

We have created a new community node **[Document Generator](https://www.npmjs.com/package/n8n-nodes-document-generator)** that generates dynamic content using templates.

You can compose complex content with no SETs or FUNCTION ITEMs nodes using this node, like:
- Send one email with a list of items in the body (i.e., one email with the last entries of an RSS feed).
- Send one email per item (i.e., one invoice per email).

Emails are just a sample. You can create complex dynamic content to:
* Send messages to Telegram/Slack.
* Create WordPress entries.
* Create HTML pages for your website.
* Create tickets.

And more! The sky is your limit ;)

If you want to use this workflow, install the community node **n8n-nodes-document-generator** from *Settings &gt; Community nodes*. Type "n8n-nodes-document-generator", check "I understand the risks..." and click on "Install":
![installn8nnodesdocumentgenerator.jpeg](fileId:662)

Later, copy and paste this workflow into your n8n.

You will get this workflow:
![workflown8nnodesdocumentgenerator.jpeg](fileId:663)

This workflow uses the **Customer Datastore node** to generate sample input items.

You can render one template with all items (enable "Render All Items with One Template"):
![onetemplateallitems.jpeg](fileId:664)

or one template per input item:
![onetemplateperitem.jpeg](fileId:665)

Visit the **[oficial NPM page](https://www.npmjs.com/package/n8n-nodes-document-generator)** to see more samples.

Learning n8n by yourself is nice, but a bit tricky :) We offer n8n training video courses at **[Aprende n8n](https://aprenden8n.com)**. If you need custom trainings, [let us know](mailto:miquel@aprenden8n.com).

Additionally, you can contact us at **[Automate with n8n](https://automatewithn8n.com)** if you need the next services:
- Custom installations.
- Custom nodes.
- Monitor and alarms.
- Delegate 12/5 or 24/7 workflow issue resolutions.
- Automated backups of your workflows.
- HTTP integrations of non-supported APIs.
- Complex workflows.

I hope you will enjoy this new node and this workflow.

Automate your life! Automate it with n8n!

## 🔗 Nodes Used

Send Email, Function Item, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
