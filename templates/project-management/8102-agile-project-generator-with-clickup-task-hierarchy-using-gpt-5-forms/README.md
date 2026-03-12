# 📋 Agile project generator with ClickUp task hierarchy using GPT-5 & forms

> ⚡ **481 views** · 📋 [Project Management](../)

## Description

## **Who is this for?**

This workflow is perfect for:

* Project managers and Agile teams who want to automate project setup and task creation
* Software development teams looking to standardize their project initialization process
* Business analysts and product owners who need to quickly convert project ideas into structured task breakdowns
* Companies using ClickUp for project management who want to leverage AI for intelligent project planning

## **What problem is this workflow solving?**

Creating comprehensive project structures with detailed tasks and subtasks is time-consuming and often inconsistent. This workflow solves those issues by:

* **Automating project creation** from initial concept to fully structured ClickUp project with tasks and subtasks
* **Standardizing task breakdown** using AI to generate professional Agile user stories with proper descriptions
* **Eliminating manual setup** while ensuring consistency across all projects and teams
* **Improving project planning quality** through AI-driven task analysis and structured output

## What this workflow does

This workflow transforms raw project ideas into complete, professional ClickUp projects with AI-generated task breakdowns and subtasks, following Agile best practices.

**Step by step:**
1. **Form Trigger** captures project details through a web form (Project Name and Full Features description)
2. **Project Naming AI Agent** uses OpenAI to clean up project names, create professional descriptions, and generate random Jira-style project keys
3. **ClickUp Create List** establishes the main project list in your ClickUp workspace
4. **Task Generator AI Agent** analyzes project features and creates detailed task breakdown following Agile user story format
5. **Split Out** breaks down the AI-generated task array into individual items for processing
6. **Loop Over Items** processes each main task individually through batch processing
7. **ClickUp Create Task** creates each main task with descriptions in the project list
8. **Split Out Subtasks** extracts subtasks from each main task for individual processing
9. **Execute Sub-workflow** triggers the subtask creation workflow to build parent-child task relationships
10. **Gmail Notification** sends success notification email with project link and list ID
11. **Sub-workflow Loop** handles individual subtask creation in ClickUp with proper parent task relationships

## How to set up

1. **Connect your OpenAI account** by adding your API key to the OpenAI Chat Model node for AI-powered project analysis
2. **Configure ClickUp credentials** by adding your ClickUp API key and updating team ID and space ID for your workspace
3. **Set up Gmail OAuth2** credential for sending notification emails
4. **Update email recipient** in the Gmail node from the placeholder email to your actual email address
5. **Configure the Execute Workflow node** to reference the correct sub-workflow ID for subtask creation
6. **Customize the form fields** in the Form Trigger node based on your project input requirements
7. **Test the workflow** with a sample project to ensure proper task generation and ClickUp integration
8. **Verify notifications** are being sent correctly with proper project links

## How to customize this workflow to your needs

* **Modify task generation prompts**: adjust the AI prompts in the Task Generator node to match your specific project methodology or industry requirements
* **Add custom fields**: enhance the form trigger with additional project metadata fields like priority, team assignment, or project type
* **Switch AI models**: replace the OpenAI Chat Model node with other AI providers like Google Gemini, Claude, or local models by using the appropriate n8n AI nodes for different cost and performance requirements

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**

## 🔗 Nodes Used

Execute Sub-workflow, ClickUp, Gmail, Execute Workflow Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
