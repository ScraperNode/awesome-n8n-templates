# 🎫 Automated GLPI ticket deadline alerts via Microsoft Teams

> ⚡ **1,406 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Overview

This n8n workflow provides an automated notification system that monitors tickets in GLPI (Gestionnaire Libre de Parc Informatique) and sends proactive alerts through Microsoft Teams when tickets are approaching their expiration dates.
## Key Features
 🕘 **Automated Scheduling**

- Daily execution scheduled at 9:00 AM
- Continuous monitoring without manual intervention
- Customizable scheduling configuration

🎯 **Intelligent Deadline Detection**

- Automatic identification of tickets expiring within the next 2 days
- Configurable date-based filtering criteria
- Efficient processing of multiple simultaneous tickets

👥 **Targeted Notifications**

- Personalized alerts sent to specific technicians via Microsoft Teams
- Automatic assignment based on ticket assignee
- Structured messages with key ticket information

🔧 **Complete GLPI Integration**

- Secure connection through GLPI REST API
- Authentication with application tokens
- Automatic session management (initiation and closure)

## Technical Functionalities
**Data Processing**

- Extraction: Automatic queries to GLPI database
- Filtering: Ticket separation by assigned technician
- Transformation: Data formatting for readable notifications

**Conditional Flow**

- Automatic evaluation of responsible technician
- Intelligent notification routing
- Handling of cases without specific assignment

**Session Management**

- Automatic session initiation with GLPI
- Secure session token maintenance
- Controlled session closure upon completion

**Ticket Information Included**
Each alert contains:

**Ticket Title**: Clear problem description
**Ticket ID**: Unique identifier for tracking
**Time Remaining**: Days/hours until expiration

## System Requirements
**Infrastructure**

- GLPI server with REST API enabled
- Running n8n instance
- Microsoft Teams account with API permissions

**Required Credentials**

- GLPI user with application administrator privileges
- Valid GLPI application token
- OAuth2 credentials for Microsoft Teams

## GLPI User ID Identification

For complete workflow configuration, it's necessary to identify the correct IDs of technical users for proper notification assignment.

User IDs can be obtained by accessing user management in GLPI and observing the ID directly in the browser URL when selecting a specific user.

**Path**: Administration &gt; Users &gt; [Select User]
When clicking on the desired user, you can see the user ID directly in the browser URL (e.g., id=7 for Support Technician 1, id=8 for Support Technician 2).

## Configuration
- Environment Variables

	json{
  "glpi_url": "https://your-glpi-server.com",
  "app_token": "your-application-token-here"
}

## Available Customization

- **Alert Period**: Modifiable from 2 days to any desired range
- **Execution Schedule**: Configurable according to operational needs
- **Recipients**: Adaptable to specific team structure

## Operational Benefits

**For Support Teams**

- Reduction of expired tickets
- Improved response times
- Proactive workload management

**For Organizations**

- Higher SLA compliance
- Increased customer satisfaction
- Optimized technical support resources

## Ideal Use Cases

- **IT Service Centers**: Incident and request management
- **Technical Support Teams**: Critical case tracking
- **Organizations with Strict SLAs**: Service agreement compliance
- **IT Departments**: Internal ticket monitoring

## 	Scalability
This workflow is designed to:

- Handle high ticket volumes
- Adapt to teams of different sizes
- Integrate with multiple communication channels
- Expand with additional functionalities

## Installation and Deployment

- Import the JSON workflow into n8n
- Configure GLPI and Microsoft Teams credentials
- Update configuration variables
- Activate the scheduled trigger
- Perform functionality tests


This workflow represents a robust and scalable solution for proactive ticket management in enterprise environments, significantly improving operational efficiency and service commitment compliance.

## 🔗 Nodes Used

HTTP Request, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
