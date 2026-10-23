# 🔬 Escalate process serving attempts and draft affidavits with OpenAI and Slack

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects process-server attempt logs via an n8n form, updates a case tracker in n8n Data Tables, classifies field notes with OpenAI, escalates eligible cases for attorney approval in Slack, and drafts an affidavit saved to Google Drive and staged to a court e-filing HTTP API.

## How it works
1. Receives a new service-attempt submission from an n8n Form trigger.
2. Looks up the matching case in an n8n Data Table and computes the next attempt count, days until the SOL deadline, and whether alternate service is eligible.
3. Uses OpenAI (gpt-4o-mini) to classify the attempt outcome notes into a single category (for example served successfully, wrong address, or no answer).
4. If the case meets the alternate-service rule and is not already authorized or served, sends a Slack approval request to #case-approvals and waits for an attorney response.
5. Sets the case status (served, alternate service authorized, pending/denied, or continuing attempts) and upserts the updated case record back into the n8n Data Table.
6. If the case is ready to close (served or alternate service authorized), generates an affidavit-of-service text draft, saves it to Google Drive, and posts a draft filing payload to the court e-filing API via HTTP.
7. Posts a one-line status update for the attempt to Slack in #case-tracking.

## Setup
1. Create an n8n Data Table named process_serving_cases with columns used by the workflow (at least case_number, attempt_count, first_attempt_date, sol_deadline, alt_service_authorized, and case_status).
2. Add OpenAI API credentials for the OpenAI chat model used by the text classifier.
3. Add Slack credentials, and update the target channels (#case-approvals and #case-tracking) to match your workspace.
4. Add Google Drive OAuth2 credentials and replace CASE_AFFIDAVITS_FOLDER_ID with the destination folder ID.
5. Configure an HTTP Header Auth credential for the e-filing endpoint and replace the example URL (https://efile.courts.example/api/filings) and body fields to match your court/vendor API.
6. Review and adjust the escalation rule in the attempt/SOL computation code (currently 3 attempts within 30 days, with SOL urgency at 14 days) to match your jurisdiction and policy.

## Requirements
- n8n Data Table: An active data table named process_serving_cases configured with the columns: case_number, attempt_count, first_attempt_date, sol_deadline, alt_service_authorized, and case_status.
- OpenAI API Key: Authenticated on the GPT-4o-mini for Outcome Classification chat model node (gpt-4o-mini, temperature 0) powering the Text Classifier.
- Slack Bot & User Token: Credentials configured for interactive attorney authorizations in Request Alt-Service Approval (sendAndWait in #case-approvals) and operational broadcasts in Post Case Status Update (#case-tracking).
- Google Drive OAuth2: Authenticated with write permissions for Save Affidavit to Drive targeting your dedicated storage directory (CASE_AFFIDAVITS_FOLDER_ID).
- Court E-Filing API Access: Header Auth credential or bearer API token configured for the Submit to Court E-Filing API HTTP Request node (POST /api/filings).
- Field Intake Data: Process server log submissions via the Form Trigger containing case_number, defendant, address, and unstructured outcome_notes.

## Customization
- Jurisdiction-Specific Diligence Rules: Adjust the escalation logic in Compute Attempt Count & SOL Countdown from the standard 3-attempt / 30-day threshold to reflect your state's statutory requirements for alternate/substitute service.
- Outcome Taxonomy Expansion: Add custom categories (such as hostile_dog, gated_community, or moved_no_forwarding) to Classify Attempt Outcome to match specific field server terminology.
- Attorney Approval Channel: Swap the Slack sendAndWait node with a Gmail sendAndWait step if your firm's managing attorneys prefer email-based sign-offs.
- Affidavit Legal Boilerplate: Customize the deterministic template in Generate Affidavit of Service Draft to include your county- or court-specific statutory declarations, notary blocks, or server certification statements.
- E-Filing Vendor Integration: Re-map the payload schema and endpoint in Submit to Court E-Filing API to match specific state court e-filing providers (e.g., Tyler Technologies Odyssey, One Legal, or InfoTrack).

## Additional info
Statutory Compliance & Malpractice Protection: Alternate and substitute service methods require strict proof of due diligence; automated threshold tracking prevents premature alternate service applications and eliminates case dismissals caused by statute-of-limitations (SOL) lapses.

Deterministic Document Generation: Affidavits of service are generated using deterministic code templates rather than LLM text generation to prevent factual hallucination, ensuring auditable accuracy for court submission.

Fault Tolerance & Retries: All external network nodes (OpenAI model, Slack, Google Drive, and Court E-Filing HTTP Request) utilize onError=continueRegularOutput with 3 retries and a 2000 ms backoff to safeguard against temporary network drops.

Data Security & Privacy: Field logs contain sensitive personal identifying information (PII), service addresses, and legal case numbers; access to the n8n Data Table, Drive archives, and notification channels should be strictly restricted to authorized legal ops personnel.

API Cost Efficiency: Each attempt executes exactly one lightweight classification call via gpt-4o-mini, keeping operating expenses minimal while eliminating manual paralegal log reviews.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, OpenAI Chat Model, n8n Form Trigger, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
