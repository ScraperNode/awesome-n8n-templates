# ⚙️ Schedule AWS ECS services for office hours with a self-service form and Teams alerts

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow schedules tagged Amazon ECS services to run only during office hours, allows self-service restarts via an n8n Form for a limited duration, and sends status updates to a Microsoft Teams channel using an incoming webhook.

## How it works
1. Runs on two schedules (20:00 daily and 08:00 weekdays) or when a user submits an n8n Form restart request.
2. Scans the configured Amazon ECS clusters, lists services, describes them with tags, and keeps only services tagged `auto-schedule=office-hours`.
3. At 20:00, saves each running service’s desired count into the `saved-desired-count` tag, scales the service to 0, and posts a stop summary to Microsoft Teams.
4. At 08:00 on weekdays, restores services that have a `saved-desired-count` tag back to that count, clears `saved-desired-count` and `override-until`, and posts a start summary to Microsoft Teams.
5. For restart requests, optionally prompts for a project, lets the requester choose stopped or already-overridden services and a duration, sets an `override-until` tag, and scales selected services up to their saved desired count.
6. Polls Amazon ECS every 30 seconds until all selected services are healthy (or the max attempts is reached) and posts a ready or failure alert to Microsoft Teams.
7. Waits until the requested end time and, if it is outside office hours and the `override-until` tag still matches, scales the services back to 0, clears the override tag, and posts a “switched off again” message to Microsoft Teams.

## Setup
1. Create AWS IAM roles (one per AWS account) that n8n can assume with permission to call ECS `ListServices`, `DescribeServices`, `UpdateService`, `TagResource`, and `UntagResource` on the target clusters.
2. Add one AWS (Assume Role) credential per account in n8n and ensure the workflow’s account routing includes a branch for each configured account key.
3. Tag each ECS service you want managed with `auto-schedule=office-hours` (optionally add `display-name` for a friendly label).
4. Create a Microsoft Teams incoming webhook for the target channel and set its URL in `teamsWebhookUrl`.
5. Update `projects` (project/account/region/cluster), `restartFormUrl`, office hours, and `timezone`, and match the workflow settings timezone to the same value.
6. Configure authentication for the n8n Form endpoint (or protect n8n behind SSO) and test the schedules against a non-production service before activating.

## Requirements
- AWS: one or more AWS accounts running Amazon ECS services (Fargate or EC2).
- An IAM role per account that n8n can assume, allowing:
- ecs:ListServices and ecs:DescribeServices on your clusters
- ecs:UpdateService, ecs:TagResource and ecs:UntagResource on the services. Recommended: restrict these three with aws:ResourceTag/auto-schedule = office-hours, and limit tag changes to the keys saved-desired-count and override-until.
- n8n credentials: one AWS (Assume Role) credential per account. A plain AWS credential also works if you change the node's credential type.
- Microsoft Teams: a channel webhook created with Teams Workflows, using the "Send webhook alerts to channel" template.
- Service tags: each service to schedule tagged auto-schedule = office-hours. Optionally add display-name = <friendly name> for the form.
- Services managed by Terraform/CloudFormation: ignore changes to desired_count and to the saved-desired-count / override-until tags, so the next deploy doesn't undo the schedule.
- The form must be reachable by the people who will use it. Protect it with the form trigger's authentication or SSO in front of n8n.

## Customization
- Schedule: change the cron in When Every Day at 8PM / When Weekdays at 8AM, and match officeStartHour / officeEndHour in Set Config Parameters. Set timezone there and in the workflow settings.
- Projects and accounts: add entries to projects (project, account, region, cluster). One project can span several clusters. For a new AWS account, add a rule to Route by AWS Account and duplicate an ECS handler node with that account's credential. With a single account, keep one branch.
- Opt-in tag: change scheduleTagKey / scheduleTagValue to use your own tag.
- Restart durations: durationHours controls the form's dropdown (0.5 = 30 minutes). "Until the next working-day morning" is always offered.
- Health check: maxHealthChecks × 30 seconds is how long to wait before sending the failure alert.
- Notifications: edit the "Compile…" / "Compose…" Code nodes to change the wording or language. To use Slack, email or another tool, swap the Teams HTTP nodes.

## Additional info
No database needed: state is kept in ECS tags. saved-desired-count remembers each service's task count overnight, and override-until marks services someone restarted from the form, so the nightly stop leaves them alone.
Restart and extend: teammates can start stopped services or extend ones already running. An extension never shortens an existing booking. When the time is up, services are stopped again only if it's outside office hours and nobody else extended them.
Self-contained multi-account design: every ECS API call goes through the section at the bottom of the workflow. The workflow calls itself with an Execute Sub-workflow node, and a Switch picks the AWS credential for each account, so there's only one workflow to import.
Safe by default: only services carrying the opt-in tag are ever touched, and the selected services are re-checked against that list before anything is started.
Limits: up to 100 services per cluster and 10 services per restart request. Public holidays aren't skipped automatically.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
