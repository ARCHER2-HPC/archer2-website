---
status: Ongoing
type: Service Alert
start_date: 2023-06-15 15:00
end_date: 2023-07-15 22:00
scope: ARCHER2 compute nodes
impact: Jobs may fail intermittently with memory issues (e.g. OOM, hanging with no output, segfault)
reason: A kernel memory leak has been affecting compute nodes with reduced memory being available on nodes over time. HPE have issued a patched kernel for the issue which has been tested by the CSE team and has demonstrated clear improvements in the memory usage. The patch is currently being applied to all compute nodes and we expect that the whole of ARCHER2 will have been updated by the end of Saturday.
---
