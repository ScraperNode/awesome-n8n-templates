# 🤝 Send real-time notifications for new Shopify orders to Slack

> ⚡ **399 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Shopify Order to Slack Notification


**E-commerce Automation**
**Team Communication**

This n8n template instantly notifies your team in Slack whenever a new order is placed on your Shopify store. Perfect for small to medium businesses that want immediate awareness of sales activity and faster order processing.




## How it works

Shopify sends webhook to n8n when new order is created
Order data is extracted and formatted into professional message
Rich Slack notification is posted to designated channel with customer details, order number, total amount, and direct admin link
Team gets instant visibility into new sales activity

## Set up instructions


Set up Shopify credentials in n8n: API Key, Password, Shop Subdomain, and Shared Secret


## Requirements

Shopify store with admin access
Slack workspace with channel permissions
n8n Shopify and Slack credentials configured

Customising this workflow

Add email notifications alongside Slack alerts
Include customer shipping information in notifications
Filter alerts by order value thresholds or product types

## 🔗 Nodes Used

Slack, Shopify Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
