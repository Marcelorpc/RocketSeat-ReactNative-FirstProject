import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/participant"

export default function Home() {
  function handleParticipantAdd() {
    console.log("adicionei")
  }

  function handleParticipantRemove() {
    console.log("removi")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do Participante"
          placeholderTextColor='#ffffff'
          keyboardType="default"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Marcelo Paiva Chaves" onRemove={handleParticipantRemove} />
      <Participant name="Claudinho Silva" onRemove={handleParticipantRemove} />
      <Participant name="Juninho Goncalves" onRemove={handleParticipantRemove} />
      <Participant name="Ana Maria das Gracas" onRemove={handleParticipantRemove} />
    </View>
  )
}