import React, {PureComponent} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {AppButton} from '../../shared/sharedComps';
import {AppColors} from '../../utils/AppColors';
import globalStyles from '../../shared/styles';
import faker from 'faker';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    // console.log(
    //   // faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
    //   faker.image.imageUrl(),
    // );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: AppColors.primary}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <View style={{flex: 0.3}}>
              <Image
                style={{height: 80, width: 80, borderRadius: 40}}
                source={require('../../../assets/Images/ProfileSample.jpg')}
              />
            </View>

            <View style={{flex: 0.7}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {faker.fake('{{name.lastName}}, {{name.firstName}} ')}
              </Text>
              <Text> {faker.internet.email()}</Text>

              <View style={{height: 20}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <Text>Photos</Text>
                  <Text style={styles.textStyle1}>230</Text>
                </View>
                <View>
                  <Text>Following</Text>
                  <Text style={styles.textStyle1}>12.5 K</Text>
                </View>
                <View>
                  <Text>Followers</Text>
                  <Text style={styles.textStyle1}>30.7 K</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{height: 100}} />
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  borderRadius: 10,
                  flexDirection: 'column',
                  margin: 5,
                  backgroundColor: AppColors.grey001,
                }}>
                {/* <Text>asd</Text> */}
                <Image
                  style={{height: 200, borderRadius: 10}}
                  source={{uri: faker.internet.avatar()}}
                />
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle1: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default ProfileScreen;
