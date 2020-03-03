import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../config/styles";

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.p, styles.paragraph]}>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		// isi css in js
		flexDirection: "row",
		display: "flex"
	},
	paragraph: {
		fontSize: 14,
		lineHeight: 1.4,
		marginBottom: 1
	}
]);

export default DetailScreen;