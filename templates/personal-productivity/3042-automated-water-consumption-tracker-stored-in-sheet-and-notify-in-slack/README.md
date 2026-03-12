# ⚡ Automated water consumption tracker - stored in sheet and notify in Slack

> ⚡ **873 views** · ⚡ [Personal Productivity](../)

## Description

# Water Reminder Workflow

This workflow demonstrates how to use **n8n** and **Slack** to build an intelligent water drinking reminder system, combined with **Google Sheets** for data recording and **OpenAI** for generating personalized reminder messages.

---

[Google Sheet Template](https://docs.google.com/spreadsheets/d/1cMf03l3Ae3vo-4w8yeaUvSh9dB7CLM7CFUb2y4BmqwY/edit?usp=sharing)

The iOS shortcut template:
![IMG_5835_5dcead4a70_1_09d5e26b6c 1.jpg](fileId:989)

**The result in iOS health:**
![IMG_0378_35d2c74ab3 1.png](fileId:975)


[The template demo in Youtube](https://www.youtube.com/watch?v=h2_QO5gxdts)


---

## Key Features
1. **Scheduled Reminders**: Automatically sends water reminders at random times every hour.
2. **Intelligent Scheduling**: Delays the next reminder if you've recently had water.
3. **AI-Generated Messages**: Uses OpenAI to generate friendly and non-repetitive reminder messages.
4. **Data Tracking**: Records daily water intake and calculates percentage of goal achievement.
5. **Quick Response**: Easily record water intake through Slack buttons.
6. **iOS Integration**: Provides iOS shortcut links to sync data with the Health app.

---

## Pre-Configuration Requirements
To use this workflow, you need to set up the following:

1. **Google Sheets**:
   - Create a Google spreadsheet with `log` and `setting` sheets
   - The `log` sheet should include `date`, `time`, and `value` columns
   - The `setting` sheet is used to store daily water intake goals

2. **Slack**:
   - Create a Slack app and obtain an API token
   - Configure permissions for interactive buttons

3. **OpenAI**:
   - Obtain an OpenAI API key

4. **iOS Shortcut** (optional):
   - Create an iOS shortcut named `darrell_water` for recording health data

---

## Node Configurations

### 1. Scheduled Triggers and Data Collection

#### 1.1. Schedule Trigger
- **Purpose**: Triggers water reminders on schedule
- **Configuration**:
  - **Cron Expression**: `0 {{ Math.floor(Math.random() * 11) }} 8-23 * * *`
  - Triggers at a random minute every hour, only between 8 AM and 11 PM

#### 1.2. Google Sheets - Get Target
- **Purpose**: Retrieves daily water intake goal
- **Configuration**:
  - **Document ID**: Your Google spreadsheet ID
  - **Sheet Name**: `setting`

#### 1.3. Google Sheets - Get Log
- **Purpose**: Retrieves today's water intake records
- **Configuration**:
  - **Document ID**: Your Google spreadsheet ID
  - **Sheet Name**: `log`
  - **Filter Condition**: `date` equals today's date `{{ $now.format('yyyy-MM-dd') }}`

#### 1.4. Summarize
- **Purpose**: Calculates total water intake for today
- **Configuration**:
  - **Fields to Summarize**: `value` (sum)

#### 1.5. Limit
- **Purpose**: Gets the most recent water intake record
- **Configuration**:
  - **Keep**: Last items

---

### 2. Intelligent Reminder Logic

#### 2.1. Combine Data
- **Purpose**: Merges target and actual water intake data
- **Configuration**:
  - **Combine By**: Combine by position
  - **Number of Inputs**: 3

#### 2.2. If
- **Purpose**: Checks if water was consumed recently
- **Configuration**:
  - **Condition**:
    - `{{ DateTime.fromISO($json.date+"T"+$json.time).format('yyyy-MM-dd HH:mm:ss') }}` is after `{{ $now.minus(30, "minutes") }}`

#### 2.3. Wait
- **Purpose**: Randomly delays the reminder if water was consumed recently
- **Configuration**:
  - **Wait Time**: `{{ Math.floor(Math.random() * 1) + 1 }}` minutes

---

### 3. AI Message Generation and Sending

#### 3.1. OpenAI
- **Purpose**: Generates personalized water reminder messages
- **Configuration**:
  - **Model**: `gpt-4o-mini`
  - **Messages**:
    - System prompt: Requests responses in Traditional Chinese and in JSON format
    - User prompt: Includes information about last water time, current time, goal, and progress
  - **Temperature**: 1

#### 3.2. Slack Send Drink Notification
- **Purpose**: Sends water reminders to Slack channel
- **Configuration**:
  - **Channel**: Your Slack channel ID
  - **Message Type**: Block
  - **Block UI**: Contains AI-generated reminder message and water amount buttons (100ml, 150ml, 200ml, 250ml, 300ml)

---

### 4. User Interaction and Data Recording

#### 4.1. Slack Drink Webhook
- **Purpose**: Receives user interactions when water buttons are clicked
- **Configuration**:
  - **HTTP Method**: `POST`
  - **Path**: `slack-water-webhook`

#### 4.2. Slack Action Payload
- **Purpose**: Parses Slack interaction data
- **Configuration**:
  - **Mode**: Raw
  - **JSON Output**: `{{ $json.body.payload }}`

#### 4.3. Slack Action Drink Data
- **Purpose**: Extracts water amount and message information
- **Configuration**:
  - **Assignments**:
    - `value`: `{{ $json.actions[0].value }}`
    - `message_text`: `{{ $json.message.text }}`
    - `shortcut_url`: `shortcuts://run-shortcut?name=darrell_water&input=`
    - `shortcut_url_data`: JSON containing water amount and time
    - `message_ts`: `{{ $json.container.message_ts }}`

#### 4.4. Google Sheets
- **Purpose**: Records water intake data to spreadsheet
- **Configuration**:
  - **Operation**: Append
  - **Document ID**: Your Google spreadsheet ID
  - **Sheet Name**: `log`
  - **Column Mapping**:
    - `date`: `{{ $now.format('yyyy-MM-dd') }}`
    - `time`: `{{ $now.format('HH:mm:ss') }}`
    - `value`: `{{ $json.value }}`

#### 4.5. Send to Slack with Confirm
- **Purpose**: Sends confirmation message and provides iOS shortcut link
- **Configuration**:
  - **Channel**: Your Slack channel ID
  - **Message Type**: Block
  - **Block UI**: Contains confirmation message and iOS Health app button
  - **Reply Settings**: Reply to the thread of the original message

---

## Author Information
This workflow was created by **darrell_tw_**, an engineer focused on AI and Automation.

Contact:
- [X](https://x.com/darrell_tw_)
- [Threads](https://www.threads.net/@darrell_tw_)
- [Instagram](https://www.instagram.com/darrell_tw_/)
- [Website](https://www.darrelltw.com/)

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, Summarize, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
