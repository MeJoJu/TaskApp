// App.js
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home';
import SettingsScreen from './Screens/Settings';
import ToDo from './Screens/ToDo';
import ShowStaffList from './components/ShowStaffList';
import AddStaff from './components/AddStaff';
import StaffDetail from './components/StaffDetail';
import SearchStaff from './components/SearchStaff';
import UpdateStaff from './components/UpdateStaff';

import Styles from './Styles';

const Drawer = createDrawerNavigator();

export default function App() {
  const [staffList, setStaffList] = useState([
  { id: 1, name: 'John Smith', phone: '02 9988 2211', department: 1, address: '1 Code Lane, Javaville, NSW 0100, Australia' },
  { id: 2, name: 'Sue White', phone: '03 8899 2255', department: 2, address: '16 Bit Way, Byte Cove, QLD 1101, Australia' },
  { id: 3, name: 'Bob O’Bits', phone: '05 7788 2255', department: 3, address: '8 Silicon Road, Cloud Hills, VIC 1001, Australia' },
  { id: 4, name: 'Mary Blue', phone: '06 4455 9988', department: 2, address: '4 Processor Boulevard, Appletson, NT 1010, Australia' },
  { id: 5, name: 'Mick Green', phone: '02 9988 1122', department: 3, address: '700 Bandwidth Street, Bufferland, NSW 0110, Australia' },
]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation screenOptions={Styles.navigatorHeading}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="ToDo" component={ToDo} />
        <Drawer.Screen name="ShowStaffList" component={ShowStaffList} initialParams={{ staffList, setStaffList }} />
        <Drawer.Screen name="StaffDetail" component={StaffDetail} />
        <Drawer.Screen name="AddStaff" component={AddStaff} initialParams={{ staffList, setStaffList }} />
        <Drawer.Screen name="SearchStaff" component={SearchStaff} initialParams={{ staffList, setStaffList }} />
        <Drawer.Screen name="UpdateStaff" component={UpdateStaff} initialParams={{ staffList, setStaffList }} />

        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
