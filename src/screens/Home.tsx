import React, { useContext, type ReactElement, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Modal } from 'react-native'

import { AuthContext } from '../../App'
import { NewUser } from './NewUser'

const Home = ({ navigation }): ReactElement => {
  const { user } = useContext(AuthContext)
  const [hasToCreateDepartment, setHasToCreateDepartment] = useState<boolean>(false)
  const [isLoadingDepartmentCreation, setIsLoadingDepartmentCreation] = useState<boolean>(false)
  const [isLoadingUserCreation, setIsLoadingUserCreation] = useState<boolean>(false)
  const [newUser, setNewUser] = useState<any>(null)
  const [displayNewUserForm, setDisplayNewUserForm] = useState<boolean>(false)

  const starList = [
    {
      title: 'Coordination',
      data: [
        {
          firstName: 'Drephyx',
          lastName: 'Yango'
        },
        {
          firstName: 'Marelya',
          lastName: 'Bamba'
        }
      ]
    }
  ]

  const createDepartmentInCharge = async (): Promise<void> => {
    setIsLoadingDepartmentCreation(true)
    try {
      const response = await fetch('https://us-east1-inventory-bf36e.cloudfunctions.net/api/department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.departmentInChargeName
        })
      })

      const result = await response.json()
      setIsLoadingDepartmentCreation(false)
      if (response.ok) {
        setHasToCreateDepartment(false)
        user.departmentInCharge = result
        navigation.navigate('Home')
      } else {
        alert(`Le département suivant n'a pas pu être créé: ${user.departmentInCharge}. Voici la raison: ${JSON.stringify(result)}`)
      }
    } catch (error) {
      setIsLoadingDepartmentCreation(false)
      alert(error)
    }
  }

  /* const renderStarList = (): ReactElement => {
    return (
      <>
        <TouchableOpacity>
          <Text
            style={{
              minWidth: '48%',
              alignItems: 'center',
              backgroundColor: '#bde0fe',
              padding: 10,
              textAlign: 'center'
            }}
          >
              Creer un utilisateur
          </Text>
        </TouchableOpacity>
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={starList}
            renderItem={({ item }) => (
              <View>
                <Text>{item.firstName} {item.lastName}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
        <homeNavigator.Navigator
          initialRouteName="HOME_STAR"
          tabBar={(props) => <TopTabBar {...props} />}
        >
          <homeNavigator.Screen
            name=""
            component={PriceChangeTodoScreen}
            options={{
              title: `${formatMessage({ id: 'PRICE_CHANGE_TODO' })} ${formattedTodoLength}`,
              tabBarLabel: `${formatMessage({ id: 'PRICE_CHANGE_TODO' })} (${
                todo.length + snoozed.length
              })`
            }}
          />

        </homeNavigator.Navigator>
      </>
    )
  } */

  useEffect(() => {
    if (user.departmentInChargeName && !user.departmentInCharge) {
      setHasToCreateDepartment(true)
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1
      }}>
        <Text>
            Bienvenue {user.memberInfo.firstName} {user.memberInfo.lastName}
        </Text>
      </View>
      <View style={{
        flex: 5
      }}>
        {hasToCreateDepartment
          ? <View>
            <Text> Vous avez un département dont vous avez la charge qui n'a pas encore été créé</Text>
            <TouchableOpacity
              onPress={createDepartmentInCharge}
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
                {isLoadingDepartmentCreation ? `Creation du département ${user.departmentInChargeName}...` : `Cliquez pour créer le département ${user.departmentInChargeName}`}
              </Text>
            </TouchableOpacity>
          </View>

          : <>
            <TouchableOpacity
              onPress={() => { setDisplayNewUserForm(true) }}
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
                {isLoadingUserCreation ? `Ajout de ${newUser.firstName}` : 'Cliquez pour ajouter un S.T.A.R'}
              </Text>
            </TouchableOpacity>
            <Modal visible={displayNewUserForm} transparent={true} animationType='fade'>
              <NewUser
                onCancelUserCreation={() => { setDisplayNewUserForm(false) }}
                onCreateNewUser={() => { alert('create user') }}
              />
            </Modal>
          </>
        }
      </View>
    </SafeAreaView>
  )
}

export default Home

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
  }
})
