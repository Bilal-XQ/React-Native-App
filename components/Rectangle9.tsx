import * as React from "react";
import {StyleSheet} from "react-native";
import Rectangle9Svg from "../assets/Rectangle 9.svg";

const Rectangle9 = () => {
  	
  	return (
    		<Rectangle9Svg style={styles.rectangle} />);
};

const styles = StyleSheet.create({
  	rectangle: {
    		width: 10,
    		height: 10,
    		backgroundColor: "#fff",
    		borderRadius: 10,
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		shadowOffset: {
      			width: 0,
      			height: 0
    		},
    		shadowRadius: 5,
    		elevation: 5,
    		shadowOpacity: 1
  	}
});

export default Rectangle9;
