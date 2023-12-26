import React, { useState, type ReactElement, useContext } from 'react'
import { Text, Image, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { AuthContext } from '../../App'

const IsEmailValidated = (email: string): boolean => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
  return reg.test(email)
}

const Login: React.FC = ({ navigation }): ReactElement => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [showEmailValidationError, setShowEmailValidationError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setUser } = useContext(AuthContext)
  const login = async (): Promise<void> => {
    // http://localhost:3000/members
    setIsLoading(true)
    try {
      const response = await fetch('https://us-east1-inventory-bf36e.cloudfunctions.net/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const result = await response.json()
      setIsLoading(false)
      if (response.ok) {
        setEmail(undefined)
        setPassword(undefined)
        setUser(result)
        navigation.navigate('Home')
      } else {
        alert('combinaison email/mot de passe incorecte')
      }
    } catch (error) {
      setIsLoading(false)
      alert(error)
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          marginTop: 40
        }}
      >

        <View
          style={{
            flex: 1
          }}
        >
          <Image style={{
            resizeMode: 'contain',
            marginTop: 'auto',
            flex: 1
          }} source={require('../../assets/logo-icc.png')} />
        </View>
        <View
          style={{
            flex: 6,
            alignSelf: 'center',
            backgroundColor: 'white',
            maxWidth: '80%',
            shadowColor: '#000000',
            elevation: 20,
            marginBottom: 40,
            minWidth: '80%'
          }}
        >
          <View
            style={{
              flex: 5,
              alignSelf: 'center'
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  margin: 3
                }}>
              Connectez-vous
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                margin: 10
              }}
            >
              {/*                 background-color: #FFFFEC;
    border: 1px solid #ECECFF;
    border-radius: 5px 5px 5px 5px;
    box-shadow: -1px 0 8px -5px #000000;
    font-size: 14px; */}
              <TextInput
                style={{
                  borderWidth: 2,
                  padding: 6,
                  height: 40,
                  fontSize: 20,
                  borderRadius: 10,
                  borderStyle: 'solid',
                  borderColor: '#eff2f5',
                  shadowColor: '#56B4EF'
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
                keyboardType='email-address'
                value={email}
                onChangeText={(e) => {
                  setShowEmailValidationError(!IsEmailValidated(e))
                  setEmail(e)
                }}
              />
              {showEmailValidationError &&
              <Text
                style={{
                  marginLeft: 10,
                  color: 'red'
                }}
              >
                L'email est incorecte
              </Text>
              }
            </View>
            <View
              style= {{
                flex: 1,
                marginTop: 10
              }}
            >
              <TextInput
                style={{
                  borderWidth: 2,
                  padding: 6,
                  height: 40,
                  fontSize: 20,
                  margin: 10,
                  borderRadius: 10,
                  borderStyle: 'solid',
                  borderColor: '#eff2f5',
                  shadowColor: '#56B4EF'
                  /* for ios */
                /*                 shadowOffset: { width: 4, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 1, */
                /* for android */
                // elevation: 3
                }}
                numberOfLines={1}
                placeholder="Mot de passe"
                maxLength={20}
                cursorColor={'black'}
                secureTextEntry
                value={password}
                onChangeText={(e) => {
                  setPassword(e)
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                display: 'flex',
                alignSelf: 'center',
                margin: 30
              }}
            >
              <TouchableOpacity
                onPress={login}
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
                  {isLoading ? 'Connexion...' : 'Se connecter'}
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      minWidth: '48%',
                      alignItems: 'center',
                      padding: 10,
                      textAlign: 'center',
                      marginTop: 5
                    }}
                  >
                    Mot de passe oublié?
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View
              style={{
                flex: 3
              }}
            >

            </View>

          </View>

        </View>

      </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff2f5',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
