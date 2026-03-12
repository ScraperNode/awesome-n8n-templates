# 📋 Send daily real estate construction updates via Gmail & WhatsApp with Google Sheets

> ⚡ **716 views** · 📋 [Project Management](../)

## Description

This n8n template demonstrates how to create an automated construction progress notification system for real estate companies. The workflow triggers daily at 8:00 AM IST to check a Google Sheet for contractor construction reports, automatically processes the data, and sends comprehensive project updates to buyers via email and WhatsApp. Perfect for real estate developers wanting to maintain transparent communication with buyers and ensure timely project status updates.

## Good to know
* Daily automated monitoring ensures no construction updates are missed
* Multi-channel communication (Email + WhatsApp) reaches buyers through their preferred method
* Smart filtering system only processes today's reports for relevant updates
* Comprehensive logging tracks all notification activities for audit purposes
* Built-in alert system notifies administrators when contractors fail to submit reports
* Handles multiple projects and contractors simultaneously without data conflicts

## How it works

### **Daily Monitoring Workflow**
* System triggers automatically every day at 8:00 AM IST to check for new construction reports
* Google Sheet configuration is set with Sheet ID, sheet name, and today's date for filtering
* All construction data is read from the designated Google Sheet containing contractor submissions
* Advanced filtering isolates only today's reports based on the Date column for processing

### **Report Processing Workflow**
* System checks if any construction reports were submitted for the current date
* If reports are found: Detailed notifications are prepared and sent to all registered buyers
* If no reports are found: Alert notifications are sent to administrators about missing submissions
* All project data is compiled into comprehensive summaries with progress percentages and status updates

### **Notification Distribution Workflow**
* Email notifications contain detailed construction summaries with all project information
* WhatsApp messages provide concise updates with key progress indicators and status
* Messages are personalized with project names, completion percentages, and contractor details
* Multiple recipients receive notifications simultaneously through both communication channels

### **Activity Logging Workflow**
* All notification activities are logged with precise timestamps and recipient information
* Success logs record project count, recipient numbers, and delivery confirmation
* Warning logs capture instances when no reports are found for administrative follow-up
* Complete audit trail maintains compliance and tracking for project management

## Google Sheet Structure

### **Construction Reports Sheet**
* `Date` - Report submission date (DD/MM/YYYY format)
* `Project_Name` - Name of the construction project
* `Contractor_Name` - Name of the responsible contractor
* `Location` - Project location or site address
* `Progress_Percentage` - Current completion percentage (0-100%)
* `Status` - Current project status (On Track, Delayed, Completed, etc.)
* `Work_Description` - Detailed description of today's construction activities
* `Issues` - Any problems or challenges encountered (optional)
* `Budget_Status` - Financial status update (On Budget, Over Budget, Under Budget)
* `Next_Milestone` - Upcoming project milestone or target date

## How to use
* Import the workflow into your n8n instance and configure Google Sheets integration
* Set up your Google Sheet with the required column structure for construction reports
* Configure email SMTP settings for professional construction update delivery
* Set up WhatsApp Business API for instant mobile notifications to buyers
* Add buyer email addresses and WhatsApp numbers to the notification recipient lists
* Contractors submit daily reports to the Google Sheet before 8:00 AM for same-day processing
* System automatically processes and distributes updates to all registered buyers
* Monitor logs for delivery confirmation and missing report alerts

## Requirements
* Google Sheets account for construction report data storage and management
* Email service integration (Gmail, SMTP, or corporate email system)
* WhatsApp Business API account for mobile messaging capabilities
* n8n instance with Google Sheets, Email, and WhatsApp connectors properly configured
* Valid credentials for all integrated services (Google OAuth, SMTP, WhatsApp API)

## Customising this workflow
* Construction update automation can be adapted for different project types and development scales
* Try popular use-cases such as weekly progress summaries, milestone notifications, or emergency construction alerts
* The workflow can be extended to include photo attachments from construction sites, weather impact assessments, and safety compliance reporting
* Integration possibilities include CRM systems for buyer management, project management tools for contractor coordination, and financial systems for budget tracking
* Notification scheduling can be adjusted for different time zones, multiple daily updates, or project-specific timing requirements
* Advanced features can include buyer feedback collection, contractor performance ratings, and automated delay notifications with mitigation plans

## 🔗 Nodes Used

Send Email, Google Sheets, WhatsApp Business Cloud, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
