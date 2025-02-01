import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <MaterialCommunityIcons
        name="home-variant"
        color={greyColor}
        {...props}
        size={20}
      />
    ),
    orders: (props) => (
      <MaterialCommunityIcons
        name="receipt"
        color={greyColor}
        {...props}
        size={20}
      />
    ),
    products: (props) => (
      <MaterialCommunityIcons
        name="food-variant"
        color={greyColor}
        {...props}
        size={20}
      />
    ),
    settings: (props) => (
      <MaterialCommunityIcons
        name="cog"
        color={greyColor}
        {...props}
        size={20}
      />
    ),
  };

  const primaryColor = "#ff3347";
  const greyColor = "#b5b5b5";

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found", "newproduct"].includes(route.name))
          return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
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
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icons[route.name]({
              color: isFocused ? primaryColor : greyColor,
            })}
            <Text
              style={{
                color: isFocused ? primaryColor : greyColor,
                fontWeight: isFocused ? "bold" : "regular",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // mid-transparent background
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBar;
