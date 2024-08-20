import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

const AccountScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      {/* <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('DetailsScreen')}
      /> */}
    </View>
  )
}

export default AccountScreen