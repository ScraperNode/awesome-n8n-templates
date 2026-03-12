# 📱 Unsubscribe Mautic contacts from automated unsubscribe emails

> ⚡ **1,416 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is this for?
This template is designed for businesses and organizations that use Mautic for email marketing and want to automate the process of removing contacts from specific segments when they receive an unsubscribe request via email.

## What problem is this workflow solving? / use case
Many email recipients, especially those who are less tech-savvy, may not follow the standard unsubscribe link provided in emails. Instead, for example in Gmail, they click the "Unsubscribe" button in the Gmail web interface, which in turn sends an email with a consistent format, these emails contain the word unsubscribe in the 'To' field using the following structure:

**hello+unsubscribe_6629823aa976f053068426@example.com**

This workflow automates the process of identifying such unsubscribe emails and removing the contact from the relevant Mautic segments, ensuring compliance with unsubscribe requests and maintaining a clean mailing list.

## What this workflow does

- Monitors a Gmail account for incoming emails.
- Identifies unsubscribe emails based on specific patterns in the "To" field (e.g., containing the word "unsubscribe").
- Retrieves the contact's ID from Mautic based on the email address.
- Removes the contact from the specified "newsletter" segment in Mautic.
- Adds the contact to the "unsubscribed" segment in Mautic.
- Sends a confirmation email to the contact, acknowledging their unsubscribe request.

## Setup

1. Configure your email address and unsubscribe message in the "Edit Fields" node.
2. Set your credentials in the Gmail trigger and in the Mautic nodes.
2. Set the segments for the "newsletter" and "unsubscribed" in the Mautic nodes.
3. Make sure your n8n installation has a public endpoint for your Gmail trigger to work correctly.
4. Deploy the workflow.

## How to customize this workflow to your needs

- Adjust the conditions for identifying unsubscribe emails based on your specific requirements.
- Modify the segments or actions taken in Mautic according to your desired behavior.
- Customize the confirmation email message and sender details.

**Note:** This workflow assumes a consistent structure for unsubscribe emails, where the "From" field contains the word "unsubscribe" using the "+" sign. If your email provider follows a different convention, adjust the conditions in the "Is automated unsubscribe?" node accordingly.

## 🔗 Nodes Used

Mautic, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
