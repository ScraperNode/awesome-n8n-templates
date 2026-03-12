# 🔬 Generate GLPI support performance reports with SLA tracking & email delivery

> ⚡ **796 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This comprehensive n8n workflow automates the generation and distribution of detailed monthly technical support reports from GLPI (IT Service Management platform). The workflow intelligently calculates SLA compliance, analyzes technician performance, and delivers professionally formatted HTML reports via email.


## ✨ Key Features

### Intelligent SLA Calculation

- Business Hours Tracking: Automatically calculates resolution time considering only working hours (excludes weekends and lunch breaks)
- Configurable Schedule: Customizable work hours (default: 8 AM - 12 PM, 1 PM - 6 PM)
- Dynamic SLA Monitoring: Real-time compliance tracking with configurable thresholds (default: 24 hours)
- Visual Indicators: Color-coded alerts for critical SLA breaches and high-volume warnings

### Comprehensive Reporting

- General Summary: Total cases, open, in-progress, resolved, and closed tickets
- Performance Metrics: Total and average resolution hours in both decimal and formatted (hours/minutes) display
- Technician Breakdown: Individual performance analysis per technician including case distribution and SLA compliance
- Smart Alerts: Automatic warnings for high case volumes (&gt;100 in-progress) and critical SLA levels (&lt;50%)

### Professional Email Delivery

- Responsive HTML Design: Mobile-optimized email templates with elegant styling
- Dynamic Content: Conditional formatting based on performance metrics
- Automatic Scheduling: Monthly execution on the 6th day to ensure accurate SLA measurement

## 💼 Business Benefits
### Time Savings

- Eliminates Manual Work: Saves 2-4 hours per month previously spent compiling reports manually
- Automated Data Collection: No more exporting CSVs or copying data between systems
- One-Click Setup: Configure once and receive reports automatically every month

### Improved Decision Making

- Real-Time Insights: Identify bottlenecks and performance issues immediately
- Technician Accountability: Clear visibility into individual and team performance
- SLA Compliance Tracking: Proactively manage service level agreements before they become critical

### Enhanced Communication

- Stakeholder Ready: Professional reports suitable for management presentations
- Consistent Format: Standardized metrics ensure month-over-month comparability
- Instant Distribution: Automatic email delivery to relevant stakeholders

## 🔧 Technical Specifications
### Requirements

- n8n instance (self-hosted or cloud)
- GLPI server with API access enabled
- Gmail account (or any SMTP-compatible email service)
- GLPI API credentials (App-Token and User credentials)

### Configuration Points

- Variables Node: Server URL, API tokens, entity name, work hours, SLA limits
- Schedule Trigger: Monthly execution timing (default: 6th of each month)
- Email Recipient: Target email address for report delivery
- Date Range Logic: Automatic previous month calculation

### Data Processing

- Retrieves up to 999 tickets per execution (configurable)
- Filters by entity and date range
- Excludes weekends and non-business hours from calculations
- Groups data by technician for detailed analysis

## 📋 Setup Instructions
### Prerequisites

- GLPI Configuration: Enable API and configure the Tickets panel with required fields (ID, -Title, Status, Opening Date, Closing Date, Resolution Date, Priority, Requester, Assigned To)
- API Credentials: Create Basic Auth credentials in n8n for GLPI API access
- Email Authentication: Set up Gmail OAuth2 or SMTP credentials in n8n

### Implementation Steps

- Import the workflow JSON into your n8n instance
- Configure the Variables node with your GLPI server details and business hours
Set up GLPI API credentials in the HTTP Request nodes
- Configure email credentials in the Gmail node
Update the recipient email address
Test the workflow manually before enabling the schedule
- Activate the workflow for automatic monthly execution

## 🎯 Use Cases

- IT Support Teams: Track helpdesk performance and SLA compliance
- Service Managers: Monitor team productivity and identify training needs
- Executive Reporting: Provide high-level summaries to stakeholders
- Resource Planning: Identify workload distribution and capacity issues
- Compliance Auditing: Maintain historical records of SLA performance

## 📈 ROI Impact

- Time Savings: 24-48 hours annually in manual reporting eliminated
- Error Reduction: Eliminates human calculation errors in SLA tracking
- Faster Response: Early alerts enable proactive issue resolution
- Better Visibility: Data-driven insights improve team management


![Image1.png](fileId:2760) ![image2.png](fileId:2759)

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
