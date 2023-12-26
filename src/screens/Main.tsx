import React, { type ReactElement } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Main = (): ReactElement => {
  return (
    <ImageBackground
      source={require("../../assets/home.jpg")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.imageFilter}>
        <View style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.container2}>
              <View>
                <Text style={styles.title}>Bienvenue dans STAR Insights</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  L’application de tous ceux qui écrivent l’histoire du Royaume
                  des Cieux
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.textButton}>Connectez-vous</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "90%",
    flexDirection: "column",
    /*     justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    height: 54,
    alignSelf: "stretch",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#2D5C54",
    borderRadius: 14, */
    flex: 1.5,
    backgroundColor: "#2D5C54",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 40,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  textButton: {
    color: "white",
    fontFamily: "Acme",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "800",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    border: "1px solid",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    display: "flex",
    marginTop: 660,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    flex: 3,
  },
  imageFilter: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    display: "flex",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  container1: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
    display: "flex",
    marginBottom: 0,
  },
  container2: {
    height: 76,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    display: "flex",
    marginBottom: 0,
  },
  descriptionContainer: {
    width: "100%",
  },
  description: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    flexWrap: "wrap",
    marginBottom: 0,
  },
});
