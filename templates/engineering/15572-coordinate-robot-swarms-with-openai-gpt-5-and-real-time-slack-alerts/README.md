# ⚒️ Coordinate robot swarms with OpenAI GPT-5 and real-time Slack alerts

> ⚡ **80 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates multi-robot swarm coordination for robotics engineers, autonomous systems researchers, and industrial automation teams managing fleets of robots in real time. It solves the problem of decentralized robot supervision, eliminating manual monitoring by continuously ingesting sensor streams, detecting critical conditions, executing mission commands, and running periodic AI-driven optimization across the entire swarm. Three parallel pipelines operate concurrently: a sensor ingestion pipeline that stores robot states and triggers Slack alerts on critical conditions; a mission command pipeline that parses and executes commands while logging outcomes; and a periodic optimization pipeline where a Swarm AI Coordinator agent, backed by OpenAI GPT, Swarm Coordination Memory, Task Allocation, Path Planning, and Formation Control tools, computes and publishes coordination updates to Slack.

## Setup Steps
1. Add OpenAI credentials to the Swarm AI Coordinator and OpenAI GPT-5 model nodes.
2. Configure Slack credentials; set the target channel in all three Slack publish nodes.
3. Connect a database (e.g., Postgres or Airtable) to Store Robot State and Store Mission Log nodes.
4. Set the Periodic Swarm Optimization schedule interval to match your fleet's update frequency.
5. Configure webhook URLs for Robot Sensor Data Stream and Mission Command API triggers.
6. Wire Swarm Coordination Memory to your preferred memory backend (e.g., Redis or n8n memory).

## Prerequisites
- Slack workspace with bot token
- Database for robot state and mission logs
- Robot sensor and command API endpoints
## Use Cases
- Warehouse AMR fleet coordination and anomaly alerting
- Autonomous drone swarm path and formation management
## Customization
- Replace Slack with Teams or Discord for coordination broadcasts
- Swap OpenAI for a local LLM in the Coordinator agent
- Add more tools (e.g., Collision Avoidance, Battery Management)
- Extend mission log to Google Sheets for reporting
## Benefits
- Three concurrent pipelines eliminate monitoring blind spots
- AI agent autonomously optimizes swarm without human intervention
- Slack integration provides instant cross-team situational awareness

## 🔗 Nodes Used

Slack, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
