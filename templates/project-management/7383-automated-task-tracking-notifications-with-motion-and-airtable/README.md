# 📋 Automated task tracking & notifications with Motion and Airtable

> ⚡ **577 views** · 📋 [Project Management](../)

## Description

# Automated project status tracking with Airtable and Motion
## Who's it for
Project managers, team leads, and agencies who need to automatically monitor project completion status across multiple clients and send notifications when specific milestones are reached.
## What it does
This workflow automatically tracks project progress by connecting Airtable project databases with Motion task management. It monitors specific tasks within active projects and triggers email notifications when key milestones are completed. The system is designed to handle multiple projects simultaneously and can be customized for various notification triggers.
## How it works
The workflow follows a structured monitoring process:

Data Retrieval: Fetches project information from Airtable (project names and Motion workspace IDs)
Motion Integration: Connects to Motion API using HTTP requests to retrieve project details
Project Filtering: Identifies only active projects with "Todo" status containing "SEO" in the name
Task Monitoring: Checks for specific completed tasks (e.g., "Intégrer les articles de blog")
Conditional Notifications: Sends email alerts only when target tasks are marked as "Completed"
Database Updates: Updates Airtable with last notification timestamps

## Requirements

Airtable account with project database
Motion account with API access
Gmail account for email notifications
HTTP request authentication for Motion API

## How to set up
### Step 1: Configure your Airtable database
Ensure your Airtable contains the following fields:

Project names: Names of projects to monitor
Motion Workspace ID: Workspace identifiers for Motion API calls
Status - Calendrier éditorial: Project status field (set to "Actif" for active projects)
Last sent - Calendrier éditorial: Timestamp tracking for notification frequency
Email addresses: Client and team member contact information

### Step 2: Set up API credentials
Configure the following authentication in n8n:

Airtable Personal Access Token: For database access
Motion API: HTTP header authentication for Motion integration
Gmail OAuth2: For email notification sending

### Step 3: Configure Motion API integration

Base URL: Uses Motion API v1 endpoints
Project retrieval: Fetches projects using workspace ID parameter
Task monitoring: Searches for specific task names and completion status
Custom filtering: Targets projects with "SEO" in name and "Todo" status

### Step 4: Customize scheduling

Default schedule: Runs daily between 10th-31st of each month at 8 AM
Cron expression: 0 8 10-31 * * (modify as needed)
Frequency options: Can be adjusted for weekly, daily, or custom intervals

### Step 5: Set up email notifications
Configure Gmail settings:

Recipients: Project managers, clients, and collaborators
Subject line: Dynamic formatting with project name and month
Message template: HTML-formatted email with professional signature
Sender name: Customizable organization name

## How to customize the workflow
### Single project, multiple tasks monitoring
To adapt for monitoring one project with several different tasks:

Modify the filter conditions to target your specific project
Add multiple HTTP requests for different task names
Create conditional branches for each task type
Set up different notification templates per task

### Multi-project customization

Database fields: Add custom fields in Airtable for different project types
Filtering logic: Modify conditions to match your project categorization
Motion workspace: Support multiple workspaces per client
Notification rules: Set different notification frequencies per project

### Alternative notification methods
Replace or complement Gmail with:

Slack notifications: Send updates to team channels
Discord integration: Alert development teams
SMS notifications: Urgent milestone alerts
Webhook integrations: Connect to custom internal systems
Teams notifications: Enterprise communication

### Task monitoring variations

Multiple task types: Monitor different milestones (design, development, testing)
Task dependencies: Check completion of prerequisite tasks
Progress tracking: Monitor task progress percentages
Deadline monitoring: Alert on approaching deadlines

## Conditional logic features
### Smart filtering system

Active project detection: Only processes projects marked as "Actif"
Date-based filtering: Prevents duplicate notifications using timestamp comparison
Status verification: Confirms task completion before sending notifications
Project type filtering: Targets specific project categories (SEO projects in this example)

### Notification frequency control

Monthly notifications: Prevents spam by tracking last sent dates
Conditional execution: Only sends emails when tasks are actually completed
Database updates: Automatically records notification timestamps
Loop management: Processes multiple projects sequentially

## Results interpretation
### Automated monitoring outcomes

Project status tracking: Real-time monitoring of active projects
Milestone notifications: Immediate alerts when key tasks complete
Database synchronization: Automatic updates of notification records
Team coordination: Ensures all stakeholders are informed of progress

### Email notification content
Each notification includes:

Project identification: Clear project name and context
Completion confirmation: Specific task that was completed
Calendar reference: Links to editorial calendars or project resources
Professional formatting: Branded email template with company signature
Action items: Clear next steps for recipients

## Use cases
### Agency project management

Client deliverable tracking: Monitor when content is ready for client review
Milestone notifications: Alert teams when phases complete
Quality assurance: Ensure all deliverables meet completion criteria
Client communication: Automated updates on project progress

### Editorial workflow management

Content publication: Track when articles are integrated into websites
Editorial calendar: Monitor content creation and publication schedules
Team coordination: Notify writers, editors, and publishers of status changes
Client approval: Alert clients when content is ready for review

### Development project tracking

Feature completion: Monitor when development milestones are reached
Testing phases: Track QA completion and deployment readiness
Client delivery: Automate notifications for UAT and launch phases
Team synchronization: Keep all stakeholders informed of progress

## Workflow limitations

Motion API dependency: Requires stable Motion API access and proper authentication
Single task monitoring: Currently tracks one specific task type per execution
Email-only notifications: Default setup uses Gmail (easily expandable)
Monthly frequency: Designed for monthly notifications (customizable)
Project naming dependency: Filters based on specific naming conventions
Manual configuration: Requires setup for each new project type or workspace

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
