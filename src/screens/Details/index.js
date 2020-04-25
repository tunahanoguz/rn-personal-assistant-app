import React from 'react';
import { FlatList, Image, StatusBar } from 'react-native';
import { Block, Text } from '../../components';
import { colors } from '../../styles';
import AttendeeCard from '../../components/AttendeeCard';
import DashedButton from '../../components/DashedButton';
import styles from './styles';

function Details() {
  const attendees = [
    {
      id: 1,
      avatarSource: require('../../assets/images/avatar5.png'),
      fullName: 'Sarah Lee',
      title: 'Senior Product Designer',
      duty: 'ORGANIZER',
    },
    {
      id: 2,
      avatarSource: require('../../assets/images/avatar6.png'),
      fullName: 'Anna Waltz',
      title: 'Design Director',
      duty: 'OWNER',
    },
    {
      id: 3,
      avatarSource: require('../../assets/images/avatar7.png'),
      fullName: 'John Muttaqin',
      title: 'Product Designer',
    },
    // {
    //   id: 4,
    //   avatarSource: require('../../assets/images/avatar8.png'),
    //   fullName: 'Lisa Zasheva',
    //   title: 'UI Developer',
    // },
  ];

  return (
    <Block flex={1} color={colors.darkPurple}>
      <StatusBar backgroundColor={colors.darkPurple} barStyle="light-content" />
      <Block
        flex={1}
        margin={[22, 0, 0, 0]}
        color={colors.mediumPurple}
        radius={36}>
        <Block
          flex={1}
          margin={[30, 0, 0, 0]}
          color="white"
          radius={[36, 36, 0, 0]}>
          <Block
            width={45}
            height={6}
            margin={[10, 0, 14, 0]}
            color={colors.lightGrey}
            radius={100}
            align="center"
          />

          <Block flexDirection="row" margin={[16, 0, 0]} padding={[0, 24]}>
            <Image
              source={require('../../assets/icons/left-icon.png')}
              style={styles.leftIcon}
            />

            <Text mediumWeight>Agenda: Weekly Product Meeting</Text>
          </Block>

          <Block margin={[20, 0]} padding={[24]} style={styles.titleTabArea}>
            <Text boldWeight lowerLarge>
              Details
            </Text>

            <Block flexDirection="row" margin={[20, 0, 0, 0]}>
              <Text mediumWeight small uppercase>
                PEOPLE
              </Text>
              <Text
                uppercase
                small
                color={colors.darkGrey}
                style={styles.tabItem}>
                TOPICS
              </Text>
              <Text
                uppercase
                small
                color={colors.darkGrey}
                style={styles.tabItem}>
                NOTIFICATIONS
              </Text>
              <Text
                uppercase
                small
                color={colors.darkGrey}
                style={styles.tabItem}>
                ASSETS
              </Text>
            </Block>
          </Block>

          <Block padding={[0, 24]}>
            <Block
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Text mediumWeight lowerLarge>
                5 attendees
              </Text>

              <DashedButton
                icon={require('../../assets/icons/plus-icon.png')}
              />
            </Block>

            <Block>
              <FlatList
                data={attendees}
                renderItem={({ item }) => {
                  const { id, avatarSource, fullName, title, duty } = item;

                  return (
                    <AttendeeCard
                      key={id}
                      avatarSource={avatarSource}
                      fullName={fullName}
                      title={title}
                      duty={duty}
                    />
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default Details;
