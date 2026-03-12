# 🔬 Host a static HTML KPI dashboard from Google Sheets with CustomJS

> ⚡ **819 views** · 🔬 [Document Extraction & Analysis](../)

## Description

#  Hosting a static HTML KPI dashboard with CustomJS

This workflow demonstrates how to **automatically generate a weekly KPI dashboard** from Google Sheets and host it as a live static HTML page using [CustomJS](https://www.customjs.space).  

Instead of manually building and updating dashboards, the workflow fetches KPI data, transforms it into JSON, and generates charts, tables, and KPI cards automatically. The hosted HTML page can be connected to a custom domain with one click.

The result is a **fully interactive, production-ready KPI dashboard** that updates weekly with minimal effort.

---

## Why This Workflow?

Creating dashboards manually or passing raw sheet data to visualization tools is:

- time-consuming  
- error-prone  
- hard to automate  

This workflow automates the process by converting sheet data into **structured JSON** and feeding it directly into a **CustomJS HTML template**, generating charts and tables automatically.

---

## What This Workflow Does

- Fetches **KPI metrics** (Visitors, Leads, Demo Booked, Proposal Sent, Won) from Google Sheets  
- Aggregates metrics by week and channel  
- Converts the structured data into JSON for dashboard consumption  
- Generates a **static HTML page** with KPI cards, charts, and tables  
- Hosts the HTML page on **CustomJS**, optionally connected to a custom domain  

All without manual intervention.

---

## Key Features

- **Automated KPI Dashboards**  
  Generate charts, tables, and KPI cards from Google Sheets data

- **Static HTML Hosting**  
  Live dashboards are instantly deployable and accessible anywhere

- **Custom Domains**  
  Connect your own domain with a single click

- **Interactive Charts**  
  Uses Chart.js for bar and line charts, fully responsive

- **QR Code Ready**  
  Optional QR code generation for sharing dashboard links

- **Token-Efficient**  
  Only structured JSON is processed, no large unnecessary payloads

---

## How It Works

1. **Manual or Scheduled Trigger**  
   Run the workflow on demand or weekly

2. **Load Data from Google Sheets**  
   - Pull metrics for the desired period  
   - Aggregate weekly or by channel

3. **Prepare Structured JSON**  
   Format sheet rows into structured JSON for the dashboard

4. **Generate HTML Dashboard**  
   Feed JSON into a **CustomJS HTML template** node  
   Automatically builds KPI cards, charts, and tables

5. **Host Static HTML**  
   - Deploy instantly via CustomJS  
   - Optional: connect a custom domain  
   - Each update overwrites the previous dashboard

6. **Optional Enhancements**  
   - Generate QR codes for the dashboard link  
   - Include multiple charts, historical trends, or multiple sheets

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
