# ⚒️ Implement recursive algorithms with sub-workflows: Towers of Hanoi demo

> ⚡ **219 views** · ⚒️ [Engineering](../)

## Description

## How it works

This is an **example of using sub-workflow nodes** and a proof of concept showing that it’s possible to **solve and explain recursive problems with n8n**.

### Towers of Hanoi - Task
Move a stack of n disks from rod A to rod C, using rod B as auxiliary. Only one disk can be moved at a time, and no disk may be placed on a smaller disk.

### Example
```
n=4
     |          |          |
     =          |          |
    ===         |          |
   =====        |          |
  =======       |          |
 ---------  ---------  ---------
     A          B          C
```
### Algorithm
```
procedure Hanoi(n, X, Y, Z):
  if n == 1:
    move disk from X to Z
  else:
    Hanoi(n-1, X, Z, Y)
    move disk from X to Z
    Hanoi(n-1, Y, X, Z)
```

### Notes
- This is a learning example. In a real scenario, you would probably use an iterative approach with only a single code node.
- When experimenting with recursion, make sure to define a termination condition first. Also, be aware of the "Restart workspace" link in the [n8n Dashboard](https://app.n8n.cloud/manage).
- Learn more about [Recursion on Wikipedia](https://en.wikipedia.org/w/index.php?title=Recursion_(computer_science)&oldid=1301600240#Towers_of_Hanoi).

## Set up steps
- Optional: Set "*numberOfDiscs*" in node "*Set number of discs*"
- Execute workflow

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
