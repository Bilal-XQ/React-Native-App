import * as React from "react";
import {StyleSheet} from "react-native";
import FloorSvg from "../assets/Floor.svg";

const Floor = () => {
  	
  	return (
    		<FloorSvg style={styles.floorIcon} />);
};

const styles = StyleSheet.create({
  	floorIcon: {
    		width: 40,
    		height: 40,
    		maxWidth: "100%",
    		overflow: "hidden"
  	}
});

export default Floor;
