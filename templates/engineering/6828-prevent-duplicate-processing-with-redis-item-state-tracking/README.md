# ⚒️ Prevent duplicate processing with Redis item state tracking

> ⚡ **179 views** · ⚒️ [Engineering](../)

## Description

I built this tool because we faced a real, recurring problem: managing hundreds of client projects in a weekly automated loop. 

There was a time when a single error in that process could create a complete data mess, forcing us to manually clean and re-run everything. The Item Tracker was our solution. 

It proved that something simple, when used correctly, can be a game-changer for maintaining order and reliability in your workflows (at least it was for us).

---

### How the System Works: A Story of Order from Chaos

Our main automation, which fetches and summarizes data, is where the heavy lifting happens. But its newfound stability comes from a simple, critical collaboration with the Item Tracker. It's like a two-step handshake that happens for every single project.

* Our main workflow starts by getting a long list of active projects.
* For each project, it first asks the Item Tracker: "Is this one already being worked on?"
* If the answer is no, the Item Tracker immediately puts a temporary "in-progress" note on the project
* Once our main workflow successfully completes its task for that project, it tells the Item Tracker to remove the "in-progress" note and set a "completed" note.

This simple process is our safety net. If a task fails, that "in-progress" note will eventually disappear, allowing the system to confidently pick up and re-run only that specific item later. ++This saves us from having to start the entire job over from scratch.++

### Key Components & Their Purpose

* **Main Workflow:** This is the primary automation that does the heavy lifting, like getting a list of projects and connecting to HubSpot.
* **Item Tracker Utility:** The smart part of the system. This separate tool keeps a simple record of what each project's status is at any given moment.
* **Redis Database:** This is the fast, central hub where all of the Item Tracker's notes are stored. It's the engine that makes the entire system reliable.

---

### The Item Tracker in Action: Your Digital To-Do List

For beginners, the names of the tracking notes (called "keys") might seem confusing, but the idea is actually simple. Imagine a digital to-do list for every project. A key is just the project's name on that list.

Every key has three parts that tell you everything you need to know:
* **The Group:** The first part groups all similar items together, like all your HubSpot projects.
* **The ID:** The middle part is the project's unique ID, so you know exactly which project you're talking about.
* **The Status:** The last part is a simple word that shows its status, like `in_progress` or `completed`.

This simple naming system is the secret to keeping hundreds of projects organized, so you can easily see what's happening and what needs attention.

---

### Overall Business Value

This solution directly addresses the pain of large-scale automation failures. It gave us a new level of confidence in our automated processes. Instead of facing the chaos of a messy run, this system provides immediate visibility into which project failed and why. It eliminates the need for manual cleanup and allows us to confidently re-run a specific item without risking data corruption across the entire set. The result is a highly reliable and scalable process that saves time, reduces frustration, and maintains data integrity.

## 🔗 Nodes Used

Google Sheets, Redis, Stop and Error, Redis Trigger, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
