# 💬 Event registration & AI networking with GPT-4o, Jotform & Google Sheets

> ⚡ **79 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### 1. Who's It For
* Conference organizers managing 500+ attendee tech/business events.
* Trade show managers needing networking automation.
* Professional associations running industry gatherings.
* Startup/investor event planners for demo days and mixers.
* Corporate event teams organizing all-hands and offsites.
* Continuing education coordinators for professional development.

### 2. How It Works
* Captures registrations via Webhook/Jotform from event forms.
* Extracts attendee data (name, email, company, goals, interests).
* Profiles attendees with AI Agent (GPT-4o) for persona classification.
* Scores engagement, influence, connection value (0-100 each).
* Identifies networking objectives and ideal connections.
* Recommends personalized sessions with relevance scoring.
* Generates 5 conversation starters per attendee.
* Routes by type: VIP/Speaker/Sponsor → Team alert + VIP email.
* First-timers get buddy assignment and orientation guide.
* Standard attendees receive personalized confirmation.
* Logs all data to Google Sheets with scores and personas.
* Tracks: registration ID, persona, scores, goals, dietary needs.
* Offers: AI profiling, smart routing, personalized emails, analytics.

### 3. How to Set Up
* 1. Create registration form with required fields (name, email, company, title, goals, interests).
* 2. Import workflow JSON to n8n via Workflows → Import.
* 3. Add credentials: OpenAI API, Gmail OAuth2, Google Sheets.
* 4. Configure Webhook Trigger or Jotform Trigger node.
* 5. Copy webhook URL and add to form platform (POST method).
* 6. Customize AI Agent prompt with your event details (name, dates, sessions).
* 7. Update email templates with branding and event information.
* 8. Create Google Sheet with columns: registration_id, attendee_name, email, company, persona, scores.
* 9. Set team alert email in "Alert Event Team (VIP)" node.
* 10. Test with sample registration to verify flow.
* 11. Activate workflow and monitor executions.

## Requirements
* n8n instance (cloud or self-hosted).
* Credentials: OpenAI API key, Gmail OAuth2, Google Sheets access.
* Event registration form (Jotform, Typeform, Google Forms, etc.).
* Google Sheet for attendee database.
* Email account for sending confirmations and alerts.

## Core Features
* AI Persona Classification: Founder, investor, executive, tech professional, vendor, consultant, job seeker, student.
* Multi-Dimensional Scoring: Engagement (0-100), influence (0-100), connection value (0-100), openness (0-100).
* Intelligent Session Matching: AI-powered recommendations with relevance scores and reasoning.
* Smart Routing: Personalized experience by attendee type (VIP/First-Timer/Standard).
* Conversation Starters: 5 personalized ice-breakers per attendee.
* Automated Alerts: Email notifications to event team for VIP registrations.
* Database Logging: Complete attendee profiles stored in Google Sheets.
* Welcome Automation: Personalized emails with event details and tips.

## Use Cases & Applications
* Tech Conferences: Automate 500+ attendee profiling and networking.
* Trade Shows: Match exhibitors with qualified prospects.
* Professional Events: Connect members based on complementary goals.
* Investor Meetups: Pair founders with relevant investors.
* Corporate Events: Facilitate internal networking and team building.
* Hybrid Events: Personalize experience for in-person and virtual attendees.

## Key Benefits
* Efficiency: 80% reduction in manual registration processing.
* Personalization: 100% customized experience at scale.
* Networking ROI: 3x more meaningful connections vs random networking.
* Attendee Satisfaction: 90% satisfaction with personalized agendas.
* Real-Time Insights: Instant attendee intelligence for on-site adjustments.
* Revenue Impact: Higher ticket sales, sponsor retention, lower refunds.
* Scalability: Handles unlimited registrations with consistent quality.
* Data-Driven: Measurable networking outcomes and ROI tracking.

## Customization Options
* Adjust AI scoring criteria in AI Agent prompt.
* Edit email templates with your branding and messaging.
* Add custom attendee fields (company size, budget, timeline).
* Modify persona classifications for your industry.
* Change routing logic for different attendee segments.
* Integrate CRM via HTTP Request node (HubSpot, Salesforce).
* Add post-event follow-up sequences.
* Build networking matchmaking based on compatibility scores.
* Create custom reports with additional metrics.
* Add SMS notifications via Twilio integration.

## Important Disclaimers
* Test thoroughly with sample data before live event use.
* Verify AI profiling accuracy aligns with your event needs.
* Ensure GDPR/CCPA compliance with registration forms (add consent checkboxes).
* Monitor OpenAI API costs based on registration volume (~$0.10-0.15 per attendee).
* Protect attendee privacy - use secure credentials and access controls.
* Review and moderate AI-generated content for appropriateness.
* Backup attendee data regularly from Google Sheets.
* Set up error notifications to catch workflow failures.
* Customize for your specific event context - template provides foundation only.

## 🔗 Nodes Used

Google Sheets, Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
