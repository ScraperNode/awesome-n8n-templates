# ⚒️ Escalate product UAT critical bugs with OpenAI, Jira and Slack

> ⚡ **73 views** · ⚒️ [Engineering](../)

## Description

## Description

Automatically detect and escalate Product UAT critical bugs using AI, create Jira issues, notify engineering teams, and close the feedback loop with testers.

This workflow analyzes raw UAT feedback submitted via a webhook, classifies it with an AI model, validates severity, and automatically escalates confirmed critical bugs to Jira and Slack. Testers are notified, and the original webhook receives a structured response for full traceability.

It is designed for teams that want fast, reliable critical bug handling during UAT without manual triage.

## Context

During Product UAT and beta testing, critical bugs are often buried in unstructured feedback coming from forms, Slack, or internal tools.

Missing or delaying these issues can block releases and create friction between Product and Engineering.

This workflow ensures:

- Faster detection of critical bugs

- Immediate escalation to engineering

- Clear ownership and visibility

- Consistent communication with testers

It combines AI-based classification with deterministic routing to keep UAT feedback actionable and production-ready.

## Who is this for?

- Product Managers running UAT or beta programs

- Project Managers coordinating QA and release readiness

- Engineering teams who need fast, clean bug escalation

- Product Ops teams standardizing feedback workflows

- Any team handling high-volume UAT feedback

- Perfect for teams that want speed, clarity, and traceability during UAT.

## Requirements

- Webhook trigger (form, Slack integration, internal tool, etc.)

- OpenAI account (for AI triage)

- Jira (critical bug tracking)

- Slack (engineering alerts)

- Gmail or Slack (tester notifications)

## How it works
![image.png](fileId:3834)
- Trigger
The workflow starts when UAT feedback is submitted via a webhook.

- Normalize & Clean
Incoming data is normalized (tester, build, page, message) and cleaned to ensure a consistent, AI-ready structure.

- AI Triage & Validation
An AI model analyzes the feedback and returns a structured triage result (type, severity, summary, confidence), which is parsed and validated.

- Critical Bug Escalation
Validated critical bugs automatically:

	- create a Jira issue with full context

	- trigger an engineering Slack alert

- Closed Loop
The tester is notified via Slack or email, and the workflow responds to the original webhook with a structured status payload.

## What you get

- Automated critical bug detection during UAT

- Instant Jira ticket creation

- Real-time engineering alerts in Slack

- Automatic tester communication

- Full traceability via structured webhook responses

## About me :
I’m Yassin a Product Manager  Scaling tech products with a data-driven mindset.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Slack, Webhook, Jira Software, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
