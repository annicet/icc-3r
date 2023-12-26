import React, { type ReactElement } from 'react'
import { TextInput, SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

interface INewUserProps {
  onCancelUserCreation: () => void
  onCreateNewUser: () => void
}

export const NewUser = ({ onCancelUserCreation, onCreateNewUser }: INewUserProps): ReactElement => {
  return (
    <SafeAreaView style={styles.modalView}>
      <TextInput
        style={{
          borderWidth: 2,
          padding: 6,
          height: 40,
          fontSize: 20,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: '#eff2f5',
          shadowColor: '#56B4EF',
          flex: 1
          /* for ios */
        /*                 shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 4,
        shadowRadius: 1, */
        /* for android */
        // elevation: 3
        }}
        numberOfLines={1}
        placeholder="Prénom"
        maxLength={20}
        cursorColor={'black'}
        inputMode='text'
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 6,
          height: 40,
          fontSize: 20,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: '#eff2f5',
          shadowColor: '#56B4EF',
          flex: 1
          /* for ios */
        /*                 shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 4,
        shadowRadius: 1, */
        /* for android */
        // elevation: 3
        }}
        numberOfLines={1}
        placeholder="Nom"
        maxLength={20}
        cursorColor={'black'}
        inputMode='text'
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 6,
          height: 40,
          fontSize: 20,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: '#eff2f5',
          shadowColor: '#56B4EF',
          flex: 1
          /* for ios */
        /*                 shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 4,
        shadowRadius: 1, */
        /* for android */
        // elevation: 3
        }}
        numberOfLines={1}
        placeholder="Email"
        maxLength={20}
        cursorColor={'black'}
        inputMode='email'
      />
      <TextInput
        style={{
          borderWidth: 2,
          padding: 6,
          height: 40,
          fontSize: 20,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: '#eff2f5',
          shadowColor: '#56B4EF',
          flex: 1
          /* for ios */
        /*                 shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 4,
        shadowRadius: 1, */
        /* for android */
        // elevation: 3
        }}
        numberOfLines={1}
        placeholder="telephone"
        maxLength={20}
        cursorColor={'black'}
        inputMode='text'
      />
      <View
        style={{
          flex: 1
        }}
      >
        <TouchableOpacity
          onPress={onCancelUserCreation}
        >
          <Text
            style={{
              minWidth: '48%',
              alignItems: 'center',
              backgroundColor: '#bde0fe',
              padding: 10,
              textAlign: 'center'
            }}
          >
            {'Annuler'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCreateNewUser}
        >
          <Text
            style={{
              minWidth: '48%',
              alignItems: 'center',
              backgroundColor: '#bde0fe',
              padding: 10,
              textAlign: 'center'
            }}
          >
            {'Ajouter'}
          </Text>
        </TouchableOpacity>

      </View>
      <View
        style={{
          flex: 3
        }}
      >

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff2f5',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})
