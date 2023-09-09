import { StyleSheet, FlatList } from 'react-native'

import { Text, View } from '../../components/Themed'
import TrackListItem from '../../components/TrackListItem'
import Layout from '../../constants/Layout'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item, index) => item + index?.toString()}
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
})
