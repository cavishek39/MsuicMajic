import { StyleSheet, Text, Image, View, Pressable } from 'react-native'
import React from 'react'
import Layout from '../constants/Layout'

type TrackListItemProps = {
  data: {
    imageUri: string
    trackName: string
    singerName: string
  }
}

const TrackListItem = ({ data }: TrackListItemProps) => {
  // const { imageUri, singerName, trackName } = data

  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Image
        source={{
          uri:
            data?.imageUri ||
            'https://fastly.picsum.photos/id/648/200/300.jpg?hmac=yifVKULNJZhxFK2Oav2kDH8G4unUDKn-OebXR1bWOf4',
          cache: 'only-if-cached',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{data?.trackName || 'With You'}</Text>
        <Text style={styles.subtitle}>{data?.singerName || 'AP Dhillon'}</Text>
      </View>
    </Pressable>
  )
}

export default TrackListItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Layout.baseSize * 0.5,
    gap: Layout.baseSize * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '700',
  },
  image: {
    width: Layout.baseSize * 2.5,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
})
