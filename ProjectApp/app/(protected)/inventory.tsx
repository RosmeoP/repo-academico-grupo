import { StyleSheet, KeyboardAvoidingView, Platform, View, TouchableOpacity, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function InventoryScreen() {
const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
        <Drawer.Screen options={{headerShown:false}} />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.replace("/(protected)/dashboard")}>
                    <Ionicons name="arrow-back-outline" size={26} color="#000000" />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.headertitle}>ADMIN PORTAL</Text>
                    <Text style={styles.headersubtitle}>Nueva Categoria</Text>
                </View>
                <View style={styles.boxIconContainer}>
                    <Ionicons name="archive-outline" size={22} />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
              <Text style={styles.descriptionText}>Ingresa los datos esenciales para catalogar los productos en el inventario</Text>
              <View style={styles.formCard}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Nombre de la Categoria</Text>
                  <TextInput placeholder="Ej: Dulceria" style={styles.inputText} />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Descripción de la Categoria</Text>
                  <TextInput placeholder="Describe los productos que engloban esta categoria" multiline numberOfLines={5} textAlignVertical="top" style={styles.inputTextArea} />
                </View>
                <TouchableOpacity style={styles.btnSave}>
                  <Ionicons name="checkmark" size={22} color="#fff" style={styles.checkIcon} />
                  <Text style={styles.btnSaveText}>Guardar Categoria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancel}>
                  {/* <Ionicons name="checkmark" size={22} color="#fff" style={styles.checkIcon} /> */}
                  <Text style={styles.btnCancelText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    alignItems: "center",
  },

  titleWrapper:  {
    flex: 1,
    marginLeft: 16
  },

  headertitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },

  headersubtitle: {
    color: "#006C47",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 2,
  },

  boxIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  descriptionText: {
    color: "#4B5563",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },

  formCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 15,
    elevation: 2,
  },

  inputGroup: {
    marginBottom: 10,
  },

  inputLabel: {
    color: "#374151",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
  },

  inputText: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 14,
  },

  inputTextArea: {
    height: 120,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },

  btnSave: {
    backgroundColor: "#006C47",
    height: 48,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  checkIcon: {
    marginRight: 8,
  },

  btnSaveText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  btnCancel: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  btnCancelText: {
    color: "#6D7280",
    fontSize: 14,
    fontWeight: "500",
  },

});
