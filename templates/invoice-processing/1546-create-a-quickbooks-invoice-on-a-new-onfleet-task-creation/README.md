# 🧾 Create a QuickBooks invoice on a new Onfleet task creation

> ⚡ **1,367 views** · 🧾 [Invoice Processing](../)

## Description

**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template listens to an Onfleet event and interacts with the **QuickBooks API**. You can easily streamline this with your QuickBooks invoices or other entities. Typically, you can create an invoice when an Onfleet task is created to allow your customers to pay ahead of an upcoming delivery.

**Configurations**

- Update the Onfleet trigger node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started
- You can easily change which Onfleet event to listen to. Learn more about Onfleet webhooks with [Onfleet Support](https://support.onfleet.com/hc/en-us/articles/360045763852-Webhooks)
- Update the QuickBooks Online node with your QuickBooks credentials

## 🔗 Nodes Used

QuickBooks Online, Onfleet Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
