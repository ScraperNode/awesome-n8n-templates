# ⚒️ Control your 3D printer with GPT-4o and OctoPrint API conversations

> ⚡ **800 views** · ⚒️ [Engineering](../)

## Description

Ever wanted to just tell your 3d printer what to do remotely? 

This game changer let's you converse with OpenAI agents to manage OctoPrint connected 3d printers. Great for remote management and monitoring with easy to read responses.

Query what jobs are available, Load a print job (**upload workflow in development, will be released soon for community use**), start the print job and request detailed reports on your printers performance as it runs. 

Chat &gt; AI &gt; OctoPrint API &gt; Your 3d Printer

++**Example 1:**++

**Human Input:** "What print job is running?"

**AI Response:** 

Current Print Job Details,
Job Name: Stand v1.gcode
File Size: 2,533,233 bytes
Estimated Print Time: Approximately 6 hours 15 minutes (22536 seconds)
Progress: 
Completion: 1.97%,
Current Position in File: 49,940 bytes,
Time Spent Printing: 2,611 seconds (~43.5 minutes),
Time Remaining: Approximately 5 hours 34 minutes (20,123 seconds),

Status,
Current State: Printing."

**++Example 2++**
**Human Input:** "Is my 3d Printer ok?"

**AI Response:**
"Status: Printing,
Operational: Yes,

++Temperature:++
Bed Temperature: 
Actual: 50°C,
Target: 50°C,

Nozzle (Tool 0) Temperature:
Actual: 200°C,
Target: 200°C,


++Connection Status:++
Connection State: Currently connected to the printer,
Port: /dev/ttyUSB0,
Baudrate: 115200,

Summary,
Your 3D printer is currently operational and printing without errors. The bed and nozzle temperatures are both at their target values."

## 🔗 Nodes Used

HTTP Request, Discord, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
