---
status: Resolved
type: Service change
start_date: 2022-12-12 09:45 GMT
end_date: N/A
scope: Compute nodes
impact: Users may see changes in application performance
reason: The default CPU frequency for parallel jobs started using `srun` has been changed to 2.0 GHz to improve the energy efficiency of ARCHER2. We recommend that users test the energy efficiency of their applications and set the CPU frequency appropriately.
---
