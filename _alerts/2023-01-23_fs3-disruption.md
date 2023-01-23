---
status: Ongoing
type: Service alert
start_date: 2023-01-23 11:30 GMT
end_date: 
scope: /work file system (fs3), possible intermittent issues on login/compute nodes
impact: Projects with directories on the fs3 /work file system will not be allowed to run jobs (as the resources may just be wasted) and may see that some data is inaccessible. Users may seem occaissional issues on login/compute nodes as they try to access the failed OSS. You can check which file system your work directory is on by navigating to the location and using the command <tt>readlink -f .</tt>
reason: A Lustre OSS has failed in the fs3 /work file system
---
