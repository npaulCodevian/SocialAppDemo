import React, {PureComponent} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {AppButton} from '../../shared/sharedComps';
import {AppColors} from '../../utils/AppColors';
import globalStyles from '../../shared/styles';
import faker from 'faker';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {TouchableRipple} from 'react-native-paper';

class HomeScreen extends React.Component {
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icons
              style={{alignSelf: 'flex-end'}}
              name={'sdsdsd'}
              color={AppColors.whitecolor}
              size={20}
            />

            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: AppColors.secondary,
              }}>
              Feeds
            </Text>

            <TouchableRipple
              // style={{
              //   width: 40,
              //   height: 40,
              //   borderRadius: 20,
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   backgroundColor: AppColors.grey001,
              // }}
              onPress={() => this.props.navigation.navigate('ProfileScreen')}>
              <Icons
                style={{alignSelf: 'flex-end'}}
                name={'person'}
                color={AppColors.bluedark}
                size={20}
              />
            </TouchableRipple>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <View style={{height: 50}} />}
            ItemSeparatorComponent={() => <View style={{height: 30}} />}
            data={this.state.dataSource}
            renderItem={({item}) => (
              <View
                style={{
                  borderRadius: 10,
                }}>
                {/* <Text>asd</Text> */}
                {/* <Image
                  style={{height: 200, borderRadius: 10}}
                  source={{uri: faker.internet.avatar()}}
                /> */}
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 50, width: 50, borderRadius: 35}}
                    source={{uri: faker.internet.avatar()}}
                  />
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {faker.fake('{{name.lastName}}, {{name.firstName}} ')}
                    </Text>
                    <Text style={{fontSize: 10}}>
                      {' '}
                      {faker.internet.email()}
                    </Text>
                  </View>
                  {/* <Text>posted on {faker.date.past}</Text> */}
                </View>
                <View style={{height: 10}} />
                <Image
                  style={{height: 250, borderRadius: 10}}
                  source={{uri: faker.internet.avatar()}}
                />
              </View>
            )}
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
export default HomeScreen;
