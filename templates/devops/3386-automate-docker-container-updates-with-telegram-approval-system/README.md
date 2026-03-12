# ⚙️ Automate docker container updates with Telegram approval system

> ⚡ **3,147 views** · ⚙️ [DevOps & CI/CD](../)

## Description

#### Who is this for?
This workflow is for DevOps engineers, system administrators, and Docker users who want to automate the process of checking for updates, verifying them, and applying updates to their Docker-based deployment in a controlled manner.
For example, this workflow is used to update the n8n Docker image.

#### What does this workflow do?
- Fetches the latest Docker image version from GitHub.
- Compares it with the currently running version on the server.
- Sends a Telegram message requesting confirmation if an update is available.
- If confirmed, pulls the latest n8n Docker image, updates the container, and restarts it.
- Sends a Telegram message confirming the update is completed.
- Schedules automatic checks, Uses a cron trigger in n8n to check for updates at regular intervals.


#### Setup
- Ensure n8n is installed and running in a Docker container.
- Create a Telegram bot using BotFather.
- Set up Telegram credentials. 
- Set up SSH credentials (ensure the SSH user has sudo access).
- Obtain the bot token and chat ID.
- Set the Default variable node
   - telegram-id (You can find it by messaging @get_id_bot).
   - n8n-container-name (Specify the name of the n8n container.)
   - working-directory (The directory where your docker-compose.yml is).
 - You can use a manual trigger or a schedule trigger to update (for n8n, I use Cron every 3 days to check for a new version).

#### How to customize this workflow
- Change the update mechanism: Modify the Docker commands if using a different container runtime or orchestration tool.
- Modify the confirmation flow: Add extra validation steps, such as checking for breaking changes before updating.
- Use a different notification method: Replace Telegram with Slack, email, or another notification service.

## 🔗 Nodes Used

HTTP Request, Telegram, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
