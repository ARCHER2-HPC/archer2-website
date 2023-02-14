---
status: Ongoing
type: Service alert
start_date: 2023-02-14 10:15 GMT
end_date: 2023-02-14 13:30 GMT
scope: /work file system (fs2), possible intermittent issues on login/compute nodes
impact: Projects with directories on the fs2 /work file system will not be allowed to run jobs (as the resources may just be wasted) and may see that some data is inaccessible. Users may see occassional issues on login/compute nodes as they try to access the filesystem. You can check which file system your work directory is on by navigating to the location and using the command <tt>readlink -f .</tt> 
reason: Heavy i/o caused by a user's jobs. CSE team will work with the user. 
---
