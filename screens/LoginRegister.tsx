import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import Rectangle9 from "../components/Rectangle9";
import Floor from "../components/Floor";

// Shopping cart icon component
const ShoppingCartIcon = () => (
  <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C10.1 19.5 11 20.4 11 21.5S10.1 23.5 9 23.5 7 22.6 7 21.5 7.9 19.5 9 19.5ZM20 19.5C21.1 19.5 22 20.4 22 21.5S21.1 23.5 20 23.5 18 22.6 18 21.5 18.9 19.5 20 19.5Z"
      stroke="#FFC244"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Phone icon component - exact design provided
const PhoneIcon = () => (
  <Svg width="16" height="24" viewBox="0 0 16 24" fill="none">
    <Path d="M12.2981 1.97102C12.6781 1.97102 13.0425 2.12196 13.3112 2.39065C13.5799 2.65933 13.7308 3.02375 13.7308 3.40373V20.5963C13.7308 20.9762 13.5799 21.3407 13.3112 21.6093C13.0425 21.878 12.6781 22.029 12.2981 22.029H3.70185C3.32187 22.029 2.95746 21.878 2.68877 21.6093C2.42008 21.3407 2.26914 20.9762 2.26914 20.5963V3.40373C2.26914 3.02375 2.42008 2.65933 2.68877 2.39065C2.95746 2.12196 3.32187 1.97102 3.70185 1.97102H12.2981ZM3.70185 0.538303C2.94189 0.538303 2.21306 0.840195 1.67569 1.37757C1.13832 1.91494 0.836426 2.64377 0.836426 3.40373V20.5963C0.836426 21.3562 1.13832 22.0851 1.67569 22.6224C2.21306 23.1598 2.94189 23.4617 3.70185 23.4617H12.2981C13.0581 23.4617 13.7869 23.1598 14.3243 22.6224C14.8617 22.0851 15.1635 21.3562 15.1635 20.5963V3.40373C15.1635 2.64377 14.8617 1.91494 14.3243 1.37757C13.7869 0.840195 13.0581 0.538303 12.2981 0.538303L3.70185 0.538303Z" fill="black"/>
    <Path d="M8 20.5963C8.37998 20.5963 8.7444 20.4453 9.01308 20.1766C9.28177 19.9079 9.43271 19.5435 9.43271 19.1636C9.43271 18.7836 9.28177 18.4192 9.01308 18.1505C8.7444 17.8818 8.37998 17.7308 8 17.7308C7.62002 17.7308 7.25561 17.8818 6.98692 18.1505C6.71824 18.4192 6.56729 18.7836 6.56729 19.1636C6.56729 19.5435 6.71824 19.9079 6.98692 20.1766C7.25561 20.4453 7.62002 20.5963 8 20.5963Z" fill="black"/>
  </Svg>
);

const LoginRegister = () => {
  	
  	return (
    		<SafeAreaView style={styles.container}>
      			{/* Top section with rounded corners */}
      			<View style={styles.topSection}>
        				
        				{/* White rounded card with shopping cart */}
        				<View style={styles.cardContainer}>
          					<Rectangle9 />
          					<View style={styles.iconOverlay}>
            						<Floor />
          					</View>
        				</View>
      			</View>
      			
      			{/* Content section */}
      			<View style={styles.contentSection}>
        				<Text style={styles.appTitle}>CHARIOHISAB</Text>
        				
        				<View style={styles.formSection}>
          					<Text style={styles.joinTitle}>Rejoignez-nous par téléphone</Text>
          					<Text style={styles.joinSubtitle}>
            						Nous vous enverrons un code texte pour vérifier votre téléphone.
          					</Text>
          					
          					{/* Phone input */}
          					<View style={styles.phoneInputContainer}>
            						<PhoneIcon />
            						<Text style={styles.phoneInputText}>Numéro de téléphone</Text>
          					</View>
          					
          					{/* Continue button */}
          					<View style={styles.continueButton}>
            						<Text style={styles.continueButtonText}>Continuer</Text>
          					</View>
        				</View>
        				
        				{/* Language selection */}
        				<View style={styles.languageSection}>
          					<View style={styles.languageButtonActive}>
            						<Text style={styles.languageTextActive}>Francais</Text>
          					</View>
          					<View style={styles.languageButtonInactive}>
            						<Text style={styles.languageTextInactive}>العربية</Text>
          					</View>
        				</View>
      			</View>
    		</SafeAreaView>);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAEE"
  },
  topSection: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC244",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  cardContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1
  },
  iconOverlay: {
    position: "absolute",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  contentSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  	formSection: {
    		marginBottom: 40
  	},
  	joinTitle: {
    		fontSize: 20,
    		fontWeight: '600',
    		color: '#000',
    		textAlign: 'center',
    		marginBottom: 15
  	},
  	joinSubtitle: {
    		fontSize: 14,
    		color: '#636363',
    		textAlign: 'center',
    		lineHeight: 22,
    		marginBottom: 40
  	},
  	phoneInputContainer: {
    		flexDirection: 'row',
    		alignItems: 'center',
    		backgroundColor: '#FFFFFF',
    		borderWidth: 1,
    		borderColor: '#505050',
    		borderRadius: 30,
    		paddingHorizontal: 20,
    		paddingVertical: 15,
    		marginBottom: 30
  	},
  	phoneInputText: {
    		fontSize: 14,
    		color: '#A7A7A7',
    		marginLeft: 10,
    		flex: 1
  	},
  	continueButton: {
    		backgroundColor: '#000',
    		borderRadius: 25,
    		paddingVertical: 15,
    		alignItems: 'center'
  	},
  	continueButtonText: {
    		fontSize: 16,
    		fontWeight: '700',
    		color: '#FFFFFF'
  	},
  	languageSection: {
    		flexDirection: 'row',
    		justifyContent: 'space-between',
    		paddingHorizontal: 0,
    		marginTop: 'auto',
    		marginBottom: 40
  	},
  	languageButtonActive: {
    		backgroundColor: '#FFC244',
    		borderWidth: 2,
    		borderColor: '#C58400',
    		borderRadius: 25,
    		paddingHorizontal: 24,
    		paddingVertical: 12,
    		flex: 0.48
  	},
  	languageButtonInactive: {
    		backgroundColor: '#FFFFFF',
    		borderWidth: 1,
    		borderColor: '#000',
    		borderRadius: 25,
    		paddingHorizontal: 24,
    		paddingVertical: 12,
    		flex: 0.48
  	},
  	languageTextActive: {
    		fontSize: 16,
    		fontWeight: '600',
    		color: '#000',
    		textAlign: 'center'
  	},
  	languageTextInactive: {
    		fontSize: 16,
    		fontWeight: '600',
    		color: '#000',
    		textAlign: 'center'
  	}
});

export default LoginRegister;
