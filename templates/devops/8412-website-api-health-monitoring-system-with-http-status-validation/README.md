# ⚙️ Website & API health monitoring system with HTTP status validation

> ⚡ **1,155 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Website & API Health Monitoring System with HTTP Status Validation

## How it works
- Performs HTTP health checks on websites and APIs with automatic health status validation
- Checks HTTP status codes and analyzes JSON responses for common health indicators
- Returns detailed status information including response times and health status
- Implements conditional logic to handle different response scenarios
- Perfect for monitoring dashboards, alerts, and automated health checks

## Set up steps
- Deploy the workflow and activate it
- Get the webhook URL from the trigger node
- Configure your monitoring system to call the webhook endpoint
- Send POST requests with target URLs for health monitoring
- Receive JSON responses with health status, HTTP codes, and timestamps

## Usage
- Send POST requests to the webhook URL with target URL parameter
- Optionally configure timeout and status expectations in request body
- Receive JSON responses with health status, HTTP codes, and timestamps  
- Perfect for monitoring dashboards, alerts, and automated health checks
- Use with external monitoring tools like Nagios, Zabbix, or custom dashboards
- Set up scheduled monitoring calls for continuous health validation
- Example request: Send POST with `{"url": "https://your-site.com", "timeoutMs": 5000}`
- Success response returns: `{"ok": true, "statusCode": 200, "healthStatus": "ok"}`
- Failure response returns: `{"ok": false, "error": "Health check failed", "statusCode": 503}`

## Benefits
- Proactive monitoring to identify issues before they impact users
- Detailed diagnostics with comprehensive health data for troubleshooting
- Integration ready - works with existing monitoring and alerting systems
- Customizable timeout settings, expected status codes, and health indicators
- Scalable solution to monitor multiple services with single workflow endpoint

## Use Cases
- E-commerce platforms: Monitor payment APIs, inventory systems, user authentication
- Microservices: Health validation for distributed service architectures
- API gateways: Endpoint monitoring with response time validation
- Database connections: Track connectivity and performance metrics
- Third-party integrations: Monitor external API dependencies and SLA compliance

## Target Audience
- DevOps Engineers implementing production monitoring
- System Administrators managing server uptime
- Site Reliability Engineers building monitoring systems
- Development Teams tracking API health in staging/production
- IT Support Teams for proactive issue detection

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
