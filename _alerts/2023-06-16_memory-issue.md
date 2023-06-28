---
status: Ongoing
type: Service Alert
start_date: 2023-06-15 15:00
end_date: 
scope: ARCHER2 compute nodes
impact: Jobs may fail intermittently with memory issues (e.g. OOM, hanging with no output, segfault)
reason: There is a kernel memory leak affecting all compute nodes with reduced emmory being available on nodes over time. Nodes that have reduced free memory are being rebooted. HPE are analysing the issue and the problem is still under investigation.
---
