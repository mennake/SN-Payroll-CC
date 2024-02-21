(function executeRule(current, previous /*null when async*/) {

var notifySupervisor = current.variables.supervisor_s_name;
var notifyTimeApprover = current.variables.time_approver_s_name;
//answer = notifySupervisor;

// Get the user record for the supervisor
var supervisorUser = new GlideRecord('sys_user');
if (supervisorUser.get(notifySupervisor)) {
	gs.eventQueue("notification.add_cc",current,supervisorUser.email);	
} else {
  gs.log('User record not found for supervisor: ' + notifySupervisor);
}
// Get the user record for the time approver
var timeApproverUser = new GlideRecord('sys_user');
if (timeApproverUser.get(notifyTimeApprover)) {
	gs.eventQueue("notification.add_cc", current, timeApproverUser.email);
} else {
	gs.log('User record not found for time approver: ' + notifyTimeApprover);
}
	
	
})(current, previous);
