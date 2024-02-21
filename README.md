# SN-Payroll-CC
Send additional email notification to Supervisor and Time Approver

We have a new form for Payroll new hires with addtional variable fields of for Supervisor and Time Approver. The request was to have both fields receive emails on comment or work notes. OOB this was not achievable with SN's email notification under "Who will receive".
Customization to create this experience and fulfill the request was to create:
1) An event registration "notification.add_cc"
2) A Business Rule that runs onafter on the sc_req_item table "Add Payroll CC on comment or work notes"
3) 2 notifications, "Add Payroll CC on work notes" and "Add Payroll CC on comment" that run when event "notification.add_cc" is fired. The recipient for these will only be the value pass from parm1
