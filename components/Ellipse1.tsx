import * as React from "react";
import {StyleSheet} from "react-native";
import Ellipse1Svg from "../assets/ellipse-1.svg";

const Ellipse1 = ({ style }: any) => {
  	
  	return (
    		<Ellipse1Svg style={[styles.ellipseIcon, style]} />);
};

const styles = StyleSheet.create({
  	ellipseIcon: {
    		width: "100%",
    		height: 200,
    		position: "absolute",
    		top: 0,
    		left: 0,
    		right: 0,
    		zIndex: -1
  	}
});

export default Ellipse1;
