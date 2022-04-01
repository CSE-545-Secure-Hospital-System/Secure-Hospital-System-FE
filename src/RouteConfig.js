import Dashboard from "./components/General/MainDashboard/Dashboard";
import Login from "./components/General/LoginComponent/Login";
import CreateUser from "./components/General/CreateUserComponent/CreateUser";
import Account from "./components/General/Account/Account";
import EditAccount from "./components/General/Account/EditAccount";
import Diagnosis from "./components/Patient/Diagnosis/Diagnosis";
import Users from "./components/Admin/Users/Users";

import ViewClaims from "./components/InsuranceStaff/ViewClaims/ViewClaims";
import Coverages from "./components/InsuranceStaff/Coverages/Coverages";
import CreatePolicy from "./components/InsuranceStaff/Policies/CreatePolicy/createPolicy";
import Policies from "./components/InsuranceStaff/Policies/viewPolicies/Policies";
import CreateClaim from "./components/General/CreateClaim/CreateClaim";
import Appointments from "./components/General/Appointments/Appointments";
import LabTestReports from "./components/LabStaff/LabTestReports/LabTestReports";
import UpdateLabTestReport from "./components/LabStaff/LabTestReports/UpdateLabTestReport";
import LabTests from "./components/LabStaff/LabTests/ViewLabTests";
import Transactions from "./components/General/Transactions/Transactions";
import AdminEditUser from "./components/Admin/EditUsers/EditUser";
import HospitalStaffEditUser from "./components/HospitalStaff/EditUsers/EditUser";
import PatientRecord from "./components/Patient/User/PatientRecord";
import AppointmentConfirmation from "./components/HospitalStaff/AppointmentConfirmation/AppointmentConfirmation";
import CreateDaignosis from "./components/Doctor/CreateDiagnosis/CreateDiagnosis";
import TakePolicy from "./components/Patient/TakePolicy/TakePolicy";
import EditUser from "./components/Admin/EditUsers/EditUser";

export const routes = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/profile",
    component: <Account />,
  },
  {
    path: "/editAccount",
    component: <EditAccount />,
  },
  {
    path: "/diagnosis",
    component: <Diagnosis />,
  },
  {
    path: "/users",
    component: <Users />,
  },
  {
    path: "/editUser",
    component: <EditUser />,
  },
  {
    path: "/viewClaims",
    component: <ViewClaims />,
  },
  {
    path: "/viewPolicies",
    component: <Policies />,
  },
  {
    path: "/createPolicy",
    component: <CreatePolicy />,
  },
  {
    path: "/coverages",
    component: <Coverages />,
  },
  {
    path: "/raiseClaim",
    component: <CreateClaim />,
  },
  {
    path: "/appointments",
    component: <Appointments />,
  },
  {
    path: "/labTestReports",
    component: <LabTestReports />,
  },
  {
    path: "/updateLabTestReport",
    component: <UpdateLabTestReport />,
  },
  {
    path: "/labTests",
    component: <LabTests />,
  },
  {
    path: "/transactions",
    component: <Transactions />,
  },
  {
    path: "/editUser",
    component: <AdminEditUser />,
  },
  {
    path: "/editUserHS",
    component: <HospitalStaffEditUser />,
  },
  {
    path: "/userData",
    component: <PatientRecord />,
  },
  {
    path: "/appointmentConfirmation",
    component: <AppointmentConfirmation />,
  },
  {
    path: "/createDiagnosis",
    component: <CreateDaignosis />,
  },
  {
    path: "/takePolicy",
    component: <TakePolicy />,
  },
];
