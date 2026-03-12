# 🔬 Inventory Tracking Automation for Airtable

> ⚡ **136 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recNF7sSjKUzdiAUP.jpg)](https://youtu.be/4CQ3o7qChIs)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Overview

This workflow automates the complete purchase order cycle for Airtable-based inventory management using n8n. It continuously monitors your stock levels, automatically creates purchase orders when inventory falls below reorder thresholds, and sends formatted order emails to suppliers—eliminating manual tracking and reducing stockout risk.

The system handles three critical automation processes: ensuring each supplier always has a draft purchase order ready, intelligently adding products to those orders based on forecasted stock levels versus threshold quantities, and automatically emailing suppliers when orders are approved for sending.

## Key Features

- **Automated stock monitoring:** Hourly checks identify products that need reordering based on customizable threshold levels
- **Smart purchase order management:** Automatically creates and maintains draft purchase orders for each supplier
- **Supplier email automation:** Sends formatted order details directly to suppliers when purchase orders are ready
- **Movement-based ledger:** Tracks every stock-in and stock-out transaction for complete audit trails
- **Test data generator:** Includes a manual-trigger workflow to simulate random sales orders for testing

## Setup Requirements

**Required first step:** You must copy the Airtable inventory management base into your own Airtable account from: https://airtable.com/appN9ivOwGQt1FwT5/shr1ApcBSi4SOVoPh

After copying the base, you'll need to configure:

- **Airtable credentials:** Personal Access Token with read/write permissions to your copied base
- **Gmail credentials:** OAuth2 connection for sending purchase order emails to suppliers
- **Base connections:** Update all Airtable nodes to point to your copied base URL and table IDs

## Configuration

The workflow runs on an hourly schedule by default to check for products needing reorder. You can adjust this frequency in the "Check Products Hourly" Schedule Trigger node based on your business needs.

All supplier-specific settings including email addresses, reorder thresholds, and refill quantities are managed directly in the Airtable base—not in the workflow itself. This allows non-technical team members to adjust inventory parameters without touching the automation.

The included test workflow ("Generate random SO") is manual-trigger only and simulates daily sales by randomly reducing product quantities, making it easy to test the reorder automation without waiting for real sales data.

## 🔗 Nodes Used

Airtable, Gmail, Airtable Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
