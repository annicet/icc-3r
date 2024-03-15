import { type MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { defaultTheme } from "../../helper/theme";

interface Props extends MaterialTopTabBarProps {}

export const TopTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}: Props) => {
  const theme = defaultTheme;
  const widthRatio = 1 / state.routes.length;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: theme.spacing.unit(3),
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.primary,
          borderWidth: theme.spacing.unit(0.1),
          margin: theme.spacing.unit(),
          borderRadius: theme.spacing.unit(0.5),
          elevation: 2,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`${options.title}-${index}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: widthRatio,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isFocused
                  ? theme.colors.primary
                  : "rgba(255,255,255,0.5)",
              }}
            >
              <Text
                style={{
                  fontSize: theme.size.normal,
                  color: isFocused
                    ? theme.colors.invertedTextColor
                    : theme.colors.text,
                }}
              >
                {t(label.toString())}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
