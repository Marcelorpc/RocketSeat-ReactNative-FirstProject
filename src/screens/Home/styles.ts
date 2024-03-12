import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 48
  },
  eventDate: {
    color: '#ffff99',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 22
  },
  input: {
    flex: 1,
    marginRight: 12,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    fontSize: 16,
    padding: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf65',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 36
  },
  emptyList: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});