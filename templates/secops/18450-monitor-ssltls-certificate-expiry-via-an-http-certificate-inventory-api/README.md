# 🔒 Monitor SSL/TLS certificate expiry via an HTTP certificate inventory API

> ⚡ **17 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs daily (or manually) to fetch an SSL/TLS certificate inventory over HTTP, calculates days until expiry, classifies each certificate by urgency, and prepares standard renewal reminders or critical renewal alerts after a short delay.

## How it works
1. Runs every day at 06:00 (or starts manually for testing).
2. Sets the certificate inventory API URL and expiry thresholds (watch, warning, and critical) used for classification.
3. Calls the certificate inventory HTTP API to retrieve all certificates in scope and then waits briefly before processing.
4. Splits the returned inventory into one item per certificate and calculates days until expiry plus an urgency tier (OK, Watch, Warning, or Critical).
5. Drops healthy (OK) certificates without taking action.
6. Marks Watch and Warning certificates as ready for dispatch as a standard renewal reminder payload.
7. Waits through a short dedup window for Critical certificates, then marks them as ready for dispatch as an urgent renewal task/alert payload.

## Setup
1. Provide an HTTP Header Auth credential for the certificate inventory API used by the HTTP request.
2. Update the certificate inventory base URL and any scope/query parameters in the HTTP request to match your inventory service.
3. Adjust the watchDaysThreshold, warningDaysThreshold, criticalDaysThreshold, and includeInternalServices values to match your renewal SLAs and environment.
4. Ensure your inventory API response includes a certificates array with fields like expiryDate (parseable as a date) plus any metadata you want to route (for example domain, owner, issuer, and environment).
5. Connect the standard and critical “readyForDispatch” outputs to your notification or ticketing system (for example Slack, email, or Jira).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
