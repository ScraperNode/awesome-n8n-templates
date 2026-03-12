# 👥 Automate end-to-end hiring with Keka, Google Sheets, Gmail and GPT-4

> ⚡ **66 views** · 👥 [HR & Recruitment](../)

## Description

## Complete End-to-End Process Description

### 🔹 Phase 1: Application Collection & Initial Notification
The process begins when candidates apply for active job openings. All applications are automatically collected and stored in the Master Recruitment Sheet. This sheet acts as the operational control center for the entire hiring process. Each candidate record includes job details, assigned recruiter information, and tracking fields required for interview and decision management.
Once new applications are stored, the system notifies the respective recruiters. The notification is grouped by job role to avoid multiple emails. Recruiters are informed that new candidates are ready for screening and are directed to review them inside the Master Recruitment Sheet.
At this stage, no automated decision is made. The recruiter manually reviews candidates, evaluates eligibility criteria, may call them for preliminary screening, and then enters remarks directly into the sheet. These remarks represent the recruiter’s qualitative feedback.

### 🔹 Phase 2: AI-Based Screening Recommendation
After recruiters enter their screening remarks, the system uses AI to analyze the feedback. The AI interprets whether the recruiter’s remarks indicate a positive or negative outcome.
Based on the interpretation:
If the response is negative, the candidate is marked as rejected.
If the response is positive, the candidate is marked as shortlisted.
The result is shared with the recruiter so they are aware of how the system interpreted the remarks. However, the recruiter remains in control and can override or confirm the decision if needed.
For candidates marked as rejected at this stage, rejection communication is handled appropriately and the candidate is moved into a closed state. For shortlisted candidates, the process proceeds to the AI interview stage.

### 🔹 Phase 3: AI Interview Invitation
Shortlisted candidates are automatically invited to complete an AI interview. The system triggers the AI interview platform and records that the candidate has been invited.
Recruiters are notified that AI interview invitations have been sent. The Master Recruitment Sheet is updated to reflect the interview status, ensuring full visibility.
The system then monitors whether the AI interview has been completed. No further movement occurs until completion is confirmed.

### 🔹 Phase 4: AI Interview Completion & Score-Based Recommendation
Once a candidate completes the AI interview, the system retrieves the interview score and performance metrics. Based on predefined scoring logic, the system generates a recommendation:
If the score is strong, the candidate is recommended as shortlisted.
If the score is weak, the candidate is recommended as rejected.
However, this is only a recommendation. The final decision is not made automatically.
The recruiter is shown the score and system-generated recommendation. The candidate’s status is moved to an approval stage, awaiting recruiter confirmation. This ensures that automation supports decision-making but does not replace human authority.

### 🔹 Phase 5: Recruiter Approval After AI Interview
Recruiters review the AI interview results and update the Master Recruitment Sheet with their final decision: Approved or Rejected.
Once updated:
Approved candidates proceed to the next interview round.
Rejected candidates are closed and handled through rejection communication.
The system sends a summary notification to the recruiter indicating how many candidates were approved and how many were rejected in that approval cycle. This provides visibility and ensures structured progression.
For approved candidates, the system now transitions to scheduling the next interview round.

### 🔹 Phase 6: Technical Interview Scheduling
When candidates are approved for the technical round, the recruiter prepares the interview details manually. The recruiter creates the meeting link and fills in the date, time, and interviewer details directly in the Master Recruitment Sheet.
The system continuously monitors for candidates whose interview details have been added but whose invitation has not yet been sent.
Once details are available:
An interview invitation email is sent to the candidate.
A corresponding email is sent to the interviewer.
The recruiter is included for visibility.
After sending the invitations, the sheet is updated to mark that the interview invitation has been sent. This prevents duplicate invitations.
### 🔹 Phase 7: Technical Interview Feedback & Progression
After the technical interview is conducted, feedback is entered into Keka. The system retrieves the interview feedback and identifies the final decision for that round.
If the decision is rejected, the candidate is immediately marked as rejected and moved to a closed state.
If the decision is positive, the candidate progresses to the next round (HR round). The Master Recruitment Sheet is updated accordingly.
This progression process is automatic but strictly based on the interviewer’s decision recorded in Keka.
### 🔹 Phase 8: HR Round & Leadership Connect (Continuous Loop)
The same structured process continues for:
HR Discussion
Leadership Connect
For each round:
The recruiter adds scheduling details in the sheet.
The system sends invitations.
Interview is conducted.
Feedback is entered in Keka.
The system retrieves feedback.
The candidate is either rejected or moved forward.
This creates a continuous loop across multiple interview stages without manual coordination effort.

### 🔹 Phase 9: Final Hiring Decision Logic
Once the Leadership Connect round is completed, the system evaluates all rounds collectively.
If the candidate has received a positive outcome in:
Technical Round
HR Round
Leadership Connect
Then the candidate is marked as Hired.
If the candidate is rejected in any round, the process ends immediately, and the candidate is marked as Rejected.
This ensures hiring decisions are consistent and aligned with interview outcomes across all stages.

### 🔹 Phase 10: Hiring Closure & Onboarding Notification
When a candidate is marked as hired, the system sends a follow-up notification to the recruiter indicating that the hiring process is completed and onboarding steps should begin.

The candidate’s status is then marked as closed in the recruitment system. This signifies the end of the recruitment lifecycle for that candidate.

#### 🔄 Continuous Pipeline Behavior
The entire system operates as a structured pipeline:
Application → Manual Screening → AI Recommendation → Recruiter Approval → Technical Round → HR Round → Leadership Round → Final Decision → Closure
At every stage:
Recruiter retains final authority.
Automation ensures nothing is missed.
Notifications are structured and grouped.
Status transitions are controlled and recorded.

### 🎯 Final Outcome
This automation creates a disciplined, multi-stage recruitment engine that:
- Reduces recruiter workload
- Ensures structured stage progression
- Prevents premature decisions
- Combines AI assistance with human authority
- Automates interview coordination
- Maintains full transparency in the Master Recruitment Sheet
- Eliminates manual tracking errors
It transforms recruitment from a manually coordinated process into a controlled, scalable, and fully traceable system.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
