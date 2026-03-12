# 🔧 Random Process Scheduler

> ⚡ **50 views** · 🔧 [Miscellaneous](../)

## Description

# Random Process Scheduler

### Turn predictable automations into human-like activity with random scheduling across easily customisable time slots.

Perfect for content publishing with organic scheduling patterns, social media automation, API systems that need to avoid rate limiting, or any automation requiring randomised timing control across multiple periods.

All times are configured in local timezone with automatic UTC conversion for technical operations.

Features easy slot management with chronological ordering, gap support, and 24-hour window scheduling.

### How to use

- Set `schedulerExecutionTime` in **Init** node (match it to **Schedule Trigger** cron)
- Define **time slots** with start/end hours and probability values (see below)
- Configure **Execute sub-process** with your own workflow ID
- Configure SMTP credentials, local time zone and optionally project paths

### Step by Step Configuration

Two variables to set in the **Init** node's **"Custom Configuration"** section:

**1. When the scheduler runs daily:**
```javascript
const schedulerExecutionTime = 1; // 1am (24h clock; must match Schedule Trigger node)
```

**2. Your execution slots:**
```javascript
const subprocessTimeSlots = {
  morning: { start: 6, end: 12, probability: 0.85 },
  afternoon: { start: 12, end: 18, probability: 0.85 },
  evening: { start: 18, end: 24, probability: 0.5 }
};
```

That's it. Three slots, three probabilities.

Add or remove slots, adjust times - it just works.

**Real-world example with gaps:**
```javascript
const subprocessTimeSlots = {
  night: { start: 0, end: 2, probability: 0.1 },      // Optional late activity
  morning: { start: 6, end: 10, probability: 0.85 },  // Gap from 2-6am (no execution)
  noon: { start: 12, end: 14, probability: 0.85 },    // Gap from 10am-12pm
  afternoon: { start: 16, end: 18, probability: 0.85 }, // Gap from 2-4pm
  evening: { start: 20, end: 24, probability: 0.5 }   // Gap from 6-8pm
};
```
**3. Configure Execute sub-process with your workflow ID**

Your sub-workflow **MUST** start with a **Wait** node and be configured with `{{ $json.executions.relativeDelaySeconds }}` as “Wait Amount”.

![RPS  Community Description20251005164526603.png](fileId:2782)

**4. Additional Configuration**
* SMTP credential
* Time zone (**Init** node): `const LOCAL_TIMEZONE = $env.GENERIC_TIMEZONE || 'Europe/Paris';` by default
* Project paths (**Init** node):
```
// ⚠️ Your email here
• const N8N_ADMIN_EMAIL = $env.N8N_ADMIN_EMAIL || 'yourmail@world.com';

// ⚠️ Your projects’ ROOT folder on your mapped server here
• const N8N_PROJECTS_DIR = $env.N8N_PROJECTS_DIR || '/files/n8n-projects-data';

// ⚠️ Your project’s folder name here for logging
• const PROJECT_FOLDER_NAME = "RPS";
```

### Requirements

- n8n instance running in Docker with file system access
- Volume mapping for persistent storage (e.g., `/local-files:/files`)
- **De-activate** Read/Write nodes & Email sends if you do not want to use logging features (file system access optional)
- SMTP server for notifications
- n8n API credentials for error handling
- **Target sub-workflow** with **Wait** node to handle relativeDelaySeconds

**IMPORTANT:** Your sub-workflow **MUST** start with a **Wait** node and be configured with `{{ $json.executions.relativeDelaySeconds }}` as “Wait Amount”.

### How it works

- **24-Hour Window Algorithm**: Schedules executions from current time until next scheduler run, handling timezone conversions and cross-midnight scenarios
- **Automatic Validation**: Checks for overlaps, invalid time ranges, and probability values on every run
- **Chronological Processing**: Processes slots in order regardless of how you define them
- **Inclusive/Exclusive Boundaries**: 6-12 slot runs from 6:00:00 to 11:59:59 (start inclusive, end exclusive)
- **Chained Execution**: Each subprocess receives a relativeDelaySeconds value for sequential execution with calculated intervals
- **Comprehensive Monitoring**: Tracks planned vs actual execution times with delay calculations and detailed logging

### Configuration Rules

- **No Overlap**: Slots cannot overlap (6-10 and 9-12 is invalid)
- **Valid Ranges**: Start 0-23, end 0-24, start &lt; end
- **Valid Probability**: 0 to 1 (0.85 = 85% chance)
- **Gaps Allowed**: Skip hours completely (e.g., no execution 2-6am)
- **Emoji Support**: Use "night", "morning", "noon", "evening" keywords in slot names for visual logs

**Use Cases:**
- Content publishing with organic scheduling patterns
- Social media automation with human-like posting intervals
- API systems avoiding rate limits through unpredictable timing
- Business hours automation with precise timing control

## 🔗 Nodes Used

Send Email, Execute Sub-workflow, Stop and Error, n8n, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
