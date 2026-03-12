# 📱 Get daily exercise plan with Flex Message via LINE

> ⚡ **2,481 views** · 📱 [Social Media & Email Marketing](../)

## Description

The YogiAI workflow automates sending daily yoga pose reminders and related information via Line Push Messages . This automation leverages data from a Google Sheets database containing yoga pose details such as names, image URLs, and links to ensure users receive personalized and engaging content every day.

**Purpose**
- Provide users with daily yoga pose suggestions tailored to their practice.
- Deliver visually appealing and informative content through Line's Flex Messages, including images and clickable links.
- Log user interactions and preferences back into Google Sheets to refine future recommendations.

**Key Features**
1. Automated Daily Reminders : Sends a curated list of yoga poses at a scheduled time (21:30 Bangkok time).
2. Dynamic Content Generation : Uses AI to rewrite and format messages in a user-friendly manner, complete with emojis and clear instructions.
3. Integration with Google Sheets : Pulls data from a predefined Google Sheet and logs interactions for continuous improvement.
4. Customizable Messaging : Ensures JSON outputs are properly formatted for Line’s Flex Message API, allowing for interactive and visually rich content.


**Data Source**
Google Sheets Structure
The workflow relies on a Google Sheet structured as follows:

PoseName : The name of the yoga pose.
uri : The image URL representing the pose.
url : A clickable link directing users to more information about the pose.

Sample Data Layout
Supine Angle
https://example.com/SupineAngle-tn146.png
https://example.com/pose/SupineAngle
Warrior II
https://example.com/WarriorII-tn146.png
https://example.com/pose/WarriorII

*Note : Ensure that you update the Google Sheet with your own data. Refer to this sample sheet for reference. *

**Scheduled Trigger**
The workflow is triggered daily at 21:30 (9:30 PM) Bangkok Time (Asia/Bangkok) . This ensures timely delivery of reminders to users, keeping them engaged with their yoga practice.

**Workflow Process**
1. **Data Retrieval**
Node: Get PoseName
Fetches yoga pose details from the specified range in the Google Sheet.
2. **Content Generation**
Node: WritePosesToday
Utilizes Azure OpenAI to craft user-friendly text, complete with emojis and clear instructions.
Node: RewritePosesToday
Formats the AI-generated text specifically for Line messaging, ensuring compatibility and visual appeal.
3. **JSON Formatting**
Node: WriteJSONflex
Generates JSON structures required for Line’s Flex Messages, enabling carousel displays of yoga pose images and links.
Node: Fix JSON
Ensures all JSON outputs are correctly formatted before being sent via Line.
4. **Message Delivery**
Node: Line Push with Flex Bubble
Sends the final message, including both text and Flex Message carousels, directly to users via Line Push Messages.
5. **Logging Interactions**
Nodes: YogaLog & YogaLog2
Logs each interaction back into Google Sheets to track which poses were sent and how often they appear, refining future recommendations.

**Setup Prerequisites**
*Google Sheets Account* : Set up a Google Sheet with the required structure and populate it with your yoga pose data.
*Line Developer Account* : Create a Line channel to obtain necessary credentials for sending push messages.
*Azure OpenAI Account* : Configure access to Azure OpenAI services for generating and formatting content.

**Intended Audience**
This workflow is ideal for:
- Yoga Instructors : Seeking to engage students with daily pose suggestions.
- Fitness Enthusiasts : Looking to maintain consistency in their yoga practice.
- Content Creators : Interested in automating personalized and visually appealing content distribution.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Basic LLM Chain, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
