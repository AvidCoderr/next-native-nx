import { StyleSheet, View, Button } from 'react-native';
import { Text } from '@webnative/wrapcity';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Profile Page
      </Text>
      <Text style={styles.link} accessibilityRole="link" href={`/`}>
        <Button title="Home Page" />
      </Text>{' '}
    </View>
  );
}
