# 🎬 Ads Factory: Generate Unlimited Length UGC AI Video Pipeline

> ⚡ **1,897 views** · 🎬 [Content Creation & Video](../)

## Description

# UGC Ads Factory — Automated AI Video Pipeline                                                                                                                                                                                             
                                                                                                                                                                                                                                              
  This n8n workflow turns a script and character/setting description from Google Sheets into a complete stitched UGC-style video ad, fully automated from intake to final delivery.                                                           
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                            
  ## Overview                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                            
  The workflow runs a full production pipeline in four stages:                                                                                                                                                                                
                                                                                                                                                                                                                                            
  1. **Image Generation**                                                                                                                                                                                                                     
     An AI agent creates a photorealistic selfie prompt from the character/setting description.                                                                                                                                             
     The image is generated with Kie (Nano Banana), then uploaded to Google Drive and shared.                                                                                                                                                 
                                                                                                                                                                                                                                              
  2. **Scene Scripting**                                                                                                                                                                                                                      
     The generated image is analyzed by Claude-4o-mini for visual consistency.                                                                                                                                                                
     Claude Opus then converts the user script into structured 8-second scenes with consistent visuals and environment-aware motion prompts.                                                                                                  
                                                                                                                                                                                                                                              
  3. **Video Clip Generation**                                                                                                                                                                                                                
     Each scene is sent to Kie VEO3 for video generation.                                                                                                                                                                                     
     The workflow polls until each clip is complete, then uploads clips to Google Drive and updates status per scene.                                                                                                                         
                                                                                                                                                                                                                                              
  4. **Video Stitching**                                                                                                                                                                                                                      
     After all scene clips are completed, clips are sorted and merged into one final video using fal.ai FFmpeg.                                                                                                                               
     The stitched output is uploaded to Drive, and the final links are written back to Sheets.                                                                                                                                                
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                              
  ## Google Sheets Structure                                                                                                                                                                                                                  
                                                                                                                                                                                                                                            
  This workflow uses two tabs in one spreadsheet:                                                                                                                                                                                             
                                                                                                                                                                                                                                            
  - **Videos** (campaign-level tracking)                                                                                                                                                                                                      
    Main input/output tab with script, character description, aspect ratio, and global run status (`Create` → `Processing` → `Completed` / `Failed`), plus final video links.                                                               
                                                                                                                                                                                                                                              
  - **Video Data** (scene-level tracking)                                                                                                                                                                                                     
    One row per scene with scene script JSON, scene number, image URL, clip links, and per-scene status.                                                                                                                                      
    This tab enables robust scene retries and progress visibility.                                                                                                                                                                            
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                              
  ## Triggers                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                            
  - **Every 30 minutes**: processes new rows in **Videos** where `LAUNCH CREATION = Create`                                                                                                                                                   
  - **Every 15 minutes**: reprocesses rows in **Video Data** where `LAUNCH = Redo`                                                                                                                                                          
  - **Execute Workflow Trigger**: allows orchestration from another workflow                                                                                                                                                                  
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                              
  ## Error Handling                                                                                                                                                                                                                           
                                                                                                                                                                                                                                            
  - API nodes retry on failure with a 5-second delay                                                                                                                                                                                          
  - Failed image or clip generations are written to Sheets with error details                                                                                                                                                               
  - Individual failed scenes can be retried by setting `LAUNCH = Redo` in **Video Data**                                                                                                                                                      
  - Final stitching runs only after verifying all required scenes are completed                                                                                                                                                               
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                              
  ## External Services                                                                                                                                                                                                                        
                                                                                                                                                                                                                                            
  - **Kie API** — image generation (Nano Banana) and video generation (VEO3)                                                                                                                                                                  
  - **OpenRouter (Claude Opus)** — prompt engineering and scene script generation                                                                                                                                                           
  - **OpenAI (Claude-4o-mini)** — image analysis for visual continuity                                                                                                                                                                        
  - **fal.ai** — FFmpeg-based clip stitching                                                                                                                                                                                                  
  - **Google Drive** — asset storage and share links                                                                                                                                                                                          
  - **Google Sheets** — input/output control plane and status tracking                                                                                                                                                                        
                                                                                                                                                                                                                                              
  ---                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                              
  ## Usage                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                            
  1. Add a row in **Videos** with script, character/setting description, and aspect ratio.                                                                                                                                                    
  2. Set **LAUNCH CREATION** to `Create`.                                                                                                                                                                                                   
  3. Wait for the scheduled run (or trigger from another workflow).                                                                                                                                                                           
  4. Track scene progress in **Video Data**.                                                                                                                                                                                                  
  5. Retrieve final video links in **Videos** once status is `Completed`.                                                                                                                                                                     
                                                                                                                                                                                                                                              
  To retry failed scenes, set scene status to `Redo` in **Video Data**.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Stop and Error, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
