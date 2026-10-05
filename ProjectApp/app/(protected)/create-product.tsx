import { KeyboardAvoidingView, TextInput, Text, View, TouchableOpacity, StyleSheet, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import { useState, useMemo } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";


export default function CreateProductScreen() {
  const [description, setDescription] = useState("");
  const router = useRouter();
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Drawer.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace("/(protected)/dashboard")}
          >
            <Ionicons name="arrow-back-outline" size={26} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>ADMIN PORTAL</Text>
            <Text style={styles.headersubTitle}>nueva producto</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContent}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Feather
                name="clipboard"
                size={20}
                color="006C47"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.cardtitle}>Informacion general</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                Nombre del producto
              </Text>
              <TextInput
                placeholder="Ej: Zapato Nike"
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>categoria</Text>
              <TouchableOpacity style={styles.selectInput}>
                <Text>seleciona la categoria</Text>
                <Feather
                  name="chevron-down"
                  size={20}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>SKU / Codigo de Barra</Text>
              <View style={styles.inputWithIcon}>
                <MaterialCommunityIcons
                  name="barcode-scan"
                  size={20}
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  placeholder="PR-7878787878787"
                  style={styles.textInputScan}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Descripcion Detallada</Text>
              <TextInput
                placeholder="Describe los atributos principales, material, confeccion"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                maxLength={500}
                style={styles.inputTextArea}
                value={description}
                onChangeText={setDescription}
              />

            </View>
            <View style={styles.chartCounterDescription}>

              <Text>{description.length} / 2000</Text>
            </View>
          </View>

          {/**precios e inventario clases 22 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Feather
                name="dollar-sign"
                size={20}
                color="#006C47"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.cardtitle}>Precios e inventario</Text>

            </View>
            <View >
              <View style={styles.rowCols}>

                <View style={styles.col}>
                  <Text style={styles.inputLabel}>precio regular</Text>
                  <View style={styles.inputPriceWrapper}>
                    <Text style={{ marginRight: 6 }}>$</Text>
                    <TextInput
                      placeholder="0.0"
                      keyboardType="numeric"
                      style={styles.princeInput}
                    />
                  </View>
                </View>
                <View style={styles.col}>
                  <Text style={styles.inputLabel}>precio oferta</Text>
                  <View style={styles.inputPriceWrapper}>
                    <Text style={{ marginRight: 6 }}>$</Text>
                    <TextInput
                      placeholder="0.0"
                      keyboardType="numeric"
                      style={styles.princeInput}
                    />
                  </View>
                </View>

              </View>
            </View>
            <View >
              <View style={styles.rowCols}>

                <View style={styles.col}>
                  <Text style={styles.inputLabel}>Stock Inicial</Text>
                  <View style={styles.inputPriceWrapper}>
                    <Text style={{ marginRight: 6 }}>$</Text>
                    <TextInput
                      placeholder="50"
                      keyboardType="numeric"
                      style={styles.princeInput}
                    />
                  </View>
                </View>
                <View style={styles.col}>
                  <Text style={styles.inputLabel}>Stock minimo </Text>
                  <View style={styles.inputPriceWrapper}>
                    <Text style={{ marginRight: 6 }}>$</Text>
                    <TextInput
                      placeholder="5"
                      keyboardType="numeric"
                      style={styles.princeInput}
                    />
                  </View>
                </View>
              </View>
              {/**pendiente a revisar posicion */}
              <TouchableOpacity style={styles.btnSave}>
                <Ionicons name="checkmark" size={22} color="#fff" style={styles.checkIcon} />
                <Text style={styles.btnSaveText}>Guardar producto</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F9FAFB"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#F9FAFB"
  },
  titleWrapper: {
    flex: 1,
    marginLeft: 16
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    letterSpacing: 0.8
  },
  headersubTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#006C47",
    marginTop: 2
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  cardtitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "bold",

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
  selectInput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  inputWithIcon: {
    height: 48,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#E5E7EB",
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  textInputScan: {
    flex: 1,
    padding: 0,
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
  chartCounterDescription: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  /**clases 22 */
  rowCols: {
    flexDirection: "row",
    gap: 8,

  },
  col: {
    flex: 1,
    marginBottom: 5
  },
  inputPriceWrapper: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  princeInput: {
    flex: 1,
    padding: 0,

  },
  btnSave: {
    backgroundColor: "#006C47",
    height: 48,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 15,
  },

  checkIcon: {
    marginRight: 8,
  },

  btnSaveText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
})