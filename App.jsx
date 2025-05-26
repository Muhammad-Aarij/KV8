import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash3 from "./src/screens/splash3/index";
import Splash4 from "./src/screens/splash4";
import RoleSelectionScreen from "./src/screens/roleSelectionScreen/RoleSelectionScreen";
import OtpVerification from "./src/screens/Otp Verification/index";
import SignIn from "./src/screens/SignIn/index";
import NotificationScreen from "./src/screens/NotificationScreen/index";
import NotificationAlertScreen from "./src/screens/NotificationAlertScreen";
import NewPassword from "./src/screens/New Password/index";
import ForgetPassword from "./src/screens/Forget Password/index";
import FAQScreen from "./src/screens/FAQScreen/index";
import ExamSchedule from "./src/screens/Exam Schedule/index";
import ChatScreen from "./src/screens/ChatScreen/index";
import GradeGroup from './src/screens/Grade/index';
import EditProfileScreen from "./src/screens/EditProfile/Index";
import BottomTabs from "./src/navigation/BottomTab";
import StudentProfile from "./src/screens/Profile/StudentProfile";
import InstituteProfile from "./src/screens/Profile/InstituteProfile";
import AddAssignment from "./src/screens/Add New/AddAssignment";
import AddNotice from "./src/screens/Add New/AddNotice";
import AddStudent from "./src/screens/Add New/AddStudent";
import AddTeacher from "./src/screens/Add New/AddTeacher";
import AddEvent from "./src/screens/Add New/AddEvent";
import AddNews from "./src/screens/Add New/AddNews";
import TotalTeacherList from "./src/screens/Total List/TotalTeacherList";
import PaymentDetailsScreen from "./src/screens/My Invoices/PaymentDetailsScreen";
import MyInvoicesScreen from "./src/screens/My Invoices/MyInvoicesScreen";
import AddCardScreen from "./src/screens/My Invoices/AddCardScreen";

const NativeStack = createNativeStackNavigator();



{/* <NativeStack.Screen name="Main" component={BottomTabs} /> */ }
export default function App() {
  return (
    <NavigationContainer  >
      <NativeStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <NativeStack.Screen name="Splash3" component={Splash3} />
        <NativeStack.Screen name="ChatScreen" component={ChatScreen} />
        <NativeStack.Screen name="Splash4" component={Splash4} />
        <NativeStack.Screen name="Role Selection" component={RoleSelectionScreen} />
        <NativeStack.Screen name="Otp Verification" component={OtpVerification} />
        <NativeStack.Screen name="Sign In" component={SignIn} />
        <NativeStack.Screen name="Notification" component={NotificationScreen} />
        <NativeStack.Screen name="NotificationAlert" component={NotificationAlertScreen} />
        <NativeStack.Screen name="New Password" component={NewPassword} />
        <NativeStack.Screen name="Forget Password" component={ForgetPassword} />
        <NativeStack.Screen name="FAQ" component={FAQScreen} />
        <NativeStack.Screen name="ExamSchedule" component={ExamSchedule} />
        <NativeStack.Screen name="GradeGroup" component={GradeGroup} />
        <NativeStack.Screen name="EditProfile" component={EditProfileScreen} />
        <NativeStack.Screen name="StudentProfile" component={StudentProfile} />
        <NativeStack.Screen name="InstituteProfile" component={InstituteProfile} />
        <NativeStack.Screen name="AddAssignment" component={AddAssignment} />
        <NativeStack.Screen name="AddNotice" component={AddNotice} />
        <NativeStack.Screen name="AddStudent" component={AddStudent} />
        <NativeStack.Screen name="AddTeacher" component={AddTeacher} />
        <NativeStack.Screen name="AddEvent" component={AddEvent} />
        <NativeStack.Screen name="AddNews" component={AddNews} />
        <NativeStack.Screen name="PaymentDetail" component={PaymentDetailsScreen} />
        <NativeStack.Screen name="MyInvoices" component={MyInvoicesScreen} />
        <NativeStack.Screen name="AddCard" component={AddCardScreen} />
        <NativeStack.Screen name="TeacherList" component={TotalTeacherList} />
        <NativeStack.Screen name="Main" component={BottomTabs} />
      </NativeStack.Navigator>
    </NavigationContainer>

  );
}