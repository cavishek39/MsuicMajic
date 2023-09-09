import { FlatList, StyleSheet, TextInput } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import Layout from '../../constants/Layout'
import { useState } from 'react'
import TrackListItem from '../../components/TrackListItem'

export default function SearchScreen() {
  const [searchedTrack, setSearchedTrack] = useState('')

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item, index) => item + index?.toString()}
        ListHeaderComponent={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder='Search your music here'
              placeholderTextColor='#fff'
              style={styles.inputStyle}
              onChangeText={(value) => setSearchedTrack(value)}
            />
          </View>
        )}
        renderItem={({ item, index }) => (
          <>
            <TrackListItem />
          </>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.baseSize * 0.5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#0b3faf',
    borderRadius: 4,
    width: '100%',
    padding: Layout.baseSize * 0.5,
    marginTop: Layout.baseSize * 1.2,
    marginBottom: Layout.baseSize * 0.5,
  },
})
