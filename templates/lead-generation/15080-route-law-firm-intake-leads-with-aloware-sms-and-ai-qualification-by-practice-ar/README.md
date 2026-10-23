# 🎣 Route law firm intake leads with Aloware SMS and AI qualification by practice area

> ⚡ **81 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Description

Capture every potential client inquiry the moment it arrives, send an immediate SMS, and route leads to the right follow-up path based on practice area. High-intent cases like personal injury, family law, and criminal defense get an immediate AI intake call, while other practice areas enter a consultation scheduling sequence.
Law firms lose potential clients to competitors who respond faster. This workflow ensures that every website inquiry — whether it comes through your contact form, Clio, or a legal lead vendor — receives an immediate text and is routed into the appropriate intake pipeline within seconds.

## How it works

1. A Webhook receives inquiry data from your law firm website form, Clio intake, or lead vendor.
2. A Set node normalizes the data — client phone, name, email, practice area, case description, preferred contact time, and lead source.
3. An HTTP Request creates the contact in Aloware with practice area and case details stored in custom fields and notes.
4. A second HTTP Request sends an intake SMS: "Thank you for contacting {firm}. We've received your {practice area} inquiry and a member of our team will be reaching out soon…"
5. An IF node checks the practice area against a list of high-intent areas (personal injury, family law, criminal defense, immigration).
6. High-intent → enrolled in an AI Intake Sequence for immediate qualification call (capturing accident details, court dates, opposing counsel, etc.).
7. Standard → enrolled in a Consultation Scheduling Sequence (SMS drip to book a free consultation).



## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_INTAKE_SEQUENCE_ID, ALOWARE_CONSULT_SEQUENCE_ID, and FIRM_NAME.
3. In Aloware, create two Sequences:
	1. AI Intake Sequence: immediate AI call that qualifies case details + follow-up SMS.
	1. Consultation Scheduling Sequence: SMS drip with a booking link for a free consultation.
7. Connect your intake form to POST to this webhook URL.
8. Edit the practice area conditions in the IF node to match the areas your firm handles.
9. Activate and test with a sample inquiry.

## Requirements

Aloware account with API access and an outbound line
A website contact form or legal intake system that can send webhook POSTs

#### Customising this workflow

Add a Switch node instead of IF to route each practice area to a different attorney's sequence.
Include a two-legged call node to connect the lead directly to a live intake specialist for urgent criminal defense cases.
Add a Slack or email notification node to alert the assigned attorney when a new inquiry comes in for their practice area.
Connect to your case management system (Clio, MyCase, PracticePanther) to auto-create a new matter.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
