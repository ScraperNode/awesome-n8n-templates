# 🔬 Validate property compliance risk and orchestrate actions with OpenAI, Google Calendar, Gmail, Slack, and Google Sheets

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates medical imaging analysis and diagnostic reporting for radiology departments, imaging centers, and hospital networks managing high patient volumes. Designed for radiologists, medical imaging technicians, and diagnostic coordinators, it solves the challenge of rapidly analyzing imaging studies, prioritizing critical findings, routing cases appropriately, and generating structured reports while maintaining diagnostic accuracy and regulatory compliance. The system triggers on new imaging studies, fetches imagery and metadata, prepares data through AI agents (Validation ensures image quality and completeness), calculates risk scores, routes by validation status and risk level through multiple pathways, deploys specialized AI agents for comprehensive analysis (Orchestration coordinates findings, Google Calendar manages scheduling, Slack Tool enables team communication, Email Actions handles notifications, Water Monitoring tracks contrast protocols, Compliance Validation ensures regulatory adherence, Leave Management coordinates radiologist availability), and generates final diagnostic reports with complete audit trails. Organizations reduce diagnosis turnaround time by 60%, improve critical finding detection rates, ensure consistent reporting standards, and enable radiologists to focus on complex cases requiring expert judgment.

## Setup Steps
1. Connect **imaging trigger** for automatic study notifications
2. Configure **PACS/VNA system APIs** with credentials for DICOM image retrieval and metadata access
3. Add **AI model API keys** to Validation Agent and specialized diagnostic agents 
4. Define **risk stratification criteria** in routing logic based on clinical protocols and imaging findings
5. Link **Google Calendar API** for radiologist scheduling and case assignment workflows
6. Configure **Slack** integration for care team communication and critical finding alerts
7. Connect **email system** for patient/referring physician notifications and report distribution
 
## Prerequisites
PACS/VNA system API access, HIPAA-compliant AI service accounts
## Use Cases
Emergency radiology triage (stroke, trauma), lung nodule detection and tracking
## Customization
Modify AI models for modality-specific analysis (CT, MRI, X-ray, ultrasound)
## Benefits
Reduces diagnosis turnaround time by 60%, improves critical finding detection rates

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
