# ⚒️ Exponential backoff for Google APIs

> ⚡ **1,815 views** · ⚒️ [Engineering](../)

## Description

# n8n Workflow: Exponential Backoff for Google APIs

## Overview
This n8n workflow implements an **Exponential Backoff** mechanism to handle retries when interacting with Google APIs. It ensures that failed API requests are retried with increasing delays, up to a specified maximum retry count. This approach helps mitigate transient errors (e.g., rate limits or temporary network issues) while maintaining workflow efficiency.

### Key Features:
- **Exponential Backoff Logic**: Dynamically increases wait time between retries based on the retry count.
- **Error Handling**: Stops the workflow and raises an error after a specified number of retries.
- **Dynamic Waiting**: Waits for a calculated duration before each retry.
- **Scalable Design**: Modular nodes for easy debugging and customization.

---

## Workflow Details

### Nodes in the Workflow:

1. **Trigger** (`When clicking "Test Workflow"`):
   - Manually starts the workflow for testing.

2. **Loop Over Items**:
   - Iterates over multiple input items to process Google API requests row by row.

3. **Google API Node (Example: Update Sheet)**:
   - Sends a request to a Google API endpoint (e.g., updating a row in Google Sheets).
   - On success: Moves to the next item in the loop.
   - On error: Passes the error to the **Exponential Backoff** node.

4. **Exponential Backoff**:
   - Calculates the delay for the next retry based on the retry count.
   - Logic:
     ```javascript
     const retryCount = $json["retryCount"] || 0;
     const maxRetries = 5;
     const initialDelay = 1; // in seconds

     if (retryCount &lt; maxRetries) {
         const currentDelayInSeconds = initialDelay * Math.pow(2, retryCount);
         return {
             json: {
                 retryCount: retryCount + 1,
                 waitTimeInSeconds: currentDelayInSeconds,
                 status: 'retrying',
             }
         };
     } else {
         return {
             json: {
                 error: 'Max retries exceeded',
                 retryCount: retryCount,
                 status: 'failed'
             }
         };
     }
     ```

5. **Wait**:
   - Dynamically waits for the `waitTimeInSeconds` value calculated in the Exponential Backoff node.
   - **Configuration:**
     - Resume: `After Time Interval`
     - Wait Amount: `{{ $json["waitTimeInSeconds"] }}`
     - Unit: `Seconds`

6. **Check Max Retries**:
   - Evaluates whether the retry count has exceeded the maximum limit.
   - Routes the workflow:
     - **True**: Passes to the **Stop and Error** node.
     - **False**: Loops back to the Google API node for retry.

7. **Stop and Error**:
   - Stops the workflow and logs the error when the maximum retry count is reached.

---

## Parameters
### Configurable Settings:
1. **Max Retries**:
   - Defined in the Exponential Backoff node (`const maxRetries = 5`).
   - Adjust this value based on your requirements.

2. **Initial Delay**:
   - The starting wait time for retries, defined as `1` second.

3. **Google API Configuration**:
   - Ensure your Google API node is properly authenticated and configured with the desired endpoint and parameters.

---

## How to Use
1. **Import the Workflow**:
   - Copy the workflow JSON and import it into your n8n instance.

2. **Configure Google API Node**:
   - Set up the Google API node with your credentials and target API endpoint (e.g., Google Sheets, Gmail, etc.).

3. **Test the Workflow**:
   - Manually trigger the workflow and observe the retry behavior in case of errors.

4. **Monitor Logs**:
   - Use the console logs in the Exponential Backoff node to debug retry timings and status.

---

## Example Scenarios
### Scenario 1: Successful Execution
- The Google API processes all requests without errors.
- Workflow completes without triggering the retry logic.

### Scenario 2: Transient API Errors
- The Google API returns an error (e.g., `429 Too Many Requests`).
- The workflow retries the request with increasing wait times.

### Scenario 3: Maximum Retries Exceeded
- The workflow reaches the maximum retry count (e.g., 5 retries).
- An error is raised, and the workflow stops.

---

## Considerations
1. **Jitter**:
   - This workflow does not implement jitter (randomized delay) since it's not required for low-volume use cases.
   - If needed, jitter can be added to the exponential backoff calculation.

2. **Retry Storms**:
   - If multiple workflows run simultaneously, ensure your API quotas can handle potential retries.

3. **Error Handling Beyond Max Retries**:
   - Customize the **Stop and Error** node to notify stakeholders or log errors in a centralized system.

---

## Customization Options
- Adjust the maximum retry limit and delay calculation to suit your use case.
- Add additional logic to handle specific error codes differently.
- Extend the workflow to notify stakeholders when an error occurs (e.g., via Slack or email).

---

## Troubleshooting
- **Retry Not Triggering**:
  - Ensure the `retryCount` variable is passed correctly between nodes.
  - Confirm that the error output from the Google API node flows to the Exponential Backoff node.

- **Incorrect Wait Time**:
  - Verify the `Wait` node is referencing the correct field for `waitTimeInSeconds`.

---

## Request for Feedback
We are always looking to improve this workflow. If you have suggestions, improvements, or ideas for additional features, please feel free to share them. Your feedback helps us refine and enhance this solution!

## 🔗 Nodes Used

Google Sheets, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
