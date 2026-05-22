# Komos Regulated Browser Ops Task Queue

> 0 views · [HR & Recruitment](../)

## Description

This workflow receives a case payload in n8n, normalizes the regulated operations fields, and queues a [Komos](https://www.komos.ai/) browser automation task through the Komos public API. It is designed for CRA, banking, insurance, and HR operations teams that need to hand off portal-heavy work to a dedicated browser automation runner while keeping n8n as the orchestration layer.

## Who it is for

- Background screening and CRA operations teams that need to check vendor or court portals.
- HR teams coordinating candidate background verification workflows.
- Insurance operations teams that need payer or eligibility portal work.
- Banking and finance operations teams that need browser workflows with audit-ready run metadata.

## How it works

1. `Receive Case` accepts a POST request from another n8n workflow, CRM, ATS, case system, or claims system.
2. `Normalize Case` maps the incoming payload into a consistent Komos task input shape.
3. `Queue Komos Task Run` calls `POST https://api.komos.ai/public/v1/tasks/{taskId}/runs` with a bearer API key.
4. `Prepare Response` returns the Komos run response and the next operational step.
5. `Respond to Webhook` sends a JSON response to the caller.

## Setup

Set these n8n environment variables before running the workflow:

- `KOMOS_API_KEY`, your Komos organization API key.
- `KOMOS_TASK_ID`, the saved Komos task that performs the browser portal workflow.

Komos API docs: <https://docs.komos.ai/api-reference/introduction>

Background screening example: <https://www.komos.ai/solutions/hr>

## Example webhook payload

```json
{
  "case_id": "CRA-2026-001",
  "workflow_type": "background_screening_portal_check",
  "industry": "background_screening",
  "applicant_name": "Example Applicant",
  "portal_url": "https://example-portal.local/cases/CRA-2026-001",
  "review_required": true
}
```

## Nodes Used

Webhook, Code, HTTP Request, Set, Respond to Webhook, Sticky Note

## Import

Download [`workflow.json`](workflow.json) and import it into n8n:
**Workflow menu -> Import from File**

[Importing guide](../../../docs/importing-templates.md) · [Credential setup](../../../docs/credential-setup.md)
