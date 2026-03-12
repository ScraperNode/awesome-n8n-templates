# ⚙️ Send n8n error reports to LINE

> ⚡ **604 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow template, "n8n Error Report to LINE," is designed to streamline error handling by sending real-time notifications to your LINE account whenever an error occurs in any of your n8n workflows. By integrating with the LINE Messaging API , this template ensures you stay informed about workflow failures, allowing you to take immediate action and minimize downtime.

Whether you're a developer managing multiple workflows or a business owner relying on automation, this template provides a simple yet powerful way to monitor and resolve errors efficiently.

## Who Is This Template For?

**Developers:** Who manage complex n8n workflows and need real-time error notifications.
**DevOps Teams**: Looking to enhance monitoring and incident response for automated systems.
**Business Owners**: Who rely on n8n workflows for critical operations and want to ensure reliability.
**Automation Enthusiasts**: Seeking tools to simplify error tracking and improve workflow performance.

## What Problem Does This Workflow Solve?
When automating processes with n8n, errors can occur due to various reasons such as misconfigurations, API changes, or unexpected inputs. Without proper error handling, these issues may go unnoticed, leading to delays or disruptions. This workflow solves that problem by:

1) Automatically detecting errors in your n8n workflows.
2) Sending instant notifications to your LINE account with details about the failed workflow, including its name and execution URL. Allowing you to quickly identify and resolve issues, ensuring smooth operation of your automated systems.

## What This Workflow Does
1) Error Trigger:
The workflow is triggered automatically whenever an error occurs in any n8n workflow configured to use this error-handling flow.
2) Send Notification via LINE:
Using the LINE Push API , the workflow sends a message to your LINE account with key details about the error, such as the workflow name and execution URL.

You can also customize the notification message to include additional information or format it to suit your preferences.

## Setup Guide

**Pre-Requisites**
- Access to the LINE Developers Console with a registered bot and access to the Push API.
[https://developers.line.biz/console/](https://developers.line.biz/console/)
[API Reference](
https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message)
- Basic knowledge of n8n workflows and JSON formatting.
- An active n8n instance where you can configure error workflows.

**Step-by-Step Setup**
- Configure the Error Trigger:
Set this workflow as the default error workflow in your n8n instance. 
[https://docs.n8n.io/flow-logic/error-handling/](https://docs.n8n.io/flow-logic/error-handling/)
- Set Up LINE Push API:
Replace &lt;UID HERE&gt; in the HTTP Request node with your LINE user ID to ensure notifications are sent to the correct account.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
