# ⚡ Daylight saving time notification for different timezones

> ⚡ **502 views** · ⚡ [Personal Productivity](../)

## Description

**Who is it for?**
If you are having a lot of meetings as a project manager, CFO, CTO, CEO or any other role that requires handling many meetings, AND you are working with people in different timezones, you may have noticed that it is not uncommon that daylight savings time change day **may differ from timezone to timezone**. This may be very troublesome at times.

If DST change day differs between timezones, then you might need to adjust your meetings time accordingly. And this happens twice a year. So it's good to get notification beforehand (at least a day before).

This automation will notify you if tomorrow you can expect DST in any zone you provide.

**How It Works?**
- Script runs daily and loops through provided timezones
- Checks if there is DST change *to* or *from* the tomorrow (if you want to be notified sooner, just adjust number of days)
- If there is DST change, script provides you with Slack notification (replace with email if needed)

**How to set up?**
- Add and/or edit timezones you want to monitor in "Timezones List" node
- Adjust "Calculate Tomorrow's Date" if you want to be notified sooner than 1 day before DST change
- Adjust "Send Notification on Upcoming Change" to set where on Slack you want to be notified

And that's it. Hope that you won't miss any other meeting because of DST!

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
